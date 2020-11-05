# simple-openshift-node

simple nodejs express app with 2 endpoints. One to provie a simple message. One tomplay bck the hot name running the app.

Steps:

Log on to https://manage.openshift.com/

Create new application service called simple-openshift-node

https://github.com/socretes/simple-openshift-node.git

Copy webhook url and paste into github

Create 1 pod (autoscale to 3) 

oc get pods
oc rsh <<name-of-pod>>
oc autoscale deployment --max=3 --cpu-percent=20

Edit route

apiVersion: route.openshift.io/v1
kind: Route
metadata:
  annotations:
    haproxy.router.openshift.io/balance: roundrobin
    haproxy.router.openshift.io/disable_cookies: 'true'
    openshift.io/generated-by: OpenShiftWebConsole
    openshift.io/host.generated: 'true'

Possible to debug
oc port-forward <<name-of-pod>> 127.0.0.1

Create new apache http server from catalog
Navigate to pod and run command. Monitor pods

ab -dSrk -c 20 -n 5000000 http://simple-open-shift-node:8080