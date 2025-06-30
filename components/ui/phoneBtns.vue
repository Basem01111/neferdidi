<template>
  <div class="md:hidden relative z-10">
    <!-- Btn Modal -->
    <button
      type="button"
      class="fixed bottom-[10vw] left-[30vw] font-bold w-[40vw] tracking-[0.03em] text-center text-[3.73vw] h-[12vw] rounded-[6vw] bg-[var(--main-color)] text-[#f9f9f6] leading-[12vw]"
      @click="showModal = !showModal"
    >
      申请加盟
    </button>
    <!-- Modal -->
    <Teleport to="body">
      <UiModal :show-modal="showModal" @close="showModal = false">
        <UiBoxQrLink />
      </UiModal>
    </Teleport>

    <div class="fixed right-[5.5vw] bottom-[10vw] flex flex-col gap-[3.35vw]">
      <!-- Social -->
      <a
        href="#"
        type="button"
        class="bg-transparent border-0 outline-0 rounded-[50%] w-[43.2px] h-[43.2px] absolute top-0 end-0 transition-all ease-in-out duration-300"
        :class="{ 'top-[-64vw]': socialBtns }"
      >
        <NuxtImg src="/images/global/phoneSocial1.png" class="w-full h-full" />
      </a>
      <a
        href="#"
        type="button"
        class="bg-transparent border-0 outline-0 rounded-[50%] w-[43.2px] h-[43.2px] absolute top-0 end-0 transition-all ease-in-out duration-300"
        :class="{ 'top-[-48vw]': socialBtns }"
      >
        <NuxtImg src="/images/global/phoneSocial2.png" class="w-full h-full" />
      </a>
      <a
        href="#"
        type="button"
        class="bg-transparent border-0 outline-0 rounded-[50%] w-[43.2px] h-[43.2px] absolute top-0 end-0 transition-all ease-in-out duration-300"
        :class="{ 'top-[-32vw]': socialBtns }"
      >
        <NuxtImg src="/images/global/phoneSocial3.png" class="w-full h-full" />
      </a>
      <a
        href="#"
        type="button"
        class="bg-transparent border-0 outline-0 rounded-[50%] w-[43.2px] h-[43.2px] absolute top-0 end-0 transition-all ease-in-out duration-300"
        :class="{ 'top-[-16vw]': socialBtns }"
      >
        <NuxtImg src="/images/global/phoneSocial4.png" class="w-full h-full" />
      </a>

      <!-- Contact -->
      <button
        type="button"
        class="bg-transparent border-0 outline-0 rounded-[50%] w-[43.2px] h-[43.2px] z-2"
        @click="socialBtns = !socialBtns"
      >
        <NuxtImg
          v-if="socialBtns"
          src="/images/global/phoneBtnsActive1.png"
          class="w-full h-full"
        />
        <NuxtImg
          v-else
          src="/images/global/phoneBtns1.png"
          class="w-full h-full"
        />
      </button>
      <a
        href="tel:+05890000111"
        type="button"
        class="bg-transparent border-0 outline-0 rounded-[50%] w-[43.2px] h-[43.2px] z-2"
      >
        <NuxtImg src="/images/global/phoneBtns2.png" class="w-full h-full" />
      </a>
      <a
        href="#"
        type="button"
        class="bg-transparent border-0 outline-0 rounded-[50%] w-[43.2px] h-[43.2px] z-2"
      >
        <NuxtImg src="/images/global/phoneBtns3.png" class="w-full h-full" />
      </a>
    </div>
  </div>
</template>

<script lang="ts" setup>
// Modal
const showModal = ref(false);

// Sohw social Btns
const socialBtns = ref(false);
</script>

<style scoped lang="scss"></style>
