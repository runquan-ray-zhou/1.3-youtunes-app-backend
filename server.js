// import/require server app from app.js
const app = require("./app.js");

// import/require dotenv package and config it to use process.env on PORT variable in .env file
require("dotenv").config()
const PORT = process.env.PORT;

// server app is listening on port for any request.
app.listen(PORT, () => {
    console.log(`Listening on PORT ${PORT}`);
});