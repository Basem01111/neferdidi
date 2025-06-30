// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  css: ['@/assets/sass/fonts.scss','@/assets/sass/main.scss'],
  modules: [
    '@nuxt/image',
    '@nuxt/eslint',
    '@nuxtjs/tailwindcss',
    'nuxt-swiper'
  ]
})