// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  extends: './packages/ui-pro',
  app: {
    head: {
      meta: [
        { name: 'viewport', content: 'width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=0' }
      ]
    }
  },
  modules: [
    // '@nuxt/fonts',
    '@nuxt/content',
    '@nuxt/ui',
    '@nuxthq/studio',
    'nuxt-og-image'
  ],
  ui: {
    icons: ['heroicons', 'simple-icons', 'cib', 'ph']
  },
  // fonts: {
  //   families: [{ name: 'Nunito', provider: 'bunny' }],
  //   defaults: {
  //     weights: [400, 500, 600, 700],
  //   },
  // },
  content: {
    markdown: {
      toc: {
        depth: 5,
        searchDepth: 5
      },
      anchorLinks: {
        depth: 5
      }
    },
    highlight: {
      theme: {
        default: 'slack-ochin',
        light: 'slack-ochin', // vitesse-light
        dark: 'ayu-dark', // vitesse-dark
      },
      langs: [
        'py',
        'python',
        'go',
        'c',
        'c++',
        'java',
        'rust',
        'dart',
        'js',
        'javascript',
        'jsx',
        'json',
        'csv',
        'ts',
        'tsx',
        'vue',
        'css',
        'html',
        'bash',
        'md',
        'mdc',
        'yaml',
        'sql',
        'shell',
        'latex'
      ]
    }
  },
  hooks: {
    // Define `@nuxt/ui` components as global to use them in `.md` (feel free to add those you need)
    'components:extend': (components) => {
      const globals = components.filter((c) => ['UButton', 'UIcon'].includes(c.pascalName))

      globals.forEach((c) => c.global = true)
    }
  },
  routeRules: {
    '/api/search.json': { prerender: true },
  },
  devtools: {
    enabled: true
  },
  // typescript: {
  //   strict: false
  // }
})
