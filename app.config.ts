export default defineAppConfig({
  ui: {
    variables: {
      light: {
        background: '255 255 255',
        foreground: 'var(--color-gray-700)'
      },
      dark: {
        background: 'var(--color-gray-900)',
        foreground: 'var(--color-gray-200)'
      },
      header: {
        height: '4rem'
      }
    },
    icons: {
      dark: 'i-heroicons-moon-20-solid',
      light: 'i-heroicons-sun-20-solid',
      system: 'i-heroicons-computer-desktop-20-solid',
      search: 'i-heroicons-magnifying-glass-20-solid',
      external: 'i-heroicons-arrow-up-right-20-solid',
      chevron: 'i-heroicons-chevron-down-20-solid',
      hash: 'i-heroicons-hashtag-20-solid',
      menu: 'i-heroicons-bars-3-20-solid',
      close: 'i-heroicons-x-mark-20-solid',
      check: 'i-heroicons-check-circle-20-solid'
    },
    presets: {
      button: {
        primary: {
          color: 'white',
          variant: 'solid'
        },
        secondary: {
          color: 'gray',
          variant: 'ghost'
        },
        input: {
          color: 'white',
          variant: 'outline',
          ui: {
            font: '',
            color: {
              white: {
                outline: 'ring-1 ring-inset ring-gray-300 dark:ring-gray-700 hover:ring-gray-300 dark:hover:ring-gray-700 hover:bg-gray-100/50 dark:hover:bg-gray-800/50 text-gray-400 dark:text-gray-500 hover:text-gray-700 dark:hover:text-gray-200 focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400'
              }
            }
          }
        }
      }
    },
    primary: 'amber', // 琥珀色
    gray: 'slate',
    footer: {
      bottom: {
        left: 'text-sm text-gray-500 dark:text-gray-400',
        wrapper: 'border-t border-gray-200 dark:border-gray-800'
      }
    }
  },
  seo: {
    siteName: 'wcywxq\'s kbs',
  },
  header: {
    logo: {
      alt: '',
      light: '',
      dark: ''
    },
    search: true,
    colorMode: true,
    links: []
  },
  footer: {
    credits: 'Copyright © 2023',
    colorMode: false,
    links: [{
      icon: 'i-simple-icons-nuxtdotjs',
      to: 'https://nuxt.com',
      target: '_blank',
      'aria-label': 'Nuxt Website'
    }, {
      icon: 'i-simple-icons-discord',
      to: 'https://discord.com/invite/ps2h6QT',
      target: '_blank',
      'aria-label': 'Nuxt UI on Discord'
    }, {
      icon: 'i-simple-icons-x',
      to: 'https://x.com/nuxt_js',
      target: '_blank',
      'aria-label': 'Nuxt on X'
    }, {
      icon: 'i-simple-icons-github',
      to: 'https://github.com/nuxt/ui',
      target: '_blank',
      'aria-label': 'Nuxt UI on GitHub'
    }]
  },
  docs: {
    github: 'https://github.com/wcywxq'
  },
  toc: {
    title: '大纲'
  }
})
