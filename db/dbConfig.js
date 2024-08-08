// import/require the pg-promise package and invoke it
const pgp = require("pg-promise")(); // pg-promise act as a client and make request to the database for information.

// import/require dotenv and config it to use the process.env method on variables in the .env file
require("dotenv").config();

// create connection object
const cn = {
    user: process.env.PG_USER,
    port: process.env.PG_PORT,
    database: process.env.PG_DATABASE,
    host: process.env.PG_HOST
}

// pass into the pgp function the connection object to make database instance
const db = pgp(cn)

// check the status of the connection to the database
db.connect()
  .then((cn) => {
    const { user, host, port, database } = cn.client;
    console.log(
      "\x1b[90m" +
        `Postgres connection established with user:${user}, host:${host}, port:${port}, database:${database}` +
        "\x1b[0m"
    );
    cn.done();
  })
  .catch((error) => console.log("database connection error", error));


// export the database
module.exports = db