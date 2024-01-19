// import dotenv from 'dotenv'
import $ from 'jquery';

// const envPath = `env/.env.${process.env.NODE_ENV}`
// dotenv.config({path:envPath})

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  ssr: false,
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "~/assets/_colors.scss" as *;'
        }
      }
    }
  },
  css: [
    '~/assets/css/main.css',
    '~/assets/scss/main.scss',
    'animate.css'
  ],
  app: {
    head: {
      link: [{ rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css' }],
      script:[
          // { src: 'https://static.nid.naver.com/js/naveridlogin_js_sdk_2.0.2.js' },
          // { src: 'https://developers.kakao.com/sdk/js/kakao.min.js' },
          // { src: '../assets/js/naveridlogin_js_sdk_2.0.2.js' },
          // { src: '../assets/js/kakao.min.js' },
          // { src: '../assets/js/test.js'}
          { src: '/kakao.min.js' },
          { src: '/naveridlogin_js_sdk_2.0.2.js' },
          { src: '/jquery-3.7.1.js' },

      ],
    },
  },
  modules: [
    '@nuxt/ui',
    ["@pinia/nuxt", { autoImports: ["defineStore"] }],
  ],
  imports: {
    dirs: ["stores"],
  },
  routeRules:{
    '/**': { ssr: false },
    '/api/**': {
      proxy: { to: "http://192.168.100.42:25500/api/**", },
    },
  },
  runtimeConfig:{
    public:{
      // apiKey : "3A3517DF05374F529E7EEFC7A60523B0",
      apiKey : process.env.API_KEY,
      loginKey : process.env.LOGIN_KEY,
    },
  },


})
