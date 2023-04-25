# Baseball Chip Weather Service

This is the weather service for baseball chip. It gets the weather for each MLB stadium.

## Endpoints

GET /weather

## Environment Variables

* `OPEN_WEATHER_API_KEY` - API key for https://openweathermap.org/api

* `REDIS_HOST` - the host for connecting to `redis`

* `REDIS_PORT` - the port for connecting to `redis`


## How to run

`npm run dev` will stand this up by itself on port 6060 by default. You'll need redis running as well to actually do anything, since the endpoint pulls from it.

You can also use the Dockerfile to run this in Docker.
