./installDocker.sh
# ./installJenkins.sh
if [$1]
then
  docker image build -t $1 .
else
  echo -e "what should this docker image be called?"
  read imageName
  docker image build -t $imageName .
fi
