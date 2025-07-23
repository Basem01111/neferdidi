<template>
  <div class="relative mb-[40px] md:mb-[80px]">
    <div class="bg-white overflow-hidden pb-[80px] relative">
      <NuxtImg
        src="/images/landing/neferdidi_hero_section.png"
        class="absolute inset-0 w-screen h-screen object-cover [filter:brightness(0.8)]"
      />
      <UiContainer
        class="min-h-[calc(100vh-61.2px)] md:min-h-[calc(100vh-81.2px)] relative flex items-center flex-col md:flex-row md:justify-between z-1"
      >
        <!-- Content -->
        <div class="md:w-1/2 text-center relative py-6 pb-8 md:py-0">
          <!-- logo -->
          <NuxtImg
            src="/images/global/logo_white.webp"
            class="title block mx-auto w-[300px] max-w-full h-auto mb-2 md:mb-4"
          />
          <!-- Title -->
          <h1 class="content opacity-0 text-[20px] text-white mb-5 md:mb-10">
            نكهة الصين في قلب مصر
          </h1>
          <!-- Imgs -->
          <div class="flex items-center justify-center gap-2 group/imgs">
            <div
              v-for="(img, i) in imgs"
              :key="i"
              class="animate-fade-in-up opacity-0 w-[60px] md:w-[80px] h-[60px] md:h-[80px] cursor-pointer flex items-center justify-center rounded-[5px] p-2 bg-[white]/25 backdrop-blur-[4px] transition-all duration-300 ease-in-out hover:scale-110 hover:-translate-y-1 group-hover/imgs:opacity-60 hover:opacity-100"
              :class="{
                '!scale-110 !-translate-y-1 !opacity-100': hoveredIndex === i,
              }"
              :style="{ animationDelay: `${i * 100}ms` }"
              @mouseover="hoveredIndex = i"
              @mouseleave="hoveredIndex = null"
              @click="selectIndex = i"
            >
              <NuxtImg :src="img" class="w-auto max-w-full h-auto max-h-full" />
            </div>
          </div>
        </div>

        <!-- Slider -->
        <div class="md:w-1/2 relative hero-animate">
          <transition name="planet" mode="out-in">
            <NuxtImg
              :key="selectIndex"
              :src="imgs[selectIndex]"
              class="mx-auto w-[185px] md:w-[250px] max-w-full h-auto [filter:drop-shadow(0px_0_16px_hsl(0deg_0%_0%_/_38%))]"
            />
          </transition>
        </div>

        <!-- Arrow Bottom -->
        <a
          href="#landing"
          class="arrow-down absolute left-1/2 -translate-x-1/2 bottom-7"
        >
          <Icon
            icon="bytesize:chevron-bottom"
            width="45"
            class="font-bold text-white"
          />
        </a>
      </UiContainer>
    </div>

    <!-- Box Data -->
    <UiContainer id="landing" class="mt-[-80px]">
      <UiBoxData
        :title="dataBox.title"
        :content="dataBox.content"
        :data="dataBox.data"
        :img="dataBox.img"
        :btn="dataBox.btn"
      />
    </UiContainer>
  </div>
</template>

<script lang="ts" setup>
import { Icon } from "@iconify/vue";

// Imgs
const imgs = [
  "/images/landing/boba_coup.png",
  "/images/landing/news1.png",
  "/images/landing/news2.png",
  "/images/landing/news3.png",
  "/images/landing/news4.png",
];
const hoveredIndex = ref<number | null>(null);
const selectIndex = ref<number>(0);

// Data Box
const dataBox = {
  title: `تعرف علينا!`,
  img: `/images/landing/hand.gif`,
  content: `شاي "قو مينغ" – لحظتك الخاصة في كل وقت ومكان
        منذ انطلاق علامة "قو مينغ" في عام 2010، كان الحلم بسيطًا: أن تستمتع بكوب شاي لذيذ كل يوم دون أن تمل.
        واليوم، بفضل فريق بحث وتطوير يضم أكثر من 100 خبير، نستكشف نكهات جديدة باستمرار، ونبني بأنفسنا نظام لوجستي متكامل يخدم فروعنا المنتشرة في جميع أنحاء الصين.

        نحن نؤمن أن الجودة تبدأ من المصدر، لذا نخضع كل مكون وكل مشروب لأعلى معايير الفحص والجودة.
        في "قو مينغ"، ليست مجرد مشروبات... إنها تجربة.
        استمتع بالحياة، لحظة بلحظة، مع كل رشفة شاي.`,
  btn: {
    text: "أعرف المزيد عنا",
    link: "/about",
  },
  data: [
    {
      title: "15 عامًا",
      text: ["من العمل الجاد والإدارة المستقرة"],
    },
    {
      title: "أكثر من 1 مليار كوب",
      text: ["تم بيعها خلال عام 2023 بالكامل"],
    },
    {
      title: "حوالي 135 مليون",
      text: [
        "عضو في برنامج العضوية عبر التطبيق المصغر",
        "(حتى تاريخ 30 سبتمبر 2024)",
      ],
    },
  ],
};
</script>

<style scoped lang="scss">
.title,
.content {
  animation: fadeX 600ms ease-in-out forwards;
  transform: translateX(100px);
  opacity: 0;
}

.content {
  animation-delay: 500ms;
}

.arrow-down {
  animation: upDown 4.5s ease-in-out infinite;
}

.hero-animate {
  animation: hero-3d 1s ease-out forwards;
}

.animate-fade-in-up {
  animation: fade-in-up 0.5s ease-out forwards;
}
</style>
