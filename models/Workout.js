const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
  day: {
    type: Date,
    required: true,
    default: Date.now
  },
  // https://masteringjs.io/tutorials/mongoose/array#document-arrays
  exercises: [
    {
      type: {
        type: String,
        required: "Enter an exercise type",
      },
      name: {
        type: String,
        trim: true,
        required: "Enter a name for the exercise",
      },
      duration: {
        type: Number,
        required: "Enter a duration",
      },
      distance: {
        type: Number,
      },
      weight: {
        type: Number,
      },
      reps: {
        type: Number,
      },
      sets: {
        type: Number,
      },
    },
  ],
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;
