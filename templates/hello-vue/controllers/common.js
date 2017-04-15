/* jshint node: true, esversion: 6 */
exports.changeDom = function (next, locals, request, response) {
	var NA = this,
		Vue = require("vue"),
		VueRouter = require("vue-router"),
		renderers = require("vue-server-renderer"),
		renderer = renderers.createRenderer(),
		fs = NA.modules.fs,
		path = NA.modules.path,
		view = path.join(NA.serverPath, NA.webconfig.viewsRelativePath, locals.routeParameters.view + ".htm"),
		model = path.join(NA.serverPath, NA.webconfig.viewsRelativePath, locals.routeParameters.view + ".js"),
		appView = path.join(NA.serverPath, NA.webconfig.viewsRelativePath, "app.htm"),
		appModel = path.join(NA.serverPath, NA.webconfig.viewsRelativePath, "app.js"),
		specific = locals.specific;

	global.Vue = Vue;
	Vue.use(VueRouter);

	fs.readFile(view, "utf-8",  function (error, template) {
		var component = Vue.component('all', require(model)(specific, template));
		fs.readFile(appView, "utf-8", function (error, template) {
			var common = locals.common,
				webconfig = {
					routes: NA.webconfig.routes
				},
				layoutSections = locals.dom.split('<div class="layout"></div>'),
				preAppHTML = layoutSections[0],
				postAppHTML = layoutSections[1],
				router = new VueRouter({
					routes: [{
						path: locals.routeParameters.url,
						component: component,
						props: ['common']
					}]
				}),
				stream = renderer.renderToStream(new Vue(require(appModel)(common, template, router, webconfig)));

			router.push(locals.routeParameters.url);

			response.write(preAppHTML);

			stream.on('data', function (chunk) {
				response.write(chunk);
			});

	  		stream.on('end', function () {
				response.end(postAppHTML);
	  		});
		});
	});
};