#!/usr/bin/env bash
set -e

FILES=("${@}")
if [[ "${#FILES[@]}" = "0" ]]; then
  FILES=($(
    find . \
      -path './node_modules' -prune -o \
      -not -name '\.*' \
      -type f \( \
        -name '*.mjs' -o \
        -name '*.js' -o \
        -name '*.jsx' -o \
        -name '*.ts' -o \
        -name '*.tsx' \
      \) \
      -print
  ))
fi

./node_modules/.bin/eslint "${FILES[@]}"

set +e
UGLY_FILES=($(./node_modules/.bin/prettier --list-different "${FILES[@]}"))
if [[ "${#UGLY_FILES[@]}" != "0" ]]; then
  echo
  echo -e "\033[4m\033[33mThe following files are not well formatted:\033[0m"
  echo
  for file in "${UGLY_FILES[@]}"; do
    echo "  ${file}"
  done
  echo
  echo -e "\033[31mPlease fix via: \033[33mnpm run fix-style\033[0m"
  echo
  exit 1
fi
