export default defineNuxtConfig({
  ssr: false,
  vue: {
    // NOTE: テスト用のタグをバンドルしないための設定
    compilerOptions: {
      whitespace: 'preserve',
      nodeTransforms: [
        (node) => {
          if (node.type === 1 /* NodeTypes.ELEMENT */) {
            for (let i = 0; i < node.props.length; i++) {
              const p = node.props[i]
              if (p && p.type === 6 /* NodeTypes.ATTRIBUTE */ && p.name === 'data-test') {
                node.props.splice(i, 1)
                i--
              }
            }
          }
        },
      ],
    },
  },
  typescript: {
    typeCheck: true,
  },
  app: {
    baseURL: '/',
    buildAssetsDir: '/',
    cdnURL: './',
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
