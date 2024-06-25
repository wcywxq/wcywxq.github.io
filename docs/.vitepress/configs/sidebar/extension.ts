import type { DefaultTheme } from 'vitepress'

export const extensionSidebar: DefaultTheme.Config['sidebar'] = {
  '/extension/backend': [
    {
      text: 'Python',
      items: [
        {
          text: '1.基础',
          link: '/extension/backend/python/base'
        },
        {
          text: '2.函数',
          link: '/extension/backend/python/function'
        },
      ]
    }
  ],
  '/extension/database': [
    {
      text: '数据库',
      link: '/extension/database'
    },
  ],
  '/extension/linux': [
    {
      text: 'Linux',
      link: '/extension/linux'
    }
  ],
}
