#!/usr/bin/env bash

echo "/!\ BRANCH == ${BRANCH} /!\ "

if [ $BRANCH == "develop" ]; then
  echo "Start deploy for develop"
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
  kubectl run carol-${BRANCH} --namespace=${BRANCH} --image=eu.gcr.io/quotatis-152617/carol:${BRANCH} --port=443  --replicas=1 --labels="branch=${BRANCH},app=quotatis,run=carol-${BRANCH}" --env="PUB_IP=${CAROL_IP}" --env="NODE_ENV=qa" --env="PORT=443" --env="API_PORT=443" --env="API_IP=`kubectl get svc --namespace=develop dora-develop -o jsonpath='{.status.loadBalancer.ingress[0].ip}'`" --image-pull-policy=Always
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
elif [ $BRANCH == "master"  ]; then
  echo "Start deploy for master"
  git clone https://92a99f360dcd7f681bae671b05db76404e2fd9b6@github.com/Quotatis/gaston.git
  cd gaston
  ./bench_img.sh carol
else
  echo "Nothing to deploy, BRANCH != develop"
fi
