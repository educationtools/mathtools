npm run build
cp -a build/. ../educationtools.github.io
cd ../educationtools.github.io
git add .
git commit -m "DEPLOYING BY SCRIPT"
git pull origin master
git push -u origin master
cd ../mathtools
