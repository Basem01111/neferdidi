// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
   head: {
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico',
      }
    ]
  },
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  css: ['@/assets/sass/main.scss'],
  modules: [
    '@nuxt/image',
    '@nuxt/eslint',
    '@nuxtjs/tailwindcss',
    '@nuxt/fonts',
    'nuxt-swiper'
  ],
  fonts: {
    provider: 'google',
    families: [
      {
        name: 'Cairo',
        weights: [100, 200, 300, 400, 500, 600, 700, 800, 900],
        display: 'swap',
        preload: true
      }
    ]
  }
})