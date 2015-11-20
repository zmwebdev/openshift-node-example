# openshift-example

- Clone an github app in c9.io
```
$ rhc setup
$ rhc app create -t nodejs-0.10 -a nodejs
$ rhc app show nodejs
$ git remote add openshift ssh://564f500e0c1e6640f300010d@nodejs-zmwebdev.rhcloud.com/~/git/nodejs.git/
```
