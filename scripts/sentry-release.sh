#!/usr/bin/env bash

TOKEN=66f1b6e3b9974781acad369407831ad90f186064c826439cabd4477cd4aa4f89

RELEASE=$(git rev-parse HEAD)

curl https://sentry.io/api/0/projects/quotatis-sarl/carol/releases/ \
  -X POST \
  -H "Authorization: Bearer ${TOKEN}" \
  -H "Content-Type: application/json" \
  -d "{\"version\": \"${RELEASE}\"}" \
