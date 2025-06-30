<!-- layouts/default.vue -->
<template>
  <div class="pt-[25vw] md:pt-[150px] md:pb-[200px]">
    <!-- Title -->
    <TitlesTitleAndDesc class="!mb-[25px]" class-title="!mb-0">
      <template #title> 合作费用 </template>
      Franchise Fee
    </TitlesTitleAndDesc>

    <!-- Content -->
    <div class="w-[89.2vw] md:max-w-[1261px] mx-auto">
      <!-- Header Card -->
      <div
        class="text-[#f9f9f6] rounded-[4vw_4vw_0_0] md:rounded-[30px_30px_0_0] bg-[var(--main-color)] p-[8.9vw_5vw_8.9vw] md:p-[40px_30px] md:m-[80px_auto_0]"
      >
        <div>
          <span
            class="text-[4vw] md:text-[18px] font-[500] md:font-[unset] tracking-widest md:tracking-[unset]"
            >首年启动资金</span
          >
          <span
            class="text-[4.8vw] md:text-[24px] font-bold md:font-[unset] tracking-widest md:tracking-[unset] ms-[1vw] md:ms-[10px]"
            >￥233000起</span
          >
        </div>
        <div
          class="font-normal md:font-[unset] text-[3.47vw] md:text-[14px] mt-4 md:mt-[6px]"
        >
          不包含店面租金、转让费、加盟费、咖啡机设备款和大型设备分期部分款项
        </div>
      </div>

      <!-- Content Card -->
      <div
        class="rounded-[0_0_4vw_4vw] md:rounded-[0_0_30px_30px] md:grid md:grid-cols-[1fr_1fr_1fr] md:gap-[2px]"
      >
        <!-- Items -->
        <div
          v-for="(item, i) in data"
          :key="i"
          class="p-[6.6vw_5vw_8vw] md:p-[50px_30px] md:flex md:flex-col md:justify-center bg-[var(--main-color-bg-2)] border-t-[0.01vw] border-t-[var(--main-color)] md:border-t-0"
        >
          <!-- Info -->
          <div class="flex items-center justify-center md:justify-start">
            <!-- Title -->
            <div
              class="text-[4vw] md:text-[18px] md:min-w-[80px] font-medium tracking-widest text-[var(--main-color-text)]"
            >
              {{ item.title }}
            </div>
            <!-- Price -->
            <div
              class="text-[4vw] md:text-[22px] font-semibold md:font-bold ms-[1vw] md:ms-[10px] text-[var(--main-color)]"
            >
              {{ item.price }}
            </div>
            <!-- Notes -->
            <span
              v-for="(note, i) in item.notes"
              :key="i"
              class="text-center text-white text-[3.2vw] md:text-[14px] font-medium md:leading-[25px] h-[5.33vw] md:h-[25px] w-auto rounded-[2.67vw] md:rounded-[13px_13px_13px_13px] p-[0_2.67vw] md:p-[0_8px] ms-[1.2vw] md:ms-[4px] [background:var(--main-color-gradient)]"
            >
              {{ note }}
            </span>
          </div>

          <!-- Text -->
          <p
            class="text-[3.47vw] md:text-[14px] font-normal md:font-[unset] leading-[5.33vw] md:leading-[1.5] mt-[1vw] md:t-[10px] text-[var(--main-color-text-2)]"
          >
            {{ item.text }}
          </p>
        </div>
      </div>
    </div>

    <!-- Footer Section -->
     <div class="w-[89.2vw] md:max-w-[1261px] mx-auto">
       <div
         class="text-[4vw] md:text-[18px] font-semibold md:font-medium tracking-widest p-[11.5vw_0_0] md:pt-[50px] text-[var(--main-color)]"
       >
         新加盟商帮扶政策的说明：
       </div>
       <div
         class="text-[3.47vw] md:text-[14px] font-normal leading-[5.33vw] p-[3vw_0_20vw] md:pt-[16px] md:pb-[0] leading-[3vw 5.33vw 20vw] md:leading-[1.5] text-[var(--main-color-text-2)]"
       >
         1、￥98800加盟费可分期支付。
         <br />
         <p class="jsx-977581186">
           2、公司秉持着“同担共享”的理念与初心，您可以在<span class="text-[var(--main-color)]">签约首年无需缴纳任何加盟费</span>，次年开始支付部分加盟费(分别在签约后第13个月支付2.5万，签约后第19个月支付4.88万)，第三年(签约后第25个月)再支付2.5万。资金力更小，风险公司共担。
         </p>
       </div>
     </div>
  </div>
</template>

<script lang="ts" setup>
// Data

const data = [
  {
    title: "品牌合作费",
    price: "￥18800",
    text: "三年单店授权/新品更新/品牌活动策划",
    notes: ["首年0费用", "分期支付"],
  },
  {
    title: "品牌合作费",
    price: "￥18800",
    text: "三年单店授权/新品更新/品牌活动策划",
    notes: ["首年0费用", "分期支付"],
  },
  {
    title: "品牌合作费",
    price: "￥18800",
    text: "三年单店授权/新品更新/品牌活动策划",
    notes: ["首年0费用", "分期支付"],
  },
  {
    title: "品牌合作费",
    price: "￥18800",
    text: "三年单店授权/新品更新/品牌活动策划",
    notes: ["首年0费用", "分期支付"],
  },
  {
    title: "品牌合作费",
    price: "￥18800",
    text: "三年单店授权/新品更新/品牌活动策划",
    notes: ["首年0费用", "分期支付"],
  },
  {
    title: "品牌合作费",
    price: "￥18800",
    text: "三年单店授权/新品更新/品牌活动策划",
    notes: ["首年0费用", "分期支付"],
  },
  {
    title: "品牌合作费",
    price: "￥18800",
    text: "三年单店授权/新品更新/品牌活动策划",
    notes: ["首年0费用", "分期支付"],
  },
  {
    title: "品牌合作费",
    price: "￥18800",
    text: "三年单店授权/新品更新/品牌活动策划",
    notes: ["首年0费用", "分期支付"],
  },
  {
    title: "品牌合作费",
    price: "￥18800",
    text: "三年单店授权/新品更新/品牌活动策划",
    notes: ["首年0费用", "分期支付"],
  },
  {
    title: "品牌合作费",
    price: "￥18800",
    text: "三年单店授权/新品更新/品牌活动策划",
    notes: ["首年0费用", "分期支付"],
  },
  {
    title: "品牌合作费",
    price: "￥18800",
    text: "三年单店授权/新品更新/品牌活动策划",
    notes: ["首年0费用", "分期支付"],
  },
  {
    title: "品牌合作费",
    price: "￥18800",
    text: "三年单店授权/新品更新/品牌活动策划",
    notes: ["首年0费用", "分期支付"],
  },
];
</script>

<style scoped></style>
