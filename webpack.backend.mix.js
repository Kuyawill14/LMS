const mix = require('laravel-mix');
require('laravel-mix-merge-manifest')



mix.js('resources/js/backend.js', 'public/backend/js')
    .extract(['jquery'])
    .mergeManifest();
    



    
