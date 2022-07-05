const mix = require('laravel-mix')

require('./nova.mix')

mix.setPublicPath('dist')
  .js('resources/js/field.js', 'js').vue({ version: 3 })
  .webpackConfig({
    externals: {
      vue: 'Vue',
    },
    output: {
      uniqueName: 'vendor/novacharcountedfields',
    }
  })
  .sass('resources/sass/field.scss', 'css')