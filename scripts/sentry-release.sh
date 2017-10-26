#!/usr/bin/env bash

TOKEN=66f1b6e3b9974781acad369407831ad90f186064c826439cabd4477cd4aa4f89

GIT_SHA1=$(git rev-parse HEAD)

RELEASE='v'$(node -e "console.log(require('./package.json').version)")

echo curl https://sentry.io/api/0/projects/quotatis-sarl/carol/releases/ \
  -X POST \
  -H "Authorization: Bearer ${TOKEN}" \
  -H "Content-Type: application/json" \
  -d '{
    "version": "'$RELEASE'",
      "tags": {
        "git_commit": "'$GIT_SHA1'",
      },
    }'

