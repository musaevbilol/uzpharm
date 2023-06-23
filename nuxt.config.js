
import messages from "./locale"
export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'senat-website',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    'ant-design-vue/dist/antd.css',
    '~/assets/scss',
    '@/assets/css/main.css',
  ],
  

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '@/plugins/antd-ui',
    {
      src: "~/plugins/vue-awesome-swiper.js",
      ssr: false
    },
    {
      src: "~/plugins/perfect-scrollbar.js",
      ssr: false
    },
    {src:"~/plugins/aos",ssr:false }
  ],
  i18n: {
    locales: [{
      code: "uz",
      name: "O'zbek"
    },
    {
      code: "ru",
      name: "Русский"
    },

    {
      code: "en",
      name: "English"
    }
    ],
    strategy: "prefix_except_default",
    defaultLocale: "en",
    vueI18n: {
      fallBackLocale: "en",
      messages
    }
  },

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    "@nuxtjs/svg",
    'nuxt-i18n'
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    postcss: {
      postcssOptions: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
      },
    },
   
  },

 

}

