<template>
  <div
    ref="observerTarget"
    class="text-center items-center bg-[var(--main-color-bg)] md:bg-[var(--main-color-bg-2)] p-[5.7vw_0_0] md:p-[100px_0_127px]"
  >
    <!--Img  -->
    <NuxtImg
      v-if="isVisible"
      src="/images/landing/hand-footer.gif"
      class="block m-[0_auto] w-[54.05vw] md:w-[294px] md-[17.85vw] md:h-auto"
    />

    <!-- Title -->
    <h5
      class="mt-[5.7vw] md:m-[24px_0_30px] text-[var(--main-color-text)] text-[4vw] md:text-[30px] font-semibold"
    >
      每一杯古茗，<br>
      都是“Have a good day”的鼓励！
    </h5>

    <!-- Text -->
    <p class="m-0 p-[3.5vw_5.33vw_15vw] md:p-0 text-[var(--main-color-text-2)] md:text-[var(--main-color-text)] text-[3.47vw] md:text-[18px] md:font-normal leading-[5.33vw] md:leading-[28px]">
      古茗期待打造一种极致日常化的喝茶体验，日常化，绝不是快速与随便。希望
      <br class="hidden md:block">
      每一天的古茗茶饮，都能被喝出品质、细节，甚至是奇思妙想的惊喜。
    </p>
  </div>
</template>

<script lang="ts" setup>
// Handel Started Gif With Scroll
const isVisible = ref(false);
const observerTarget = ref(null);
onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      if (entries[0].isIntersecting) {
        isVisible.value = true;
        observer.disconnect();
      }
    },
    {
      threshold: 1,
    }
  );

  if (observerTarget.value) {
    observer.observe(observerTarget.value);
  }
});
</script>

<style scoped lang="scss"></style>
