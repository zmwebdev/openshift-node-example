# openshift-example

- Clone an github app in c9.io
```
$ rhc setup
$ rhc app create -t nodejs-0.10 -a nodejs
$ rhc app show nodejs
$ git remote add openshift ssh://564f500e0c1e6640f300010d@nodejs-zmwebdev.rhcloud.com/~/git/nodejs.git/
(other option: $ rhc app create parks nodejs-0.10 postgresql-9.2 -s --from-code=https://github.com/ryanj/restify-postGIS.git FOO=BAR)
(other option: Using the web)
```
