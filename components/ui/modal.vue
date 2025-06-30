<template>
  <Transition name="zoom-fade">
    <div
      v-if="showModal"
      class="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-30 flex flex-col items-center justify-center transition-all duration-400 ease-in-out"
    >
    <!-- Shadow -->
     <teleport v-if="styleModal === 2" to="body">
        <div  v-if="styleModal === 2" class="z-29 fixed top-0 left-0 w-full h-full bg-[rgba(0,0,0,.7)] transition-all duration-300 ease-in-out" />
      </teleport>
     
     <!-- Content -->
      <div
        class="bg-[var(--main-color-bg-2)] w-[80vw] md:w-[60vw] rounded-[8px] p-5 md:p-[60px_100px] border border-[var(--main-color-border-2)] "
        :class="styleModal === 2 ? '!border-0 !p-0' : ''"
      >
        <slot />
      </div>

      <!-- Btn Close -->
      <button
        type="button"
        class="bg-transparent border-0 outline-0 absolute top-2.5 end-2.5 text-[34px] w-[30px] h-[30px] leading-[30px] font-semibold block cursor-pointer text-center -rotate-[45deg]"
        :class="styleModal === 2 ? 'font-[900]' : ''"
        @click="$emit('close')"
      >
        +
      </button>
    </div>
  </Transition>
</template>

<script setup>
defineProps({
  styleModal: {
    type: Number,
    default: 1,
  },
  showModal: {
    type: Boolean,
    default: false,
  },
});

defineEmits(["close"]);
</script>

<style scoped lang="scss"></style>
