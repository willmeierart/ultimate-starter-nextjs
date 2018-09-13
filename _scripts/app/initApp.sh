
init()

function init () {
  if [ $1 ]
  then
    # set project name var
    export PROJECT_NAME=$1
  else
    stdoutcolor "What is this project's name? (setting global env var)"
    read $1
    export PROJECT_NAME=$1
  fi

  # install dependencies
  apt-get update
  apt-get -y install nginx
  apt-get -y install nvm
  export NVM_DIR="$HOME/.nvm" 
  [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
  npm install pm2@latest -g 
}

function stdoutcolor {
	printf '\x1b[35m'
	echo -e $@
	printf '\e[0m\n'
}
