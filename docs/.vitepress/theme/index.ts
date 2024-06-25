// .vitepress/theme/index.ts
import TwoslashFloatingVue from '@shikijs/vitepress-twoslash/client'
import '@shikijs/vitepress-twoslash/style.css'
import mediumZoom from 'medium-zoom'
import type { EnhanceAppContext } from 'vitepress'
import { useRoute } from 'vitepress'
import Theme from 'vitepress/theme'
import { nextTick, onMounted, watch } from 'vue'

// theme css
import '../style/font.css'
// import '../style/main.css'
import '../style/media-zoom.css'
import '../style/vars.css'
// unocss config
import 'virtual:uno.css'

export default {
  extends: Theme,
  enhanceApp({ app }: EnhanceAppContext) {
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
