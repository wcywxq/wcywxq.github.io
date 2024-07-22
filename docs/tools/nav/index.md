---
layout-class: g-nav-layout
outline: [2, 3, 4]
---

<script setup>
import { frontendData, backendData } from './data'
</script>

<style src="./index.css"></style>

## 前端导航

<grid-card-block
  v-for="{title, items} in frontendData"
  :title="title"
  :items="items"
/>

## 后端导航

<grid-card-block
  v-for="{title, items} in backendData"
  :title="title"
  :items="items"
/>
