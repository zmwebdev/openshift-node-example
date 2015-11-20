## openshift-example

https://developers.openshift.com/en/node-js-getting-started.html

- Clone an github app in c9.io
```
(Create openshift nodejs app using the web)

$ rhc setup
$ rhc app show nodejs
$ git remote add openshift ssh://564f500e0c1e6640f300010d@nodejs-zmwebdev.rhcloud.com/~/git/nodejs.git/

$ git push -f openshift master

$ rhc tail nodejs

(go to the openshift web and launch the app url)

develop proccess:
$ git commit ...
test locally
$ git push origin master  (push to github)
$ git push openshift master
test in openshift
```
