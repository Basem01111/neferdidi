<template>
  <div class="text-center mb-[35px]">
    <h3
      :class="[
        'text-[var(--main-color-text)] tracking-widest md:tracking-[unset] text-[5.33vw] md:text-[40px] font-semibold mb-[14px]',
        classTitle
      ]"
    >
      <slot name="title" />
    </h3>
    <p
      class="mb-0 text-[var(--main-color-text-2)] md:text-[var(--main-color-text)] text-[3.47vw] md:text-[18px] font-normal px-[8vw] md:px-0"
    >
      <slot />
    </p>
  </div>
</template>

<script lang="ts" setup>
defineProps({
  classTitle: {
    type: String,
    default: "",
  },
});
</script>

<style scoped lang="scss"></style>
