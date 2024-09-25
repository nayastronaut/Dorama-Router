const express = require("express");
const app = express();
const doramasRoutes = require("./routes/doramasRoutes");

app.use(express.json());
app.use("/dorama", doramasRoutes);

module.exports = app;
