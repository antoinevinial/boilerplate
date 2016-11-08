// Require modules.
var utils     = require('./modules/utils.js');
var fixHeight = require('./modules/fix-height.js');
var grid      = require('./modules/grid.js');

$(function() {

    // Utilitaires.
    utils.init();

    // Fix height.
    if ($('.js-fix-height').length) {
        fixHeight.init();
    }

    // Grid.
    if ($('.js-dev-grid').length) {
        grid.init();
    }

});
