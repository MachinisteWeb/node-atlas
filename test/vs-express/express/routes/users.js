var express = require("express"),
    router = express.Router(),
    render = `{
  "params": "${req.params.member}",
  "query": "${req.query.member}"
  "body": "${req.body.member}"
}`;

router.get("/(:member/)?", function(req, res) {
  res.setHeader("Content-Type", "application/json; charset=utf-8");
  res.send(render);
});

router.post("/(:member/)?", function(req, res) {
  res.setHeader("Content-Type", "application/json; charset=utf-8");
  res.send(render);
});

module.exports = router;