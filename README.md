# Quotatis Single Page Application
Master: [![Scrutinizer Code Quality](https://scrutinizer-ci.com/g/Quotatis/carol/badges/quality-score.png?b=master&s=222575eb53a871d4c978a53173ea8ea59d97fc38)](https://scrutinizer-ci.com/g/Quotatis/carol/?branch=master) [![Code Coverage](https://scrutinizer-ci.com/g/Quotatis/carol/badges/coverage.png?b=master&s=2566a0a0516e5557828471b90a9d9d0fc82b109e)](https://scrutinizer-ci.com/g/Quotatis/carol/?branch=master) [![Build Status](https://travis-ci.com/Quotatis/carol.svg?token=n1DpETbfhCpoPtcwMaSP&branch=master)](https://travis-ci.com/Quotatis/carol/)

Develop: [![Scrutinizer Code Quality](https://scrutinizer-ci.com/g/Quotatis/carol/badges/quality-score.png?b=develop&s=222575eb53a871d4c978a53173ea8ea59d97fc38)](https://scrutinizer-ci.com/g/Quotatis/carol/?branch=develop) [![Code Coverage](https://scrutinizer-ci.com/g/Quotatis/carol/badges/coverage.png?b=develop&s=2566a0a0516e5557828471b90a9d9d0fc82b109e)](https://scrutinizer-ci.com/g/Quotatis/carol/?branch=develop) [![Build Status](https://travis-ci.com/Quotatis/carol.svg?token=n1DpETbfhCpoPtcwMaSP&branch=develop)](https://travis-ci.com/Quotatis/carol/)

Version: 0.1.0-dev

## 1. Requirements
[Node.js](https://nodejs.org/), [Docker](https://docker.io)

## 2. Getting Started

* If it's not done yet, please install [Node.js](http://nodejs.org/). 
* Then run `yarn install` in order to parse and install dependencies.

Start the development server (changes will now update live in browser)
```
yarn run dev
```

Build files for production
```
yarn run build:production
```

Build files for staging
```
yarn run build:staging
```

Start the server for SSR with environment variable NODE_ENV = production
```
yarn start
```

## 3. Getting Started with docker

You will have to run:
```
docker-compose up -d # don't forget to change the ENV var for the enviroment (develoment / staging / production)
```

Add this line to your hosts file:
```
127.0.0.1 carol-fr-dev.qarx.io carol-es-dev.qarx.io carol-co-uk-dev.qarx.io api-dev.qarx.io
```

To view your project, go to: [https://carol-fr-dev.qarx.io/](https://carol-fr-dev.qarx.io/)

## 4. Deployment

In order to deploy into pre-production for the SPA you will have to push to the branch develop.
Travis will be able to build the docker container, run the tests than deploy to kubernetes using the last develop build.

The production run on Node.js with Express.js and deployed with ansible.