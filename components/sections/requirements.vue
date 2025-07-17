<template>
  <div class="py-[40px] md:py-[80px] bg-white">
    <!-- Title -->
    <TitlesTitleAndDesc class-title="!mb-0">
      <template #title> متطلبات الامتياز </template>
    </TitlesTitleAndDesc>
    <!-- Content -->
    <div
      class="md:max-w-[1440px] md:grid md:grid-cols-[1fr_1fr] md:gap-[50px] md:m-[80px_auto_0]"
    >
      <div
        v-for="(item, i) in data"
        :key="i"
        class="group flex items-start justify-center pt-[8.6vw] md:pt-0 first:pt-0"
      >
        <!-- Img -->
        <div class="me-2" v-html="item.icon"></div>
        <!-- Text -->
        <div class="w-[76vw] md:w-[456px] md:min-h-[150px] px-[4vw] md:px-0">
          <!-- Title -->
          <div
            class="text-[16px] border-s-3 ps-2 border-[var(--main-color)] md:text-[20px] font-medium leading-[5.33vw] md:leading-[unset] mb-[7px]"
          >
            {{ item.title }}
          </div>

          <!-- Desc -->
          <div
            class="transition-colors group-hover:bg-[var(--main-color)] rounded-2xl group-hover:text-white py-1.5 px-4 border-[var(--main-color)] text-[14px] font-normal leading-[5.33vw] md:leading-[2] text-[var(--main-color-text-2)] whitespace-pre-line"
          >
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
    title: "متطلبات التواجد في المتجر",
    desc: `1. عند فتح فرع واحد فقط، يُشترط على الشريك الحضور الشخصي للعمل داخل المتجر، ويجب أن يكون قادرًا على أداء العمليات الأساسية مثل تحضير المشروبات، العمل في المطبخ، تسجيل الطلبات، وتسليم الكوب؛
2. في حال امتلاك ثلاثة فروع أو أكثر، لا يُشترط التواجد الكامل في المتجر للقيام بالعمليات الأساسية، ولكن لا بد أن يكون الشخص مسؤولًا بشكل كامل وبدوام كامل عن إدارة جميع الفروع.`,
    icon: `
    <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 24 24">
		<g fill="none">
			<path fill="#ffdda1" stroke="#191919" stroke-linecap="round" stroke-linejoin="round" d="M12 8.001a3.5 3.5 0 1 0 0-7a3.5 3.5 0 0 0 0 7" stroke-width="1" />
			<path fill="#F4AC29" d="M16.745 13a4.965 4.965 0 0 0-9.49 0" />
			<path stroke="#191919" stroke-linecap="round" stroke-linejoin="round" d="M16.745 13a4.965 4.965 0 0 0-9.49 0" stroke-width="1" />
			<path fill="#F4AC29" d="M18.5 23h-13l-1.689-6.756A1 1 0 0 1 4.781 15h14.437a1 1 0 0 1 .97 1.242z" />
			<path fill="#F4AC29" d="M4.782 15a1 1 0 0 0-.97 1.243L5.5 23h2.223l8-8z" />
			<path stroke="#191919" stroke-linecap="round" stroke-linejoin="round" d="M18.5 23h-13l-1.689-6.756A1 1 0 0 1 4.781 15h14.437a1 1 0 0 1 .97 1.242zM1 23h22M12 12v1.5" stroke-width="1" />
			<path fill="#c77f67" stroke="#191919" stroke-linecap="round" stroke-linejoin="round" d="M13.167 4.501a5.8 5.8 0 0 0 2.286-.467a3.477 3.477 0 0 0-6.459-1.3a5.8 5.8 0 0 0 4.173 1.767" stroke-width="1" />
			<path fill="#808080" stroke="#191919" stroke-linecap="round" stroke-linejoin="round" d="M12 20a1.25 1.25 0 1 0 0-2.5a1.25 1.25 0 0 0 0 2.5" stroke-width="1" />
		</g>
	</svg>`,
  },
  {
    title: "متطلبات المتقدم",
    desc: `1. يجب أن يكون المتقدم هو المدير الفعلي للمشروع؛
2. يُفضّل أن يكون عمره بين 18 إلى 45 سنة، ويتمتع بصحة جيدة؛
3. يجب أن يؤمن بقيم Guming (الصدق والبساطة، الاجتهاد المستمر، التعاون، الطموح للصدارة)، وألا يكون لديه سجل جنائي أو مخالفات قانونية (مثل القضايا أو الديون أو الإدراج على قوائم المنع من التعامل).`,
    icon: `
	<svg xmlns="http://www.w3.org/2000/svg" width="70px" height="70px" viewBox="0 0 16 16">
		<path fill="#F4AC29" fill-rule="evenodd" d="M3 2.5a.5.5 0 0 0-.5.5v10a.5.5 0 0 0 .5.5h5.25a.75.75 0 0 1 0 1.5H3a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v6.25a.75.75 0 0 1-1.5 0V3a.5.5 0 0 0-.5-.5zm12.28 8.72a.75.75 0 0 1 0 1.06l-2.5 2.5a.75.75 0 0 1-1.06 0l-1-1a.75.75 0 1 1 1.06-1.06l.47.47l1.97-1.97a.75.75 0 0 1 1.06 0M4.75 4a.75.75 0 0 0 0 1.5h6.5a.75.75 0 0 0 0-1.5zM4 8a.75.75 0 0 1 .75-.75h6.5a.75.75 0 0 1 0 1.5h-6.5A.75.75 0 0 1 4 8m.75 2.5a.75.75 0 0 0 0 1.5h3.5a.75.75 0 0 0 0-1.5z" clip-rule="evenodd" />
	</svg>

    `,
  },
  {
    title: "الموظفون المبدئيون",
    desc: `يجب تجهيز ما لا يقل عن موظفين اثنين مخلصين عند بدء العمل، على أن تنطبق عليهم الشروط التالية:
1. يجب أن يكونا قادرين على العمل بدوام كامل لمدة لا تقل عن 6 أشهر؛ ويُفضّل أن يكون عمرهم بين 18 إلى 45 سنة ويتمتعون بصحة جيدة؛
2. الأفضل أن يكونا زوجين، ويمكن أيضًا اختيار إخوة أو أقارب أصغر سنًا، أو موظفين سابقين موثوقين، ويُفضّل عدم اختيار الأصدقاء المقربين أو كبار السن أو الزملاء السابقين من نفس المستوى.`,
    icon: `
	<svg xmlns="http://www.w3.org/2000/svg" width="70px" height="70px" viewBox="0 0 24 24">
		<g fill="none">
			<path fill="#F4AC29" d="M12 18.906a6.906 6.906 0 1 0 0-13.812a6.906 6.906 0 0 0 0 13.812" />
			<path fill="#fff" stroke="#191919" stroke-linecap="round" stroke-linejoin="round" d="m12.812 9.739l.282.926a.634.634 0 0 0 .749.434l.938-.218a.854.854 0 0 1 .813 1.414l-.657.71a.64.64 0 0 0 0 .868l.657.709a.854.854 0 0 1-.813 1.414l-.938-.218a.634.634 0 0 0-.75.434l-.281.926a.848.848 0 0 1-1.626 0l-.283-.926a.635.635 0 0 0-.749-.434l-.938.218a.854.854 0 0 1-.813-1.414l.657-.708a.64.64 0 0 0 0-.869l-.657-.709a.854.854 0 0 1 .813-1.414l.938.218a.634.634 0 0 0 .75-.435l.282-.925a.848.848 0 0 1 1.626-.001" stroke-width="1" />
			<path fill="#F4AC29" stroke="#191919" stroke-linecap="round" stroke-linejoin="round" d="M12 14.391a.956.956 0 1 0 0-1.912a.956.956 0 0 0 0 1.912" stroke-width="1" />
			<path fill="#ffdda1" stroke="#191919" stroke-linecap="round" stroke-linejoin="round" d="M12 4.348A1.674 1.674 0 1 0 12 1a1.674 1.674 0 0 0 0 3.347" stroke-width="1" />
			<path fill="#F4AC29" d="M15.348 7.696a3.454 3.454 0 0 0-6.696 0" />
			<path stroke="#191919" stroke-linecap="round" stroke-linejoin="round" d="M15.348 7.696a3.454 3.454 0 0 0-6.696 0" stroke-width="1" />
			<path fill="#ffdda1" stroke="#191919" stroke-linecap="round" stroke-linejoin="round" d="M19.652 19.652a1.674 1.674 0 1 0 0-3.348a1.674 1.674 0 0 0 0 3.348" stroke-width="1" />
			<path fill="#F4AC29" d="M23 23a3.456 3.456 0 0 0-6.696 0" />
			<path stroke="#191919" stroke-linecap="round" stroke-linejoin="round" d="M23 23a3.456 3.456 0 0 0-6.696 0" stroke-width="1" />
			<path fill="#ffdda1" stroke="#191919" stroke-linecap="round" stroke-linejoin="round" d="M4.348 19.652a1.674 1.674 0 1 0 0-3.348a1.674 1.674 0 0 0 0 3.348" stroke-width="1" />
			<path fill="#F4AC29" d="M7.696 23A3.455 3.455 0 0 0 1 23" />
			<path stroke="#191919" stroke-linecap="round" stroke-linejoin="round" d="M7.696 23A3.455 3.455 0 0 0 1 23m13.917-2.391a9.13 9.13 0 0 1-5.834 0m6.98-16.739a9.1 9.1 0 0 1 4.91 9.565m-17.948 0A9.1 9.1 0 0 1 7.938 3.87" stroke-width="1" />
		</g>
	</svg>
`,
  },
  {
    title: "التمويل والشراكة",
    desc: `1. التمويل الأساسي: يجب تحضير ما لا يقل عن 230,000 يوان (لا تشمل الإيجار ورسوم التنازل، ويمكن تقسيط رسوم الامتياز)، ويتم تحديد المبلغ النهائي حسب السوق المحلي؛
2. الشراكة في الملكية: عند فتح فرع أو فرعين، يُفضل أن يدير الشخص المشروع بمفرده أو مع شريك (كالزوج أو الزوجة)، ولا يُنصح بالدخول في شراكات مع أطراف خارجية؛ عند فتح ثلاثة فروع أو أكثر، يمكن ضم موظفين موثوقين كشركاء للمساعدة في الإدارة، ويُمنع بشدة الشراكة مع مستثمرين ماليين فقط أو الدخول في أنواع شراكة أخرى.`,
    icon: `
	<svg xmlns="http://www.w3.org/2000/svg" width="70px" height="70px" viewBox="0 0 24 24">
		<g fill="none">
			<path fill="#F4AC29" d="m12 3.052l2.045 1.534l2.557-1.534l-2.557 5.624l4.09 5.114v5.113l-4.09 2.045h-4.09l-4.09-2.045V13.79l4.09-5.113l-2.557-5.625l2.557 1.534z" />
			<path fill="#F4AC29" d="m6.376 19.925l.59-.472l-1.102-.55V13.79l1.593-1.99l-2.104-2.1l2.045-3.58l-2.556 1.023L2.285 6.12L4.33 9.7L.751 14.811v3.068l2.557 2.045zm11.248 0l-.59-.472l1.102-.55V13.79l-1.592-1.99l2.103-2.1l-2.045-3.58l2.556 1.023l2.557-1.023L19.67 9.7l3.579 5.112v3.068l-2.557 2.045zM14.045 8.677l1.278-2.814l-1.278.768L12 5.097L9.955 6.631l-1.278-.768l1.278 2.814z" />
			<path fill="#F4AC29" d="m9.955 10.72l-4.09 5.114v3.069l4.09 2.045h4.09l4.09-2.045v-3.07l-4.09-5.112z" />
			<path stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="M2.797 9.7h3.579m11.76.51l.51-.51l-2.044-3.58l2.556 1.023l2.557-1.023L19.67 9.7l3.579 5.112v3.068l-2.557 2.045h-.511M21.204 9.7h-3.58m-4.601 4.09h-2.046l-.51 1.022l.51 1.023h2.046l.51 1.022l-.51 1.023h-2.046M12 13.79v-1.023m0 6.136V17.88m4.09-9.203H7.91" stroke-width="1" />
			<path stroke="#000" stroke-linejoin="round" d="m12 3.052l2.045 1.534l2.557-1.534l-2.557 5.624l4.09 5.114v5.113l-4.09 2.045h-4.09l-4.09-2.045V13.79l4.09-5.113l-2.557-5.625l2.557 1.534z" stroke-width="1" />
			<path stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="m5.864 10.21l-.51-.51l2.044-3.58l-2.556 1.023L2.285 6.12L4.33 9.7L.751 14.811v3.068l2.557 2.045h.511" stroke-width="1" />
		</g>
	</svg>
`,
  },
];
</script>

<style scoped lang="scss"></style>
