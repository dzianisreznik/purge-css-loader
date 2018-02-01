var cssPurge = require('css-purge');

module.exports = function cssPurgeLoader(source) {
    cssPurge.purgeCSS(source, {trim : true, shorten : true}, (error, purgedCSS) => {
        if (!error) {
            source = purgedCSS;
        }
    });
    return source;
};
