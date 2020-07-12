const express = require("express")
const router = express.Router();
const db = require("../models");

router.route("/")

router.get("/api/assignment", function (req, res) {
    console.log(req.body);
    db.assignment.find({})
    .then((data) => {
        console.log(data);
        res.json(data);
      })
    .catch(err => res.status(422).json(err))
});

router.post("/api/assignment", function (req, res) {
    //new request = new ID
    db.assignment.create({ req })
      .then((result) => {
        res.json(result);
      })
      .catch((error) => {
        res.json(error);
      });
  });


module.exports = router;