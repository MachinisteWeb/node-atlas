/* global System */
System.config({
	defaultExtension: true,
	baseURL: document.getElementsByTagName("base")[0].getAttribute("href"),
	transpiler: 'traceur',
	map: {
		'traceur': 'javascripts/vendor/traceur.min.js',
		'text': 'javascripts/vendor/systemjs-plugin-text.min.js',
		'json': 'javascripts/vendor/systemjs-plugin-json.min.js'
	}
});
System.import(document.getElementById("systemjs").getAttribute("data-main"));