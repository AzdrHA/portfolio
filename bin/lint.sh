#!/bin/bash

docker compose -f docker-compose.yml -f docker-compose-local.yml run --rm portfolio npm run lint
