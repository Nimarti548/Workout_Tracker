const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ExerciseSchema = new Schema({
  day: {
    type: Date,
    default: Day.now,
  },

  exercise: [
    {
      name: {
        type: String,
        trim: true,
        required: "Enter exercise name",
      },
      type: {
        type: String,
        trim: true,
        required: "Enter exercise type",
      },
      sets: {
        type: Number,
      },
      reps: {
        type: Number,
      },
      weight: {
        type: Number,
      },
      distance: {
        type: Number,
      },
      duration: {
        type: Number,
      },
    },
  ],
});

const Exercise = mongoose.model("Exercise", ExerciseSchema);

module.exports = Exercise;