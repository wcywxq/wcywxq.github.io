<script setup lang="ts">
import type { ParsedContent } from '@nuxt/content/dist/runtime/types'

const { seo } = useAppConfig()

const { data: navigation } = await useAsyncData('navigation', () => fetchContentNavigation())
const { data: files } = useLazyFetch<ParsedContent[]>('/api/search.json', {
  default: () => [],
  server: false
})

useHead({
  link: [
    { rel: 'icon', href: '/favicon.ico' }
  ],
  htmlAttrs: {
    lang: 'en'
  }
})

useSeoMeta({
  titleTemplate: `%s - ${seo?.siteName}`,
  ogSiteName: seo?.siteName,
})

provide('navigation', navigation)
</script>

<template>
  <div>
    <NuxtLoadingIndicator />

    <AppHeader />

    <UMain>
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </UMain>

    <ClientOnly>
      <LazyUContentSearch :files="files" :navigation="navigation || []" />
    </ClientOnly>

    <UNotifications />
  </div>
</template>
