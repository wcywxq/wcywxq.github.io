import type { DefaultTheme } from 'vitepress'

export const nav: DefaultTheme.Config['nav'] = [
  {
    text: '前端物料',
    items: [
      {
        text: '八股文',
        link: '/material/endorsement/oop/basic-concept'
      },
      {
        text: '编程',
        items: [
          {
            text: '源码',
            link: '/material/programming/source-code/native-api/ajax'
          },
          {
            text: '业务场景',
            link: '/material/programming/business-scenarios'
          }
        ]
      },
    ]
  },
  {
    text: '算法',
    items: [
      {
        text: '基础',
        items: [
          {
            text: '数据结构',
            link: '/algorithm/base/data/array'
          },
          {
            text: '算法分类',
            link: '/algorithm/base/category/searching'
          }
        ]
      },
      {
        text: '题库',
        items: [
          {
            text: '刷题索引',
            link: '/algorithm/question-bank/brush'
          },
          {
            text: '剑指 Offer',
            link: '/algorithm/question-bank/sword-offer/lian-biao-zhong-dao-shu-di-kge-jie-dian-lcof'
          },
          {
            text: 'LeetCode',
            link: '/algorithm/question-bank/leetcode/two-sum'
          }
        ]
      }
    ]
  },
  {
    text: '扩展',
    items: [
      {
        text: '后端',
        items: [
          {
            text: 'Python',
            link: '/extension/backend/python/base'
          },
          {
            text: 'Go',
            link: '/extension/backend/go'
          },
          {
            text: 'Rust',
            link: '/extension/backend/rust'
          },
        ]
      },
      {
        text: '数据库',
        link: '/extension/database'
      },
      {
        text: 'Linux',
        link: '/extension/linux'
      }
    ]
  },
  {
    text: '面经',
    link: '/interview/internet'
  },
  {
    text: '提效工具',
    items: [
      {
        text: '软件',
        items: [
          { text: 'chrome 扩展', link: '/tools/software/chrome' },
          { text: 'vscode 配置', link: '/tools/software/vscode' },
          { text: 'webstorm 配置', link: '/tools/software/webstorm' },
          { text: 'mac 生产力', link: '/tools/software/mac' },
          { text: 'windows 生产力', link: '/tools/software/windows' },
        ]
      },
      { text: '导航网站', link: '/tools/nav' },
    ],
    // activeMatch: '^/efficiency'
  },
  {
    text: '日常',
    items: [
      {
        text: '驾考',
        link: '/daily/driving-test/subject1'
      }
    ]
  },
]
