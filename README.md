# Quotatis Single Page Application
Master: [![Scrutinizer Code Quality](https://scrutinizer-ci.com/g/Quotatis/carol/badges/quality-score.png?b=master&s=222575eb53a871d4c978a53173ea8ea59d97fc38)](https://scrutinizer-ci.com/g/Quotatis/carol/?branch=master) [![Code Coverage](https://scrutinizer-ci.com/g/Quotatis/carol/badges/coverage.png?b=master&s=2566a0a0516e5557828471b90a9d9d0fc82b109e)](https://scrutinizer-ci.com/g/Quotatis/carol/?branch=master) [![Build Status](https://travis-ci.com/Quotatis/carol.svg?token=n1DpETbfhCpoPtcwMaSP&branch=master)](https://travis-ci.com/Quotatis/carol/)

Develop: [![Scrutinizer Code Quality](https://scrutinizer-ci.com/g/Quotatis/carol/badges/quality-score.png?b=develop&s=222575eb53a871d4c978a53173ea8ea59d97fc38)](https://scrutinizer-ci.com/g/Quotatis/carol/?branch=develop) [![Code Coverage](https://scrutinizer-ci.com/g/Quotatis/carol/badges/coverage.png?b=develop&s=2566a0a0516e5557828471b90a9d9d0fc82b109e)](https://scrutinizer-ci.com/g/Quotatis/carol/?branch=develop) [![Build Status](https://travis-ci.com/Quotatis/carol.svg?token=n1DpETbfhCpoPtcwMaSP&branch=develop)](https://travis-ci.com/Quotatis/carol/)

Dependencies:

Version: 1.1.1

## 1. Requirements
[Node.js](https://nodejs.org/), [Docker](https://docker.io)

## 2. Getting Started

If it's not done yet, please install [Node.js](http://nodejs.org/) and [Yarn](https://yarnpkg.com).

Clone the project from github and open a command prompt in the project directory.

Install all the project's dependencies:
```
yarn
```

Edit you `/etc/hosts` file and add the following line:
```
127.0.0.1 carol-fr-dev.qarx.io carol-es-dev.qarx.io carol-co-uk-dev.qarx.io api-dev.qarx.io
```

Start the development server (changes will now update live in browser)
```
yarn start
```

Open your browser and got to [https://carol-fr-dev.qarx.io:4433](https://carol-fr-dev.qarx.io:4433)

Carol will be connected to the [Sandy](https://github.com/Quotatis/sandy) API running in the QA environment.

## 3. CSS integration

We use web components and [atomic-design](http://bradfrost.com/blog/post/atomic-web-design/) principles coupled to [styled-components](https://github.com/styled-components/styled-components) to design our application.

To avoid mistakes and errors in your css syntax you must run :
```
yarn run lint:css
```

If you got `CssSyntaxError` using css function from styled-components and all seems good for you, it's probably linked to this [issue](https://github.com/styled-components/stylelint-processor-styled-components/issues/6) in stylelint package.   

## 4. Functional tests

In order to run functional tests, first start the mocks:
```bash
yarn start:mocks
```

This will start the [simulado](https://github.com/ldabiralai/simulado) server, prime it and then run the server side rendering server using the `mocks` environment.

After that, you are ready to run the functional tests:
```bash
yarn cucumber
```

## 5. Getting Started with docker

When the QA environment is not enough and you want to be run sandy locally on a particular branch,
you will want to install the docker environment.

Follow the instructions on the [Sandy README](https://github.com/Quotatis/sandy)
```
docker-compose up -d # don't forget to change the ENV var for the enviroment (develoment / qa / production)
```

### Using docker toolbox

When the native docker integration on Mac or Windows is not fast enough, you may want to look at
[Docker Toolbox]()https://www.docker.com/products/docker-toolbox).

Docker toolbox uses an underlying VM whose default IP address is `192.168.99.100`,
so you'll need to update you `/etc/hosts` file as explained below.

If you decide to run carol fully inside docker and you use docker toolbox,
you will have to change your `/etc/hosts` to look like this:
```
192.168.99.100 carol-fr-dev.qarx.io carol-es-dev.qarx.io carol-co-uk-dev.qarx.io api-dev.qarx.io
```

Otherwise to run carol outside with docker toolbox,
your `/etc/hosts` should contain the following lines:
```
127.0.0.1 carol-fr-dev.qarx.io carol-es-dev.qarx.io carol-co-uk-dev.qarx.io
192.168.99.100  api-dev.qarx.io
```

### Using docker for dora but running carol locally

Carol start in docker is painfully slow on MacOS and Windows. In case you want to run carol locally
but connected to carol running inside docker, run the following command:
```
NODE_ENV=outsideDocker yarn start
```

## 6. Testing as in production

_Useful when trying to reproduce a production issue locally or after a refactoring to make sure it
will work in prod._

Temporarily edit your config to remove `assetPath` and `locales` nodes (under the `production` node)
so that they default to the local values.

Then run the following commands
```
NODE_ENV=production yarn build
NODE_ENV=production PORT=8080 yarn start
```

## 7. Deployment

In order to deploy into pre-production for the SPA you will have to push to the branch develop.
Travis will be able to build the docker container, run the tests than deploy to kubernetes using the last develop build.

The production run on Node.js with Express.js and deployed with ansible.

## 8. Environments

| *name* | *description* |
|---|---|
| production | production environment |
| qa | QA environment |
| development | running locally connected to dora's QA  |
| outsideDocker | running locally connected to dora in docker |
| insideDocker | running in docker connected to dora in docker |
| mocks | mocks environment to run functional tests |
| travis | travis environment to run functional tests |

## 9. Storybook

All Atoms of the project are in Storybook

```
yarn storybook
```

Open your http://localhost:9001
