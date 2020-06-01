const router = require("express").Router();
const Workout = require("../models/workout-model.js");

// HOME
router.get("/", (req, res) => {
    res.render("index");
})

// EXERCISE
router.get("/exercise", (req, res) => {
    res.render("exercise");
})

// STATS
router.get("/stats", (req, res) => {
    res.render("stats");
})



module.exports = router;