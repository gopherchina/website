#!/bin/bash

mkdir -p ./_site/assets/fonts
mkdir -p ./tmp
rawtext=`find ./_site/ -name '*.html' -exec cat {} \;` && ./node_modules/.bin/fontmin -t "$rawtext" -b ./node_modules/source-han-sans-sc-ttf/dist/* ./tmp/
cp ./tmp/*.ttf ./_site/assets/fonts/
rm -rf ./tmp/
