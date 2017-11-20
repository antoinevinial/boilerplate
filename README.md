# Gulp boilerplate

This boilerplate is based on 2 main features :

1. Stylus for CSS files
2. Browserify for JS modules

It uses ES6 convention for Javascript and has polyfill for older browsers.

## Installation

1. Go to **/gulp** folder and launch *npm install*
2. When install is done, launch *gulp watch* to start coding
3. Once you're done, launch *gulp deploy* to compress all your files before pushing to production

## Important

If you want to use the live reaload feature, you have to change Browsersync proxy URL inside **/gulp/tasks/browser-syncs.js**

Feel free to change the grid settings inside **/gulp/css/partials/layout/grid** to match your designer PSD layout.