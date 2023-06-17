* Install node and npm
```
sudo yum install epel-release -y
sudo yum update -y
curl –sL https://rpm.nodesource.com/setup_10.x | sudo bash -
sudo yum install –y nodejs
```

* Make build in Windows machine
```
git clone https://github.com/krishnamaram2025/ReactJS.git && cd ReactJS
gunicorn server ip in src/services/StudentService.js
npm install
npm run build
```

* Deploy ReactJS App in Nginx server
```
copy the above files which resides in build folder to Nginx server
tar -cvzf build.tar.gz build
scp -i ../../id_rsa build.tar.gz centos@54.201.83.107:
ssh -i ../../id_rsa centos@54.201.83.107
tar -xvzf build.tar.gz
mv build/* /usr/share/nginx/html
 ``` 
