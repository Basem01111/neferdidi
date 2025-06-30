<template>
  <div class="z-2 relative pt-[13vw] translate-y-[55px] md:translate-y-[300px]">
    <!-- Title -->
    <TitlesTitleAndDesc>
      <template #title> 一杯奶茶的诞生 </template>
      从产地、研发、仓储运输到门店制作，古茗用心呈现每一杯新式好茶
    </TitlesTitleAndDesc>

    <!-- Large Screen -->
    <div class="hidden md:block">
      <!-- Steps -->
      <div
        class="steps m-[94px_150px_33px] flex"
        :class="`step-${currentSlide}`"
      >
        <div class="relative flex-[1_1]">
          <!-- Line Steps -->
          <svg
            class="line-svg absolute top-[-1px] left-0 right-0"
            width="100%"
            height="3"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line
              x1="0"
              y1="1"
              x2="100%"
              y2="1"
              stroke="#C0AE8A"
              stroke-dasharray="0 12"
              stroke-linecap="round"
              stroke-width="2"
            />
            <line
              x1="0"
              y1="1"
              x2="100%"
              y2="1"
              stroke="#C0AE8A"
              stroke-linecap="round"
              stroke-width="2"
              class="line"
            />
          </svg>

          <!-- List Steps -->
          <ul class="flex">
            <li
              v-for="(step, i) in listSteps"
              :key="i"
              class="flex-[1_1] relative top-[-2px] pt-[36px] before:content-[''] before:block before:w-[12px] before:h-[12px] before:bg-[var(--main-color-bg)] before:opacity-100 before:border-[2px] before:border-[var(--main-color)] before:rounded-full before:absolute before:top-[-6px] before:left-[-6px] before:cursor-pointer after:content-[var(--after-content)] after:absolute after:w-[43px] after:h-[43px] after:leading-[43px] after:text-white after:text-center after:bg-[var(--main-color)] after:rounded-full after:top-[-22px] after:left-[-22px] after:text-[18px] after:font-bold after:transition-all after:duration-[800ms] after:ease-in-out after:opacity-0 after:scale-0 after:cursor-pointer [&.active]:after:opacity-100 [&.active]:after:scale-100"
              :class="{
                active: i === 0 || i <= currentSlide,
              }"
              :style="{ '--after-content': `'${('0' + (i + 1)).slice(-2)}'` }"
              @click="goToSlide(i)"
            >
              <div
                class="cursor-pointer relative left-[-20px] flex items-start gap-[14px]"
              >
                <NuxtImg
                  :src="i <= currentSlide ? step.imgActive : step.img"
                  class="w-auto max-w-full h-auto max-h-full"
                  alt="Icon"
                />
                <p
                  class="inline-block align-text-top text-sm font-medium text-[gray] [.active_&]:text-[var(--main-color-text)] whitespace-pre-line"
                >
                  {{ step.text }}
                </p>
              </div>
            </li>
          </ul>
        </div>

        <div class="flex-[0_0_90px] flex justify-end items-start mt-[-49px]">
          <NuxtImg
            src="/images/landing/end-steps.gif"
            class="w-[53px] h-auto"
            alt="Icon"
          />
        </div>
      </div>

      <!-- Silder -->
      <ClientOnly class="">
        <swiper-container
          ref="containerRef"
          :pagination="true"
          autoplay-delay="4800"
          autoplay-disable-on-interaction="false"
          class="relative mx-[120px]"
        >
          <swiper-slide v-for="(slide, i) in slides" :key="i">
            <NuxtImg
              :src="slide.img"
              class="rounded-[30px] h-auto w-full object-cover"
            />
            <div
              class="w-[65%] bottom-0 absolute left-0 h-[170px] text-white p-[0_30px_30px_70px]"
            >
              <h3 class="mb-[15px] text-[28px] font-medium leading-[32px]">
                {{ slide.title }}
              </h3>
              <p class="mb-0 text-base leading-[30px]">
                {{ slide.desc }}
              </p>
            </div>
          </swiper-slide>
        </swiper-container>
      </ClientOnly>
    </div>

    <!-- Small Screen -->
     <div class="block md:hidden">
      <div v-for="(item,i) in slides" :key="i">
        <!-- Number -->
        <NuxtImg
        :src="item.imgNum"
        class="w-[9.33vw] h-[9.33vw] rounded-full m-[8vw_auto_0] block"
        />
        
        <!-- Desc -->
        <div class="m-[2.5vw_0_4vw] font-semibold text-[4.8vw] tracking-widest flex items-center gap-[2.3vw] justify-center m-[2.5vw_._4vw]">
          <NuxtImg
          :src="listSteps[i].imgActive"
          class="w-auto h-[6.2vw]"
          />
            <p class="mb-0 text-[var(--main-color-text)] font-semibold text-[4vw] tracking-widest m-[2.5vw_0_4vw] text-center">
            {{ listSteps[i].textSmallScreen[0] }}
          </p>
        </div>

        <p v-if="listSteps[i]?.textSmallScreen[1]" class="text-[var(--main-color-text)] font-semibold text-[4vw] tracking-widest m-[2.5vw_0_4vw] text-center block last:text-[3.2vw]">
              {{ listSteps[i].textSmallScreen[1] }}
            </p>

        <!-- Img -->
        <NuxtImg
        :src="item.img"
        class="w-[90vw] mx-auto h-[46vw] rounded-[2.67vw]"
        />
      </div>
     </div>
  </div>
</template>

<script lang="ts" setup>
import type { Swiper } from "swiper";

// List Steps
const listSteps = reactive([
  {
    text: "严把原料质量关 \n 自建柠檬基地",
    textSmallScreen: ["严把原料质量关 自建柠檬基地"],
    img: "/images/landing/step-1-active.png",
    imgActive: "/images/landing/step-1-active.png",
  },
  {
    text: "超百人研发团队 \n 专业级实验室",
    textSmallScreen: ["超百人研发团队 专业级实验室"],
    img: "/images/landing/step-2.png",
    imgActive: "/images/landing/step-2-active.png",
  },
  {
    text: "全国22大仓储基地 \n 自建冷链物流 \n (截至2024年9月30日)",
    textSmallScreen: ["全国22大仓储基地 自建冷链物流","(截至2024年9月30日)"],
    img: "/images/landing/step-3.png",
    imgActive: "/images/landing/step-3-active.png",
  },
  {
    text: "专业门管团队 \n 严格QSC管理",
    textSmallScreen: ["专业门管团队 严格QSC管理"],
    img: "/images/landing/step-4.png",
    imgActive: "/images/landing/step-4-active.png",
  },
]);

// Slides
const slides = reactive([
  {
    img: "/images/landing/steps-slide-1.jpg",
    imgNum: "/images/landing/imgNum1.png",
    title: "优选原料，保障品质",
    desc: "严把茶叶、水果等原料的质量关，从源头保障品质，还在云南西双版纳自建柠檬基地，给顾客带来极致味觉享受。",
  },
  {
    img: "/images/landing/steps-slide-2.jpg",
    imgNum: "/images/landing/imgNum2.png",
    title: "超百人研发团队，实力保证",
    desc: "打造专业级实验室，超百人研发团队，建立完整研发体系，为用户呈现每一杯新式好茶。",
  },
  {
    img: "/images/landing/steps-slide-3.jpg",
    imgNum: "/images/landing/imgNum3.png",
    title: "全程冷链，抢“鲜”一步",
    desc: "自建物流体系，率先在业内实现“两天一配”服务。从果园到门店，运输、配送全程精准温控，最大限度保证原材料新鲜和品质稳定。",
  },
  {
    img: "/images/landing/steps-slide-4.jpg",
    imgNum: "/images/landing/imgNum4.png",
    title: "数字化创新，严格品控打造好口碑",
    desc: "6道检验程序，严格进行品控质检，实现可持续经营与发展。数字化体系运营，结合专业门管团队，辅助门店高效经营。",
  },
]);

// Init
const containerRef = ref<{ swiper?: Swiper } | null>(null);
const currentSlide = ref(0);

// Change CurrentSlide
onMounted(() => {
  const interval = setInterval(() => {
    const swiperEl = containerRef.value as { swiper?: Swiper } | null;

    if (swiperEl?.swiper) {
      if (typeof swiperEl.swiper.activeIndex !== "undefined") {
        currentSlide.value = swiperEl.swiper.activeIndex;
      }

      swiperEl.swiper.on("slideChange", () => {
        if (typeof swiperEl.swiper?.activeIndex !== "undefined") {
          currentSlide.value = swiperEl.swiper.activeIndex;
        }
      });

      clearInterval(interval);
    }
  }, 100);
});

// Method Change Slide
function goToSlide(index: number) {
  const swiper = containerRef.value?.swiper;
  if (swiper) {
    swiper.slideTo(index);
  }
}

</script>

<style scoped lang="scss">
.steps {
  //  Step 5
  .line {
    stroke-dasharray: 30% 200%;
    transition: all 0.8s ease;
  }

  //   Step 2
  &.step-1 {
    .line {
      stroke-dasharray: 65% 200%;
    }
  }

  //   Step 3
  &.step-2 {
    .line {
      stroke-dasharray: 100% 200%;
    }
  }

  //   Step 4
  &.step-3 {
    .line {
      stroke-dasharray: 136% 200%;
    }
  }
}

swiper-container {
  &::part(pagination) {
    bottom: 36px;
    text-align: end;
    left: unset;
    inset-inline-end: 54px;
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
