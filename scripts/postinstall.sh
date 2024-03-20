#!/bin/bash
set -o errexit
set -o pipefail

mkdir -p ./assets # ensure the assets directory exists

if [[ -z "$ACCESS_TOKEN" || -z "$PACKAGE_URL" ]]; then
  echo "Environment variables not set. Attempting to read from .env file..."
    if [[ -f .env ]]; then
        source .env
    else
        echo "Error: Environment variables ACCESS_TOKEN or PACKAGE_URL are not set and .env file not found."
        exit 1
  fi
fi

curl -H "Authorization: Bearer ${ACCESS_TOKEN}" -o ./assets/embedding.js "${PACKAGE_URL}"
