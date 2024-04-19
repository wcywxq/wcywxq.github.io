<script setup lang="ts">
import type { NavItem } from '@nuxt/content/dist/runtime/types'
import type { NavigationTree } from '~/packages/ui-pro/types'

const navigation = inject<Ref<NavItem[]>>('navigation')
const route = useRoute()
const { navPageFromPath } = useContentHelpers()

function flattenAsideLink(item: NavigationTree): NavigationTree {
  return {
    ...item,
    to: !item?.children?.length ? item.to : flattenAsideLink(item.children[0]).to,
    active: route.path.startsWith(item.to?.toString() || ''),
  }
}

const links = computed(() =>
  mapContentNavigation(navigation?.value || []).map(flattenAsideLink)
)

const navigationLinks = computed(() => {
  const path = `/${route.params.slug?.[0] ?? ''}` // 当前 scope 根路径
  const children = navPageFromPath(path, navigation?.value || [])?.children || []
  return mapContentNavigation(children)
})
</script>

<template>
  <UContainer>
    <UPage>
      <template #left>
        <UAside :links="links">
          <UDivider v-if="navigationLinks?.length" type="dashed" class="mb-6" />
          <UNavigationTree :links="navigationLinks" />
        </UAside>
      </template>

      <slot />
    </UPage>
  </UContainer>
</template>
