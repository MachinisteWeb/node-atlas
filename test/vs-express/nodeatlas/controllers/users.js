exports.changeDom = function (next, locals) {
	locals.dom = `{
  "params": "${locals.params.member}",
  "query": "${locals.query.member}"
  "body": "${locals.body.member}"
}`;

	next();
};