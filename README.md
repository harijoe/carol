# Carol Master: [![Scrutinizer Code Quality](https://scrutinizer-ci.com/g/Quotatis/carol/badges/quality-score.png?b=master&s=222575eb53a871d4c978a53173ea8ea59d97fc38)](https://scrutinizer-ci.com/g/Quotatis/carol/?branch=master) [![Code Coverage](https://scrutinizer-ci.com/g/Quotatis/carol/badges/coverage.png?b=master&s=2566a0a0516e5557828471b90a9d9d0fc82b109e)](https://scrutinizer-ci.com/g/Quotatis/carol/?branch=master) [![Build Status](https://travis-ci.com/Quotatis/carol.svg?token=n1DpETbfhCpoPtcwMaSP&branch=master)](https://travis-ci.com/Quotatis/carol/)
Carol Develop: [![Scrutinizer Code Quality](https://scrutinizer-ci.com/g/Quotatis/carol/badges/quality-score.png?b=develop&s=222575eb53a871d4c978a53173ea8ea59d97fc38)](https://scrutinizer-ci.com/g/Quotatis/carol/?branch=develop) [![Code Coverage](https://scrutinizer-ci.com/g/Quotatis/carol/badges/coverage.png?b=develop&s=2566a0a0516e5557828471b90a9d9d0fc82b109e)](https://scrutinizer-ci.com/g/Quotatis/carol/?branch=develop) [![Build Status](https://travis-ci.com/Quotatis/carol.svg?token=n1DpETbfhCpoPtcwMaSP&branch=develop)](https://travis-ci.com/Quotatis/carol/)


In order to deploy into pre-production for the SPA you will have to push to the branch develop :
Travis will be able to build the docker container, run the tests than deploy to kubernetes using the last develop buiild.

The production is based on node and deployed with ansible.

Quotatis SPA

Version: 0.0.2

## 1. Requirements
[Node.js](https://nodejs.org/)
[Docker](https://docker.io)

## Getting Started

To get started, first install all the necessary dependencies.
```
npm install
```

Start the development server (changes will now update live in browser)
```
npm run dev
```

Build files for production
```
npm run build:production
```

Build files for staging
```
npm run build:staging
```

Start the server for SSR
```
npm start
```

In order to use SSL add
```
PORT=442 npm run dev
```


## Getting Started with docker

You will to run:
```
docker-compose up -d # don't forget to change the ENV var for the enviroment (develoment / staging / production)
```

For both project to view your project, go to: [http://localhost/](http://localhost/)
