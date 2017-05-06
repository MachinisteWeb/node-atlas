/* jshint node: true */
/* global NA */
module.exports = function (common, template, router, webconfig) {
	return {
		template: template,
		router: router,
		data: {
			me: {},
			common: common,
			webconfig: webconfig
		},
		methods: {
			send: function () {
				NA.socket.emit('app--change-description', this.me.description);
			}
		}
	};
};