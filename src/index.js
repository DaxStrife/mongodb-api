const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
// const userRoute = require("./routes/user");
const routes = require("./routes");

const app = express();
const port = process.env.PORT || 3001;

const uri = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.99sm6gx.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;

// middleware
app.use(express.json());
app.use("/api", routes);
// app.use("/api", userRoute);

// routes
app.get("/", (req, res) => {
  res.send("Hello there");
});

// mongodb connection
mongoose
  .connect(uri)
  .then(() => console.log("Connected to mongodb"))
  .catch((err) => console.error(err));

app.listen(port, () => console.log("server listening on port: ", port));

module.exports = app;
