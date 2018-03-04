#!/usr/bin/env bash
set -e

if [[ "${npm_config_user_agent}" =~ yarn/ ]]; then
  packager=yarn
else
  packager=npm
fi

"${packager}" run test-style
"${packager}" run test-integration
