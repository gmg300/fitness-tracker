const router = require("express").Router();
const db = require("../models");
const chalk = require("chalk");

// CREATE WORKOUT
router.post("/api/workouts", ({body}, res) => {
  db.Workout.create(body)
    .then(workout => {
      console.log(chalk.green("Workout created!"));
      res.json(workout);
    })
    .catch(err => {
      res.json(err);
    });
});

// FIND ALL WORKOUTS
router.get("/api/workouts", (req, res) => {
  db.Workout.find()
    .then(workouts => {
      // calculate total duration for each workout
      workouts.forEach(workout => {
        workout.getTotalDuration();
      })
      res.json(workouts);
    })
    .catch(err => {
      res.json(err);
    });
});

// https://dba.stackexchange.com/questions/97237/query-mongodb-collection-and-find-rows-from-7-days-ago
router.get("/api/workouts/range", (req, res) => {
  db.Workout.find()
    .then(workouts => {
      console.log(workouts)
      res.json(workouts);
    })
    .catch(err => {
      res.json(err);
    });
});

// ADD EXERCISE
// https://coursework.vschool.io/mongoose-crud/
// https://stackoverflow.com/questions/33049707/push-items-into-mongo-array-via-mongoose
router.put("/api/workouts/:id", ({body, params}, res) => {
  db.Workout.findByIdAndUpdate(params.id, {$push: {exercises: body}}, {new: true})
    .then(workout => {
      console.log(chalk.green("Exercise added!"));
      res.json(workout);
    })
    .catch(err => {
      res.json(err);
    });
});

module.exports = router;