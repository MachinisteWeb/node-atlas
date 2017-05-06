/* jshint node: true */
module.exports = function (specific, template, mixin) {
	return {
		template: template,
		mixins: (mixin) ? [mixin] : undefined,
		props: ['common', 'me'],
		data: function () {
			return {
				meta: specific.meta,
				specific: specific.home
			};
		}
	};
};