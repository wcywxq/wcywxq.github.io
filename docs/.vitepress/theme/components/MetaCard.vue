<script setup lang="ts">
import { computed } from 'vue'
import { withBase } from 'vitepress'
import { slugify } from '@mdit-vue/shared'

import { NavLink } from '../type'

// utils tools functional
const isObject = <T>(t: T) => typeof t === 'object' && t !== null

const props = defineProps<{
  icon?: NavLink['icon']
  title?: NavLink['title']
  desc?: NavLink['desc']
  link: NavLink['link']
}>()

const formatTitle = computed(() => !props.title ? '' : slugify(props.title))

const svg = computed(() =>  isObject(props.icon) ? props.icon.svg : '')

function onError (e: Event) {
  const target = e.target as HTMLImageElement | null
  if (!target || !target.parentElement)
    return
  // 占位图
  target.src = '/logo.svg'
  // target.parentElement.style.display = 'none'
}

</script>

<template>
  <a v-if="link" class="link-card" :href="link" target="_blank" rel="noreferrer">
    <article class="flex flex-col p-[var(--galaxy-link-card-gap)] h-full text-[var(--vp-c-text-1)]">
      <div class="flex items-center">
        <div v-if="svg" class="icon" v-html="svg"></div>
        <div v-else-if="icon && typeof icon === 'string'" class="icon">
          <img
            :src="withBase(icon)"
            :alt="title"
            @error="onError"
          />
        </div>
        <h5 v-if="title" :id="formatTitle" class="overflow-hidden whitespace-nowrap overflow-ellipsis font-semibold text-base leading-[var(--galaxy-link-card-box-size)] flex-grow-1 md:text-sm">{{ title }}</h5>
      </div>
      <p v-if="desc" class="!mt-[calc(var(--galaxy-link-card-gap)-2px)] !mb-0 !mx-0 line-clamp-2 flex-grow-1 overflow-ellipsis text-xs !leading-normal text-[var(--vp-c-text-2)]">{{ desc }}</p>
    </article>
  </a>
</template>

<style lang="css" scoped>
.link-card {
  --galaxy-link-card-box-size: 40px;
  --galaxy-link-card-icon-size: 24px;
  --galaxy-link-card-gap: 12px;

  @apply link-card block border border-dashed border-[var(--vp-c-bg-soft)] rounded-lg h-full decoration-dashed bg-[var(--vp-c-bg-alt)] !transition !duration-300 !ease-in-out !no-underline hover:shadow-[var(--vp-shadow-2)] hover:border-[var(--vp-c-brand)] hover:bg-[var(--vp-c-bg)] !hover:underline !hover:decoration-dashed
}

.link-card .icon {
  @apply flex justify-center items-center mr-[calc(var(--galaxy-link-card-gap)-2px)] rounded-md w-[var(--galaxy-link-card-box-size)] h-[var(--galaxy-link-card-box-size)] font-size-[var(--galaxy-link-card-icon-size)] bg-[var(--vp-c-default-soft)] transition-colors duration-300 ease-in-out
}

.link-card .icon :deep(svg) {
  @apply fill-current w-[var(--galaxy-link-card-icon-size)]
}

.link-card .icon :deep(img) {
  @apply rounded w-[var(--galaxy-link-card-icon-size)]
}

@media (max-width: 960px) {
  .link-card {
    --galaxy-link-card-box-size: 36px;
    --galaxy-link-card-icon-size: 20px;
    --galaxy-link-card-gap: 8px;
  }
}
</style>
