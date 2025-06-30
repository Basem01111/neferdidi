<!-- layouts/default.vue -->
<template>
  <div>
    <!-- Bg -->
    <NuxtImg class="h-auto w-[100vw]" src="/images/cooperate/bg.png" />

    <!-- Nav -->
    <div
      class="h-[13.3vw] md:h-[80px] bg-[#f9f9f6] flex justify-center items-center sticky md:relative top-0 z-5"
    >
      <a
        v-for="(item, i) in navData"
        :key="i"
        :href="'#' + item.id"
        type="button"
        :class="[
          `flex items-center bg-transparent justify-center relative text-[3.47vw] md:text-[14px] md:px-[150px] font-bold w-full md:w-[unset]`,
          `last:before:hidden before:content-[''] before:block before:w-[1px] before:h-[7.6vw] md:before:h-[30px] before:bg-[#ddd] before:absolute before:end-0`,
          currentSectionId == item.id
            ? `!text-white after:content-[''] after:block after:w-[23.33vw] md:after:w-[125px] after:h-[7.6vw] md:after:h-[35px] after:bg-[#c0ae8a] after:rounded-[3.8vw] md:after:rounded-[43px] after:absolute after:-z-[1]`
            : ``,
        ]"
      >
        {{ item.text }}
      </a>
    </div>

    <!-- Content -->
    <div id="0">
      <SectionsRequirements />
    </div>
    <div id="1">
      <SectionsFee />
    </div>
    <div id="2">
      <SectionsProcess />
    </div>
  </div>
</template>

<script lang="ts" setup>
useSeoMeta({
  title: 'Cooperate',
})
// Data
const navData = [
  {
    text: "加盟要求",
    id: "0",
  },
  {
    text: "合作费用",
    id: "1",
  },
  {
    text: "加盟流程",
    id: "2",
  },
];

// current Section
const currentSectionId = ref("0");

// Method Scroll
const onScroll = () => {
  const sections = Array.from(document.querySelectorAll("[id]")).filter((el) =>
    ["0", "1", "2"].includes(el.id)
  );
  let currentId = "";

  for (const section of sections) {
    const rect = section.getBoundingClientRect();
    if (rect.top <= 100 && rect.bottom > 100) {
      currentId = section.id;
      break;
    }
  }

  currentSectionId.value = currentId || "0";
};

// Set Event
onMounted(() => {
  window.addEventListener("scroll", onScroll);
  onScroll();
});

// Remove Event
onBeforeUnmount(() => {
  window.removeEventListener("scroll", onScroll);
});
</script>

<style scoped></style>
