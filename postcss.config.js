module.exports = {
  plugins: [
    require('postcss-easy-import')({ prefix: '_' }), // keep this first
    require('postcss-url')({ url: 'inline' }), // add this so that relative image / font-face paths work inside compiled scss
    require('autoprefixer')({
      /* ...options */
    }) // so imports are auto-prefixed too
  ]
}
