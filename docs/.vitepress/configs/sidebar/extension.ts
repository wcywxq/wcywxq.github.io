import type { DefaultTheme } from 'vitepress'

export const extensionSidebar: DefaultTheme.Config['sidebar'] = {
  '/extension/native-app': [
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
    }
  ],
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
