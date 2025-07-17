
<template>
  <UiContainer class="py-[40px] md:py-[80px]">
    <!-- Title -->
    <TitlesTitleAndDesc class-title="!mb-0">
      <template #title> رسوم الأمتياز </template>
    </TitlesTitleAndDesc>

    <!-- Content -->
      <div
        class="grid grid-cols-[1fr] md:grid-cols-[1fr_1fr_1fr] gap-4 md:gap-[20px]"
      >
        <!-- Items -->
        <div
          v-for="(item, i) in data"
          :key="i"
          class="p-4 md:p-[30px_20px] md:flex md:flex-col md:justify-center bg-[var(--main-color-bg-2)] rounded-2xl shadow-2xs"
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

    <!-- Footer Section -->
       <div
         class="text-[16px] font-medium tracking-widest pt-[20px] md:pt-[30px] pb-[7px] md:pb-[6px]  text-[var(--main-color)]"
       >
         شرح سياسة دعم الشركاء الجدد المنضمين حديثًا:
       </div>
       <div
         class="text-[14px] flex flex-col gap-2 font-normal leading-[5.33vw] leading-[3vw 5.33vw 20vw] md:leading-[1.5] text-[var(--main-color-text-2)]"
       >
         <p class="m-0">
          1.رسوم الانضمام البالغة 98,800 يوان يمكن دفعها بالتقسيط.
         </p>
         <p class="m-0">
           2.تلتزم الشركة بمبدأ "تحمّل المسؤولية والمشاركة في المنافع معًا"، ويمكنك من خلال ذلك <span class="text-[var(--main-color)]"> في السنة الأولى من التعاقد، لا يُطلب منك دفع أي رسوم انضمام </span> ابتداءً من السنة الثانية، تبدأ بدفع جزء من رسوم الانضمام (25,000 يوان في الشهر الثالث عشر من التعاقد، و48,800 يوان في الشهر التاسع عشر)، ثم تدفع 25,000 يوان أخرى في السنة الثالثة (الشهر الخامس والعشرون من التعاقد). وبهذا تكون الحاجة إلى رأس مال أقل، وتتحمّل الشركة جزءًا من المخاطر معك.
         </p>
       </div>
  </UiContainer>
</template>

<script lang="ts" setup>
// Data

const data = [
    {
    title: "الرسوم",
    price: "￥18800",
    text: "ترخيص لمتجر واحد لمدة ثلاث سنوات / تحديثات للمنتجات الجديدة / تخطيط لأنشطة العلامة التجارية",
    notes: ["السنة الأولى بدون رسوم", "دفع على أقساط"],
  },
    {
    title: "الرسوم",
    price: "￥18800",
    text: "ترخيص لمتجر واحد لمدة ثلاث سنوات / تحديثات للمنتجات الجديدة / تخطيط لأنشطة العلامة التجارية",
    notes: ["السنة الأولى بدون رسوم", "دفع على أقساط"],
  },
    {
    title: "الرسوم",
    price: "￥18800",
    text: "ترخيص لمتجر واحد لمدة ثلاث سنوات / تحديثات للمنتجات الجديدة / تخطيط لأنشطة العلامة التجارية",
    notes: ["السنة الأولى بدون رسوم", "دفع على أقساط"],
  },
    {
    title: "الرسوم",
    price: "￥18800",
    text: "ترخيص لمتجر واحد لمدة ثلاث سنوات / تحديثات للمنتجات الجديدة / تخطيط لأنشطة العلامة التجارية",
    notes: ["السنة الأولى بدون رسوم", "دفع على أقساط"],
  },
    {
    title: "الرسوم",
    price: "￥18800",
    text: "ترخيص لمتجر واحد لمدة ثلاث سنوات / تحديثات للمنتجات الجديدة / تخطيط لأنشطة العلامة التجارية",
    notes: ["السنة الأولى بدون رسوم", "دفع على أقساط"],
  },
    {
    title: "الرسوم",
    price: "￥18800",
    text: "ترخيص لمتجر واحد لمدة ثلاث سنوات / تحديثات للمنتجات الجديدة / تخطيط لأنشطة العلامة التجارية",
    notes: ["السنة الأولى بدون رسوم", "دفع على أقساط"],
  },
    {
    title: "الرسوم",
    price: "￥18800",
    text: "ترخيص لمتجر واحد لمدة ثلاث سنوات / تحديثات للمنتجات الجديدة / تخطيط لأنشطة العلامة التجارية",
    notes: ["السنة الأولى بدون رسوم", "دفع على أقساط"],
  },
    {
    title: "الرسوم",
    price: "￥18800",
    text: "ترخيص لمتجر واحد لمدة ثلاث سنوات / تحديثات للمنتجات الجديدة / تخطيط لأنشطة العلامة التجارية",
    notes: ["السنة الأولى بدون رسوم", "دفع على أقساط"],
  },
    {
    title: "الرسوم",
    price: "￥18800",
    text: "ترخيص لمتجر واحد لمدة ثلاث سنوات / تحديثات للمنتجات الجديدة / تخطيط لأنشطة العلامة التجارية",
    notes: ["السنة الأولى بدون رسوم", "دفع على أقساط"],
  },
];
</script>

<style scoped></style>
