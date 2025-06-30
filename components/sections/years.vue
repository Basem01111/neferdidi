<template>
    <div
      class="md:pb-[156px] pt-[10vh] md:pt-[100px] relative md:before:hidden before:content-[''] before:block before:w-0 before:h-[20vw] md:before:h-[100px] before:border-[var(--main-color)] before:border-e md:before:border-e-2 before:border-dashed before:absolute before:top-[3.4vw] md:before:top-[44px] before:start-[23.6vw] md:before:start-[349.5px]"
    >
      <NuxtImg
        src="/images/brand-history/boba.png"
        class="absolute w-[10vw] md:w-[72px] start-[20vw] md:start-[27.8%] top-[-4vw] md:top-[-54px] md:[transform:translate3d(-36%,0px,0px)] h-auto"
      />
      <!-- Items -->
      <div
        v-for="(item, i) in historyData"
        :key="i"
        class="relative flex md:items-center p-[0_10vw_0_8.2vw] md:p-[0_10vw_0_4vw]"
      >
        <!-- Year -->
        <div
          class="md:leading-[unset] font-bold md:font-bold text-[4vw] md:text-[20px] text-[var(--main-color-text)] md:flex-[0_0_27.8%] md:text-end md:pe-[52px] md:pt-[36px]"
        >
          {{ item.year }}
        </div>

        <!-- Content -->
        <div
          :class="[
            'md:leading-[unset] ps-[12.5vw] md:ps-[42px] pb-[11vw] md:pb-0 md:pt-[36px] text-[3.7vw] md:text-[18px] font-normal md:font-normal leading-[5.33vw] break-all md:flex-[1_1] relative',
            i !== historyData.length - 1
              ? 'after:content-[\'\'] after:absolute after:top-[4.5vw] md:after:top-[60px] after:start-[6.15vw] md:after:start-[-3px] after:block after:w-0 after:h-[calc(100%-10.4px)] md:after:h-[calc(100%-15.2px)] after:border-e md:after:border-e-2 after:border-dashed after:border-[var(--main-color)]'
              : '',
            'before:content-[\'\'] before:absolute before:block before:start-[5vw] md:before:start-[-10px] before:top-[2vw] md:before:top-[42px] before:z-10 before:w-[10.4px] before:h-[10.4px] md:before:w-[15.2px] md:before:h-[15.2px] before:rounded-[50%] before:border-2 before:border-[var(--main-color)]',
          ]"
          v-html="item.html"
        ></div>
      </div>
    </div>
</template>

<script lang="ts" setup>
const historyData = [
  {
    year: "2022",
    html: `<span class="text-[var(--main-color)]">古茗小程序会员突破5000万</span>，年度出杯量达到8.5亿+杯`,
  },
  {
    year: "2021",
    html: `解锁茶饮新体验，首家古茗·GOOTTT店在杭州开业，<span class="text-[var(--main-color)]">全国门店突破5500家</span>`,
  },
  {
    year: "2020",
    html: `自主开发的“古茗茶饮点单”小程序全国上线，小程序会员累计达到1300万人`,
  },
  {
    year: "2019",
    html: `<span class="text-[var(--main-color)]">年度销售杯数约2.8亿杯，</span> 荣获“2019年中国茶饮十大品牌”、“2019年中国杰出餐饮品牌”等多个奖项`,
  },
  {
    year: "2018",
    html: `启动“杭州”、“大溪”双总部战略，品牌形象升级「5.0版门店」`,
  },
  {
    year: "2017",
    html: `为追求更鲜，<span class="text-[var(--main-color)]">开启冷链配送模式</span>`,
  },
  {
    year: "2016",
    html: `设立门店标准化操作培训中心，成立西双版纳「柠檬项目」，从源头把关自建果品标准`,
  },
  {
    year: "2014",
    html: `开始建立标准化企业识别系统MI、VI、SI，品牌形象升级「4.0版门店」`,
  },
  {
    year: "2013",
    html: `部署自配送模式，<span class="text-[var(--main-color)]">搭建自有供应链</span>`,
  },
  {
    year: "2012",
    html: `走出台州面向全国，品牌形象升级进入3.0时代，明星单店出杯突破1500杯`,
  },
  {
    year: "2011",
    html: `第一家合作店开业，开启连锁经营模式；10月进行品牌第一次升级进入2.0时代`,
  },
  {
    year: "2010",
    html: `第一家古茗在浙江温岭大溪镇开业`,
  },
];
</script>

<style scoped lang="scss">

</style>
