/bin/sh ./_scripts/pre/installDocker.sh
# ./_scripts/pre/installJenkins.sh
# if $1
# then
#   docker image build -t $1 .
# else
  echo -e "what should this docker image be called?"
  cd ../../
  docker image build -t $1 .
# fi
