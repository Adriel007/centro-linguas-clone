const exampleController = require("../controllers/example.controller.js");
const express = require('express');

module.exports = app =>
  app.get("/", exampleController.print);
