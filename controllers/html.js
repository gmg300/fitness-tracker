const router = require("express").Router();
const db = require("../models");

// HOME PAGE
router.get("/", (req, res) => {
    res.render("index");
})

// EXERCISE PAGE
router.get("/exercise", (req, res) => {
    res.render("exercise");
})

// STATS PAGE
router.get("/stats", (req, res) => {
    res.render("stats");
})


module.exports = router;