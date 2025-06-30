<template>
  <div
    class="bg-[var(--main-color-bg-2)] flex-col-reverse flex md:flex-row rounded-[2.67vw] md:rounded-[30px] w-[89.2vw] md:w-auto m-[0_auto] md:m-[0_8.8vw] pb-[18.2vw] md:p-[5.6vw_7vw]"
  >
    <!-- Start Side -->
    <div class="flex flex-col md:pe-[10.3vw] md:flex-[70%_1]">
      <!-- Title -->
      <h3
        class="order-1 font-semibold text-[var(--main-color-text)] tracking-widest md:tracking-[unset] text-[5.33vw] md:text-[40px] leading-[5.33vw] md:leading-[unset] text-center md:text-start"
      >
        {{ title }}
      </h3>

      <!-- Content -->
      <p
        class="order-3 md:order-2 mb-0 p-[0_6vw] md:pt-[32px] md:p-0 text-[var(--main-color-text-2)] md:text-[var(--main-color-text)] leading-[6vw] md:leading-[26px] text-[3.47vw] md:text-base text-center md:text-start"
      >
        {{ content }}
      </p>

      <!-- Data -->
      <div class="order-2 md:order-3 flex m-[5.3vw_0] md:m-0 md:mt-[34px] justify-center">
        <div v-for="(item, i) in data" :key="i" class="border-e border-[var(--main-color-border-3)] last:border-none text-center flex-[1_1]">
          <!-- Title Data -->
          <h5 class="mb-0 text-center text-[4.27vw] md:text-base md:tracking-[unset] tracking-[0.05em] font-semibold text-[var(--main-color)]">{{ item.title }}</h5>

          <!-- Items Data -->
          <p v-for="(text, j) in item.text" :key="j" class="mb-0 first:text-[3.47vw] text-[2.6vw] md:text-sm font-normal text-[var(--main-color-text-2)] leading-[1.5]">
            {{ text }}
          </p>
        </div>
      </div>
    </div>

    <!-- End Side -->
    <div class="flex-[30%_1] flex flex-col items-center md:items-end">
      <!-- Img -->
      <div>
        <NuxtImg
          :src="img"
          class="w-[89px] md:w-[160px] h-auto md:mt-[60px] m-[18.4vw_auto_5.6vw] md:m-0"
          :class="{'!w-[15.09vw] md:!w-[107px] !m-[18.4vw_auto_5.6vw] md:!m-0': styleBox == '2'}"
        />
      </div>

      <!-- Btn -->
      <div
        class="hidden md:flex gap-[15px] items-center w-auto cursor-pointer mt-[40px]"
        :class="{'!mt-[50px]': styleBox == '2'}"
      >
        <span class="text-[var(--main-color-text)] text-base">
          {{ btn?.text }}
        </span>
        <NuxtLink
          :to="btn?.link"
          type="button"
          class="bg-transparent border-0 outline-0 cursor-pointer transition-all duration-400 ease-in-out hover:translate-x-[10px]"
        >
          <NuxtImg
            src="/images/global/arrow-right.png"
            class="h-[33px] w-auto"
          />
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  styleBox: {
    type: String,
    default: "",
  },
  title: {
    type: String,
    default: "",
  },
  content: {
    type: String,
    default: "",
  },
  data: {
    type: Array,
    default: () => [],
  },
  img: {
    type: String,
    default: "",
  },
  btn: {
    type: Object,
    default: () => {},
  },
});
</script>

<style scoped lang="scss"></style>
