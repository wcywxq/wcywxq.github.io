<script setup lang="ts">
import { computed } from 'vue'
import { slugify } from '@mdit-vue/shared'
import type { NavLink } from '../type'
import MetaCard from './MetaCard.vue'

const props = defineProps<{
  title: string
  items: NavLink[]
}>()

const formatTitle = computed(() => slugify(props.title))
</script>

<template>
  <h3 v-if="title" :id="formatTitle" tabindex="-1">
    {{ title }}
    <a class="header-anchor" :href="`#${formatTitle}`" aria-hidden="true"></a>
  </h3>
  <div class="grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-4 grid-flow-row-dense justify-center">
    <MetaCard
      v-for="{ icon, title, desc, link } in items"
      :key="link"
      :icon="icon"
      :title="title"
      :desc="desc"
      :link="link"
    />
  </div>
</template>

<style lang="css" scoped>
/* @each $media, $size in (500px: 140px, 640px: 155px, 768px: 175px, 960px: 200px, 1440px: 240px) {
  @media (min-width: $media) {
    .m-nav-links {
      grid-template-columns: repeat(auto-fill, minmax($size, 1fr));
    }
  }
} */

@media (min-width: 960px) {
  .m-nav-links {
    --m-nav-gap: 20px;
  }
}
</style>
