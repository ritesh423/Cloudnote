const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  obj = {
    name: "Shubh",
    class: "12",
  };
  res.json(obj);
});

module.exports = router;
