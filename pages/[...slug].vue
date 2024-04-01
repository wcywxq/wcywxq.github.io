<script setup lang="ts">
import { withoutTrailingSlash } from "ufo";

definePageMeta({
  layout: "docs",
});

const route = useRoute();
const { docs, toc, seo } = useAppConfig();

const { data: page } = await useAsyncData(route.path, () =>
  queryContent(route.path).findOne()
);
console.log(page.value);
if (!page.value) {
  throw createError({
    statusCode: 404,
    statusMessage: "Page not found",
    fatal: true,
  });
}

const { data: surround } = await useAsyncData(`${route.path}-surround`, () =>
  queryContent()
    .where({ _extension: "md", navigation: { $ne: false } })
    .only(["title", "description", "_path"])
    .findSurround(withoutTrailingSlash(route.path))
);

useSeoMeta({
  title: page.value.title,
  ogTitle: `${page.value.title} - ${seo?.siteName}`,
  description: page.value.description,
  ogDescription: page.value.description,
});

defineOgImage({
  component: "Docs",
  title: page.value.title,
  description: page.value.description,
});

const headline = computed(() => findPageHeadline(page.value));
console.log(page.value.body?.toc?.links);
</script>

<template>
  <UPage>
    <UPageHeader :title="page.title" :links="page.links" :headline="headline">
      <!-- :description="page.description" -->
      <template #title v-if="page.url">
        <ULink
          :to="page.url"
          active-class="text-primary"
          target="_blank"
          class="transition-all duration-300 ease-in-out hover:text-primary"
        >
          {{ page.title }}
        </ULink>
      </template>
    </UPageHeader>

    <UPageBody prose>
      <ContentRenderer v-if="page.body" :value="page" />

      <div class="space-y-6">
        <UDivider type="dashed" />
        <div class="mb-4">
          <UPageLinks
            class="inline-block"
            :links="[
              {
                icon: 'i-ph-pen-duotone',
                label: 'Edit this page on GitHub',
                to: `https://github.com/${docs.github}/edit/main/docs/${page._file}`,
                target: '_blank',
              },
            ]"
          />
        </div>

        <UContentSurround
          v-if="surround?.length"
          class="mb-4"
          :surround="surround"
        />
      </div>
    </UPageBody>

    <template v-if="page.toc !== false" #right>
      <Toc :title="toc?.title" :links="page.body?.toc?.links">
        <!-- links: {
            wrapper: 'space-y-1 bg-red',
            base: 'block text-sm/6 truncate',
            active: 'text-blue font-bold',
            inactive:
              'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200',
            depth: 'ml-3',
          }, -->
        <!-- <template v-if="toc?.bottom" #bottom>
          <div
            class="hidden lg:block space-y-6"
            :class="{ '!mt-6': page.body?.toc?.links?.length }"
          >
            <UDivider v-if="page.body?.toc?.links?.length" type="dashed" />

            <UPageLinks :title="toc.bottom.title" :links="links" />
          </div>
        </template> -->
      </Toc>
    </template>
  </UPage>
</template>
