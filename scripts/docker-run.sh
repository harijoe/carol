#!/bin/sh

set -xe

yarn install

if [ ${NODE_ENV} = 'insideDocker' ]; then
    yarn start
    exit
fi;

yarn run build
yarn start
