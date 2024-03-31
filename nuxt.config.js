import config from './src/configs'
export default {
  srcDir: 'src/',
  buildDir: 'dist',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - Sonono',
    title: 'Sonono',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Montserrat:wght@700;800&family=Rubik:wght@300;400;500;600;700;800&display=swap',
      },
      ...config.icons.map((href) => ({ rel: 'stylesheet', href })),
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/scss/main.scss', // main theme
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [{ src: '~/plugins/route-utils.js' }],

  // Auto import components: https://go.nuxtjs.dev/config-components
  // components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/vuetify
    [
      '@nuxtjs/vuetify',
      {
        optionsPath: '@/configs/vuetify.js',
        treeShake: false,
        defaultAssets: {
          font: false,
        },
      },
    ],
  ],

  publicRuntimeConfig: {
    recaptcha: {
      /* reCAPTCHA options */
      version: 3,
      // hideBadge: true,
      siteKey: process.env.RECAPTCHA_SITE_KEY,
    },
    RECAPTCHA_SECRET_KEY: process.env.RECAPTCHA_SECRET_KEY,
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
    '@nuxtjs/recaptcha',
    ['vue-scrollto/nuxt', { duration: 1000 }],
    [
      'nuxt-i18n',
      {
        detectBrowserLanguage: {
          useCookie: true,
          cookieKey: 'i18n_redirected',
          onlyOnRoot: true,
        },
        strategy: 'prefix',
        defaultLocale: 'de',
        vueI18n: {
          fallbackLocale: 'de',
        },
        lazy: true,
        langDir: 'locales/',
        locales: [
          {
            code: 'de',
            file: 'de.json',
            iso: 'de-CH',
            isCatchallLocale: true,
          },
          {
            code: 'en',
            file: 'en.json',
            iso: 'en-US',
          },
        ],
      },
    ],
  ],

  recaptcha: {
    hideBadge: false, // Hide badge element (v3 & v2 via size=invisible)
  },

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
