exports.changeDom = function (params, next) {
	var NA = this,
        cheerio = NA.modules.cheerio,
		variation = params.variation,
		dom = params.dom,
        $ = cheerio.load(dom, { decodeEntities: false });

    $("a").attr("href", NA.webconfig.routes["home_" + variation.common.menu.href].url);

    dom = $.html();

    next(dom);
};