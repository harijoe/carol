#!/usr/bin/env bash

set -euxo pipefail

git clean -df
rm -rf gaston
git clone https://92a99f360dcd7f681bae671b05db76404e2fd9b6@github.com/Quotatis/gaston.git
cd gaston
./preprod_deploy.sh carol $1
