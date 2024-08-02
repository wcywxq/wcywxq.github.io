import type { DefaultTheme } from 'vitepress'

export const nav: DefaultTheme.Config['nav'] = [
  {
    text: '前端物料',
    items: [
      {
        text: '八股文',
        items: [
          {
            text: '编程思想',
            link: '/material/endorsement/programming-concept/oop'
          },
          {
            text: '操作系统',
            link: '/material/endorsement/os/processes-threads'
          },
          {
            text: '浏览器和网络',
            link: '/material/endorsement/browser-network/tcp'
          },
          {
            text: 'HTML 基础',
            link: '/material/endorsement/html'
          },
          {
            text: 'CSS 基础',
            link: '/material/endorsement/css/center'
          },
          {
            text: 'JS 基础',
            link: '/material/endorsement/js'
          },
          {
            text: '框架',
            link: '/material/endorsement/framework/react/fiber'
          },
          {
            text: '工程化',
            link: '/material/endorsement/engineering'
          },
          {
            text: 'TS 基础',
            link: '/material/endorsement/ts/built-in-types'
          },
          {
            text: '小程序',
            link: '/material/endorsement/mini-app'
          },
          {
            text: '性能优化',
            link: '/material/endorsement/performance-optimization'
          },
        ]
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
            link: '/material/programming/business-scenarios/promise-async/order-print-url-and-support-retry'
          },
          {
            text: 'Type-Challenges',
            link: '/material/programming/type-challenges/medium-tuple-to-union'
          }
        ]
      },
      {
        text: '书籍',
        items: [
          {
            text: 'ES6',
            link: 'https://es6.ruanyifeng.com/'
          }
        ]
      },
    ]
  },
  {
    text: '算法',
    items: [
      {
        text: '指南',
        link: 'https://www.hello-algo.com/'
      },
      {
        text: '基础',
        link: '/algorithm/base/data-type/string'
      },
      {
        text: '题库',
        link: '/algorithm/question-bank/brush'
      }
    ]
  },
  {
    text: '扩展',
    items: [
      {
        text: '原生 app',
        items: [
          {
            text: 'React Native',
            link: '/extension/native-app/react-native'
          },
          {
            text: 'Flutter',
            link: '/extension/native-app/flutter'
          },
          {
            text: 'Android',
            link: '/extension/native-app/android'
          },
          {
            text: 'IOS',
            link: '/extension/native-app/ios'
          },
        ]
      },
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
      },
      {
        text: '公考',
        link: '/daily/civil-service-exam/administrative-aptitude-test'
      }
    ]
  },
]
