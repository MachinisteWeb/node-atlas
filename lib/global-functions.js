/*------------------------------------*\
    $%GLOBAL FUNCTIONS
\*------------------------------------*/

exports.clone =  function (NA) {

    /**
     * Clone Object A into B and the purpose is : change A not affect B.
     * @public
     * @function clone
     * @memberOf node-atlas~NA
     * @param {Object} object - The A object.
     * @return {Object} - Return the B object.
     */
    NA.clone = function (object) {
        var copy,
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

    return NA;
};

exports.forEach =  function (NA) {

    /**
     * A safe iterator for object properties.
     * @public
     * @function forEach
     * @memberOf node-atlas~NA
     */
    NA.forEach = function (object, callback) {
        for (var current in object) {
            if (object.hasOwnProperty(current)) {
                callback(current, object);
            }
        }
    };

    return NA;
};

exports.log =  function (NA) {

    /**
     * Allow you to write into Console.
     * @public
     * @function log
     * @memberOf node-atlas~NA
     */
    NA.log = function () {
        var logs = console.log;

        NA.forEach(arguments, function (log, logList) {
            logs('\u001b[36m' + logList[log] + '\u001b[39m');
        });
    };

    return NA;
};

exports.openConfiguration =  function (NA) {

    /**
     * Read a JSON file and return a literal Object else kill process.
     * @public
     * @function openConfiguration
     * @memberOf node-atlas~NA
     * @param {string} configName - File name (on file path + name in relative). Base folder is the folder where is `webconfig.json`.
     * @return {Object} - Literal object of JSON file.
     */
    NA.openConfiguration = function (configName) {
        var fs = NA.modules.fs,
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

    return NA;
};

exports.ifFileExist =  function (NA) {

    /**
     * Read a file and allow a success callback or fallback in case of failure.
     * @public
     * @function ifFileExist
     * @memberOf node-atlas~NA
     * @param {string} physicalPath - Absolute OS path to a filename.
     * @param {string} fileName - Name of file.
     * @param {ifFileExist~callback} callback - Executed if file was correctly opened.
     * @param {ifFileExist~fallback} fallback - Executed if something was wrong with file.
     */
    NA.ifFileExist = function (physicalPath, fileName, callback, fallback) {
        var fs = NA.modules.fs,
            path = NA.modules.path;

        /* Check if file exist */
        fs.stat(physicalPath + fileName, function (error) {
            var data = {
                pathName: path.join(physicalPath, fileName)
            };

            if (error && error.code === 'ENOENT') {
                NA.log(NA.appLabels.ifFileExist.replace(/%([\-a-zA-Z0-9_]+)%/g, function (regex, matches) { return data[matches]; }));

                /**
                 * If file do not exist, bad next step...
                 * @callback ifFileExist~fallback
                 */
                fallback();
            } else {

                /**
                 * If file exist, good next step !
                 * @callback ifFileExist~callback
                 */
                callback();
            }
        });
    };

    return NA;
};

exports.addCommonVariation =  function (NA) {

    /**
     * Load into `{variation}.common` to object format the content of common variation file.
     * @public
     * @function addCommonVariation
     * @memberOf node-atlas~NA
     * @param {string} languageCode - Select a subdirectory for load variation (name is generaly the languageCode).
     * @param {object} variation - An object for attach common parameter. If empty, a new empty object is created.
     */
    NA.addCommonVariation = function (languageCode, variation) {
        var currentVariation = {},
            extend = NA.modules.extend;

        /* Create a global variation object if is not passed. */
        if (typeof variation !== 'undefined') {
            currentVariation = variation;
        }

        /* Load variation from languageCode directory or root directory (depend if languageCode is defined)... */
        currentVariation.common = NA.openVariation(NA.webconfig.commonVariation, languageCode);

        /* ...and complete empty value with value of file in root directory. */
        if (languageCode) {
            currentVariation.common = extend(true, NA.openVariation(NA.webconfig.commonVariation), currentVariation.common);
        }

        return currentVariation;
    };

    return NA;
};

exports.addSpecificVariation =  function (NA) {

    /**
     * Load into `{variation}.specific` to object format the content of a specific variation file.
     * @public
     * @function addSpecificVariation
     * @memberOf node-atlas~NA
     * @param {string} specific - Select the specific variation associate to the current page.
     * @param {string} languageCode - Select a subdirectory for load variation (name is generaly the languageCode).
     * @param {object} variation - An object for attach common parameter. If empty, a new empty object is created.
     */
     NA.addSpecificVariation = function (specific, languageCode, variation) {
        var currentVariation = {},
            extend = NA.modules.extend;

        /* Create a global variation object if is not passed. */
        if (typeof variation !== 'undefined') {
            currentVariation = variation;
        }

        /* Load variation from languageCode directory or root directory (depend if languageCode is defined)... */
        currentVariation.specific = NA.openVariation(specific, languageCode);

        /* ...and complete empty value with value of file in root directory. */
        if (languageCode) {
            currentVariation.specific = extend(true, NA.openVariation(specific), currentVariation.specific);
        }

        return currentVariation;
    };

    return NA;
};

exports.newRender =  function (NA) {

    /**
     * Load a HTML fragment and inject variation for an async result.
     * @public
     * @function newRender
     * @memberOf node-atlas~NA
     * @param {string} templateFile - Path of file used into componentsRelativePath directory.
     * @param {object} variations - All variable used for transform variation into HTML.
     */
    NA.newRender = function (templateFile, variations) {
        var ejs = NA.modules.ejs,
            fs = NA.modules.fs,
            path = NA.modules.path;

        /* Generate asynchrone render. */
        return ejs.render(
            fs.readFileSync(path.join(NA.websitePhysicalPath, NA.webconfig.componentsRelativePath, templateFile), 'utf-8'),
            variations
        );
    };

    return NA;
};