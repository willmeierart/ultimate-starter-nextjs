# note -- this is baked into 0next script now

if [$1]
  find ./  -type f -exec sed -i -e 's/xxx_project_name_xxx/$1/g' {} \;
else
  echo "Please enter a correct project name"
  read $URL
  find ./ -type f -exec sed -i -e 's/xxx_project_name_xxx/$URL/g' {} \;
fi