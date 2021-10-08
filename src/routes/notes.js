const { Router } = require("express");

const router = Router();

router.get("/notes", (req, res) => {
  res.send("Notes from Database");
});

module.exports = router;
