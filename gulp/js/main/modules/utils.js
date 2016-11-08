var utils = {

    ui: {},

    init: function init() {
        this.bindUI();
        this.bindEvents();
    },

    bindUI: function bindUI() {
        this.ui.$win  = $(window);
        this.ui.$body = $('body');
    },

    bindEvents: function bindEvents() {
        var self = this;

        // Events for scroll.
        this.ui.$win.on('scroll', this.throttle(function(event) {
            self.ui.$body.trigger('page:scrollDebounced', self.ui.$win.scrollTop());
        }, 10));

        this.ui.$win.on('scroll', function(event) {
            self.ui.$body.trigger('page:scroll', self.ui.$win.scrollTop());
        });
    },

    throttle: function throttle(callback, limit) {
        var wait = false;                  // Initially, we're not waiting
        return function () {               // We return a
            if (!wait) {
                callback.call();           // Execute users function
                wait = true;               // Prevent future invocations
                setTimeout(function () {   // After a period of time
                    wait = false;          // And allow future invocations
                }, limit);
            }
        }
    }
};

module.exports = utils;

