const express = require("express")
const router = express.Router();
const db = require("../models");

router.route("/")

router.get("/api/projectinfo", function (req, res) {
    db.Post.find(req.query)
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err))
});


module.exports = router;