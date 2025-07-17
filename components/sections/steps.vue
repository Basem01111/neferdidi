<template>
  <div class="z-2 relative py-[40px] md:py-[80px]">
    <UiContainer>
      <!-- Title -->
      <TitlesTitleAndDesc>
        <template #title> رحلة النكهة تبدأ من هنا </template>
        رحلة كوب الشاي تبدأ من المزارع وتنتهي بين يديك ، نختار المكونات بعناية،
        نبتكر بنكهة، ونوصلك بأطيب تجربة شاي عصري من نيفرديدي
      </TitlesTitleAndDesc>

      <!-- Large Screen -->
      <div class="hidden md:block">
        <!-- Steps -->
        <div class="steps m-[94px_0_33px] flex" :class="`step-${currentSlide}`">
          <div class="relative flex-[1_1]">
            <!-- Line Steps -->
            <svg
              class="line-svg absolute top-[-1px] left-0 right-0"
              width="100%"
              height="3"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line
                x1="0"
                y1="1"
                x2="100%"
                y2="1"
                class="stroke-[var(--main-color)]"
                stroke-dasharray="0 12"
                stroke-linecap="round"
                stroke-width="2"
              />
              <line
                x1="0"
                y1="1"
                x2="100%"
                y2="1"
                stroke="#C0AE8A"
                class="line stroke-[var(--main-color)]"
                stroke-linecap="round"
                stroke-width="2"
              />
            </svg>

            <!-- List Steps -->
            <ul class="flex">
              <li
                v-for="(step, i) in listSteps"
                :key="i"
                class="flex-[1_1] relative top-[-2px] pt-[36px] before:content-[''] before:block before:w-[12px] before:h-[12px] before:bg-[var(--main-color-bg)] before:opacity-100 before:border-[2px] before:border-[var(--main-color)] before:rounded-full before:absolute before:top-[-6px] before:start-[-6px] before:cursor-pointer after:content-[var(--after-content)] after:absolute after:w-[43px] after:h-[43px] after:leading-[43px] after:text-white after:text-center after:bg-[var(--main-color)] after:rounded-full after:top-[-22px] after:start-[-22px] after:text-[18px] after:font-bold after:transition-all after:duration-[800ms] after:ease-in-out after:opacity-0 after:scale-0 after:cursor-pointer [&.active]:after:opacity-100 [&.active]:after:scale-100"
                :class="{
                  active: i === 0 || i <= currentSlide,
                }"
                :style="{ '--after-content': `'${('0' + (i + 1)).slice(-2)}'` }"
                @click="goToSlide(i)"
              >
                <div
                  class="cursor-pointer relative start-[-20px] flex items-center gap-[7px]"
                >
                  <div v-html="step.icon"></div>
                  <p
                    class="flex-1 inline-block align-text-top text-sm font-medium text-[gray] [.active_&]:text-[var(--main-color-text)] whitespace-pre-line"
                  >
                    {{ step.text }}
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <!-- Silder -->
        <ClientOnly class="">
          <swiper-container
            ref="containerRef"
            :pagination="true"
            autoplay-delay="4800"
            autoplay-disable-on-interaction="false"
            class="relative"
          >
            <swiper-slide
              v-for="(slide, i) in slides"
              :key="i"
              dir="rtl"
              class=""
            >
              <NuxtImg
                :src="slide.img"
                class="rounded-[30px] h-auto w-full object-cover"
              />
              <div
                class="w-full bottom-0 absolute start-0 h-[170px] rounded-[0_0_30px_30px] bg-black/50 text-white p-[30px]"
              >
                <h3 class="mb-[15px] text-[28px] font-medium leading-[32px]">
                  {{ slide.title }}
                </h3>
                <p class="mb-0 text-base leading-[30px]">
                  {{ slide.desc }}
                </p>
              </div>
            </swiper-slide>
          </swiper-container>
        </ClientOnly>
      </div>

      <!-- Small Screen -->
      <div class="block md:hidden">
        <div v-for="(item, i) in slides" :key="i" class="mb-10 last:mb-0">
          <!-- icon -->
          <div class="flex justify-center" v-html="item.icon"></div>

          <!-- Desc -->
          <div
            class="font-semibold text-[4.8vw] tracking-widest flex items-center gap-[2.3vw] justify-center m-[2.5vw_._4vw]"
          >
            <p
              class="text-[var(--main-color-text)] font-semibold text-[4vw] tracking-widest m-[.5vw_0_4vw] text-center"
            >
              {{ listSteps[i].textSmallScreen[0] }}
            </p>
          </div>

          <p
            v-if="listSteps[i]?.textSmallScreen[1]"
            class="text-[var(--main-color-text)] font-semibold text-[4vw] tracking-widest m-[2.5vw_0_4vw] text-center block last:text-[3.2vw]"
          >
            {{ listSteps[i].textSmallScreen[1] }}
          </p>

          <!-- Img -->
          <NuxtImg
            :src="item.img"
            class="w-[90vw] mx-auto h-[46vw] rounded-[2.67vw]"
          />
        </div>
      </div>
    </UiContainer>
  </div>
</template>

<script lang="ts" setup>
import type { Swiper } from "swiper";

// List Steps
const listSteps = reactive([
  {
    text: "نحرص على أعلى معايير جودة المكونات",
    textSmallScreen: ["نحرص على أعلى معايير جودة المكونات"],
    icon: `
	<svg xmlns="http://www.w3.org/2000/svg" width="50px" height="50px" viewBox="0 0 24 24">
		<g fill="none">
			<path stroke="#191919" stroke-linecap="round" stroke-linejoin="round" d="M16.304 11.52c-.827-3.13-1.403-6.619-.646-9.938a.478.478 0 0 0-.75-.488A20.4 20.4 0 0 0 7.694 11.52" stroke-width="1" />
			<path fill="#F4AC29" d="M12 21.054a5.74 5.74 0 1 0 0-7.59" />
			<path fill="#F4AC29" d="M7.695 22.998a5.74 5.74 0 1 0 0-11.479a5.74 5.74 0 0 0 0 11.479" />
			<path fill="#F4AC29" d="M18.333 19.299a5.74 5.74 0 0 1-6.334-1.573v3.328a5.738 5.738 0 0 0 9.793-5.46a5.74 5.74 0 0 1-3.46 3.705" />
			<path fill="#F4AC29" d="M7.696 19.67a5.74 5.74 0 0 1-5.492-4.076a5.739 5.739 0 1 0 10.984 0a5.74 5.74 0 0 1-5.492 4.075" />
			<path stroke="#191919" stroke-linecap="round" stroke-linejoin="round" d="M12 21.054a5.74 5.74 0 1 0 0-7.59" stroke-width="1" />
			<path stroke="#191919" stroke-linecap="round" stroke-linejoin="round" d="M7.695 22.998a5.74 5.74 0 1 0 0-11.479a5.74 5.74 0 0 0 0 11.479" stroke-width="1" />
		</g>
	</svg>
`,
  },
  {
    text: "فريق بحث وتطوير يضم خبراء، ومختبرات بمعايير احترافية",
    textSmallScreen: ["فريق بحث وتطوير يضم خبراء، ومختبرات بمعايير احترافية"],
    icon: `
	<svg xmlns="http://www.w3.org/2000/svg" width="50px" height="50px" viewBox="0 0 24 24">
		<g fill="none">
			<path fill="#F4AC29" d="M6.517 5.868a6.2 6.2 0 0 1-2.733.546a.524.524 0 0 0-.488.733l2.706 6.016a.518.518 0 0 0 .87.12a6.2 6.2 0 0 1 2.223-1.676L19.209 7.06a3.22 3.22 0 0 0 1.886-3.611a3.144 3.144 0 0 0-4.357-2.172z" />
			<path fill="#F4AC29" d="M21.097 3.444a3.16 3.16 0 0 0-.763-1.42a3.39 3.39 0 0 1-1.953 2.472L8.06 9.136a6.4 6.4 0 0 0-2.268 1.714a.523.523 0 0 1-.885-.121l1.094 2.434a.518.518 0 0 0 .87.12a6.2 6.2 0 0 1 2.223-1.676L19.209 7.06a3.22 3.22 0 0 0 1.888-3.616" />
			<path stroke="#191919" stroke-linecap="round" stroke-linejoin="round" d="M6.517 5.868a6.2 6.2 0 0 1-2.733.546a.524.524 0 0 0-.488.733l2.706 6.016a.518.518 0 0 0 .87.12a6.2 6.2 0 0 1 2.223-1.676L19.209 7.06a3.22 3.22 0 0 0 1.886-3.611a3.144 3.144 0 0 0-4.357-2.172z" stroke-width="1" />
			<path fill="#F4AC29" stroke="#191919" stroke-linecap="round" stroke-linejoin="round" d="M7.028 20.904a2.096 2.096 0 0 1-4.192 0c0-.827 1.072-2.347 1.682-3.143a.524.524 0 0 1 .827 0c.61.796 1.683 2.316 1.683 3.143" stroke-width="1" />
			<path stroke="#191919" stroke-linecap="round" stroke-linejoin="round" d="M8.804 11.733L7.516 8.866m4.156 1.578l-.86-1.912m3.727.623l-1.29-2.867m4.158 1.578l-.86-1.912" stroke-width="1" />
		</g>
	</svg>
`,
  },
  {
    text: "توزيع ذكي وتبريد مثالي",
    textSmallScreen: ["توزيع ذكي وتبريد مثالي"],
    icon: `
	<svg xmlns="http://www.w3.org/2000/svg" width="50px" height="50px" viewBox="0 0 128 128">
		<path fill="#fff" d="M127.56 41.19c0-1.78-1.45-3.23-3.23-3.23H55.16c-1.77 0-3.23 1.45-3.23 3.23v50.58h75.63z" />
		<path fill="#2f2f2f" d="M75.27 40.96h3.42v47.45h-3.42zm24.86 0h3.42v47.45h-3.42z" />
		<path fill="#F4AC29" d="M51.93 91.77V45.72H34.39c-3.16 0-7.77 2.4-8.48 7.9c-1.05 8.08-3.45 20.15-3.45 20.15L6.6 79.71S.44 81.7.44 89.28v15.15c0 2.05 2.52 4.85 4.42 4.85h119.47c1.78 0 3.23-1.45 3.23-3.23V91.77z" />
		<path fill="#fff" d="M47.99 70.16c0 1.78-1.45 3.23-3.23 3.23H32.12c-1.78 0-3.02-1.44-2.77-3.19l2.23-15.4c.25-1.76 1.92-3.2 3.69-3.2h9.49c1.77 0 3.23 1.46 3.23 3.23z" />
		<path fill="#2f2f2f" d="M37.54 109.29c0 6.21-5.04 11.24-11.25 11.24s-11.25-5.03-11.25-11.24c0-6.22 5.04-11.24 11.25-11.24s11.25 5.02 11.25 11.24m67.76 0c0 6.21-5.04 11.24-11.25 11.24S82.8 115.5 82.8 109.29c0-6.22 5.04-11.24 11.25-11.24s11.25 5.02 11.25 11.24" />
	</svg>
    `,
  },
  {
    text: "رقابة صارمة على الجودة والنظافة",
    textSmallScreen: ["رقابة صارمة على الجودة والنظافة"],
    icon: `
	<svg xmlns="http://www.w3.org/2000/svg" width="50px" height="50px" viewBox="0 0 48 48">
		<g fill="none" stroke-width="3">
			<path fill="#F4AC29" d="M5.184 31.954C6.53 26.914 10.637 23 15.854 23c4.895 0 8.164 4.425 8.056 9.32l-.057 2.569a7 7 0 0 0 2.096 5.154l1.106 1.086c1.587 1.557.66 4.224-1.554 4.408c-2.867.237-6.41.463-9.501.463c-3.982 0-7.964-.375-10.451-.666c-1.47-.172-2.557-1.428-2.417-2.902c.32-3.363 1.175-7.188 2.052-10.478" />
			<path fill="#000" fill-rule="evenodd" d="M23.852 2.88a8 8 0 0 0-.716-.226a8 8 0 0 0-.734-.162c-1.002-.17-1.74.576-2.048 1.545c-1.75 5.533-3.818 13.022-5.428 19.005q.457-.042.928-.042c1.496 0 2.84.413 3.982 1.127l.688-2.47c1.508-5.409 3.23-11.58 4.324-16.415c.225-.992-.043-2.007-.996-2.361" clip-rule="evenodd" />
			<path stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="M5.184 31.954C6.53 26.914 10.637 23 15.854 23c4.895 0 8.164 4.425 8.056 9.32l-.057 2.569a7 7 0 0 0 2.096 5.154l1.106 1.086c1.587 1.557.66 4.224-1.554 4.408c-2.867.237-6.41.463-9.501.463c-3.982 0-7.964-.375-10.451-.666c-1.47-.172-2.557-1.428-2.417-2.902c.32-3.363 1.175-7.188 2.052-10.478" />
			<path stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="M20 24.018c1.68-6.23 3.462-12.468 4.853-18.773c.219-.993-.048-2.01-1-2.365a8 8 0 0 0-.717-.226a8 8 0 0 0-.734-.162c-1.002-.17-1.742.578-2.048 1.547c-1.96 6.191-3.542 12.522-5.213 18.792M45 45H35m7-8H32m7-8H29m-18.951 8.75c-.167 1.5 0 5.2 2 8m5-7.75s0 5 2.951 7.5" />
		</g>
	</svg>
    `,
  },
]);

// Slides
const slides = reactive([
  {
    img: "/images/landing/steps-slide-1.jpg",
    title: "نحرص على أعلى معايير جودة المكونات",
    desc: `نحرص على اختيار أجود أنواع الشاي والفواكه ، ونضمن الجودة من البداية. .`,
    icon: `
	<svg xmlns="http://www.w3.org/2000/svg" width="50px" height="50px" viewBox="0 0 24 24">
		<g fill="none">
			<path stroke="#191919" stroke-linecap="round" stroke-linejoin="round" d="M16.304 11.52c-.827-3.13-1.403-6.619-.646-9.938a.478.478 0 0 0-.75-.488A20.4 20.4 0 0 0 7.694 11.52" stroke-width="1" />
			<path fill="#F4AC29" d="M12 21.054a5.74 5.74 0 1 0 0-7.59" />
			<path fill="#F4AC29" d="M7.695 22.998a5.74 5.74 0 1 0 0-11.479a5.74 5.74 0 0 0 0 11.479" />
			<path fill="#F4AC29" d="M18.333 19.299a5.74 5.74 0 0 1-6.334-1.573v3.328a5.738 5.738 0 0 0 9.793-5.46a5.74 5.74 0 0 1-3.46 3.705" />
			<path fill="#F4AC29" d="M7.696 19.67a5.74 5.74 0 0 1-5.492-4.076a5.739 5.739 0 1 0 10.984 0a5.74 5.74 0 0 1-5.492 4.075" />
			<path stroke="#191919" stroke-linecap="round" stroke-linejoin="round" d="M12 21.054a5.74 5.74 0 1 0 0-7.59" stroke-width="1" />
			<path stroke="#191919" stroke-linecap="round" stroke-linejoin="round" d="M7.695 22.998a5.74 5.74 0 1 0 0-11.479a5.74 5.74 0 0 0 0 11.479" stroke-width="1" />
		</g>
	</svg>
`,
  },
  {
    img: "/images/landing/steps-slide-2.jpg",
    title: "فريق بحث وتطوير يضم خبراء، ومختبرات بمعايير احترافية",
    desc: `أنشأنا مختبرات بمعايير احترافية، طوّرنا نظامًا متكاملًا للابتكار لنقدم لك كل كوب شاي عصري بأعلى جودة.`,
    icon: `
	<svg xmlns="http://www.w3.org/2000/svg" width="50px" height="50px" viewBox="0 0 24 24">
		<g fill="none">
			<path fill="#F4AC29" d="M6.517 5.868a6.2 6.2 0 0 1-2.733.546a.524.524 0 0 0-.488.733l2.706 6.016a.518.518 0 0 0 .87.12a6.2 6.2 0 0 1 2.223-1.676L19.209 7.06a3.22 3.22 0 0 0 1.886-3.611a3.144 3.144 0 0 0-4.357-2.172z" />
			<path fill="#F4AC29" d="M21.097 3.444a3.16 3.16 0 0 0-.763-1.42a3.39 3.39 0 0 1-1.953 2.472L8.06 9.136a6.4 6.4 0 0 0-2.268 1.714a.523.523 0 0 1-.885-.121l1.094 2.434a.518.518 0 0 0 .87.12a6.2 6.2 0 0 1 2.223-1.676L19.209 7.06a3.22 3.22 0 0 0 1.888-3.616" />
			<path stroke="#191919" stroke-linecap="round" stroke-linejoin="round" d="M6.517 5.868a6.2 6.2 0 0 1-2.733.546a.524.524 0 0 0-.488.733l2.706 6.016a.518.518 0 0 0 .87.12a6.2 6.2 0 0 1 2.223-1.676L19.209 7.06a3.22 3.22 0 0 0 1.886-3.611a3.144 3.144 0 0 0-4.357-2.172z" stroke-width="1" />
			<path fill="#F4AC29" stroke="#191919" stroke-linecap="round" stroke-linejoin="round" d="M7.028 20.904a2.096 2.096 0 0 1-4.192 0c0-.827 1.072-2.347 1.682-3.143a.524.524 0 0 1 .827 0c.61.796 1.683 2.316 1.683 3.143" stroke-width="1" />
			<path stroke="#191919" stroke-linecap="round" stroke-linejoin="round" d="M8.804 11.733L7.516 8.866m4.156 1.578l-.86-1.912m3.727.623l-1.29-2.867m4.158 1.578l-.86-1.912" stroke-width="1" />
		</g>
	</svg>
`,
  },
  {
    img: "/images/landing/steps-slide-3.jpg",
    title: "توزيع ذكي وتبريد مثالي",
    desc: `بفضل نظام لوجستي مملوك لنا بالكامل، نتحكم بدرجة الحرارة بدقة من البستان حتى المتجر، لضمان أقصى درجات النضارة وثبات الجودة.`,
    icon: `
	<svg xmlns="http://www.w3.org/2000/svg" width="50px" height="50px" viewBox="0 0 128 128">
		<path fill="#fff" d="M127.56 41.19c0-1.78-1.45-3.23-3.23-3.23H55.16c-1.77 0-3.23 1.45-3.23 3.23v50.58h75.63z" />
		<path fill="#2f2f2f" d="M75.27 40.96h3.42v47.45h-3.42zm24.86 0h3.42v47.45h-3.42z" />
		<path fill="#F4AC29" d="M51.93 91.77V45.72H34.39c-3.16 0-7.77 2.4-8.48 7.9c-1.05 8.08-3.45 20.15-3.45 20.15L6.6 79.71S.44 81.7.44 89.28v15.15c0 2.05 2.52 4.85 4.42 4.85h119.47c1.78 0 3.23-1.45 3.23-3.23V91.77z" />
		<path fill="#fff" d="M47.99 70.16c0 1.78-1.45 3.23-3.23 3.23H32.12c-1.78 0-3.02-1.44-2.77-3.19l2.23-15.4c.25-1.76 1.92-3.2 3.69-3.2h9.49c1.77 0 3.23 1.46 3.23 3.23z" />
		<path fill="#2f2f2f" d="M37.54 109.29c0 6.21-5.04 11.24-11.25 11.24s-11.25-5.03-11.25-11.24c0-6.22 5.04-11.24 11.25-11.24s11.25 5.02 11.25 11.24m67.76 0c0 6.21-5.04 11.24-11.25 11.24S82.8 115.5 82.8 109.29c0-6.22 5.04-11.24 11.25-11.24s11.25 5.02 11.25 11.24" />
	</svg>
    `,
  },
  {
    img: "/images/landing/steps-slide-4.jpg",
    title: "رقابة صارمة على الجودة والنظافة",
    desc: `
    من خلال 6 مراحل فحص دقيقة، نضمن أعلى درجات الجودة والاتساق. نعتمد نظام تشغيل رقمي حديث مدعوم بفريق إشراف محترف، لمساعدة الفروع على العمل بكفاءة وتحقيق نمو مستدام.`,
    icon: `
	<svg xmlns="http://www.w3.org/2000/svg" width="50px" height="50px" viewBox="0 0 48 48">
		<g fill="none" stroke-width="3">
			<path fill="#F4AC29" d="M5.184 31.954C6.53 26.914 10.637 23 15.854 23c4.895 0 8.164 4.425 8.056 9.32l-.057 2.569a7 7 0 0 0 2.096 5.154l1.106 1.086c1.587 1.557.66 4.224-1.554 4.408c-2.867.237-6.41.463-9.501.463c-3.982 0-7.964-.375-10.451-.666c-1.47-.172-2.557-1.428-2.417-2.902c.32-3.363 1.175-7.188 2.052-10.478" />
			<path fill="#000" fill-rule="evenodd" d="M23.852 2.88a8 8 0 0 0-.716-.226a8 8 0 0 0-.734-.162c-1.002-.17-1.74.576-2.048 1.545c-1.75 5.533-3.818 13.022-5.428 19.005q.457-.042.928-.042c1.496 0 2.84.413 3.982 1.127l.688-2.47c1.508-5.409 3.23-11.58 4.324-16.415c.225-.992-.043-2.007-.996-2.361" clip-rule="evenodd" />
			<path stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="M5.184 31.954C6.53 26.914 10.637 23 15.854 23c4.895 0 8.164 4.425 8.056 9.32l-.057 2.569a7 7 0 0 0 2.096 5.154l1.106 1.086c1.587 1.557.66 4.224-1.554 4.408c-2.867.237-6.41.463-9.501.463c-3.982 0-7.964-.375-10.451-.666c-1.47-.172-2.557-1.428-2.417-2.902c.32-3.363 1.175-7.188 2.052-10.478" />
			<path stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="M20 24.018c1.68-6.23 3.462-12.468 4.853-18.773c.219-.993-.048-2.01-1-2.365a8 8 0 0 0-.717-.226a8 8 0 0 0-.734-.162c-1.002-.17-1.742.578-2.048 1.547c-1.96 6.191-3.542 12.522-5.213 18.792M45 45H35m7-8H32m7-8H29m-18.951 8.75c-.167 1.5 0 5.2 2 8m5-7.75s0 5 2.951 7.5" />
		</g>
	</svg>
    `,
  },
]);

// Init
const containerRef = ref<{ swiper?: Swiper } | null>(null);
const currentSlide = ref(0);

// Change CurrentSlide
onMounted(() => {
  const interval = setInterval(() => {
    const swiperEl = containerRef.value as { swiper?: Swiper } | null;

    if (swiperEl?.swiper) {
      if (typeof swiperEl.swiper.activeIndex !== "undefined") {
        currentSlide.value = swiperEl.swiper.activeIndex;
      }

      swiperEl.swiper.on("slideChange", () => {
        if (typeof swiperEl.swiper?.activeIndex !== "undefined") {
          currentSlide.value = swiperEl.swiper.activeIndex;
        }
      });

      clearInterval(interval);
    }
  }, 100);
});

// Method Change Slide
function goToSlide(index: number) {
  const swiper = containerRef.value?.swiper;
  if (swiper) {
    swiper.slideTo(index);
  }
}
</script>

<style scoped lang="scss">
.steps {
  //  Step 5
  .line {
    stroke-dasharray: 30% 200%;
    stroke-dashoffset: 120%;
    transition: all 0.8s ease;
  }

  //   Step 2
  &.step-1 {
    .line {
      stroke-dasharray: 65% 200%;
      stroke-dashoffset: 190%;
    }
  }

  //   Step 3
  &.step-2 {
    .line {
      stroke-dasharray: 100% 200%;
      stroke-dashoffset: 260%;
    }
  }

  //   Step 4
  &.step-3 {
    .line {
      stroke-dasharray: 146% 190%;
      stroke-dashoffset: 342%;
    }
  }
}

swiper-container {
  &::part(pagination) {
    bottom: 16px;
    text-align: center;
    left: unset;
    left: 0;
  }

  &::part(bullet) {
    width: 10.8;
    height: 10.8;
    background: transparent;
    border: 2px solid white;
    opacity: 1;
    margin: 0 4px;
  }

  &::part(bullet-active) {
    width: 10.8;
    height: 10.8;
    background: transparent;
    border: 2px solid white;
    opacity: 1;
    margin: 0 4px;
    background-color: white;
  }
}
</style>
