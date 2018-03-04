REPO_ROOT="$( cd "$( dirname "${BASH_SOURCE[0]}" )/../.." && pwd )"
TEST_DIR=$(mktemp -d)

echo_and_run() {
  echo -e "\033[33m> ${@}\033[0m"
  "${@}"
}

setup_fixture_project() {
  # yarn by default for performance and consistency.
  runner="${1:-yarn}"

  echo_and_run cd "${TEST_DIR}"

  echo_and_run cp -R "${REPO_ROOT}/test/fixture/" .

  echo_and_run cp -R "${REPO_ROOT}/examples/" .

  if [[ "${runner}" == yarn ]]; then
    echo_and_run yarn add "${REPO_ROOT}" --dev
  else
    echo_and_run npm install "${REPO_ROOT}" --save-dev
  fi

  echo_and_run ./node_modules/@nevir/code-style/bootstrap
}

# Shared, because we want to test with both npm and yarn.
run_end_to_end() {
  runner="$1"

  setup_fixture_project "${runner}"
  echo_and_run "${runner}" run test-style
}
