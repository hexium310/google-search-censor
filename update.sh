urls=$(curl -s https://raw.githubusercontent.com/Taraflex/Back2stackoverflow/master/back2stackoverflow.user.js | awk '/^\/\/ @match/ { print $3 }')
version=$(awk '/^\/\/ @version/ { print $3 }' google-search-censor.user.js)
is_updated=0
for url in $urls; do
    if grep -F "$url" google-search-censor.user.js > /dev/null; then
      continue
    fi

    is_updated=1
    sed -i -e "/\/\/ insert before/i \ \ '$url'," google-search-censor.user.js
done

if (( is_updated )); then
  sed -i -e "s/\(\/\/ @version \+\).\+/\1${version%.*}.$(( ${version##*.} + 1 ))/" google-search-censor.user.js
fi
