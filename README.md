# Notes
I chose to simply use react with no server because the data was a small amount and there was only a read-only requirement for the data (no need for database or a server). I chose to use docker and docker-compose because it is easy to make 'production ready' when serving the production build from the `build` directory.

# Run It

1. Download the code: `git clone https://github.com/dadeg/proof-interview`
2. Install the dependencies: `npm i`
3. Run the tests, `npm test`
4. Run it in DEV mode with `docker-compose up dev` or PRODUCTION mode with `docker-compose up prod`
5. Visit `localhost:3000`
6. Enter in a User ID (1, 2, 3, ...9, 10). Any other value will result in an unknown user.

# BONUS!!!

Configure the priority of the campaigns in the `docker-compose.yml` file. Simply arrange the campaign IDs in whatever order you want. You will need to restart the app to load the new priority, `docker-compose stop && docker-compose up dev/prod`