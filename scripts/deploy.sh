#!/usr/bin/env bash

set -xe

echo "/!\ BRANCH == ${BRANCH} /!\ "

if [ $BRANCH == "develop" ]; then
    echo "Start deploy for develop"
    npm install -g firebase-tools
    REACT_APP_TARGET=qa yarn build
    firebase deploy --token "${FIREBASE_TOKEN}"
else
  echo "Nothing to deploy, BRANCH != master"
