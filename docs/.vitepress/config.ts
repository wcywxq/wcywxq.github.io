import { defineConfig } from 'vitepress'
import { transformerTwoslash } from '@shikijs/vitepress-twoslash'
import UnoCSS from 'unocss/vite'
import { algoliaOptions, nav, sidebar } from './configs'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  vite: {
    plugins: [
      UnoCSS({
        rules: [
          ['text-primary', { color: '#52730d' }]
        ]
      })
    ],
  },

  title: "Galaxy",

  description: "A collection of knowledge base documents",

  markdown: {
    theme: {
      light: 'light-plus',
      dark: 'dark-plus'
    },
    toc: {
      level: [2, 3, 4, 5, 6]
    },
    lineNumbers: true,
    codeTransformers: [transformerTwoslash()]
  },

  themeConfig: {
    logo: '/logo.svg',

    editLink: {
      pattern: 'https://github.com/wcywxq/wcywxq.github.io/edit/master/docs/:path',
      text: '在 github 上编辑当前页面',
    },

    search: {
      // provider: 'local'
      provider: 'algolia',
      options: algoliaOptions
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/wcywxq/wcywxq.github.io' }
    ],

    outline: 'deep',

    nav,

    sidebar
  }
})
