#!/usr/bin/env bash

set -xe

docker rm -f standalone-chrome 2>/dev/null || true

export HOST_IP=$( ( ifconfig docker0 || ifconfig en0 ) | grep 'inet ' | awk '{ print $2}' | sed 's/.*://' )

docker run -d -P \
  -p 4444:4444 \
  --add-host carol-fr-dev.qarx.io:$HOST_IP \
  --add-host carol-co-uk-dev.qarx.io:$HOST_IP \
  --add-host carol-es-dev.qarx.io:$HOST_IP \
  --name standalone-chrome selenium/standalone-chrome
