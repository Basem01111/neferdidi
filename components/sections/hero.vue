<template>
  <div class="relative mb-[40px] md:mb-[80px]">
    <div class="bg-white overflow-hidden pb-[125px]">
      <UiContainer
        class="min-h-[calc(100vh-61.2px)] md:min-h-[calc(100vh-81.2px)] relative flex justify-center md:justify-between items-center flex-col md:flex-row gap-20 md:gap-7 z-1"
      >
        <!-- Content -->
        <div class="md:w-1/2 md:text-start text-center relative">
          <!-- Img -->
          <NuxtImg
            src="/images/landing/hero.webp"
            class="w-[50%] h-auto block absolute left-1/2 top-1/2 -translate-1/2 opacity-45 -z-1 [transform:rotateZ(30deg)]"
          />

          <!-- Title -->
          <h1
            class="title opacity-0 mb-4 text-[30px] space md:text-[50px] font-bold tracking-widest md:tracking-[unset] md:leading-[90px] text-black"
          >
            نكهة الصين في قلب مصر
          </h1>

          <!-- Text -->
          <p
            class="content mb-0 text-[16px] md:text-[20px] font-bold text-[var(--main-color-text-2)] tracking-widest md:tracking-[6px]"
          >
            اكتشف سحر المشروبات الصينية الأصيلة من الشاي الفاخر إلى البوبا ،
            <br class="hidden md:block" />
            بتجربة لا تُنسى في كل رشفة
          </p>
        </div>

        <!-- Images -->
        <div
          class="md:-mt-[20%] mx-auto flex items-center justify-center md:w-1/2 md:text-start text-center relative"
        >
          <svg
            class="absolute -z-1 top-[70%] left-1/2 -translate-1/2 w-[110%] opacity-50"
            viewBox="-120 -120 240 240"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M 94.21088288600892,0 C 92.36994003975852,30.886822669939978 66.79281313036887,40.52304196116105 34.02462241840781,58.932374737029356 C 1.2564317064467474,77.34170751289767 -18.415119431952206,92.18669434349258 -45.228226526591335,78.33758628029068 C -72.04133362123046,64.48847821708878 -80.60559991189702,35.89739765528747 -80.07370564388636,9.806200731265278e-15 C -79.5418113758757,-35.897397655287456 -71.6188966036057,-57.37958275249236 -42.96484666271618,-74.41729735923045 C -14.310796721826652,-91.45501196596854 9.622125320203786,-89.9889780995812 41.85842176415418,-72.50091322016205 C 74.09471820810458,-55.01284834074289 96.05182573225932,-30.886822669939978 94.21088288600892,0 Z"
              class="fill-[var(--main-color)]"
            />
          </svg>

          <div class="relative w-[23%]">
            <NuxtImg src="/images/landing/news1.png" class="w-full] h-auto" />
            <NuxtImg
              src="/images/landing/news1.png"
              class="w-full h-auto absolute top-full left-0 transform scale-y-[-1] opacity-20 blur-xs"
            />
          </div>
          <div class="relative w-[23%]">
            <NuxtImg src="/images/landing/news3.png" class="w-full] h-auto" />
            <NuxtImg
              src="/images/landing/news3.png"
              class="w-full h-auto absolute top-full left-0 transform scale-y-[-1] opacity-20 blur-xs"
            />
          </div>
          <div class="relative w-[23%]">
            <NuxtImg src="/images/landing/news2.png" class="w-full] h-auto" />
            <NuxtImg
              src="/images/landing/news2.png"
              class="w-full h-auto absolute top-full left-0 transform scale-y-[-1] opacity-20 blur-xs"
            />
          </div>
        </div>

        <!-- Arrow Bottom -->
        <a
          href="#landing"
          class="arrow-down absolute left-1/2 -translate-x-1/2 bottom-7"
        >
          <Icon
            icon="bytesize:chevron-bottom"
            width="45"
            class="font-bold text-black"
          />
        </a>
      </UiContainer>
    </div>

    <!-- Box Data -->
    <UiContainer id="landing" class="mt-[-120px]">
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
.title,.content {
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

@keyframes upDown {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(20px);
  }
}

@keyframes fadeX {
  0% {
  transform: translateX(100px);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}
</style>
