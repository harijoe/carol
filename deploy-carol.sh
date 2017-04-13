#!/usr/bin/env bash

if [ "$TRAVIS_BRANCH" == "develop" ]; then
  if [ "${BRANCH}" = "" ]; then BRANCH=develop; fi;
  echo ${BRANCH}
  curl https://sdk.cloud.google.com | bash
  source /home/travis/.bashrc
  export PATH=$HOME/google-cloud-sdk/bin:$PATH
  gcloud components install kubectl
  gcloud auth activate-service-account "travis@quotatis-152617.iam.gserviceaccount.com" --key-file=quotatis-01d6e02592a9.json
  gcloud container clusters get-credentials cluster-1 --zone europe-west1-b --project quotatis-152617
  export GOOGLE_APPLICATION_CREDENTIALS=quotatis-01d6e02592a9.json


  gcloud docker -- push eu.gcr.io/quotatis-152617/carol:${BRANCH}
  kubectl create ns ${BRANCH}
  kubectl get svc --namespace=develop dora-develop -o jsonpath='{.status.loadBalancer.ingress[0].ip}'
  while [ $? -ne 0 ]; do
      kubectl get svc --namespace=develop dora-develop -o jsonpath='{.status.loadBalancer.ingress[0].ip}';
  done;
  kubectl run carol-${BRANCH} --namespace=${BRANCH} --image=eu.gcr.io/quotatis-152617/carol:${BRANCH} --port=443  --replicas=1 --labels="branch=${BRANCH},app=quotatis,run=carol-${BRANCH}" --env="PUB_IP=${CAROL_IP}" --env="NODE_ENV=staging" --env="PORT=443" --env="API_PORT=443" --env="API_IP=`kubectl get svc --namespace=develop dora-develop -o jsonpath='{.status.loadBalancer.ingress[0].ip}'`" --image-pull-policy=Always
  kubectl expose --port=443 deploy carol-${BRANCH} --type=LoadBalancer --name=carol-${BRANCH} --namespace=${BRANCH}
  kubectl get svc --namespace=${BRANCH} carol-${BRANCH} -o jsonpath='{.status.loadBalancer.ingress[0].ip}'
  while [ $? -ne 0 ]; do
     kubectl get svc --namespace=${BRANCH} carol-${BRANCH} -o jsonpath='{.status.loadBalancer.ingress[0].ip}';
  done;
  export CAROL_IP=`kubectl get svc --namespace=${BRANCH} carol-${BRANCH} -o jsonpath="{.status.loadBalancer.ingress[0].ip}"`
  export JSON_PATCH=`echo '{"spec":{"template":{"spec":{"containers":[{"env":[{"name":"API_IP","value":"104.199.107.196"}],"name":"carol-BRANCH"}]}}}}' | sed s/BRANCH/$BRANCH/g`
  echo ${JSON_PATCH}
  kubectl patch deployment carol-${BRANCH} --namespace=${BRANCH} -p $JSON_PATCH
  kubectl delete pods `kubectl get pod -l "run=carol-${BRANCH}" -o=template --template="{{ with index .items 0}}{{ .metadata.name }}{{ end }}" --namespace=${BRANCH}` --namespace=${BRANCH}
else
  echo "Nothing to deploy, TRAVIS_BRANCH != develop."
fi