#!/bin/bash

set -Eeuxo pipefail

docker-compose build

docker-compose -f docker-compose.yml run --service-ports --rm 01firstprojectwithnodejs bash
