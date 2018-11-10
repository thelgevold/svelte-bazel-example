module.exports = {
  server: {
    middleware: {
      // overrides the second middleware default with new settings
      1: require('connect-history-api-fallback')({index: '/index-prod.html', verbose: true}),
      2: require('compression')()
    }
  }
};