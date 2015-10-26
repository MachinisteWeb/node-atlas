/*------------------------------------*\
    $%GLOBAL FUNCTIONS
\*------------------------------------*/
/* jslint node: true */

/**
 * Clone Object A into B and the purpose is : change A not affect B.
 * @public
 * @function clone
 * @memberOf NA#
 * @param {Object} object The A object.
 * @return {Object} Return the B object.
 */
exports.clone = function (object) {
    var NA = this,
        copy,
        result;

    /* Handle the 3 simple types, and null or undefined */
    if (null === object || undefined === object || "object" !== typeof object) {
        result = object;
    }

    /* Handle Date */
    if (object instanceof Date) {
        copy = new Date();
        copy.setTime(object.getTime());
        result = copy;
    }

    /* Handle Array */
    if (object instanceof Array) {
        result = object.slice(0);
    }

    /* Handle Object */
    if (object instanceof Object) {
        copy = {};
        NA.forEach(object, function (attr) {
            copy[attr] = NA.clone(object[attr]);
        });
        result = copy;
    }

    return result;
};

/**
 * A safe iterator for object properties.
 * @public
 * @function forEach
 * @memberOf NA#
 */
exports.forEach = function (object, callback) {
    for (var current in object) {
        if (object.hasOwnProperty(current)) {
            callback(current, object);
        }
    }
};

/**
 * Allow you to write into Console.
 * @public
 * @function log
 * @memberOf NA#
 */
exports.log = function () {
    var NA = this,
        logs = console.log;

    NA.forEach(arguments, function (log, logList) {
        logs('\u001b[36m' + logList[log] + '\u001b[39m');
    });
};

/**
 * Read a JSON file and return a literal Object else kill process.
 * @private
 * @function openConfiguration
 * @memberOf NA#
 * @param {string} configName File name (on file path + name in relative). Base folder is the folder where is `webconfig.json`.
 * @return {Object} Literal object of JSON file.
 */
exports.openConfiguration = function (configName) {
    var NA = this,
        fs = NA.modules.fs,
        data = {};

    try {
        /* If file is a correct JSON file, return a literal Object file's content. */
        return JSON.parse(fs.readFileSync(NA.websitePhysicalPath + configName, 'utf-8'));
    } catch (exception) {
        if (exception.toString().indexOf('SyntaxError') !== -1) {
            /* If the file is a JSON file, but contain a Syntax error. */
            data.syntaxError = exception.toString();
            data.fileName = configName;
            NA.log(NA.appLabels.webconfigSyntaxError.replace(/%([\-a-zA-Z0-9_]+)%/g, function (regex, matches) { return data[matches]; }));
        } else {
            /* Other errors. */
            NA.log(exception);
        }
        /* In case of error, kill current process. */
        process.kill(process.pid);
    }
};

/**
 * Know if a file exist.
 * @public
 * @function ifFileExist
 * @memberOf NA#
 * @param {String}               physicalPath Absolute OS path to a filename.
 * @param {String}               [fileName]   Name of file if not set in end of `physicalPath`.
 * @param {ifFileExist~callback} callback     If file exist provide arguments `callback(null, true)` else `callback(err)`
 *                                            with `err` containing `path`, `physicalPath` and `filename` informations.
 */
exports.ifFileExist = function (physicalPath, fileName, callback) {
    var NA = this,
        fs = NA.modules.fs,
        path = NA.modules.path,
        pathToResolve = physicalPath;

    if (typeof fileName === 'string') {
        pathToResolve = path.join(physicalPath, fileName);
    }

    /* This function block the event loop (EL) */
    fs.stat(pathToResolve, function (err) {
        if (err && err.code === 'ENOENT') {
            err.path = pathToResolve;
            err.physicalPath = physicalPath;
            err.fileName = fileName;

            /**
             * If file do not exist, bad next step...
             * @callback ifFileExist~callback
             */
            callback(err, false);
        } else {

            /**
             * If file exist, good next step !
             */
            callback(null, true);
        }
    });
};

/**
 * Load into `{variation}.common` to object format the content of common variation file.
 * @public
 * @function addCommonVariation
 * @memberOf NA#
 * @param {string} languageCode Select a subdirectory for load variation (name is generaly the languageCode).
 * @param {object} variation    An object for attach common parameter. If empty, a new empty object is created.
 */
exports.addCommonVariation = function (languageCode, variation) {
    var NA = this,
        currentVariation = {},
        extend = NA.modules.extend,
        path = NA.modules.path;

    /* Create a global variation object if is not passed. */
    if (typeof variation !== 'undefined') {
        currentVariation = variation;
    }

    /* Load variation from languageCode directory or root directory (depend if languageCode is defined)... */
    currentVariation.common = NA.openVariation(NA.webconfig.commonVariation, languageCode);
    currentVariation.filename = path.join(NA.variations.pathname, "all-component.here");

    /* ...and complete empty value with value of file in root directory. */
    if (languageCode) {
        currentVariation.common = extend(true, NA.openVariation(NA.webconfig.commonVariation, undefined, true), currentVariation.common);
    }

    return currentVariation;
};

/**
 * Load into `{variation}.specific` to object format the content of a specific variation file.
 * @public
 * @function addSpecificVariation
 * @memberOf NA#
 * @param {string} specific     Select the specific variation associate to the current page.
 * @param {string} languageCode Select a subdirectory for load variation (name is generaly the languageCode).
 * @param {object} variation    An object for attach common parameter. If empty, a new empty object is created.
 */
exports.addSpecificVariation = function (specific, languageCode, variation) {
    var NA = this,
        currentVariation = {},
        extend = NA.modules.extend,
        path = NA.modules.path;

    /* Create a global variation object if is not passed. */
    if (typeof variation !== 'undefined') {
        currentVariation = variation;
    }

    /* Load variation from languageCode directory or root directory (depend if languageCode is defined)... */
    currentVariation.specific = NA.openVariation(specific, languageCode);
    currentVariation.filename = path.join(NA.variations.pathname, "all-component.here");

    /* ...and complete empty value with value of file in root directory. */
    if (languageCode) {
        currentVariation.specific = extend(true, NA.openVariation(specific, undefined, true), currentVariation.specific);
    }

    return currentVariation;
};

/**
 * Load a HTML fragment and inject variation for an async result.
 * @public
 * @function newRender
 * @memberOf NA#
 * @param {string} templateFile Path of file used into componentsRelativePath directory.
 * @param {object} variations   All variable used for transform variation into HTML.
 */
exports.newRender = function (templateFile, variations) {
    var NA = this,
        ejs = NA.modules.ejs,
        fs = NA.modules.fs,
        path = NA.modules.path;

    /* Generate asynchrone render. */
    return ejs.render(
        fs.readFileSync(path.join(NA.websitePhysicalPath, NA.webconfig.componentsRelativePath, templateFile), 'utf-8'),
        variations
    );
};

exports.extend = function (objects) {
    var NA = this;

    function copyItem(source, prop) {
        if (source[prop].constructor === Object) {
            if (!objects[prop] || objects[prop].constructor === Object) {
                objects[prop] = objects[prop] || {};
                NA.extend(objects[prop], source[prop]);
            } else {
                objects[prop] = source[prop];
            }
        } else {
            objects[prop] = source[prop];
        }
    }

    Array.prototype.slice.call(arguments, 1).forEach(function(source) {
        if (source) {
            NA.forEach(source, function (prop) {
                copyItem(source, prop);
            });
        }
    });

    return objects;
};