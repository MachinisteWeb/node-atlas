/* jshint browser: true */
/* global NA, Vue, VueRouter, require */

var lang = document.getElementsByTagName("html")[0].getAttribute("lang"),
	routes = require("routes.json!json"),
	common = require("variations/common.json!json"),
	model = require("views-models/app.js"),
	template = require("views-models/app.htm!text"),
	webconfig = {
		routes: routes
	},
	mixin = {
		beforeRouteEnter: function (to, from, next) {
			next(function (vm) {
				document.title = vm.meta.title;
			});
		}
	},
	vmHome = Vue.component('home', function (resolve) {
		var template = require("views-models/home.htm!text"),
			specific = require("variations/home.json!json");
		resolve(require('views-models/home.js')(specific, template, mixin));
	}),
	vmProjects = Vue.component('projects', function (resolve) {
		var template = require("views-models/projects.htm!text"),
			specific = require("variations/projects.json!json");
		resolve(require('views-models/projects.js')(specific, template, mixin));
	}),
	vmContact = Vue.component('contact', function (resolve) {
		var template = require("views-models/contact.htm!text"),
			specific = require("variations/contact.json!json");
		resolve(require('views-models/contact.js')(specific, template, mixin));
	}),
	vmError = Vue.component('error', function (resolve) {
		var template = require("views-models/error.htm!text"),
			specific = require("variations/error.json!json");
		resolve(require('views-models/error.js')(specific, template, mixin));
	}),
	router = new VueRouter({
		mode: 'history',
		base: '/',
		routes: [{
			path: routes["home_" + lang].url, 
			component: vmHome,
			props: ['common']
		}, { 
			path: routes["projects_" + lang].url, 
			component: vmProjects,
			props: ['common']
		}, { 
			path: routes["contact_" + lang].url, 
			component: vmContact,
			props: ['common']
		}, { 
			path: '/*', 
			component: vmError,
			props: ['common']
		}]
	}),
	vm;

vm = new Vue(model(common, template, router, webconfig));

vm.$mount('.layout');

NA.socket.emit("init-app");
NA.socket.on("init-app", function (me) {
	vm.me = me;
});