urls=$(curl -s https://raw.githubusercontent.com/Taraflex/Back2stackoverflow/master/back2stackoverflow.user.js | awk '/^\/\/ @match/ { print $3 }')
for url in $urls; do
    grep -F "$url" google-search-censor.user.js > /dev/null ||
    sed -i -e "/\/\/ insert before/i \ \ '$url'," google-search-censor.user.js
done
