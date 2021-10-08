const { Router } = require("express");

const router = Router();

router.get("/users/signin", (req, res) => {
  res.send("Entering the app");
});

router.get("/users/signup", (req, res) => {
  res.send("Authentication Form");
});

module.exports = router;
