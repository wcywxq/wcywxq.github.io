import { defineConfig } from 'vitepress'
import { transformerTwoslash } from '@shikijs/vitepress-twoslash'
import UnoCSS from 'unocss/vite'
import { transformerDirectives } from 'unocss'
import { algoliaOptions, nav, sidebar } from './configs'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  ignoreDeadLinks: true,
  vite: {
    resolve: {
      extensions: ['.mjs', '.js', '.mts', '.ts', '.jsx', '.tsx', '.vue', '.json']
    },
    plugins: [
      UnoCSS({
        rules: [
          ['text-primary', { color: '#52730d' }]
        ],
        theme: {
          breakpoints: {
            xs: '640px',
            sm: '768px',
            md: '960px',
            lg: '1024px',
            xl: '1280px',
            '2xl': '1536px',
          }
        },
        transformers: [transformerDirectives()]
      })
    ],
  },

  // @vitejs/plugin-vue 配置
  vue: {},

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
    codeTransformers: [transformerTwoslash()],
    container: {
      tipLabel: '提示',
      warningLabel: '注意',
      dangerLabel: '危险',
      infoLabel: '信息',
      detailsLabel: '详细信息'
    }
  },

  themeConfig: {
    logo: '/logo.svg',

    editLink: {
      pattern: 'https://github.com/wcywxq/wcywxq.github.io/edit/vitepress/docs/:path',
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
