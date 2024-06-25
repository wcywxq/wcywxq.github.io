import type { DefaultTheme } from 'vitepress'

export const interviewSidebar: DefaultTheme.Config['sidebar'] = {
  '/interview': [
    {
      items: [
        {
          text: '计算机网络',
          link: '/interview/internet'
        },
        {
          text: 'HTML',
          link: '/interview/html'
        },
        {
          text: 'CSS',
          link: '/interview/css'
        },
        {
          text: 'JS',
          link: '/interview/js'
        },
        {
          text: 'Vue',
          link: '/interview/vue'
        },
        {
          text: 'React',
          link: '/interview/react'
        },
        {
          text: 'Svelte',
          link: '/interview/svelte'
        },
        {
          text: 'Webpack',
          link: '/interview/webpack'
        },
        {
          text: 'Vite',
          link: '/interview/vite'
        },
        {
          text: '性能优化',
          link: '/interview/wpo'
        },
        {
          text: '小程序',
          link: '/interview/mini-app'
        },
        {
          text: 'Node',
          link: '/interview/node'
        }
      ]
    },
    // {
    //   text: '框架',
    //   items: [

    //   ]
    // },
    // {
    //   text: '构建工具',
    //   items: [

    //   ]
    // },
    // {
    //   text: '性能优化',
    //   link: ''
    // }
  ],
}
