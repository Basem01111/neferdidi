<template>
<div class="gap-3 my-2.5">
          <a
            v-for="(item, i) in linksSocial"
            :key="i"
            :href="item.link"
            target="_blank"
              :style="{ animationDelay: `${i * 100}ms` }"
            class="btn-social opacity-0 z-1 overflow-hidden relative border-2 w-[35px] h-[35px] flex justify-center items-center rounded-[50%]"
          >
            <Icon :icon="item.icon" width="22" class="text-black" />
          </a>
        </div>
</template>

<script setup>
// Imports
import { Icon } from "@iconify/vue";

const linksSocial = [
  {
    link: "https://www.tiktok.com/@neferdidimilkteashop",
    icon: "ic:baseline-tiktok",
  },
  {
    link: "https://www.instagram.com/neferdidimilktea/",
    icon: "lets-icons:insta-fill",
  },
  {
    link: "https://www.facebook.com/profile.php?id=61575076108487#",
    icon: "gg:facebook",
  },
  {
    link: "tel:569874",
    icon: "ic:round-phone",
  },
  {
    link: "https://api.whatsapp.com/send?phone=15551234567",
    icon: "ic:baseline-whatsapp",
  },
];
</script>

<style scoped lang="scss">
.btn-social {
    animation: fade-in-up 0.5s ease-out forwards;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: var(--main-color);
    z-index: -1;
    transform: scaleY(0);
    transform-origin: bottom;
    transition: transform 0.5s cubic-bezier(0.65, 0.05, 0.36, 1);
  }
  &:hover {
    border-color: var(--main-color);
    & > * {
      transition: 0.5s;
      color: white;
    }
    &::before {
      transform: scaleY(1);
      transform-origin: top;
    }
    &::after {
      top: 0;
      height: 0;
      animation: liquidWave 0.5s ease;
    }
  }
}
</style>
