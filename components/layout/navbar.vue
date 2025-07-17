<template>
  <header
    class="w-full h-[61.2px] md:h-[81.2px] z-20 fixed bg-[var(--main-color-bg-2)] p-[14.40px_0] text-[var(--main-color-text)] md:py-[12.60px]"
  >
    <UiContainer class="flex w-full items-center justify-between">
      <!-- Logo -->
      <NuxtImg
        src="/images/global/logo.webp"
        class="object-contain w-[90px] h-auto md:w-[107px] md:h-auto me-auto"
        alt="Logo"
      />

      <!-- Btn Menu Mobile -->
      <button
        type="button"
        class="flex md:hidden justify-end w-full"
        @click="active = !active"
      >
        <Icon icon="line-md:menu" width="33" class="h-auto" />
      </button>

      <!-- navbar -->
      <ul
        :class="[
          'list-links flex transition',
          '[box-shadow:0_0_100px_0_#00000063] md:[box-shadow:unset] fixed md:mx-auto md:static start-0 top-0 min-h-screen md:min-h-[unset] w-[80%] md:w-[unset] bg-white gap-[1px] md:gap-[30px] md:bg-[unset] z-21 md:z-[unset] flex-col md:flex-row translate-x-[105%] md:!translate-x-0',
          active ? '!translate-x-0' : '',
        ]"
      >
        <!-- Btn CLose Mobile -->
        <li class="p-4">
          <button
            type="button"
            class="flex md:hidden justify-end w-full"
            @click="active = !active"
          >
            <Icon icon="mingcute:close-fill" width="24" height="24" />
          </button>
        </li>

        <!-- Links -->
        <li
          v-for="(link, index) in links"
          :key="index"
          class="w-full md:w-auto text-center md:text-auto"
        >
          <NuxtLink
            :to="link.to"
            class="relative border-b border-gray-200 px-4 py-3 md:p-0 transition hover:bg-black/5 md:hover:bg-transparent md:border-0 hover:before:!opacity-100 md:before:content-[''] before:content-[none] before:bg-black/5 before:transition before:opacity-0 before:absolute before:left-1/2 before:top-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:w-[calc(100%+20px)] before:h-[calc(100%+20px)] before:rounded-4xl"
            @click="active = false"
          >
            <span>{{ link.label }}</span>
          </NuxtLink>
        </li>

        <!-- Icons Social Mobile-->
        <li class="lg:hidden block">
          <UiSocialBtns class="flex justify-center mt-4"/>
        </li>
      </ul>

      <!-- Icons Social -->
      <UiSocialBtns class="ms-auto hidden lg:flex" />
    </UiContainer>
  </header>
</template>

<script lang="ts" setup>
// Imports
// Imports
import { Icon } from "@iconify/vue";

// Active Mobile Menu
const active = ref(false);

// Data
const links = [
  { to: "/", label: "الرئيسية" },
  { to: "/about", label: "من نحن" },
  { to: "/cooperate", label: "الامتياز التجاري" },
  { to: "/contact", label: "تواصل معنا" },
];
</script>

<style scoped lang="scss">
.list-links {
  &::-webkit-scrollbar {
    width: 0;
    height: 0;
  }

  /* Track */
  &::-webkit-scrollbar-track {
    background: transparent;
  }

  /* Handle */
  &::-webkit-scrollbar-thumb {
    background: transparent;
  }

  /* Handle on hover */
  &::-webkit-scrollbar-thumb:hover {
    background: transparent;
  }

  a {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    white-space: nowrap;
    word-break: keep-all;
    display: block;
    color: var(--main-color-text);
    line-height: normal;
    transition: 300ms;
    font-weight: 700;
    font-size: 12.49px;

    @media (min-width: 640px) {
      font-size: 16px;
    }

    &.router-link-active {
      span {
        color: var(--main-color);
      }
    }
  }
}
</style>
