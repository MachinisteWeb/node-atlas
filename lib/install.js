/* jslint node: true */
/**
 * This script move
 * - `../npm/node_modules/node-atlas/commands/nodeatlas` and
 * - `../npm/node_modules/node-atlas/commands/nodeatlas.cmd`
 * files to
 * - `../npm/nodeatlas` and
 * - `../npm/nodeatlas.cmd`
 * for allow users to use `nodeatlas` command in prompt console.
 */

var path = require('path'),
    execute = require('child_process').exec,
    traverseDirectory = require('../node_modules/traverse-directory'),
    appLabels = require('../languages/default.json'),
    dirsName = __dirname.split(path.sep),
    source = path.resolve(__dirname, '..') + path.sep + 'commands' + path.sep,
    target,
    log = console.log;

function copyFile(source, target) {
    var traverse = new traverseDirectory(
      source,
      target
    );

    traverse.directory(function(source, target, next) {
        next(traverseDirectory.copydir, source, target);
    });

    traverse.file(function(source, target, next) {
        next(traverseDirectory.copyfile, source, target);
    });

    traverse.run(function(error) {
        if (error) {
            log(error);
        }
        log('\u001b[36m' + appLabels.downloadAllModule.installShortcutsDone + '\u001b[39m');
    });

    traverse.on('complete', function () {
        execute('chmod 755 ' + target + 'nodeatlas', function(error) {
            var isError = false;
            if (error !== null && error !== undefined) { isError = true; }
            if (error && error.cmd && error.cmd.indexOf('cmd.exe') !== -1) { isError = false; }
            if (isError) {
                log('\u001b[33m' + error + '\u001b[39m');
            }
        });
        log('\u001b[32m' + appLabels.downloadAllModule.installDone + '\u001b[39m');
    });
}

if (dirsName.length - 4 > 0 && dirsName[dirsName.length - 4] === 'npm') {
    target = path.resolve(__dirname, '..', '..', '..') + path.sep;
    copyFile(source, target);
}

if (dirsName.length - 4 > 0 && dirsName[dirsName.length - 4] === 'lib') {
    target = path.resolve(__dirname, '..', '..', '..', '..', 'bin') + path.sep;
    copyFile(source, target);
}