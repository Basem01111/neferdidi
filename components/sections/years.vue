<template>
  <div>
    <div class="bg-[var(--main-color-bg)]">
      <UiContainer
        class="pb-[40px] md:pb-[80px] relative"
      >
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
      </UiContainer>
    </div>
  </div>
</template>

<script lang="ts" setup>
// Data Items
const historyData = [
  {
    year: "2022",
    html: `<span class="text-[var(--main-color)]">عدد أعضاء الميني بروجرام تجاوز 50 مليونًا</span>، وعدد الأكواب المباعة في السنة وصل إلى أكثر من 850 مليون كوب`,
  },
  {
    year: "2021",
    html: `تم إطلاق تجربة جديدة لمشروبات الشاي، وافتتاح أول متجر Guoming·GOOTTT في هانغتشو، <span class="text-[var(--main-color)]">وتجاوز عدد الفروع في الصين 5500 فرع</span>`,
  },
  {
    year: "2020",
    html: `تم إطلاق الميني بروجرام المطوّر ذاتيًا "طلب شاي قو مينغ" على مستوى البلاد، وبلغ عدد الأعضاء فيه 13 مليونًا`,
  },
  {
    year: "2019",
    html: `<span class="text-[var(--main-color)]">بلغ عدد الأكواب المباعة حوالي 280 مليون كوب،</span> وحازت العلامة على جوائز مثل "أفضل 10 علامات شاي في الصين لعام 2019" و"العلامة البارزة في قطاع المطاعم لعام 2019"`,
  },
  {
    year: "2018",
    html: `تم إطلاق استراتيجية المقرّين في "هانغتشو" و"داشي"، مع ترقية الهوية البصرية إلى نسخة المتجر 5.0`,
  },
  {
    year: "2017",
    html: `من أجل تحقيق طزاجة أكبر، <span class="text-[var(--main-color)]">تم البدء في استخدام نظام التوصيل المبرد</span>`,
  },
  {
    year: "2016",
    html: `تم إنشاء مركز تدريب موحّد لتشغيل الفروع، وإطلاق "مشروع الليمون" في شيشوانغبانّا لضمان الجودة من المصدر`,
  },
  {
    year: "2014",
    html: `تم البدء في بناء نظام تعريفي موحد للعلامة يشمل MI وVI وSI، مع ترقية الهوية البصرية إلى نسخة المتجر 4.0`,
  },
  {
    year: "2013",
    html: `تم تطبيق نظام التوصيل الداخلي <span class="text-[var(--main-color)]">وبناء سلسلة إمداد مملوكة ذاتيًا</span>`,
  },
  {
    year: "2012",
    html: `بدأ التوسع من تايتشو إلى مختلف أنحاء البلاد، مع ترقية الهوية البصرية إلى نسخة 3.0، ووصل عدد الأكواب اليومية لبعض الفروع إلى أكثر من 1500 كوب`,
  },
  {
    year: "2011",
    html: `افتتاح أول متجر بنظام الشراكة، وإطلاق نموذج الامتياز؛ وفي أكتوبر تمت أول ترقية للعلامة التجارية إلى النسخة 2.0`,
  },
  {
    year: "2010",
    html: `افتتاح أول فرع لقو مينغ في بلدة داشي بمدينة ونلينغ، مقاطعة تشجيانغ`,
  },
];

</script>

<style scoped lang="scss">

</style>
