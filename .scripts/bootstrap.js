#!/usr/bin/env node
const cpr = require('cpr');
const fs = require('fs');
const mergeWith = require('lodash.mergewith');
const path = require('path');
const sortPackageJson = require('sort-package-json');
const uniqWith = require('lodash.uniqwith');
const isEqual = require('lodash.isequal');
const { spawnSync } = require('child_process');

const CODE_STYLE_ROOT = path.resolve(__dirname, '..');
const TEMPLATE_ROOT = path.join(CODE_STYLE_ROOT, '.scripts', 'template');
const CODE_STYLE_PACKAGE = JSON.parse(fs.readFileSync(path.join(CODE_STYLE_ROOT, 'package.json')));
const VSCODE_TEMPLATE = path.join(TEMPLATE_ROOT, '.vscode');

const PROJECT_ROOT = process.cwd();
const PROJECT_PACKAGE_PATH = path.join(PROJECT_ROOT, 'package.json');
const PROJECT_SCRIPTS = path.join(PROJECT_ROOT, 'scripts');
const PROJECT_VSCODE = path.join(PROJECT_ROOT, '.vscode');

function mergeUniqueArrayValues(value1, value2) {
  if (!Array.isArray(value1) && !Array.isArray(value2)) return;
  if (value1 === undefined) return value2;
  if (value2 === undefined) return value1;

  return uniqWith([...value1, ...value2], isEqual);
}

function mergeJson(destPath, sourcePath) {
  const sourceData = JSON.parse(fs.readFileSync(sourcePath));

  let destData;
  try {
    destData = JSON.parse(fs.readFileSync(destPath));
  } catch (error) {
    destData = {};
  }

  mergeWith(destData, sourceData, mergeUniqueArrayValues);

  fs.writeFileSync(destPath, JSON.stringify(destData, null, 2) + '\n');
}

function runPackager(...args) {
  if (fs.existsSync(path.join(PROJECT_ROOT, 'yarn.lock'))) {
    spawnSync('yarn', args, { stdio: 'inherit' });
  } else {
    spawnSync('npm', args, { stdio: 'inherit' });
  }
}

if (!fs.existsSync(PROJECT_VSCODE)) {
  fs.mkdirSync(PROJECT_VSCODE);
}

let packageInfo;
try {
  packageInfo = JSON.parse(fs.readFileSync(PROJECT_PACKAGE_PATH));
} catch (error) {
  console.error(`Expected ${PROJECT_PACKAGE_PATH} to exist and be a valid JSON file:`, error.message);
  console.error(`Are you running bootstrap from the wrong directory?`);
  process.exit(1);
}

if (!packageInfo.scripts) {
  packageInfo.scripts = {};
}

packageInfo.devDependencies = Object.assign(
  packageInfo.devDependencies || {},
  CODE_STYLE_PACKAGE.peerDependencies
);

// Copy template files
cpr(TEMPLATE_ROOT, PROJECT_ROOT, { overwrite: true }, (error, files) => {
  console.log('Copied configuration:', files);

  if (error) {
    console.error(`Failed to copy templates to your project:`, error.message);
    process.exit(1);
  }

  // npm scripts
  for (const file of files) {
    if (file.startsWith(PROJECT_SCRIPTS + path.sep)) {
      const fileName = path.basename(file);
      const scriptName = path.basename(file, path.extname(file));
      packageInfo.scripts[scriptName] = `./scripts/${fileName}`;
    }
  }

  // Write package.json & install missing dependencies
  fs.writeFileSync(PROJECT_PACKAGE_PATH, JSON.stringify(sortPackageJson(packageInfo), null, 2) + '\n');
  runPackager('install');

  // Configure VS Code
  for (const config of ['extensions.json', 'settings.json']) {
    mergeJson(path.join(PROJECT_VSCODE, config), path.join(VSCODE_TEMPLATE, config));
  }

  runPackager('run', 'fix-style', '.vscode/*.json');
});
