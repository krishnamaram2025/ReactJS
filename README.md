* Install node and npm
```
sudo yum install epel-release -y
sudo yum update -y
curl –sL https://rpm.nodesource.com/setup_10.x | sudo bash -
sudo yum install –y nodejs
```

* Make build in Windows machine
```
Make sure to install NodeJS
git clone https://github.com/krishnamaram2025/ReactJS.git && cd ReactJS
gunicorn server ip in src/services/StudentService.js
npm install
npm run build
tar -cvzf build.tar.gz build
```

* Deploy ReactJS App in Nginx server
```
copy the above files which resides in build folder to Nginx server
scp  build.tar.gz centos@PUBLIC_IP_OF_NGINX:
ssh  centos@PUBLIC_IP_OF_NGINX
tar -xvzf build.tar.gz
sudo rm -rf /usr/share/nginx/html/*
sudo mv build/* /usr/share/nginx/html
 ``` 
