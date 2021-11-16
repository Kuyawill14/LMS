const mix = require('laravel-mix');
//require('dotenv').config();

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

//require('laravel-mix-bundle-analyzer');

/* if (mix.isWatching()) {
    mix.bundleAnalyzer();
} */

// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

mix.webpackConfig({
    watchOptions: {
        ignored: /node_modules/
    }
});
/* module.exports = {
    watchOptions: {
      ignored: /node_modules/
    }
  }; */

// module.exports = {
//     configureWebpack: {
//         plugins: [new BundleAnalyzerPlugin()],
//         resolve: {
//             alias: {
//                 moment: 'moment/src/moment'
//             }
//         }
//     }
// }





mix.js('resources/js/app.js', 'public/js')
    .vue()
    .sass('resources/sass/app.scss', 'public/css')
    .extract(['vuetify'], 'public/js/vendor~utils-0.js')
    .extract(['vue-core-video-player'], 'public/js/vendor~utils-1.js')
    .extract(['bootstrap'], 'public/js/vendor~utils-2.js')
    .extract(['jquery'], 'public/js/vendor~utils-3.js')
    .extract(['lodash'], 'public/js/vendor~utils-4.js')
    .extract(['pusher.js'], 'public/js/vendor~utils-5.js')
    .extract(['vue'], 'public/js/vendor~utils-6.js')


if (mix.inProduction()) {
    mix.version();
}