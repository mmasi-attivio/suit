#!/bin/bash

# Script to do a full, clean build of the SUIT library on Windows
# Removes any node modules and build products and then re-runs
# npm install, does all of the available validation, and builds
# both the documentation and the library itself
rimraf  node_modules && \
rimraf es && \
rimraf lib && \
rimraf styleguide && \
flow stop && \
npm install && \ 
npm run lint && \
npm run flow && \ 
npm run validatecomponents && \
npm run doclint && \
npm run test && \
npm run styleguide && \
npm run doc && \
npm run build
flow stop && \
