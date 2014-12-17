/**
 * This script move
 * - `.../npm/node_modules/node-atlas/nodeatlas` and
 * - `.../npm/node_modules/node-atlas/nodeatlas.cmd`
 * files to
 * - `.../npm/nodeatlas` and
 * - `.../npm/nodeatlas.cmd`
 * for allow users to use `nodeatlas` command in prompt console.
 */

var path = require('path'),
	fs = require('fs'),
	appLabels = require('../languages/default.json'),
	dirsName = __dirname.split(path.sep),
	unixSource = path.resolve(__dirname, '..') + path.sep + 'nodeatlas',
	windowsSource = path.resolve(__dirname, '..') + path.sep + 'nodeatlas.cmd',
	unixTarget,
	windowsTarget;

/* Copy function. */
function copyFile(source, target) {
	var callbackCalled = false,
  		read = fs.createReadStream(source),
  		write = fs.createWriteStream(target);

	read.pipe(write);

  	read.on("error", function(err) { if (err) {
		console.log(err);
	} });
  	write.on("error", function(err) { if (err) {
		console.log(err);
  	} });
  	write.on("close", function(ex) { if (ex) {
		console.log(ex);
  	} });
}

/* Copy on Windows environment and look-alike installation of npm. */
if (dirsName.length - 4 > 0 && dirsName[dirsName.length - 4] === 'npm') {
	unixTarget = path.resolve(__dirname, '..', '..', '..') + path.sep + 'nodeatlas';
	windowsTarget = path.resolve(__dirname, '..', '..', '..') + path.sep + 'nodeatlas.cmd';
	copyFile(windowsSource, windowsTarget);
	copyFile(unixSource, unixTarget);
	console.log(appLabels.downloadAllModule.installShortcutsDone);
}

/* Copy on Unix environment and look-alike installation of npm. */
if (dirsName.length - 4 > 0 && dirsName[dirsName.length - 4] === 'lib') {
	unixTarget = path.resolve(__dirname, '..', '..', '..','..','bin') + path.sep + 'nodeatlas';
	windowsTarget = path.resolve(__dirname, '..', '..', '..','..','bin') + path.sep + 'nodeatlas.cmd';
	copyFile(unixSource, unixTarget);
	copyFile(windowsSource, windowsTarget);
	console.log(appLabels.downloadAllModule.installShortcutsDone);
}
