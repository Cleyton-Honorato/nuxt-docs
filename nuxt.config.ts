// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  srcDir: 'src/',
  typescript: {
    strict: true
  },
  css: [
    '~/styles/main.scss'
  ],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
        },
      },
    },
  },
  app: {
    head: {
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap' },
        { rel: 'stylesheet', href: 'https://fonts.cdnfonts.com/css/felix-titling' },
        { rel: 'stylesheet', href: 'https://fonts.cdnfonts.com/css/calibri' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Cormorant:wght@400;500;600;700&display=swap' }
      ],
    }
  }
})
