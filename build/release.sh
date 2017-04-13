git checkout master
git merge dev

#!/usr/bin/env sh
set -e
echo "Enter release version: "
read VERSION

read -p "Releasing $VERSION - are you sure? (y/n)" -n 1 -r
echo    # (optional) move to a new line
if [[ $REPLY =~ ^[Yy]$ ]]
then
  echo "Releasing $VERSION ..."

  # build
      echo "VERSION=$VERSION npm run build ..."
  VERSION=$VERSION npm run build

  # commit
    echo "git add -A ..."

  git add -A
    echo "git commit -m "[build] $VERSION ..."

  git commit -m "[build] $VERSION"
    echo "npm version $VERSION --message [release] $VERSION ..."

  npm version $VERSION --message "[release] $VERSION"

  # publish
    echo "git push origin master ..."
  git push origin master
    echo "git push origin refs/tags/v$VERSION ..."

  git push origin refs/tags/v$VERSION
    echo "git checkout dev ..."

  git checkout dev
    echo "git rebase master ..."

  git rebase master
    echo "git push origin dev ..."

  git push origin dev
    echo "npm publish ..."


  npm publish
fi
