import type { DefaultTheme } from 'vitepress'

export const dailySidebar: DefaultTheme.Config['sidebar'] = {
  '/daily/driving-test': [
    {
      text: '驾考',
      items: [
        {
          text: '科目一',
          link: '/daily/driving-test/subject1'
        },
        {
          text: '科目四',
          link: '/daily/driving-test/subject4'
        },
      ]
    }
  ],
  '/daily/civil-service-exam': [
    {
      text: '公考',
      items: [
        {
          text: '行测',
          link: '/daily/civil-service-exam/administrative-aptitude-test'
        },
        {
          text: '申论',
          link: '/daily/civil-service-exam/application'
        },
      ]
    }
  ]
}
