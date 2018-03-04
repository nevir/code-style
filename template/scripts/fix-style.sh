#!/usr/bin/env bash
set -e

FILES=("${@}")
if [[ "${#FILES[@]}" = "0" ]]; then
  FILES=($(
    find . \
      -path '*/node_modules' -prune -o \
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

./node_modules/.bin/prettier --write "${FILES[@]}"
./node_modules/.bin/eslint --fix "${FILES[@]}"
