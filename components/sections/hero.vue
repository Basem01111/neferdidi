<template>
  <div class="relative">
    <div class="relative">
      <!-- Large Screen -->
      <NuxtImg
        src="/images/landing/hero-section.png"
        class="w-full h-auto hidden md:block"
        
      />

      <!-- Small Screen -->
      <ClientOnly class="block md:hidden">
        <swiper-container
          ref="containerRef"
          :pagination="true"
          autoplay-delay="3500"
          autoplay-disable-on-interaction="false"
          class="h-[25.946vh]"
        >
          <swiper-slide v-for="(slide, i) in slides" :key="i">
            <NuxtImg :src="slide" class="h-[25.946vh] w-full object-cover" />
          </swiper-slide>
        </swiper-container>
      </ClientOnly>

      <!-- Text -->
      <div
        class="z-5 w-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center"
      >
        <h1
          class="mb-0 text-[6.4vw] space md:text-[48px] font-semibold md:font-semibold tracking-widest md:tracking-[unset] md:leading-[90px] text-white"
        >
          每天一杯喝不腻
        </h1>

        <p
          class="mb-0 text-[3.2vw] md:text-[24px] font-bold text-white tracking-widest md:tracking-[6px]"
        >
          ONE CUP A DAY ALWAYS ENJOY IT
        </p>
      </div>
    </div>

    <!-- Box Data -->
    <UiBoxData
      class="z-10 relative md:absolute top-[16vw] md:top-[unset] md:bottom-0 md:translate-y-[90%]"
      title="古茗茶饮"
      content="随时随地，只要你想，就可以拿起茶喝，每天一杯喝不腻，这就是2010年古茗品牌诞生的初衷。成立至今，古茗依靠超百人研发团队探寻茶饮灵感，自建辐射全国门店的仓储物流系统，通过严格、专业的质检品控确保饮品健康安全，让每一个人，都能通过喝茶享受当下，感受生活的美好。"
      :data="[
        {
          title: '15年',
          text: ['踏实经营'],
        },
        {
          title: '10亿杯',
          text: ['2023年全年卖出超'],
        },
        {
          title: '～1.35亿',
          text: ['拥有小程序会员', '（截至2024年9月30日）'],
        },
      ]"
      img="/images/landing/hand.gif"
      :btn="{
        text: '了解更多品牌历程',
        link: '/brandHistory',
      }"
    />
  </div>
</template>

<script lang="ts" setup>
// Init
const containerRef = ref(null);

// Slides
const slides = reactive([
  "/images/landing/hero-section.png",
  "/images/landing/hero-section-2.png",
]);
</script>

<style scoped lang="scss">
swiper-container {
  &::part(pagination) {
    bottom: 10vw;
    text-align: center;
  }

  &::part(bullet) {
    width: 10.8;
    height: 10.8;
    background: transparent;
    border: 2px solid white;
    opacity: 1;
    margin: 0 4px;
  }

  &::part(bullet-active) {
    width: 10.8;
    height: 10.8;
    background: transparent;
    border: 2px solid white;
    opacity: 1;
    margin: 0 4px;
    background-color: white;
  }
}
</style>
