<template>
  <label
    class="block uppercase tracking-wide text-gray-700 text-sm font-bold mb-2"
  >
    {{ label }}
  </label>
</template>

<script lang="ts" setup>
defineProps({
  label: {
    type: String,
    default: "",
  },
});
</script>

<style scoped lang="scss"></style>
