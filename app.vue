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

    <!-- Welcome Modal -->
       <!-- <Teleport to="body">
        <UiModal :style-modal="2" :show-modal="showModal" @close="showModal = false">
          <UiBoxWelcome/>
        </UiModal>
      </Teleport> -->
  </div>
</template>

<script type="ts" setup>
useSeoMeta({
  title: 'Neferdidi',
  description: 'Neferdidi',
  ogTitle: 'Neferdidi',
  ogDescription: 'Neferdidi',
})
// const showModal = ref(true);
</script>