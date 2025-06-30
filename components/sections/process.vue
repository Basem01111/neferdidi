
<template>
  <div class="bg-white pt-[25vw] md:pt-[150px] pb-[10vh] md:pb-[200px]">
    <!-- Title -->
    <TitlesTitleAndDesc class="!mb-[25px]" class-title="!mb-0">
      <template #title> 加盟流程 </template>
      Franchise Process
    </TitlesTitleAndDesc>

    <!-- Sub Title -->
    <h3
      class="text-[4vw] md:text-[24px] font-semibold tracking-widest leading-[8.53vw] md:leading-[48px] text-center w-[26.53vw] md:w-[151px] h-[8.53vw] md:h-[48px] rounded-[4.27vw] md:rounded-[43px_43px_43px_43px] border-[0.4vw] md:border-[2px] m-[8.6vw_auto_10.4vw] md:m-[65px_auto_60px]"
    >
      签约前
    </h3>

    <!-- Proggres -->
    <div class="md:z-1 md:grid-cols-[1fr_1fr_1fr_1fr] md:relative md:grid md:after:content-[''] md:after:block md:after:w-[75%] md:after:h-0 md:after:border-dotted md:after:border-b-[2px] md:after:border-b-[var(--main-color)] md:after:absolute md:after:start-[12.5%] md:after:top-[85px] md:after:-z-1">
      <div
        v-for="(item, i) in data"
        :key="i"
        class="relative grid md:flex md:flex-col md:items-center grid-cols-[15vw_12vw_1fr] ps-[5.33vw] pb-[7vw] md:p-0 md:h-[280px] md:after:hidden after:content-[''] last:after:hidden after:start-[23.2vw] after:absolute after: after:block after:h-full after:border-dotted after:border-r-[1px] after:border-r-[var(--main-color)]"
      >
      <!-- Img -->
        <NuxtImg :src="item.img" class="w-[7.29vw] md:w-[50px] h-auto" />
        <!-- Number -->
        <div
          class="w-[5.89vw] md:w-[33px] h-[5.89vw] md:h-[33px] md:leading-[33px] md:text-[14px] md:absolute md:top-[70px] rounded-[50%] bg-[var(--main-color)] text-white text-center flex justify-center items-center"
        >
          {{ i + 1 }}
        </div>

        <!-- Content -->
         <div>
            <!-- Title -->
            <div class="md:text-center text-[4vw] md:text-[20px] md:font-medium md:relative md:top-[80px] tracking-widest md:tracking-[unset] font-semibold">{{item.title}}</div>
            <!-- Text -->
            <div class="md:top-[90px] md:max-w-[68%] md:mx-auto w-[64vw] md:w-auto md:relative font-normal md:font-normal text-[3.47vw] md:text-[14px] leading-[5.33vw] md:leading-[2] mt-[2vw] md:mt-[15px] text-[var(--main-color-text-2)] md:text-center">{{ item.text }}</div>
         </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const data = [
  {
    title: "提交申请",
    text: "前往“古茗加盟之家”小程序填写意向申请合作书",
    img: "/images/cooperate/process1.png",
  },
  {
    title: "资质审核",
    text: "资料审核通过后参加杭州总部区域面谈",
    img: "/images/cooperate/process2.png",
  },
  {
    title: "选址辅导",
    text: "学习商圈、点位、店铺等选址要求并选址",
    img: "/images/cooperate/process3.png",
  },
  {
    title: "正式签约",
    text: "选址审核通过并签署店铺合同后，线上签约加盟合同",
    img: "/images/cooperate/process4.png",
  },
];
</script>

<style scoped></style>
