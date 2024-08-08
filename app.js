// require/import dependencies
const express = require("express")
const cors = require("cors")

// create instance of express server app
const app = express()

// middleware for the server app
app.use(cors())
app.use(express.json())

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