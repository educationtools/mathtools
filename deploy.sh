cp -a build/. ../mathtools.github.io
cd ../mathtools.github.io
git add .
git commit -m "DEPLOYING BY SCRIPT"
git pull origin master
git push -u origin master
cd ../mathtools
