export default defineNuxtConfig({
  ssr: false,
  typescript: {
    typeCheck: true,
  },
  app: {
    head: {
      charset: 'utf-8',
      htmlAttrs: {
        lang: 'ja',
      },
      title: 'vue-sample-tskaigi',
      meta: [{ name: 'viewport', content: 'width=device-width,initial-scale=1.0,maximum-scale=1.0' }],
    },
  },
  runtimeConfig: {
    public: {
      environment: process.env.ENV || 'local',
    },
  },
  modules: ['@pinia/nuxt', '@nuxt/devtools'],
  vue: {
    compilerOptions: {
      whitespace: 'preserve',
    },
  },
  vite: {
    $client: {
      build: {
        rollupOptions: {
          watch: {
            include: '/**/*',
          },
        },
      },
    },
  },
  telemetry: false,
  devtools: {
    enabled: process.env.ENV === 'local',
  },
})
