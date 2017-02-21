#!/bin/sh

set -xe

if [ ${NODE_ENV} = 'development' ]; then
    export NODE_ENV=development
    npm run dev
    exit
fi;

npm run build:${NODE_ENV}
npm start

