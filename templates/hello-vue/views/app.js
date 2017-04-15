/* jshint node: true */
module.exports = function (common, template, router, webconfig) {
	return {
		template: template,
		router: router,
		data: {
			common: common,
			webconfig: webconfig
		}
	};
};