#!/bin/sh

set -xe

if [ ${NODE_ENV} = 'development' ]; then
    npm run dev
fi;

if [ ${NODE_ENV} = 'staging' ]; then
    npm run dev
fi;

if [ ${NODE_ENV} = 'production' ]; then
    npm start
fi;

