
<template>
  <div>
    <!-- Bg -->
    <NuxtImg class="h-auto w-[100vw]" src="/images/cooperate/bg.png" />

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
  title: 'الامتياز التجاري',
})

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
