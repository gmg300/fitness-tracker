const router = require("express").Router();
const db = require("../models");

// CREATE WORKOUT
router.post("/api/workouts", ({body}, res) => {
  db.Workout.create(body)
    .then(workout => {
      res.json(workout);
    })
    .catch(err => {
      res.json(err);
    });
});

// GET ALL WORKOUTS
router.get("/api/workouts", (req, res) => {
  db.Workout.find()
    .then(workouts => {
      res.json(workouts);
    })
    .catch(err => {
      res.json(err);
    });
});
router.get("/api/workouts/range", (req, res) => {
  db.Workout.find()
    .then(workouts => {
      res.json(workouts);
    })
    .catch(err => {
      res.json(err);
    });
});

// ADD EXERCISE
// https://coursework.vschool.io/mongoose-crud/
router.put("/api/workouts/:id", ({body, params}, res) => {
  db.Workout.findByIdAndUpdate(params.id, body, {new: true})
    .then(workout => {
      res.json(workout);
    })
    .catch(err => {
      res.json(err);
    });
});


  
  module.exports = router;