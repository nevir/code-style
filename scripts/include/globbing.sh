ESLINT_EXTENSIONS=(js jsx mjs ts tsx)
PRETTIER_EXTENSIONS=(js jsx mjs ts tsx json md gql css less sass scss)

extensions_for() {
  local extensions
  if [[ "$1" == "eslint" ]]; then
    extensions=("${ESLINT_EXTENSIONS[@]}")
  else
    extensions=("${PRETTIER_EXTENSIONS[@]}")
  fi

  for ext in "${extensions[@]}"; do
    echo "${ext}"
  done
}

filter_extensions_for() {
  local extensions=($(extensions_for "$1"))
  for file in "${@:2}"; do
    for ext in "${extensions[@]}"; do
      if [[ "${file}" =~ .${ext}$ ]]; then
        echo "${file}"
      fi
    done
  done
}

join_extensions_for() {
  local extensions=($(extensions_for "$1"))
  local IFS=","
  echo "${extensions[*]}"
}

FILES=("${@}")
if [[ "${#FILES[@]}" = "0" ]]; then
  # TODO: Figure out how to ignore node_modules at any depth (e.g. for lerna).
  ESLINT_FILES=("{,!(node_modules)/**/}*.{$(join_extensions_for eslint)}")
  PRETTIER_FILES=("{,!(node_modules)/**/}*.{$(join_extensions_for prettier)}")
else
  ESLINT_FILES=($(filter_extensions_for eslint "${FILES[@]}"))
  PRETTIER_FILES=($(filter_extensions_for prettier "${FILES[@]}"))
fi
