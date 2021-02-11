const db = require("../models");

module.exports = (app) => {
  app.get("/api/workouts", (req, res) => {
    db.Exercise.find({}).then((dbWorkout) => {
      res.json(dbWorkout);
    });
  });

  app.post("/api/workouts", (req, res) => {
    db.Exercise.create({})

      .then((dbWorkout) => {
        res.json(dbWorkout);
      })
      .catch((err) => {
        res.json(err);
      });
  });

  app.get("/api/workouts/range", (req, res) => {
    db.Exercise.find({})

      .then((dbWorkout) => {
        res.json(dbWorkout);
      })
      .catch((err) => {
        res.json(err);
      });
  });

  app.post("/api/workouts/range", (req, res) => {
    db.Exercise.create({})

      .then((dbWorkout) => {
        res.json(dbWorkout);
      })
      .catch((err) => {
        res.json(err);
      });
  });

  app.put("/api/workouts/:id", (req, res) => {
    db.Exercise.findByIdAndUpdate(
      req.params.id,
      {
        $push: { exercise: req.body },
      },
      {
        new: true,
      }
    )

      .then((dbWorkout) => {
        res.json(dbWorkout);
      })
      .catch((err) => {
        res.json(err);
      });
  });
};
