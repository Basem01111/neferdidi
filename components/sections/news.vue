<template>
  <div
    class="bg-[var(--main-color-bg-2)] relative py-[40px] md:py-[80px]"
  >
  <UiContainer>
    <!-- Title -->
    <TitlesTitleAndDesc class="!mb-4 md:!mb-[35px]" class-title="!mb-1 md:!mb-[14px]">
      <template #title> أشهر المنتجات </template>
        منتجاتنا المختارة لك
    </TitlesTitleAndDesc>

    <!-- Large Screen -->
    <div class="relative">
      <!-- Silder -->
      <ClientOnly>
        <swiper-container
        ref="containerRef"
        class="!m-0 !max-w-full !w-full !p-[0_8.5%_0] md:!p-[0_4%_0]"
        :grab-cursor="true" 
        :loop="true"
          dir="rtl"
        :pagination="true"
        >
          <swiper-slide
            v-for="(slide, i) in slides"
            :key="i"
            class="swiper-slide !rounded-[30px]"
          >
            <NuxtImg :src="slide.slide" alt="Slide" class="w-[90%] block mx-auto h-auto rounded-[30px]" />
            <NuxtImg :src="slide.img" alt="Drink" class="img" />
          </swiper-slide>
        </swiper-container>

        <!-- Btns -->
           <button type="button" class="z-2 absolute top-1/2 -translate-y-1/2 end-[0] cursor-pointer" @click="slideNext()">
            <Icon icon="ei:arrow-left" class="w-[35px] md:w-[55px] h-[35px] md:h-[55px]" />
           </button>
           <button type="button" class="z-2 absolute top-1/2 -translate-y-1/2 start-[0] cursor-pointer" @click="slidPrev()">
            <Icon icon="ei:arrow-right" class="w-[35px] md:w-[55px] h-[35px] md:h-[55px]" />
           </button>
      </ClientOnly>
    </div>
  </UiContainer>
  </div>
</template>

<script lang="ts" setup>
import type { Swiper } from "swiper";
import { Icon } from "@iconify/vue";

// Slides
const slides = reactive([
  {
    slide: "/images/landing/slideNews1.jpg",
    img: "/images/landing/news1.png",
    title:'当季新品',
    desc:'精选云南夏黑葡萄，饱满鲜甜、脆爽无籽，颗颗手剥让你尝得到鲜甜爆汁',
  },
  {
    slide: "/images/landing/slideNews2.jpg",
    img: "/images/landing/news2.png",
    title:'果茶系列',
    desc:'精选当季杨梅，鲜爽爆汁，酸甜生津',
  },
  {
    slide: "/images/landing/slideNews3.jpg",
    img: "/images/landing/news3.png",
    title:'椰椰系列',
    desc:'夏日神仙水，椰椰新升级',
  },
  {
    slide: "/images/landing/slideNews4.jpg",
    img: "/images/landing/news4.png",
    title:'龙井系列',
    desc:'正宗龙井香，时令浙茶韵',
  },
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
.swiper-slide {
  position: relative;
  padding-bottom: 30px !important;
  transform: scale(0.8);
  transition: transform 0.4s ease;

  &.swiper-slide-active {
    transform: scale(1);
  }

  .img {
    position: absolute;
    bottom: -2px;
    left: 0%;
    width: 20%;
    height: auto;
    height: auto;
    opacity: 0;
    transform: scale(0);
    transition: all 0.6s cubic-bezier(0.24, 0.82, 0.7, 0.98);
  }

  &.swiper-slide-active {
    img {
      opacity: 1;
      transform: scale(1);
      transition: all 0.6s cubic-bezier(0.24, 0.82, 0.7, 0.98);
    }
  }
}
swiper-container {
  &::part(pagination) {
    bottom: 0;
  }

  &::part(bullet) {
    width: 10.8;
    height: 10.8;
    background: transparent;
    border: 2px solid black;
    opacity: 1;
    margin: 0 4px;
  }

  &::part(bullet-active) {
    width: 10.8;
    height: 10.8;
    background: transparent;
    border: 2px solid black;
    opacity: 1;
    margin: 0 4px;
    background-color: black;
  }
}
.swiper-button-next, .swiper-rtl .swiper-button-prev {
    right: calc(-120px - 24px) !important;
}
</style>
