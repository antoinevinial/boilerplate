var fixHeight = {

    ui: {},

    init: function init() {
        this.bindUI();
        this.bindEvents();
    },

    bindUI: function bindUI() {
        this.ui.$win    = $(window);
        this.ui.$body   = $('body');
        this.ui.$height = $('.js-fix-height');
        this.ui.$items  = $('.js-fix-height-item');
    },

    bindEvents: function bindEvents() {
        var self = this;

        // When all images are loaded, set height.
        this.ui.$body.imagesLoaded(function(e) {
            self.heightHandler();
        });

        // Reset height when window is resized.
        this.ui.$win.on('resize', $.proxy(this.heightHandler, this));
    },

    unbindEvents: function unbindEvents() {
        var self = this;

        // Reset height when window is resized.
        this.ui.$win.off('resize');
    },

    update: function update() {
        if (Object.keys(this.ui).length) {
            this.unbindEvents();
        }

        this.bindUI();
        this.bindEvents();
    },

    heightHandler: function heightHandler() {
        var self = this;

        // Loop through each element and launch function.
        $.each(this.ui.$height, function() {
            self.setHeight($(this));
        });
    },

    setHeight: function setHeight($el) {
        var self   = this,
            maxH   = 0,
            $items = $el.find('.js-fix-height-item');

        // Reset items height.
        $items.outerHeight('auto');

        // Get maxH.
        $.each($items, function() {
            var itemH = $(this).outerHeight();

            // If item height > to maxH, reset it.
            if (itemH > maxH) {
                maxH = itemH;
            }
        });

        // Set maxH on elements.
        $items.outerHeight(maxH, true);
    }

};

module.exports = fixHeight;
