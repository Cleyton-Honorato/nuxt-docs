// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  srcDir: 'src/',
  typescript: {
    strict: true
  },
  css: [
    '~/assets/css/main.css'
  ],
  app: {
    head: {
      viewport: 'width=device-width, initial-scale=1',
      title: 'Nuxt Project',
      meta: [
        { charset: 'utf-8' },
        { name: 'description', content: 'Nuxt Project with TypeScript' }
      ]
    }
  }
})
