
# ./_scripts/pre/installJenkins.sh
if [ $1 ]
  then
    echo "building docker image as $1"
    export PROJECT_NAME=$1
    /bin/sh ./_scripts/pre/installDocker.sh
    /bin/sh ./_scripts/letsencrypt/staging.sh \
      && /bin/sh ./_scripts/letsencrypt/production.sh \
      && /bin/sh ./_scripts/letsencrypt/cron.sh \
    docker image build -t $1 . \
      && docker container run -it --name app -p 80:3000 $1
else
  echo "what should this docker image be called?"
  read IMAGE_NAME
  echo "building docker image as $IMAGE_NAME"
  export PROJECT_NAME=$IMAGE_NAME
  /bin/sh ./_scripts/pre/installDocker.sh
  /bin/sh ./_scripts/letsencrypt/staging.sh \
      && /bin/sh ./_scripts/letsencrypt/production.sh \
      && /bin/sh ./_scripts/letsencrypt/cron.sh \
  docker image build -t agencyzero/$IMAGE_NAME . \
    && docker container run -it --name app -p 80:3000 $IMAGE_NAME
fi