import type { DefaultTheme } from 'vitepress'

export const endorsementSidebar: DefaultTheme.Config['sidebar'] = {
  '/endorsement': [
    {
      text: '面向对象',
      items: [
        {
          text: '基本概念',
          link: '/endorsement/oop/basic-concept'
        },
        {
          text: '设计模式',
          link: '/endorsement/oop/design-mode'
        }
      ]
    },
    {
      text: 'JS',
      items: [
        {
          text: '进程和线程',
          link: '/endorsement/js/processes-and-threads'
        },
        {
          text: '语法和数据类型',
          link: '/endorsement/js/grammar-data-types'
        },
        {
          text: '事件循环',
          link: '/endorsement/js/event-loop'
        },
      ]
    },
  ],
}
