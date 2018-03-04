#!/usr/bin/env bash
set -e

source ./node_modules/@nevir/code-style/scripts/include/globbing.sh

./node_modules/.bin/prettier --write "${PRETTIER_FILES[@]}"
./node_modules/.bin/eslint --fix "${ESLINT_FILES[@]}"
