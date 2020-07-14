const express = require("express")
const router = express.Router();
const db = require("../models");

router.get("/api/projects", (req, res) => {
    db.Project.find({})
    .then(data => {
        res.json(data);
      })
    .catch(err => res.status(404).json(err))
});

router.post("/api/projects", function (req, res) {
    db.Project.create({ req })
      .then(result => {
        res.json(result);
      })
      .catch(error => {
        res.json(error);
      });
  });

  module.exports = router;