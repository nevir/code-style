#!/usr/bin/env bash
set -e

for test in ./.test/*.sh; do
  echo
  echo "Running ${test}"
  echo "--------------------------------------------------------------------------------"
  "${test}"
  echo "================================================================================"
done
