<template>
  <div>
    <NuxtRouteAnnouncer />
    <!-- Loader -->
    <UiLoader />

    <!-- Content -->
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>

    <!-- Phone Btns -->
    <UiPhoneBtns />
  </div>
</template>

<script type="ts" setup>
useSeoMeta({
  title: 'Neferdidi',
  description: 'Neferdidi',
  ogTitle: 'Neferdidi',
  ogDescription: 'Neferdidi',
})
</script>