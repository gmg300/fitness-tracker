// Dependencies
// =============================================================
const express = require("express");
const exphbs = require("express-handlebars");
const mongoose = require("mongoose");
const chalk = require("chalk");


// Setup Express
// =============================================================
const PORT = process.env.PORT || 3000;

// Express - data parsing
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Express - static directory
app.use(express.static("public"));

// Express - config Handlebars.
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Database - MongoDB
// =============================================================
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
  useNewUrlParser: true,
  useFindAndModify: false
});

// Routes
// =============================================================
app.use(require("./controllers/html-routes.js"));
app.use(require("./controllers/api-routes.js"));

// Start Express Server
// =============================================================
app.listen(PORT, () => {
    console.log(chalk.cyan(`App listening at http://localhost:${PORT}/`));
  });
