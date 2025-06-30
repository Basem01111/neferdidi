<template>
  <div class="bg-[var(--main-color-bg)] relative pt-[18vw] md:pt-[180px]">
    <!-- box Data -->
    <UiBoxData
      class="z-10 relative bottom-[-4vw] md:bottom-[unset] md:translate-y-[10%]"
      style-box="2"
      title="全国门店"
      content="截至2024年9月30日，古茗茶饮已在全国开设超9700家加盟门店，覆盖浙江、福建、江西、湖南、广东、湖北、重庆、四川等17省、200+个城市。更多区域拓展正在稳步进行，敬请期待……"
      :data="[
        {
          title: '9700+家',
          text: ['加盟门店'],
        },
        {
          title: '17省',
          text: ['覆盖省份'],
        },
        {
          title: '200+个',
          text: ['分布城市'],
        },
      ]"
      img="/images/landing/iconBranches.gif"
      :btn="{
        text: '申请加盟',
        link: '/',
        notLink: true
      }"
    />

    <!-- Silder -->
    <ClientOnly>
      <swiper-container
        ref="containerRef"
        class="!m-0 !w-full"
        :grab-cursor="true"
        :loop="true"
        :pagination="true"
      >
        <swiper-slide
          v-for="(slide, i) in slides"
          :key="i"
          class="swiper-slide !rounded-[30px]"
        >
          <NuxtImg
            :src="slide"
            alt="Slide"
            class="w-full block mx-auto h-[240px] md:h-auto"
          />
        </swiper-slide>
      </swiper-container>

      <!-- Btns -->
      <button type="button" class="z-2 absolute bottom-[33px] end-[24px] cursor-pointer" @click="slideNext()">
            <NuxtImg src="/images/global/arrow-right.png" alt="Arrow" class="h-auto invert hidden md:block" width="52px" />
           </button>
           <button type="button" class="z-2 absolute bottom-[33px] start-[24px] cursor-pointer" @click="slidPrev()">
            <NuxtImg src="/images/global/arrow-left.png" alt="Arrow" class="h-auto invert hidden md:block" width="52px" />
           </button>
    </ClientOnly>
  </div>
</template>

<script lang="ts" setup>
import type { Swiper } from "swiper";

// Slides
const slides = reactive([
    "/images/landing/bransh1.jpg",
    "/images/landing/bransh2.jpg",
    "/images/landing/bransh3.jpg",
    "/images/landing/bransh4.jpg",
    "/images/landing/bransh5.jpg",
]);

const containerRef = ref<{ swiper?: Swiper } | null>(null);
let el = containerRef.value as HTMLElement & { swiper?: Swiper };
onMounted(() => {
  const interval = setInterval(() => {
    el = containerRef.value as HTMLElement & { swiper?: Swiper };

    if (el) {
      clearInterval(interval);
    }
  }, 100);
});

// Next Btn
function slideNext() {
  if (el?.swiper) {
    el.swiper.slideNext();
  }
}

// Prev Btn
function slidPrev() {
  if (el?.swiper) {
    el.swiper.slidePrev();
  }
}
</script>

<style scoped lang="scss">
swiper-container {
  &::part(pagination) {
    bottom: 44px;
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
.swiper-button-next, .swiper-rtl .swiper-button-prev {
    right: calc(-120px - 24px) !important;
}
</style>
