const pkg = require('./package')

const nodeExternals = require('webpack-node-externals')

module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: 'Blog',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Test blog project using Nuxt.js' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons' },
      // {rel: 'stylesheet', href : "https://fonts.googleapis.com/css?family=Pangolin"}
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#FFFFFF', height: '3px' },
  
  // If you are using SPA mode - you can turn on build-in spinner by doing that
  loadingIndicator: {
    name: 'circle'
  },

  /*
  ** Global CSS
  */
  css: [
    'vuetify/src/stylus/main.styl',
    '~assets/styles/main.css'
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '@/plugins/vuetify',
    '~plugins/shared-components',
    '~plugins/date-filter'
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/axios'
  ],

  axios: {
    baseURL: 'https://nuxt-blog-d474b.firebaseio.com',
    credentials: false
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */

   cssSourceMap: false,

    extend(config, ctx) {
      
      if (ctx.isServer) {
        config.externals = [
          nodeExternals({
            whitelist: [/^vuetify/]
          })
        ]
      }
    }
  },
  transition: {
    name: 'fade',
    mode: 'out-in'
  },
  env: {
    fbAPIKey: 'AIzaSyAqu__6wn4_YxoVo1JTyUEx81jOaY9ULYw'
  }
}
