#!/usr/bin/env bash

# So that we can dogfood our own scripts.
if [[ ! -e node_modules/@nevir/code-style ]]; then
  mkdir -p ./node_modules/@nevir
  ln -s ../.. ./node_modules/@nevir/code-style
fi
