<template>
  <div class="pt-[20vw] md:pt-[150px] pb-[14vw] md:pb-[200px] bg-white">
    <!-- Title -->
    <TitlesTitleAndDesc class-title="!mb-0">
      <template #title> 加盟要求 </template>
      Franchise Requirements
    </TitlesTitleAndDesc>

    <!-- Content -->
     <div class="md:max-w-[1440px] md:grid md:grid-cols-[1fr_1fr] md:gap-[50px] md:m-[80px_auto_0]">
        <div v-for="(item,i) in data" :key="i" class="flex items-center justify-center pt-[8.6vw] md:pt-0 first:pt-0">
        <!-- Img -->
        <NuxtImg :src="item.img" class="w-[20vw] md:w-auto h-auto md:h-[100px]"/>

        <!-- Text -->
         <div class="w-[76vw] md:w-[456px] md:min-h-[150px] px-[4vw] md:px-0">
            <!-- Title -->
             <div class="text-[4vw] md:text-[20px] font-semibold md:font-medium leading-[5.33vw] md:leading-[unset] mb-[3vw] md:mb-0">
                    {{ item.title }}
             </div>

             <!-- Desc -->
              <div class="text-[3.47vw] md:text-[14px] font-normal leading-[5.33vw] md:leading-[2] text-[var(--main-color-text-2)] md:mt-[13px] whitespace-pre-line">
                {{ item.desc }}
              </div>
         </div>
     </div>
     </div>
  </div>
</template>

<script lang="ts" setup>
const data = [
    {
        title: "驻店要求",
        desc: "1. 一店加盟商有在店打卡要求，本人需要完全在店进行基础操作，比如调饮、后厨、点单、出杯等；\n 2. 三店及以上，本人不必完全在店进行基础操作，但仍需全职负责门店各项工作。",
        img: "/images/cooperate/requirements1.png",
    },
    {
        title: "申请人要求",
        desc: "1. 申请人必须为实际经营者；\n 2. 18至45周岁之间最佳，身体健康； \n 3. 认可古茗价值观（简单真诚、永不懈怠、团结一致、勇争第一），无不良记录（违法、被执行、失信等）。",
        img: "/images/cooperate/requirements2.png",
    },
    {
        title: "初始店员",
        desc: "至少准备2名初始铁杆店员，要求如下： \n 1、能全职在店6个月以上；建议年龄18至45周岁之间为佳，身体健康； \n 2、铁杆店员夫妻最佳，另外可优先选择年龄差距较大的弟弟妹妹、曾经的下属、晚辈，不建议选择朋友、发小、闺蜜、长辈等；",
        img: "/images/cooperate/requirements3.png",
    },
    {
        title: "资金及股权",
        desc: "1. 基础资金：准备23万及以上（不包含店面租金转让费、加盟费可分期），具体根据当地市场决定； \n 2. 股权合伙：经营一至二家店时，自己单干或夫妻最佳，不建议与他人合伙；经营三家店及以上时，可以找老骨干合伙，帮助你一起进行多店管理，强烈不建议以财务投资型等其他形式的各种合伙。",
        img: "/images/cooperate/requirements4.png",
    },
]
</script>

<style scoped lang="scss"></style>
