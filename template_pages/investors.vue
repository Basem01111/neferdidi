
<template>
  <div class="relative bg-white">
    <!-- bg -->
    <NuxtImg src="/images/investors/bg.png" class="w-full h-auto" />

    <!-- App -->
     <div class="md:flex md:p-[0_80px_80px]">
       <!-- Nav Side -->
       <div 
         class="nav-side flex md:block overflow-auto md:[overflow:unset] md:break-keep md:whitespace-nowrap md:w-[260px] h-[10vw] md:h-[327px] items-center p-[0_2vw] md:p-[40px_0_0] border-b md:border-b-0 md:border-e border-[#e0e0e0]"
       >
       <!-- Title Side -->
       <div class="hidden md:block text-[var(--main-color-text)] text-[20px] font-bold mb-[4px] ps-[10px]">
        投资者关系
       </div>

         <button
           v-for="(item, i) in dataNav"
           :key="i"
           class="text-[3vw] md:text-[16px] font-medium md:font-normal flex flex-col w-[22vw] md:w-full text-center md:text-start shrink-0 md:shrink-[unset] items-center md:items-start justify-center p-[0_2vw] md:ps-[20px] md:pe-0 text-[var(--main-color-text-2)] cursor-pointer md:mt-[20px] md:relative"
           :class="
             activeNav === i
               ? `!text-[var(--main-color)] md:!font-bold after:content-[''] after:bg-[var(--main-color)] after:mt-[1px] md:after:mt-0 after:h-[2px] md:after:h-full after:w-[4vw] md:after:w-[2px] md:after:absolute md:after:end-0 md:after:top-0`
               : ''
           "
           @click="activeNav = i"
         >
           {{ item }}
         </button>
       </div>
   
       <!-- Side -->
       <div class="min-h-[40vw] p-[0_3.2vw_3vw] md:flex-1 md:pt-[30px]">
         <div
           v-for="(item, i) in dataSide[activeNav]"
           :key="i"
           class="flex items-center cursor-pointer border-b border-b-[#eee]"
         >
       <!-- Content -->
        <div class="p-[10px_0] flex-[1_1]">
             <!-- Text -->
              <div class="text-[2.8vw] md:text-[18px] break-all text-ellipsis overflow-hidden line-clamp-2 font-normal pe-[1.6vw] md:pe-[20px] mb-[.8vw] md:mb-[4px] leading-[3.4vw] md:leading-[22px]">
               {{ item.text }}
              </div>
              <!-- Date -->
              <div class=" text-[2.4vw] md:text-[14px] font-normal text-[var(--main-color-text-2)]">
               {{ item.date }}
              </div>
        </div>
   
        <!-- Arrow -->
         <NuxtImg src="/images/global/chevron-right.png" class="h-auto w-4 md:w-[20px]"/>
       </div>
       </div>
     </div>
  </div>
</template>

<script lang="ts" setup>
useSeoMeta({
  title: 'Investors',
})
// Data Nav
const dataNav = [
  "公司治理",
  "招股文件",
  "公告通函",
  "报告",
  "投资者联络",
  "投资者日历",
];
// Data Side
const dataSide = [
  [
    {
    text: "股东提名人选参选本公司董事的程序",
    date: "2025-02-11",
  },
  {
    text: "Test",
    date: "2025-02-11",
  },
  {
    text: "股东提名人选参选本公司董事的程序",
    date: "2025-02-11",
  },
  {
    text: "股东提名人选参选本公司董事的程序",
    date: "2025-02-11",
  },
  {
    text: "股东提名人选参选本公司董事的程序",
    date: "2025-02-11",
  },
  {
    text: "股东提名人选参选本公司董事的程序",
    date: "2025-02-11",
  },
  ],
  [
    {
    text: "Test",
    date: "2025-02-11",
  },
  {
    text: "股东提名人选参选本公司董事的程序",
    date: "2025-02-11",
  },
  {
    text: "股东提名人选参选本公司董事的程序",
    date: "2025-02-11",
  },
  {
    text: "股东提名人选参选本公司董事的程序",
    date: "2025-02-11",
  },
  {
    text: "股东提名人选参选本公司董事的程序",
    date: "2025-02-11",
  },
  {
    text: "股东提名人选参选本公司董事的程序",
    date: "2025-02-11",
  },
  ],
  [
    {
    text: "股东提名人选参选本公司董事的程序",
    date: "2025-02-11",
  },
  {
    text: "股东提名人选参选本公司董事的程序",
    date: "2025-02-11",
  },
  {
    text: "股东提名人选参选本公司董事的程序",
    date: "2025-02-11",
  },
  {
    text: "Test",
    date: "2025-02-11",
  },
  {
    text: "股东提名人选参选本公司董事的程序",
    date: "2025-02-11",
  },
  {
    text: "股东提名人选参选本公司董事的程序",
    date: "2025-02-11",
  },
  ],
  [
    {
    text: "股东提名人选参选本公司董事的程序",
    date: "2025-02-11",
  },
  {
    text: "股东提名人选参选本公司董事的程序",
    date: "2025-02-11",
  },
  {
    text: "股东提名人选参选本公司董事的程序",
    date: "2025-02-11",
  },
  {
    text: "股东提名人选参选本公司董事的程序",
    date: "2025-02-11",
  },
  {
    text: "股东提名人选参选本公司董事的程序",
    date: "2025-02-11",
  },
  {
    text: "Test",
    date: "2025-02-11",
  },
  ],
  [
    {
    text: "股东提名人选参选本公司董事的程序",
    date: "2025-02-11",
  },
  {
    text: "股东提名人选参选本公司董事的程序",
    date: "2025-02-11",
  },
  {
    text: "股东提名人选参选本公司董事的程序",
    date: "2025-02-11",
  },
  {
    text: "股东提名人选参选本公司董事的程序",
    date: "2025-02-11",
  },
  {
    text: "股东提名人选参选本公司董事的程序",
    date: "2025-02-11",
  },
  {
    text: "Test",
    date: "2025-02-11",
  },
  ],
  [
    {
    text: "股东提名人选参选本公司董事的程序",
    date: "2025-02-11",
  },
  {
    text: "Test",
    date: "2025-02-11",
  },
  {
    text: "股东提名人选参选本公司董事的程序",
    date: "2025-02-11",
  },
  {
    text: "股东提名人选参选本公司董事的程序",
    date: "2025-02-11",
  },
  {
    text: "股东提名人选参选本公司董事的程序",
    date: "2025-02-11",
  },
  {
    text: "股东提名人选参选本公司董事的程序",
    date: "2025-02-11",
  },
  ],
];

// Active Index nav
const activeNav = ref(0);
</script>

<style scoped>
.nav-side {
  &::-webkit-scrollbar {
    width: 0;
    height: 0;
  }

  /* Track */
  &::-webkit-scrollbar-track {
    background: transparent;
  }

  /* Handle */
  &::-webkit-scrollbar-thumb {
    background: transparent;
  }

  /* Handle on hover */
  &::-webkit-scrollbar-thumb:hover {
    background: transparent;
  }
}
</style>
