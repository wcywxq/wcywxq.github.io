import type { NavLink } from '../../.vitepress/theme/type'

type NavData = {
  title: string
  items: NavLink[]
}

export default [
  {
    title: 'JavaScript 生态',
    items: [
      {
        icon: './icons/typescript.svg',
        title: 'TypeScript',
        desc: '具有类型语法的 JavaScript',
        link: 'https://www.typescriptlang.org/'
      },
      {
        icon: './icons/nodejs.svg',
        title: 'Node.js',
        desc: '一个免费、开源、跨平台的 JavaScript 运行时环境，它让开发人员能够创建服务器、Web 应用、命令行工具和脚本',
        link: 'https://nodejs.org/zh-cn/'
      },
    ]
  },
  {
    title: '前端框架&库',
    items: [
      {
        icon: 'https://zh-hans.reactjs.org/favicon.ico',
        title: 'React',
        desc: '用于构建 Web 和原生交互界面的库',
        link: 'https://zh-hans.react.dev/'
      },
      {
        icon: 'https://cn.vuejs.org/logo.svg',
        title: 'Vue',
        desc: '渐进式 JavaScript 框架',
        link: 'https://cn.vuejs.org/',
      },
      {
        icon: './icons/svelte.svg',
        title: 'Svelte',
        desc: '将声明性组件转换为精准高效更新 DOM 的 JavaScript 代码',
        link: 'https://svelte.dev/',
      },
      {
        icon: './icons/angular.svg',
        title: 'Angular',
        desc: '一个 Web 框架，使开发人员能够构建快速、可靠的应用程序',
        link: 'https://angular.dev/',
      },
      {
        icon: 'https://emberjs.com/images/ember-logo.svg',
        title: 'ember',
        desc: '一个高效、经过实战考验的 JavaScript 框架，用于构建现代 Web 应用程序',
        link: 'https://emberjs.com/',
      },
      {
        icon: 'https://preactjs.com/branding/symbol.svg',
        title: 'PReact',
        desc: '3kb 大小的 React 轻量、快速替代方案，拥有相同的现代 API',
        link: 'https://preactjs.com/',
      },
      {
        icon: './icons/solidjs.svg',
        title: 'SolidJS',
        desc: '一个用于构建用户界面，简单高效、性能卓越的 JavaScript 库',
        link: 'https://www.solidjs.com/',
      },
      {
        icon: './icons/jquery.svg',
        title: 'JQuery',
        desc: '一个快速、小型且功能丰富的 JavaScript 库，兼容性非常好',
        link: 'https://jquery.com/',
      },
      {
        icon: './icons/backbone.svg',
        title: 'Backbone.js',
        desc: '通过提供具有键值绑定和自定义事件的模型、具有丰富的可枚举函数 API 的集合、具有声明性事件处理的视图，为 Web 应用程序提供结构，并通过 RESTful JSON 接口将其全部连接到您现有的 API',
        link: 'https://backbonejs.org/',
      },
    ]
  },
  {
    title: 'SSR 框架',
    items: [
      {
        icon: 'https://nextjs.org/static/favicon/safari-pinned-tab.svg',
        title: 'Next.js',
        desc: 'React 的 Web 框架，可以创建高质量的 Web 应用程序',
        link: 'https://nodejs.org/zh-cn/'
      },
      {
        icon: 'https://nuxt.com/icon.png',
        title: 'Nuxt.js',
        desc: '一个基于 Vue.js 的通用应用框架',
        link: 'https://nuxt.com/',
      },
    ]
  },
  {
    title: '构建工具',
    items: [
      {
        icon: 'https://webpack.docschina.org/icon-square-small.85ba630cf0c5f29ae3e3.svg',
        title: 'Webpack',
        desc: '一个用于现代 JavaScript 应用程序的静态模块打包工具',
        link: 'https://webpack.js.org/'
      },
      {
        icon: 'https://cn.vitejs.dev/logo-with-shadow.png',
        title: 'Vite',
        desc: '下一代的前端工具链，为开发提供极速响应',
        link: 'https://cn.vitejs.dev/'
      },
      {
        icon: 'https://cn.rollupjs.org/rollup-logo.svg',
        title: 'Rollup',
        desc: 'JavaScript 打包器，将点滴代码编织成错综复杂的程序',
        link: 'https://cn.rollupjs.org/'
      },
      {
        icon: 'https://esbuild.github.io/favicon.svg',
        title: 'esbuild',
        desc: '速度极快的网络捆绑器',
        link: 'https://esbuild.github.io/'
      },
      {
        icon: 'https://rolldown.rs/rolldown-round.svg',
        title: 'Rolldown',
        desc: '用于 JavaScript 的基于 Rust 的快速捆绑器，同时兼容 Rollup 的 API',
        link: 'https://rolldown.rs/'
      },
      {
        icon: 'https://turbo.build/images/docs/pack/turbopack-hero-logo-light.svg',
        title: 'Turbopack',
        desc: '一个针对 JavaScript 和 TypeScript 进行优化的增量捆绑器，用 Rust 编写',
        link: 'https://turbo.build/pack/docs'
      },
      {
        icon: 'https://www.babeljs.cn/img/favicon.png',
        title: 'Babel',
        desc: '一个 JavaScript 编译器',
        link: 'https://www.babeljs.cn',
      },
      {
        icon: 'https://swc.rs/logo.png',
        title: 'SWC',
        desc: '基于 Rust 的 Web 平台，是一种 JavaScript 编译器',
        link: 'https://swc.rs',
      },
    ]
  },
  {
    title: '打包工具 & 项目管理',
    items: [
      {
        icon: 'https://pnpm.io/zh/img/pnpm-no-name-with-frame.svg',
        title: 'pnpm',
        desc: '快速的，节省磁盘空间的包管理工具',
        link: 'https://pnpm.io/zh/'
      },
      {
        icon: 'https://turbo.build/images/docs/repo/repo-hero-logo-light.svg',
        title: 'Turborepo',
        desc: '一个用于 JavaScript 和 TypeScript 代码库的高性能构建系统',
        link: 'https://turbo.build/repo/docs'
      },
    ]
  },
  {
    title: 'React 社区',
    items: [
      {
        icon: 'https://reactrouter.com/favicon-light.png',
        title: 'React Router',
        desc: 'React 的声明式路由',
        link: 'https://reactrouter.com/',
      },
      {
        icon: 'https://img.alicdn.com/tfs/TB1YHEpwUT1gK0jSZFhXXaAtVXa-28-27.svg',
        title: 'UmiJS',
        desc: '插件化的企业级前端应用框架',
        link: 'https://umijs.org/',
      },
      {
        icon: 'https://gw.alipayobjects.com/zos/rmsportal/rlpTLlbMzTNYuZGGCVYM.png',
        title: 'Ant Design',
        desc: '一套企业级 UI 设计语言和 React 组件库',
        link: 'https://ant.design/',
      },
      {
        icon: './icons/arco.svg',
        title: 'arco.design',
        desc: '字节跳动出品的企业级设计系统',
        link: 'https://arco.design/',
      },
      {
        icon: './icons/mui.svg',
        title: 'MUI',
        desc: '更快且直观的 React UI',
        link: 'https://mui.com/'
      },
      {
        icon: './icons/shadcn-ui.svg',
        title: 'shadcn/ui',
        desc: '高度灵活的 headless 组件库',
        link: 'https://ui.shadcn.com/',
      },
      {
        icon: 'https://gw.alipayobjects.com/zos/bmw-prod/69a27fcc-ce52-4f27-83f1-c44541e9b65d.svg',
        title: 'Ant Design Mobile',
        desc: '构建移动 WEB 应用程序的 React 组件库',
        link: 'https://mobile.ant.design/',
      },
      {
        icon: 'https://docs.pmnd.rs/apple-touch-icon.png',
        title: 'Zustand',
        desc: '一个小型、快速、可扩展的 React 状态管理解决方案',
        link: 'https://docs.pmnd.rs/zustand/getting-started/introduction/',
      },
      {
        icon: 'https://cn.redux.js.org/img/redux.svg',
        title: 'Redux',
        desc: 'JavaScript 应用的状态容器，提供可预测的状态管理',
        link: 'https://cn.redux.js.org/',
      },
      {
        icon: 'https://zh.mobx.js.org/assets/mobx.png',
        title: 'Mobx',
        desc: '一个小型、快速、可扩展的 React 状态管理解决方案',
        link: 'https://zh.mobx.js.org/',
      },
      {
        icon: 'https://ahooks.js.org/simple-logo.svg',
        title: 'ahooks',
        desc: '一套高质量可靠的 React Hooks 库',
        link: 'https://ahooks.js.org/zh-CN/',
      },
      {
        icon: 'https://valtio.pmnd.rs/favicon.ico',
        title: 'Valtio',
        desc: '使 React 和 Vanilla 的代理状态变得简单',
        link: 'https://valtio.pmnd.rs/',
      },
      {
        icon: 'https://jotai.org/favicon.svg',
        title: 'Jotai',
        desc: 'React 的原始和灵活状态管理',
        link: 'https://jotai.org/',
      },
    ]
  },
  {
    title: 'Vue 社区',
    items: [
      {
        icon: 'https://router.vuejs.org/logo.svg',
        title: 'Vue Router',
        desc: 'Vue.js 的官方路由，为 Vue.js 提供富有表现力、可配置的、方便的路由',
        link: 'https://router.vuejs.org/zh/',
      },
      {
        icon: 'https://pinia.vuejs.org/logo.svg',
        title: 'Pinia',
        desc: '符合直觉的 Vue.js 状态管理库，类型安全、可扩展性以及模块化设计',
        link: 'https://pinia.vuejs.org/zh/'
      },
      {
        icon: 'https://vuex.vuejs.org/logo.png',
        title: 'Vuex',
        desc: '一个专为 Vue.js 应用程序开发的状态管理模式 + 库',
        link: 'https://vuex.vuejs.org/zh/',
      },
      {
        icon: 'https://cn.vitest.dev/logo-shadow.svg',
        title: 'Vitest',
        desc: '下一代测试框架，一个很快的 Vite 原生的测试框架',
        link: 'https://cn.vitest.dev/'
      },
      {
        icon: 'https://vueuse.org/favicon.svg',
        title: 'VueUse',
        desc: 'Vue Composition API 的常用工具集',
        link: 'https://vueuse.org/',
      },
      {
        icon: 'https://element-plus.org/images/element-plus-logo-small.svg',
        title: 'Element Plus',
        desc: '基于 Vue 3，面向设计师和开发者的组件库',
        link: 'https://element-plus.org/',
      },
      {
        icon: 'https://www.naiveui.com/assets/naivelogo-BdDVTUmz.svg',
        title: 'Naive UI',
        desc: '一个 Vue3 的组件库，主题可调，用 TypeScript 写的，很快',
        link: 'https://www.naiveui.com/zh-CN/os-theme/',
      },
      {
        icon: './icons/shadcn-vue.svg',
        title: 'shadcn-vue',
        desc: '高度灵活的 headless 组件库，shadcn/ui vue 版',
        link: 'https://www.shadcn-vue.com/',
      },
      {
        icon: 'https://fastly.jsdelivr.net/npm/@vant/assets/logo.png',
        title: 'Vant',
        desc: '轻量、可定制的移动端 Vue 组件库',
        link: 'https://vant-ui.github.io/vant/',
      },
      // 移动端
      {
        icon: 'https://www.antdv.com/assets/logo.1ef800a8.svg',
        title: 'Ant Design Vue',
        desc: 'Ant Design 的 Vue 实现，开发和服务于企业级后台产品',
        link: 'https://antdv.com/',
      },
    ]
  },
  {
    title: 'NodeJS 框架',
    items: [
      {
        icon: 'https://expressjs.com/images/favicon.png',
        title: 'express',
        desc: '基于 Node.js 平台，快速、开放、极简的 Web 开发框架',
        link: 'https://expressjs.com/',
      },
      {
        icon: './icons/koa.svg',
        title: 'koa',
        desc: '下一代 Web node.js 框架',
        link: 'https://koajs.com/'
      },
      {
        icon: 'https://nestjs.com/logo-small-gradient.76616405.svg',
        title: 'nest',
        desc: '一个先进的 Node.js 框架，用于构建高效、可靠和可扩展的服务器端应用程序',
        link: 'https://nestjs.com/'
      },
      {
        icon: 'https://nestjs.bootcss.com/img/nest-big-logo.png',
        title: 'nest 中文',
        desc: '用于构建高效、可扩展的 Node.js 服务器端应用程序的开发框架',
        link: 'https://nestjs.bootcss.com/'
      },
    ]
  },
  {
    title: 'CSS 社区',
    items: [
      {
        icon: 'https://postcss.org/assets/postcss-rBJUTTlj.svg',
        title: 'PostCSS',
        desc: '一个用 JavaScript 转换 CSS 的工具',
        link: 'https://postcss.org',
      },
      {
        icon: 'https://sass-lang.com/assets/img/logos/logo.svg',
        title: 'sass',
        desc: '一个成熟，稳定，功能强大的专业级 CSS 扩展语言',
        link: 'https://sass-lang.com',
      },
      {
        icon: 'https://www.stylus-lang.cn/img/stylus-logo.png',
        title: 'stylus',
        desc: '富于表现力、动态的、健壮的 CSS',
        link: 'https://www.stylus-lang.cn/',
      },
      {
        icon: 'https://lesscss.org/public/img/less_logo.png',
        title: 'less',
        desc: '它是 CSS，只是多了一点东西',
        link: 'https://lesscss.org/',
      },
      {
        icon: './icons/tailwindcss.svg',
        title: 'TailwindCSS',
        desc: '一个功能类优先的 CSS 框架',
        link: 'https://www.tailwindcss.cn',
      },
      {
        icon: 'https://unocss.dev/logo.svg',
        title: 'UnoCSS',
        desc: '即时按需原子 CSS 引擎',
        link: 'https://unocss.dev/',
      },
      {
        icon: './icons/styled-components.svg',
        title: 'styled components',
        desc: '用于 <Component> 时代的 CSS，使用快速的、强大的输入和灵活性来设计你的样式',
        link: 'https://styled-components.com/'
      },
      {
        icon: 'https://emotion.sh/logo-96x96.png',
        title: 'Emotion',
        desc: '一个专为使用 JavaScript 编写 css 样式而设计的库',
        link: 'https://emotion.sh/docs/introduction'
      },
      {
        icon: 'https://stylexjs.com/img/stylex-logo-small.svg',
        title: 'stylex',
        desc: '强大的造型系统',
        link: 'https://stylexjs.com/'
      },
      {
        icon: 'https://www.react-spring.dev/spring-icon.png',
        title: 'react-spring',
        desc: '借助自然流畅的动画，您将提升您的用户界面和交互效果。让您的应用程序变得栩栩如生从未如此简单',
        link: 'https://www.react-spring.dev/'
      },
      {
        icon: 'https://www.framer.com/images/favicons/favicon.png',
        title: 'Framer Motion',
        desc: '一个准备就绪的 React 动画库',
        link: 'https://www.framer.com/motion/'
      },
    ],
  },
  {
    title: '站点生成器',
    items: [
      {
        icon: 'https://cn.vuejs.org/logo.svg',
        title: 'VitePress',
        desc: '由 Vite 和 Vue 驱动的静态网站生成器',
        link: 'https://vitepress.dev/',
      },
      {
        icon: 'https://docusaurus.io/zh-CN/img/docusaurus.ico',
        title: 'Docusaurus',
        desc: '基于 React 的静态网站生成器',
        link: 'https://docusaurus.io/zh-CN/',
      },
      {
        icon: 'https://astro.build/favicon.svg',
        title: 'Astro',
        desc: '一个现代化的轻量级静态站点生成器',
        link: 'https://astro.build/',
      },
      {
        icon: 'https://rspress.dev/rspress-logo.webp',
        title: 'Rspress',
        desc: '快如闪电的静态站点生成器',
        link: 'https://rspress.dev/zh/index',
      },
      {
        icon: 'https://gw.alipayobjects.com/zos/bmw-prod/d3e3eb39-1cd7-4aa5-827c-877deced6b7e/lalxt4g3_w256_h256.png',
        title: 'dumi',
        desc: '基于 Umi 为组件研发而生的静态站点框架',
        link: 'https://d.umijs.org/',
      },
      {
        icon: 'https://cn.vuejs.org/logo.svg',
        title: 'VuePress',
        desc: 'Vue 驱动的静态网站生成器',
        link: 'https://vuepress.vuejs.org/zh/',
      },
    ],
  },
  {
    title: '图标库',
    items: [
      {
        icon: 'https://img.alicdn.com/imgextra/i4/O1CN01Z5paLz1O0zuCC7osS_!!6000000001644-55-tps-83-82.svg',
        title: 'iconfont',
        desc: '国内功能很强大且图标内容很丰富的矢量图标库，提供矢量图标下载、在线存储、格式转换等功能',
        link: 'https://www.iconfont.cn/',
      },
      {
        icon: 'https://lf1-cdn2-tos.bytegoofy.com/bydesign/iconparksite/logo.svg',
        title: 'IconPark 图标库',
        desc: 'IconPark图标库是一个通过技术驱动矢量图标样式的开源图标库，可以实现根据单一 SVG 源文件变换出多种主题， 具备丰富的分类、更轻量的代码和更灵活的使用场景；致力于构建高质量、统一化、可定义的图标资源，让大多数人都能够选择适合自己的风格图标',
        link: 'https://iconpark.oceanengine.com/official/',
      },
    ],
  },
  {
    title: '常用工具',
    items: [
      {
        icon: 'https://devtool.tech/logo.svg',
        title: '开发者武器库',
        desc: '开发者武器库，做开发者最专业最好用的专业工具箱',
        link: 'https://devtool.tech',
      },
      {
        icon: 'https://tool.lu/favicon.ico',
        title: '在线工具',
        desc: '开发人员的工具箱',
        link: 'https://tool.lu',
      },
      // TODO
      {
        icon: 'https://caniuse.com/img/favicon-128.png',
        title: 'Can I use',
        desc: '前端 API 兼容性查询',
        link: 'https://caniuse.com',
      },
      {
        icon: 'https://tinypng.com/images/apple-touch-icon.png',
        title: 'TinyPNG',
        desc: '在线图片压缩工具',
        link: 'https://tinypng.com',
      },
      {
        icon: '',
        title: 'Json 中文网',
        desc: 'JSON 在线解析及格式化验证',
        link: 'https://www.json.cn',
      },
    ],
  },
  {
    title: '可视化库',
    items: [
      {
        icon: 'https://echarts.apache.org/zh/images/favicon.png',
        title: 'ECharts',
        desc: '一个基于 JavaScript 的开源可视化图表库',
        link: 'https://echarts.apache.org/zh/index.html',
      },
      {
        icon: 'https://gw.alipayobjects.com/zos/antfincdn/nc7Fc0XBg5/8a6844f5-a6ed-4630-9177-4fa5d0b7dd47.png',
        title: 'AntV',
        desc: '蚂蚁企业级数据可视化解决方案，让人们在数据世界里获得视觉化思考能力',
        link: 'https://antv.antgroup.com/',
      },
      {
        icon: 'https://d3js.org/logo.svg',
        title: 'D3.js',
        desc: '用于定制数据可视化的 JavaScript 库',
        link: 'https://d3js.org',
      },
      {
        icon: 'https://www.chartjs.org/favicon.ico',
        title: 'Chart.js',
        desc: '适用于现代 Web 的简单而灵活的 JavaScript 图表库',
        link: 'https://www.chartjs.org',
      },
      {
        icon: 'https://threejs.org/files/favicon.ico',
        title: 'Three.js',
        desc: 'JavaScript 3d 库',
        link: 'https://threejs.org',
      },
    ],
  },
  {
    title: '小程序社区',
    items: [
      {
        icon: 'https://res.wx.qq.com/a/wx_fed/assets/res/OTE0YTAw.png',
        title: '微信小程序文档',
        desc: '微信小程序官方开发者文档',
        link: 'https://developers.weixin.qq.com/miniprogram/dev/framework/',
      },
      {
        icon: 'https://docs.taro.zone/img/logo-taro.png',
        title: 'Taro',
        desc: '多端统一开发解决方案',
        link: 'https://docs.taro.zone/docs/',
      },
      {
        icon: 'https://web-assets.dcloud.net.cn/unidoc/zh/icon.png',
        title: 'uni-app',
        desc: '一个使用 Vue.js 开发所有前端应用的框架',
        link: 'https://uniapp.dcloud.net.cn',
      },
      {
        icon: 'https://mpxjs.cn/favicon.ico',
        title: 'Mpx',
        desc: '增强型跨端小程序框架',
        link: 'https://mpxjs.cn',
      },
    ],
  },
  {
    title: '优质项目',
    items: [
      {
        icon: '',
        title: '前端思维导图',
        desc: '用思维导图的方式总结个人所学知识',
        link: 'https://mindmap.fe-mm.com',
      },
      {
        icon: 'https://qwerty.fe-mm.com/apple-touch-icon.png',
        title: 'Qwerty Learner',
        desc: '为键盘工作者设计的单词记忆与英语肌肉记忆锻炼软件',
        link: 'https://qwerty.fe-mm.com',
      },
      {
        icon: '',
        title: 'mmPlayer',
        desc: 'mmPlayer 在线音乐播放器',
        link: 'https://netease-music.fe-mm.com',
      },
    ],
  },
  {
    title: '权威资料集合',
    items: [
      {
        icon: 'https://developer.mozilla.org/apple-touch-icon.6803c6f0.png',
        title: 'MDN | Web 开发者指南',
        desc: 'Mozilla 的开发者平台，提供了大量关于 HTML、CSS 和 JavaScript 的详细文档以及广泛的 Web API 参考资',
        link: 'https://developer.mozilla.org/zh-CN',
      },
      {
        icon: 'https://es6.ruanyifeng.com/images/cover_thumbnail_3rd.jpg',
        title: 'ES6 入门教程 | ECMAScript 6 入门',
        desc: '一本开源的 JavaScript 语言教程，全面介绍 ECMAScript 6 新引入的语法特性',
        link: 'http://es6.ruanyifeng.com',
      },
    ],
  },
  {
    title: '社区',
    items: [
      {
        title: 'Github',
        icon: './icons/github.svg',
        desc: '一个面向开源及私有软件项目的托管平台',
        link: 'https://github.com',
      },
      {
        icon: './icons/stack-overflow.svg',
        title: 'Stack Overflow',
        desc: '全球最大的技术问答网站',
        link: 'https://stackoverflow.com',
      },
      {
        title: '稀土掘金',
        icon: 'https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/6c61ae65d1c41ae8221a670fa32d05aa.svg',
        desc: '面向全球中文开发者的技术内容分享与交流平台',
        link: 'https://juejin.cn',
      },
    ],
  },
  {
    title: '摸鱼集合',
    items: [
      {
        icon: 'https://momoyu.cc/icon-192.png',
        title: '摸摸鱼热榜',
        desc: '聚合每日热门、搞笑、有趣、适合摸鱼的资讯',
        link: 'https://momoyu.cc',
      },
    ],
  },
] as NavData[]
