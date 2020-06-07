const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect("mongodb://localhost/workout", {
  useNewUrlParser: true,
  useFindAndModify: false
});

let workoutSeed = [
  {
    day: new Date(Date.now() - 10*24*60*60*1000),
    exercises: [
      {
        type: "resistance",
        name: "Bicep Curl",
        duration: 20,
        weight: 100,
        reps: 10,
        sets: 4
      }
    ]
  },
  {
    day: new Date(Date.now() - 9*24*60*60*1000),
    exercises: [
      {
        type: "resistance",
        name: "Lateral Pull",
        duration: 20,
        weight: 300,
        reps: 10,
        sets: 4
      }
    ]
  },
  {
    day: new Date(Date.now() - 8*24*60*60*1000),
    exercises: [
      {
        type: "resistance",
        name: "Push Press",
        duration: 25,
        weight: 185,
        reps: 8,
        sets: 4
      }
    ]
  },
  {
    day: new Date(Date.now() - 7*24*60*60*1000),
    exercises: [
      {
        type: "cardio",
        name: "Running",
        duration: 25,
        distance: 4
      }
    ]
  },
  {
    day: new Date(Date.now() - 6*24*60*60*1000),
    exercises: [
      {
        type: "resistance",
        name: "Bench Press",
        duration: 20,
        weight: 285,
        reps: 10,
        sets: 4
      }
    ]
  },
  {
    day: new Date(Date.now() - 5*24*60*60*1000),
    exercises: [
      {
        type: "resistance",
        name: "Bench Press",
        duration: 20,
        weight: 300,
        reps: 10,
        sets: 4
      }
    ]
  },
  {
    day: new Date(Date.now() - 4*24*60*60*1000),
    exercises: [
      {
        type: "resistance",
        name: "Quad Press",
        duration: 30,
        weight: 300,
        reps: 10,
        sets: 4
      }
    ]
  },
  {
    day: new Date(Date.now() - 3*24*60*60*1000),
    exercises: [
      {
        type: "resistance",
        name: "Bench Press",
        duration: 20,
        weight: 300,
        reps: 10,
        sets: 4
      }
    ]
  },
  {
    day: new Date(Date.now() - 2*24*60*60*1000),
    exercises: [
      {
        type: "resistance",
        name: "Military Press",
        duration: 20,
        weight: 300,
        reps: 10,
        sets: 4
      }
    ]
  },
  {
    day: new Date(Date.now() - 1*24*60*60*1000),
    exercises: [
      {
        type: "resistance",
        name: "Bench",
        duration: 30,
        distance: 2
      }
    ]
  }
];

db.Workout.deleteMany({})
  .then(() => db.Workout.collection.insertMany(workoutSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
