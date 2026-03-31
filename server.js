const express = require("express");
const db = require("./utils/db_connection");
const app = express();

app.get("/", (req, res) => {
    res.send("Hello World");
})

app.listen(3000, (err) => {
  console.log("Server is running in port 3000");
});
