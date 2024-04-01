<script setup lang="ts">
const { data: page } = await useAsyncData("index", () =>
  queryContent("/").findOne()
);

useSeoMeta({
  titleTemplate: "",
  title: page.value.title,
  ogTitle: page.value.title,
  description: page.value.description,
  ogDescription: page.value.description,
});
</script>

<template>
  <div>
    <ULandingHero v-if="page.hero" v-bind="page.hero">
      <template #title>
        <MDC :value="page.hero.title" />
      </template>
    </ULandingHero>
  </div>
</template>
