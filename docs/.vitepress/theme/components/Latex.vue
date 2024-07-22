<template>
  <div :class="props.class" v-html="grammar"></div>
</template>

<script setup lang="ts">
import katex from 'katex'
import { useSlots } from 'vue'

const props = withDefaults(defineProps<{
  class?: string
}>(), {
  class: ''
})

const slots = useSlots()

const tex = slots.default?.()?.[0]?.children || ''

const grammar = katex.renderToString(tex as string, {
  throwOnError: false
})
</script>
