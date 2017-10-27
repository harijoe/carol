#!/usr/bin/env bash

function deploy() {
  git clean -df
  git clone https://92a99f360dcd7f681bae671b05db76404e2fd9b6@github.com/Quotatis/gaston.git
  cd gaston
  ./deploy.sh carol $1
  yarn release:sentry
}

read -r -p "Are you sure you want to deploy PRODUCTION? [y/N] " response
if [[ "$response" =~ ^([yY][eE][sS]|[yY])+$ ]]
then
    deploy $1
    echo "🚀 Deployment to prod completed";
else
    echo "Phew, nearly released 😅";
fi
