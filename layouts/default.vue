<!-- layouts/default.vue -->
<template>
  <div class="flex flex-col min-h-screen">
    <LayoutNavbar />
    <main class="pt-[61.2px] md:pt-[81.2px]">
      <slot />
    </main>
    <LayoutFooter class="mt-auto"/>
  </div>
</template>

<script setup>
</script>

<style scoped>
</style>
