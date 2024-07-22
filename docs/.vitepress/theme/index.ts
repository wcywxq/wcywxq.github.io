// .vitepress/theme/index.ts
import TwoslashFloatingVue from '@shikijs/vitepress-twoslash/client'
// import '@shikijs/vitepress-twoslash/style.css'
import mediumZoom from 'medium-zoom'
import type { EnhanceAppContext } from 'vitepress'
import { useData, useRoute } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import { h, nextTick, onMounted, watch } from 'vue'

// components
import GridCardBlock from './components/GridCardBlock.vue'
import Latex from './components/Latex.vue'

import '../style/index.css'
import 'virtual:uno.css'

export default {
  extends: DefaultTheme,
  Layout: () => {
    const props: Record<string, any> = {}
    const { frontmatter } = useData()
    // custom class
    if (frontmatter.value?.['layout-class']) {
      props.class = frontmatter.value['layout-class']
    }
    return h(DefaultTheme.Layout, props)
  },
  enhanceApp({ app }: EnhanceAppContext) {
    // components
    app.component('grid-card-block', GridCardBlock)
    app.component('Latex', Latex)

    // plugins
    app.use(TwoslashFloatingVue)
  },
  setup() {
    const route = useRoute()
    const initZoom = () => {
      mediumZoom('.main img', { background: 'var(--vp-c-bg)' })
    }
    onMounted(() => {
      initZoom()
    })
    watch(
      () => route.path,
      () => nextTick(() => initZoom())
    )
  }
}
