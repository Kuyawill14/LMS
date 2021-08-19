const mix = require('laravel-mix');
require('laravel-mix-merge-manifest')


mix.js('resources/js/app.js', 'public/js')
    .vue()
    .sass('resources/sass/app.scss', 'public/css')
    .extract(['vuetify','vue-core-video-player'])
    .mergeManifest();

