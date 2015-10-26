//import modules
var oo = require('../libs/oo.js');
var moduleExemple = require('./modules/module.js');

(function ($, oo, win) {

    $(function () {

        // oo.utils.placeholder();
        // oo.utils.externalLinks();
        moduleExemple();

    });

})(jQuery, oo, window);
