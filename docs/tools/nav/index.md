---
layout: doc
outline: 2
---

<script setup>
import navData from './data'
</script>

# 前端导航

<LinkGridCard v-for="{title, items} in navData" :title="title" :items="items"/>
