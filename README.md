# Notes
I chose to simply use react with no server because the data was a small amount and there was only a read-only requirement for the data (no need for database or a server). I chose to use docker and docker-compose because it is easy to make 'production ready' when serving the production build from the `build` directory.

# Run It in Production

1. Download the code: `git clone https://github.com/dadeg/proof-interview`
4. Run it in PRODUCTION mode with `docker-compose up prod`
5. Visit `localhost:3000`
6. Enter in a User ID (1, 2, 3, ...9, 10). Any other value will result in an unknown user.

# BONUS!!!

Configure the priority of the campaigns by setting a query parameter of `priority` in the URL (`localhost:3000/?priority=1,2,3,4,5,6,7`). Simply arrange the campaign IDs in whatever order you want. You will need to restart the app to load the new priority, `docker-compose stop && docker-compose up dev/prod`

# Dev mode

1. Install the dependencies, `npm i`
2. Run the tests, `npm test`
3. Start the dev server, `docker-compose up dev`