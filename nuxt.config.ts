import Aura from '@primeuix/themes/aura';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@nuxt/eslint',
    '@primevue/nuxt-module'
    ],
    primevue: {
      components: {
        include: ['Button', 'DataTable']
      },
      options: {
          ripple: true,
          inputVariant: 'filled',
          theme: {
              preset: Aura,
              options: {
                  prefix: 'p',
                  darkModeSelector: 'system',
                  cssLayer: false
              }
          }
      }
  }
})