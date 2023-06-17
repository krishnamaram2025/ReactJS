* Install node and npm
```
sudo yum install epel-release -y
sudo yum update -y
curl –sL https://rpm.nodesource.com/setup_10.x | sudo bash -
sudo yum install –y nodejs
```

* Make build
```
git clone https://github.com/krishnamaram2025/ReactJS.git && cd ReactJS
npm install
npm run build
```

* Deploy ReactJS App in Nginx server
```
  mv build/* /usr/share/nginx/html
 ``` 
