<template>
  <div class="bg-white py-[40px] md:py-[80px]">
    <!-- Title -->
    <TitlesTitleAndDesc class-title="!mb-0">
      <template #title> عملية الامتياز </template>
    </TitlesTitleAndDesc>

    <!-- Proggres -->
    <div
      class="md:z-1 md:grid-cols-[1fr_1fr_1fr_1fr] md:relative md:grid md:after:content-[''] md:after:block md:after:w-[75%] md:after:h-0 md:after:border-dotted md:after:border-b-[2px] md:after:border-b-[var(--main-color)] md:after:absolute md:after:start-[12.5%] md:after:top-[85px] md:after:-z-1"
    >
      <div
        v-for="(item, i) in data"
        :key="i"
        class="relative grid md:flex md:flex-col md:items-center grid-cols-[15vw_12vw_1fr] ps-[5.33vw] pb-[7vw] md:p-0 md:h-[280px] md:after:hidden after:content-[''] last:after:hidden after:start-[23.2vw] after:absolute after: after:block after:h-full after:border-dotted after:border-r-[1px] after:border-r-[var(--main-color)]"
      >
        <!-- Img -->
        <div v-html="item.icon"></div>
        <!-- Number -->
        <div
          class="w-[5.89vw] md:w-[33px] h-[5.89vw] md:h-[33px] md:leading-[33px] md:text-[14px] md:absolute md:top-[70px] rounded-[50%] bg-[var(--main-color)] text-white text-center flex justify-center items-center"
        >
          {{ i + 1 }}
        </div>

        <!-- Content -->
        <div>
          <!-- Title -->
          <div
            class="md:text-center text-[16px] md:text-[20px] md:font-medium md:relative md:top-[80px] tracking-widest md:tracking-[unset] font-semibold"
          >
            {{ item.title }}
          </div>
          <!-- Text -->
          <div
            class="md:top-[90px] md:max-w-[68%] md:mx-auto w-[64vw] md:w-auto md:relative font-normal md:font-normal text-[13px] md:text-[14px] leading-[5.33vw] md:leading-[2] text-[var(--main-color-text-2)] md:text-center"
          >
            {{ item.text }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const data = [
  {
    title: "تقديم الطلب",
    text: "اذهب إلى تطبيق “منزل加盟古茗” على WeChat واملأ نموذج طلب التعاون",
    icon: `
	<svg xmlns="http://www.w3.org/2000/svg" width="50px" height="50px" viewBox="0 0 48 48">
		<g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4">
			<rect width="32" height="20" x="8" y="8" fill="#F4AC29" />
			<path d="M8 28L4 41H44L40 28" />
			<path fill="#F4AC29" d="M19.9 35H28.1L30 41H18L19.9 35Z" />
		</g>
	</svg>
`,
  },
  {
    title: "مراجعة المؤهلات",
    text: "بعد اجتياز مراجعة البيانات، يتم حضور مقابلة في مقر الشركة الرئيسي في هانغتشو",
    icon: `
	<svg xmlns="http://www.w3.org/2000/svg" width="50px" height="50px" viewBox="0 0 24 24">
		<g fill="none">
			<path fill="#F4AC29" d="M19.174 4.826H3.87A1.913 1.913 0 1 1 3.87 1h15.304z" />
			<path fill="#F4AC29" d="M20.13 5.783v16.26a.957.957 0 0 1-.956.957H3.87a1.913 1.913 0 0 1-1.913-1.913V2.913A1.913 1.913 0 0 0 3.87 4.826h15.304a.957.957 0 0 1 .957.957" />
			<path fill="#F4AC29" d="M5.225 21.087V4.827h-1.36a1.913 1.913 0 0 1-1.912-1.914v18.174A1.913 1.913 0 0 0 3.866 23h3.272a1.913 1.913 0 0 1-1.913-1.913" />
			<path stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="M12.081 23H3.873a1.913 1.913 0 0 1-1.913-1.913V2.913" stroke-width="1" />
			<path stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="M20.134 1H3.874a1.913 1.913 0 1 0 0 3.826h15.304a.957.957 0 0 1 .956.957v6.242M3.874 2.913h15.304" stroke-width="1" />
			<path fill="#F4AC29" stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="M15.858 21.143a4.332 4.332 0 1 0 0-8.664a4.332 4.332 0 0 0 0 8.664" stroke-width="1" />
			<path stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="m22.047 23l-3.105-3.106" stroke-width="1" />
			<path fill="#fff" d="M15.858 21.143a4.332 4.332 0 1 0 0-8.664a4.332 4.332 0 0 0 0 8.664" />
			<path fill="#F4AC29" d="M15.858 12.478a4.331 4.331 0 0 0-3.05 7.407l6.122-6.121a4.32 4.32 0 0 0-3.072-1.286" />
			<path stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="M15.858 21.143a4.332 4.332 0 1 0 0-8.664a4.332 4.332 0 0 0 0 8.664M22.047 23l-3.105-3.108" stroke-width="1" />
		</g>
	</svg>

`,
  },
  {
    title: "إرشاد لاختيار الموقع",
    text: "تعلم متطلبات اختيار المواقع مثل المنطقة التجارية، والموقع، والمتجر، ثم اختيار الموقع المناسب",
    icon: `
	<svg xmlns="http://www.w3.org/2000/svg" width="50px" height="50px" viewBox="0 0 48 48">
		<g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4">
			<path fill="#F4AC29" d="M38 14H10C8.89543 14 8 14.8954 8 16V42C8 43.1046 8.89543 44 10 44H38C39.1046 44 40 43.1046 40 42V16C40 14.8954 39.1046 14 38 14Z" />
			<path d="M17 18V11C17 7.13401 20.134 4 24 4C27.866 4 31 7.13401 31 11V18" />
		</g>
	</svg>

`,
  },
  {
    title: "التوقيع الرسمي",
    text: "بعد اجتياز مراجعة الموقع وتوقيع عقد المتجر، يتم توقيع عقد الامتياز عبر الإنترنت",
    icon: `
    <svg xmlns="http://www.w3.org/2000/svg" width="50px" height="50px" viewBox="0 0 24 24">
		<g fill="none" fill-rule="evenodd" clip-rule="evenodd">
    <path fill="#000" d="M15.326 22.704h-2.26a7.4 7.4 0 0 1-1.419-.21a7.4 7.4 0 0 1-1.11-.63a1.5 1.5 0 0 0-.51-.13c-.43 0-.89.4-1.36.62a.23.23 0 0 1-.26 0c-.1-.06-.06-.19-.06-.32a9 9 0 0 0 0-1.36a.56.56 0 0 0-.32-.46a.54.54 0 0 0-.63.11c-.06.06-.22.46-.3.61l-.589.77a3.4 3.4 0 0 1-1 .74a1.11 1.11 0 0 1-1 0a2.34 2.34 0 0 1-1.13-1.6a17 17 0 0 0 1.57-3c.19-.449.36-.919.51-1.389s.24-1 .33-1.44c0 0 .07-.54.1-.74a1 1 0 0 0 0-.12a.5.5 0 0 0-.091-.393a.55.55 0 0 0-.599-.206a3.36 3.36 0 0 0-2 1.47a7.26 7.26 0 0 0-1.16 3.199a7.1 7.1 0 0 0 .15 2.89A8.3 8.3 0 0 1 .18 23.113a.35.35 0 1 0 .4.57a8.7 8.7 0 0 0 1.86-1.64c.3.67.814 1.221 1.46 1.57a2.3 2.3 0 0 0 1.68.13a4 4 0 0 0 1.759-1.18c.074.26.236.487.46.64a1.2 1.2 0 0 0 1 .19c.292-.104.562-.26.8-.46c.14-.09.24-.22.38-.22s.64.35 1 .52q.2.103.419.16c.53.101 1.07.158 1.61.17c.76 0 1.54 0 2.3-.07a.39.39 0 0 0 .277-.664a.4.4 0 0 0-.258-.126M3.27 18.454a6.3 6.3 0 0 1 .92-2.659q.16-.263.37-.49a9 9 0 0 1-.19.91q-.133.665-.34 1.31a20 20 0 0 1-.77 1.83a7 7 0 0 1 .01-.9" />
    <path fill="#F4AC29" d="M23.935 5.367a.38.38 0 0 0-.55 0q-.629.492-1.18 1.07c-.65.65-1.25 1.34-1.91 2a.35.35 0 0 0-.13-.44c-.56-.5-1.09-1-1.67-1.49l-.75-.59a9 9 0 0 0-.799-.53c-.56-.34-1.14-.62-1.71-.92c.43-1.3.91-2.589 1.37-3.829a.36.36 0 0 0-.19-.46a.35.35 0 0 0-.45.19c-.6 1.28-1.22 2.59-1.78 3.93c-.39.9-.74 1.81-1 2.719a.72.72 0 0 0 .37.77l.37.21l1.35.7l2.51 1.49c0 .67-.13 1.64-.25 2.619c-.09.77-.21 1.52-.32 2.08c0 .3 0 .69-.15.64a3.5 3.5 0 0 1-.77.42c-.49.21-1.11.38-1.73.63a17.6 17.6 0 0 1-4.479 1.119c-.19-1.4-.65-4.78-.64-5.24a2.67 2.67 0 0 1 .7-1.999a10 10 0 0 1 3.24-2a.35.35 0 0 0 .19-.46a.34.34 0 0 0-.45-.2a10.2 10.2 0 0 0-3.86 1.78a3.71 3.71 0 0 0-1.15 2.9c0 .5.75 3.76 1.06 5.089l.12.51c0 .15-.38 1.48 6.41-.54a5.4 5.4 0 0 0 2.439-1.26c.131-.18.217-.39.25-.61c.097-.51.154-1.03.17-1.55c.05-1.12 0-2.489 0-3.479h.07a.74.74 0 0 0 .68.05q.668-.428 1.22-1c.85-.85 1.549-1.84 2.339-2.749a9 9 0 0 1 1-1.06a.4.4 0 0 0 .06-.51m-4.18 3.54c-.81.84-.23.83-2.459-.58q-.66-.42-1.38-.81l-1.4-.69c.13-.52.3-1 .46-1.56c.41.38.8.78 1.23 1.14c.25.21.5.4.76.58s.52.36.8.53c.64.39 1.29.74 1.94 1.11a.37.37 0 0 0 .27.06z" />
    <path fill="#F4AC29" d="M11.387 16.825a2.35 2.35 0 0 0 .64-.69c.15-.24.26-.32.39-.57c.3-.6.54-1.2.8-1.79c2.21.56 2.52-.9 2.57-1.35a1.92 1.92 0 0 0-.92-1.829a2.21 2.21 0 0 0-1.91-.17a2 2 0 0 0-1.09 1.57a1.41 1.41 0 0 0 .6 1.44c-.37.48-.75.95-1.12 1.45l-.48.69a2.7 2.7 0 0 0-.35.89c-.13.699.33.719.87.36m1.64-4.549a.9.9 0 0 1 .44-.63a1 1 0 0 1 .82.07a.77.77 0 0 1 .45.68c0 .58-.55 1-1.51.42a.43.43 0 0 1-.2-.54" />
		</g>
    </svg>

`,
  },
];
</script>

<style scoped></style>
