#!/bin/sh

set -xe

if [ ${NODE_ENV} = 'development' ]; then
    export NODE_ENV=development
    yarn run dev
    exit
fi;

yarn run build:${NODE_ENV}
yarn start

