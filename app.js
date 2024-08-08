// require/import dependencies
const express = require("express");
const cors = require("cors");

// create instance of express server app
const app = express();

// middleware for the server app
app.use(cors()) // cors package allow any client or web browser to make request to this server app
app.use(express.json()) // json middleware function allows the server app to parse incoming request data

// health check route
app.get("/", (req, res) => {
    res.status(200).send("Welcome to the Youtunes App Backend")
})

// error route
app.get("*", (req, res) => {
    res.status(404).send("You found the error page.")
})
// export server app
module.exports = app;