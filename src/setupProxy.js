//setting up proxy requests to backend

const createProxyMiddleware = require('http-proxy-middleware')

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      //target rails backend
      target: 'http://localhost:8000',
      changeOrigin: true,
    })
  )
}

//This saves you from providing the whole URL in every frontend request, 
//as well as different URLs for both development and production.
