/* jshint browser: true, esversion: 6 */
/* global NA, System, Vue, VueRouter, require */
var routes = [],
	common = require('variations/common.json!json'),
	model = require('views-models/app.js'),
	template = require('views-models/app.htm!text'),
	webconfig = {
		routes: require('routes.json!json')
	},
	keys = Object.keys(webconfig.routes),
	mixin = {
		beforeRouteEnter: function (to, from, next) {
			next(function (vm) {
				document.title = vm.meta.title;
			});
		}
	},
	router, vm;

keys.forEach(function (key) {
	var route = {},
		name = key.split('_')[0],
		model, specific, template, options;

	route.path = webconfig.routes[key].url;

	route.component = function (resolve) {
		Promise.all([
			System.import('views-models/' + name + '.js'),
			System.import('variations/' + name + '.json!json'),
			System.import('views-models/' + name + '.htm!text')
		]).then(function (files) {
			model = files[0];
			specific = files[1];
			template = files[2];
			options = {
				dirty: false
			};
			resolve(model(specific, template, mixin, options));
		});
	};

	route.props = ['common', 'me'];

	routes.push(route);
});

router = new VueRouter({
	mode: 'history',
	base: '/',
	routes: routes
});

vm = new Vue(model(common, template, router, webconfig));

router.onReady(function () {
	vm.$mount('.layout');
});

Vue.set(vm.me, 'description', common.phrase);

NA.socket.emit('app--init');
NA.socket.on('app--init', function (session, sessionID) {
	Vue.set(vm.me, 'session', session);
	Vue.set(vm.me, 'sessionID', sessionID);
});
NA.socket.on('app--change-description', function (description) {
	Vue.set(vm.me, 'description', description);
});