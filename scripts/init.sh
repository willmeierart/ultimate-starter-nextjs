
# ./_scripts/pre/installJenkins.sh
if [ $1 ]
  then
    echo "building docker image as $1"
    # export PROJECT_NAME=$1
    docker image build -t $1 . \
    && docker container run -it --name app -p 80:3000 $1 bash
else
  # echo "what should this docker image be called?"
  # read IMAGE_NAME
  # echo "building docker image as $IMAGE_NAME"
  # export PROJECT_NAME=$IMAGE_NAME
  # docker image build -t $IMAGE_NAME . \
  # && docker container run -it --name app -p 80:3000 $IMAGE_NAME bash
  echo "building docker image as xxx_project_name_xxx"
  docker image build -t xxx_project_name_xxx . \
  && docker container run -it --name app -p 80:3000 xxx_project_name_xxx bash
fi