<template>
  <input
    class="appearance-none shadow-2xs block w-full bg-white text-gray-700 border border-[#dddddd] rounded py-3 px-4 leading-tight focus:outline-none focus:border-[var(--main-color)]"
    :type="type"
    :placeholder="placeholder"
    :value="modelValue"
    @input="$emit('update:modelValue', ($event.target as HTMLInputElement)?.value)"
  />
</template>

<script lang="ts" setup>
defineProps({
  modelValue: {
    type: String,
    default: "",
  },
  placeholder: {
    type: String,
    default: "",
  },
  type: {
    type: String,
    default: "text",
  },
});

defineEmits(["update:modelValue"]);
</script>

<style scoped lang="scss"></style>
