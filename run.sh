#!/bin/bash

ENV=$1
cd my-react-app


echo "Starting the application"

if [ "$ENV" == "dev" ]; then
    npm start
elif [ "$ENV" == "prod" ]; then
    npm run build
    npm install -g serve
    serve -s build
else
    echo "Invalid environment"
fi