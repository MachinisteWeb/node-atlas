var express = require("express"),
    router = express.Router();

router.get("/(:member/)?", function(req, res) {
  res.setHeader("Content-Type", "application/json; charset=utf-8");
  res.send(`{
  "params": "${req.params.member}",
  "query": "${req.query.member}"
  "body": "${req.body.member}"
}`);
});

router.post("/(:member/)?", function(req, res) {
  res.setHeader("Content-Type", "application/json; charset=utf-8");
  res.send(`{
  "params": "${req.params.member}",
  "query": "${req.query.member}"
  "body": "${req.body.member}"
}`);
});

module.exports = router;