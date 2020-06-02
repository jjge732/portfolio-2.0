sudo yum -y update
curl --silent --location https://rpm.nodesource.com/setup_10.x | sudo bash
sudo yum -y install nodejs
curl --silent --location https://dl.yarnpkg.com/rpm/yarn.repo | sudo tee /etc/yum.repos.d/yarn.repo
sudo rpm --import https://dl.yarnpkg.com/rpm/pubkey.gpg
sudo yum -y install yarn
yarn install
yarn build