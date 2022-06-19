import { defineConfig } from 'vitepress'

export default defineConfig({
  title: '学习资料',
  description: '前端学习资料',
  lang: 'zh-CN',
  markdown: {
    // theme: '' // dark-plus dracula-soft dracula
    toc: {
      level: [1, 2, 3, 4, 5, 6, 7]
    },
    // config: (md) => {
    //   md.use(require('markdown-it-anchor'))
    // }
  },
  lastUpdated: true,
  themeConfig: {
    outlineTitle: '目录',
    lastUpdatedText: '上次更新时间',
    // 活动匹配预计是regex字符串，我们可以使用实际的reg exp对象，因为它是可序列化的
    nav: [
      { text: '八股文', link: '/八股文' },
      { text: '笔试题', link: '/笔试题/基础API', activeMatch: '/笔试题' },
      { text: 'LeetCode', link: '/leetCode' }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/wcywxq' },
    ],
    sidebar: {
      '/guide/': sidebarGuide(),
      '/笔试题/': [
        {
          text: '基础API实现',
          items: [
            { text: '实现 ES6 的 extends 关键字', link: '/笔试题/基础API/extends' }
          ]
        },
        {
          text: '防抖和节流',
          collapsible: true,
          items: [
            { text: '防抖', link: '/笔试题/防抖和节流/防抖' },
            { text: '节流', link: '/笔试题/防抖和节流/节流' },
          ]
        },
        {
          text: '数组',
          collapsible: true,
          items: [
            { text: '数组交集、差集、并集', link: '/笔试题/数组/数组交集、差集、并集' }
          ]
        },
        {
          text: '字符串',
          collapsible: true,
          items: [
            { text: '实现字符串的 repeat 方法', link: '/笔试题/字符串/实现字符串的 repeat 方法' }
          ]
        },
      ]
    },
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2019-present Evan You'
    },
    algolia: {
      appId: 'KPHBMC5I0L',
      apiKey: '67169224e966f63222c6e89bccc5a24f',
      indexName: 'docs'
    }
  }
})

function sidebarGuide() {
  return [
    {
      text: 'Introduction',
      collapsible: true,
      items: [
        { text: 'What is VitePress?', link: '/guide/what-is-vitepress' },
        { text: 'Getting Started', link: '/guide/getting-started' },
        { text: 'Configuration', link: '/guide/configuration' },
        { text: 'Deploying', link: '/guide/deploying' }
      ]
    },
    {
      text: 'Writing',
      collapsible: true,
      items: [
        { text: 'Markdown', link: '/guide/markdown' },
        { text: 'Asset Handling', link: '/guide/asset-handling' },
        { text: 'Frontmatter', link: '/guide/frontmatter' },
        { text: 'Using Vue in Markdown', link: '/guide/using-vue' },
        { text: 'API Reference', link: '/guide/api' }
      ]
    },
    {
      text: 'Theme',
      collapsible: true,
      items: [
        { text: 'Introduction', link: '/guide/theme-introduction' },
        { text: 'Nav', link: '/guide/theme-nav' },
        { text: 'Sidebar', link: '/guide/theme-sidebar' },
        { text: 'Prev Next Link', link: '/guide/theme-prev-next-link' },
        { text: 'Edit Link', link: '/guide/theme-edit-link' },
        { text: 'Last Updated', link: '/guide/theme-last-updated' },
        { text: 'Layout', link: '/guide/theme-layout' },
        { text: 'Homepage', link: '/guide/theme-homepage' },
        { text: 'Footer', link: '/guide/theme-footer' },
        { text: 'Search', link: '/guide/theme-search' },
        { text: 'Carbon Ads', link: '/guide/theme-carbon-ads' }
      ]
    },
    {
      text: 'Migrations',
      collapsible: true,
      items: [
        {
          text: 'Migration from VuePress',
          link: '/guide/migration-from-vuepress'
        },
        {
          text: 'Migration from VitePress 0.x',
          link: '/guide/migration-from-vitepress-0'
        }
      ]
    }
  ]
}