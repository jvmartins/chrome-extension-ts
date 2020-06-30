rm -rf dist
mkdir dist
mkdir dist/icons

yarn tsc

cp src/popup.html manifest.json dist
cp icons/* dist/icons

zip -r dist/extension.zip src/*
