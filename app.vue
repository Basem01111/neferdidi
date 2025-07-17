<template>
  <div>
    <!-- Content -->
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script type="ts" setup>
useHead({
  htmlAttrs: {
    lang: 'ar',
    dir: 'rtl',
  }
});

useSeoMeta({
  title: 'الرائيسية',
  description: 'اكتشف سحر المشروبات الصينية الأصيلة من الشاي الفاخر إلى البوبا',
  ogTitle: 'Neferdidi',
  ogDescription: 'اكتشف سحر المشروبات الصينية الأصيلة من الشاي الفاخر إلى البوبا',
})
</script>