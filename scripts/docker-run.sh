#!/bin/sh

set -xe

if [ ${NODE_ENV} = 'insideDocker' ]; then
    yarn start
    exit
fi;

yarn run build
yarn start

