const express = require("express")
const router = express.Router();
const { Project } = require('../models');

router.get("/projects", (req, res) => {
    Project.find({})
    .then(data => {
        res.json(data);
      })
    .catch(err => res.status(404).json(err))
});

router.post("/projects", function (req, res) {
  console.log(req.body);
  const project = new Project(req.body) 
  project.save(function (err) {
    res.json(project)
  });
})

module.exports = router;