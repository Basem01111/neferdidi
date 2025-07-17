<template>
  <div class="bg-white relative pt-[40px] md:pt-[80px]">
    <!-- box Data -->
    <UiContainer>
      <UiBoxData
        class="mb-[40px] md:mb-[80px]"
        style-box="2"
        title="فروعنا"
        content='حتى تاريخ 30 سبتمبر 2024، افتتحت علامة "قو مينغ" لشاي المشروبات أكثر من 9700 فرع بنظام الامتياز في أنحاء الصين، تغطي 17 مقاطعة منها تشجيانغ، فوجيان، جيانغشي، هونان، قوانغدونغ، هوبي، تشونغتشينغ، سيتشوان، وأكثر من 200 مدينة. ويتم التوسع إلى مناطق جديدة بخطى ثابتة... ترقّبوا المزيد.'
        :data="[
          {
            title: '+9700',
            text: ['فروع امتياز'],
          },
          {
            title: '17 مقاطعة',
            text: ['المناطق المشمولة'],
          },
          {
            title: '+200 مدينة',
            text: ['المدن المنتشرة'],
          },
        ]"
      />
    </UiContainer>

    <!-- Silder -->
   <div class=" relative">
     <ClientOnly>
      <swiper-container
        ref="containerRef"
        class="!m-0 !w-full"
        dir="rtl"
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
            class="w-full h-[240px] md:h-[calc(100vh-81.2px)] object-cover block"
          />
        </swiper-slide>
      </swiper-container>

      <!-- Btns -->
      <button
        type="button"
        class="z-2 absolute top-1/2 -translate-y-1/2 end-[24px] cursor-pointer"
        @click="slideNext()"
      >
        <Icon
          icon="ei:arrow-left"
          class="w-[35px] md:w-[55px] h-[35px] md:h-[55px] text-white"
        />
      </button>
      <button
        type="button"
        class="z-2 absolute top-1/2 -translate-y-1/2 start-[24px] cursor-pointer"
        @click="slidPrev()"
      >
        <Icon
          icon="ei:arrow-right"
          class="w-[35px] md:w-[55px] h-[35px] md:h-[55px] text-white"
        />
      </button>
    </ClientOnly>
   </div>
  </div>
</template>

<script lang="ts" setup>
import { Icon } from "@iconify/vue";
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
.swiper-button-next,
.swiper-rtl .swiper-button-prev {
  right: calc(-120px - 24px) !important;
}
</style>
