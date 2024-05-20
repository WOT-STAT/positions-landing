// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: ["@nuxtjs/i18n", '@vueuse/nuxt', "nuxt-svgo", "@nuxt/image"],
  i18n: {
    defaultLocale: 'ru',
    vueI18n: './i18n.config.ts',
    baseUrl: 'https://positions.wotstat.info',
    detectBrowserLanguage: false,
    locales: [
      {
        code: 'ru',
        iso: 'ru-RU'
      }, {
        code: 'en',
        iso: 'en-US'
      }
    ],
  },
})