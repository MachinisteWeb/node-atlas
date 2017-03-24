/*------------------------------------*\
    ABOUT
\*------------------------------------*/
/* jslint node: true */

/**
 * @fileOverview Progressive realtime web framework config-driven or API-driven for building easily serverless files, websites and webapps component-based and service-oriented.
 * @author {@link https://www.lesieur.name/ Bruno Lesieur}
 * @license {@link https://raw.githubusercontent.com/Haeresis/NodeAtlas/master/LICENSE GNU GENERAL PUBLIC LICENSE Version 2}
 * @module node-atlas
 * @requires {@link NA#modules.external:async}
 * @requires {@link NA#modules.external:body-parser}
 * @requires {@link NA#modules.external:cheerio}
 * @requires {@link NA#modules.external:clean-css}
 * @requires {@link NA#modules.external:commander}
 * @requires {@link NA#modules.external:compression}
 * @requires {@link NA#modules.external:cookie-parser}
 * @requires {@link NA#modules.external:css-parse}
 * @requires {@link NA#modules.external:ejs}
 * @requires {@link NA#modules.external:express}
 * @requires {@link NA#modules.external:express-session}
 * @requires {@link NA#modules.external:extend}
 * @requires {@link NA#modules.external:imagemin}
 * @requires {@link NA#modules.external:less}
 * @requires {@link NA#modules.external:less-middleware}
 * @requires {@link NA#modules.external:mkpath}
 * @requires {@link NA#modules.external:open}
 * @requires {@link NA#modules.external:pug}
 * @requires {@link NA#modules.external:socketio}
 * @requires {@link NA#modules.external:stylus}
 * @requires {@link NA#modules.external:copy-dir}
 * @requires {@link NA#modules.external:uglify-js}
 */





/*------------------------------------*\
    ALIAS
\*------------------------------------*/

var NA = require("./bin/node-atlas.js");

/* Run script with CLI. */
if (require.main === module) {
	(new NA()).start();
}

/* Run script with require as an API. */
module.exports = NA;