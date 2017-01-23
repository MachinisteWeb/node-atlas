var express = require("express"),
    router = express.Router(),
    send = function (req) {
      return `{
  "params": "${req.params.member}",
  "query": "${req.query.member}"
  "body": "${req.body.member}"
}`
    };

router.get("/(:member/)?", function (req, res) {
  res.setHeader("Content-Type", "application/json; charset=utf-8");
  res.send(send(req));
});

router.post("/(:member/)?", function (req, res) {
  res.setHeader("Content-Type", "application/json; charset=utf-8");
  res.send(send(req));
});

module.exports = router;