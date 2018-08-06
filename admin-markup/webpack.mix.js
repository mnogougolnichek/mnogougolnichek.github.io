let mix = require('laravel-mix');
const glob = require('glob');
/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

// const isProduction = process.env.NODE_ENV === 'production';
//
// const isVendor = (module) => {
//     // this assumes your vendor imports exist in the node_modules directory
//     return module.context && module.context.indexOf("node_modules") !== -1;
// };

const files = pattern => glob.sync(pattern, { cwd: 'resources/assets' });

const globify = (pattern, out, mixFunctionName) => {
    files(pattern).forEach((path) => {
        mix[mixFunctionName](`resources/assets/${path}`, out);
    })
};

// Load Javascript
globify('js/pages/*.js', 'js/pages', 'js');

// // Load Sass
globify('sass/pages/*.scss', 'css/pages', 'sass');

mix.copyDirectory('resources/assets/img', 'public/img');

mix.js('resources/assets/js/app.js', 'public/js')
   .sass('resources/assets/sass/app.scss', 'public/css');
