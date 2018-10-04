/bin/sh ./_scripts/pre/installDocker.sh
# ./_scripts/pre/installJenkins.sh
if [ $1 ]
  then
    docker image build -t $1 . \
    && docker container run -it --name app -p 80:3000 $1
else
  echo "what should this docker image be called?"
  read IMAGE_NAME
  docker image build -t $IMAGE_NAME . \
  && docker container run -it --name app -p 80:3000 $IMAGE_NAME
fi