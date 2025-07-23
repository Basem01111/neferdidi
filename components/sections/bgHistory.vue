<template>
  <div class="relative pb-[40px] md:pb-[80px]">
    <!-- Svg Bg -->
    <svg
      width="100%"
      style="height: auto"
      id="svg"
      viewBox="0 0 1440 490"
      xmlns="http://www.w3.org/2000/svg"
      class="transition duration-300 ease-in-out delay-150 absolute bottom-0 left-0 right-0"
    >
      <path
        d="M 0,500 L 0,125 C 126.07142857142858,85.60714285714286 252.14285714285717,46.21428571428571 376,67 C 499.85714285714283,87.78571428571429 621.4999999999999,168.75 740,168 C 858.5000000000001,167.25 973.8571428571429,84.78571428571428 1090,64 C 1206.142857142857,43.214285714285715 1323.0714285714284,84.10714285714286 1440,125 L 1440,500 L 0,500 Z"
        stroke="none"
        stroke-width="0"
        fill="#f6f2e6"
        fill-opacity="0.53"
        class="transition-all duration-300 ease-in-out delay-150 path-0"
      ></path>
      <path
        d="M 0,500 L 0,291 C 143.96428571428572,308.67857142857144 287.92857142857144,326.35714285714283 396,313 C 504.07142857142856,299.64285714285717 576.25,255.25 688,257 C 799.75,258.75 951.0714285714287,306.64285714285717 1083,320 C 1214.9285714285713,333.35714285714283 1327.4642857142858,312.17857142857144 1440,291 L 1440,500 L 0,500 Z"
        stroke="none"
        stroke-width="0"
        fill="#f6f2e6"
        fill-opacity="1"
        class="transition-all duration-300 ease-in-out delay-150 path-1"
      ></path>
    </svg>

    <!-- Content -->
    <UiContainer class="relative overflow-hidden">
      <!-- Content -->
      <div class="text-center mx-auto md:w-1/2">
        <h3
          class="mb-0 text-[30px] md:text-[40px] font-bold tracking-widest text-[var(--main-color-text)]"
        >
          من نحن
        </h3>
        <p
          class=" text-shadow-2xs mt-[16px] md:mt-[25px] text-[16px] md:text-[18px] font-normal leading-[5.87vw] md:leading-[28px] text-[var(--main-color-text-2)]"
        >
          تأسست شركة "قو مينغ" في أبريل 2010، وهي تابعة لمجموعة "قو مينغ
          تكنولوجي" المحدودة، ويقع مقرها الرئيسي في مدينة دا شي، وينلينغ،
          بمقاطعة تشجيانغ. منذ تأسيسها وحتى الآن، حافظت "قو مينغ" على اتجاه نمو
          مستمر في حصتها السوقية، وبعد ما يقرب من 15 عامًا من التطور المستقر،
          أصبحت واحدة من العلامات الرائدة في صناعة مشروبات الشاي. ومنذ بدايتنا،
          نكرّس جهودنا لأن نكون "مشروب الشاي اليومي الذي لا يُملّ منه"، لنضمن
          لكل مستهلك إمكانية الاستمتاع بمشروب شاي طازج مصنوع من مكونات حقيقية في
          أي وقت وأي مكان.
        </p>
      </div>
    </UiContainer>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.path-0 {
  animation: pathAnim-0 4s;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
}
.path-1 {
  animation: pathAnim-1 4s;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
}

</style>
