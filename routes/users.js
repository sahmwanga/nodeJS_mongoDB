const express = require("express");
const router = express.Router();

const userModel = require("../models/User");

/* GET users listing. */
router.get("/", function(req, res, next) {
  const user = new userModel({
    email: "sahmwanga@gmail.com"
  });
  user
    .save()
    .then(doc => {
      console.log(doc);
    })
    .catch(err => console.log(err));
  res.send("respond with a resource");
});

module.exports = router;
