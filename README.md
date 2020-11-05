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

Config. Pods mount the config map

Database connection to postgresql

NGINX

Look at canary/blue-green/ab deployment and rollback

Look at how we use pipelines in openshift

Look at .NET

Run with app that has own continer config. Consider node, .NET and 

Look into app mgt - monitoring, logging, quotas, cost

Review 12 factor app and ensure it meets

Move back to local dev deployment of openshift

Understand how local and cloud vrsion would operate side by side

Look at how we would operate across cloud as well
