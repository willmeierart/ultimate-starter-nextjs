
export PROJECT_NAME=$1
apt-get update
apt-get -y install nginx
apt-get -y install nvm
export NVM_DIR="$HOME/.nvm" 
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
npm install pm2@latest -g 
