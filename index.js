var cssPurge = require('css-purge');

module.exports = function (source, map) {
    this.callback(null, source, map);
    cssPurge.purgeCSS(source, {trim : true, shorten : true}, function(error, purgedCSS) {
        if (!error) {
            source = purgedCSS;
        }
    });
    return source;
};
