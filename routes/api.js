const express = require("express")
const router = express.Router();
const postsController = require("../controller/control.js");

router.route("/")
router.get(postsController.findAll)

module.exports = router;