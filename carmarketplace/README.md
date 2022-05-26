# Car marketplace

This is a car marketplace web page built in react which offers listing and searching for cars with specific parameters. The page uses google maps API and is supported with backend service.

In order to get basic database create own users and cars or copy examles from cars.json, users.json and post into the database. 

The docker command to create postgres database: `docker run --name postgres -e POSTGRES_PASSWORD=tajne -d -p 5432:5432 postgres`

Remember to match owner_id parameter with existing user. 