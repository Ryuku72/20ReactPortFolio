const express = require("express")
const router = express.Router();
const db = require("../models");

router.route("/")

router.get("/api/projectinfo", function (req, res) {
    console.log(req.body);
    db.Post.find({})
    .then((data) => {
        console.log(data);
        res.json(data);
      })
    .catch(err => res.status(422).json(err))
});


module.exports = router;