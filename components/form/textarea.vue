<template>
  <textarea
class="appearance-none block w-full shadow-2xs bg-white text-gray-700 border border-[#dddddd] rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-[var(--main-color)]"
    :rows="rows"
    :placeholder="placeholder"
    :value="modelValue"
    @input="$emit('update:modelValue', ($event.target as HTMLTextAreaElement).value)"
  ></textarea>
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
  rows: {
    type: String,
    default: "5",
  },
});

defineEmits(["update:modelValue"]);
</script>

<style scoped lang="scss"></style>
