const mix = require('laravel-mix')
require('laravel-mix-svelte')

require('laravel-mix-string-replace')


mix.js('resources/js/app.js', 'public/js/app.js')
    .stringReplace({
        test: /_app\.js$/,
        loader: 'string-replace-loader',
        options: {
            search: 'ADDRESS',
            replace: process.env.address,
        }
    })
    .svelte()