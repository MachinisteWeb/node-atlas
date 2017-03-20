/* global System */
System.config({
	defaultJSExtensions: true,
	baseURL: document.getElementsByTagName("base")[0].getAttribute("href"),
	transpiler: 'traceur',
	map: {
		'traceur': 'javascripts/traceur.min.js',
		'text': 'javascripts/systemjs-plugin-text.min.js',
		'json': 'javascripts/systemjs-plugin-json.min.js'
	}
});
System.import(document.getElementById("systemjs").getAttribute("data-main"));