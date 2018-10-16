if [$1]
  find ./ -type f -exec sed -i -e 's/<PROJECT_SITE>/$1/g' {} \;
else
  echo "Please enter a correct URL"
  read $URL
  find ./ -type f -exec sed -i -e 's/<PROJECT_SITE>/$URL/g' {} \;
fi