const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now
  },
  // https://masteringjs.io/tutorials/mongoose/array#document-arrays
  exercises: [
    {
      type: {
        type: String,
        enum: ['cardio', 'resistance'],
        required: [true, "Enter an exercise type"]
      },
      name: {
        type: String,
        trim: true,
        required: [true, "Enter a name for the exercise"]
      },
      duration: {
        type: Number,
        required: "Enter a duration (minutes)",
      },
      distance: {
        type: Number,
        default: 0,
        required: function() { return this.type === 'cardio'; }
      },
      weight: {
        type: Number,
        default: 0,
        required: function() { return this.type === 'resistance'; }
      },
      reps: {
        type: Number,
        default: 0,
        required: function() { return this.type === 'resistance'; }
      },
      sets: {
        type: Number,
        default: 0,
        required: function() { return this.type === 'resistance'; }
      },
    },
  ],

  totalDuration: Number
});

WorkoutSchema.methods.getTotalDuration = function() {
  this.totalDuration = 0;
  this.exercises.forEach(exercise => {
    this.totalDuration += exercise.duration;
  });
  return this.totalDuration;
};

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;
