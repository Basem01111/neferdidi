<template>
  <footer
    class="bg-[var(--main-color-bg-3)] text-white p-[13vw_5vw] md:p-[85px_0_89px]"
  >
    <!-- Logo -->
    <NuxtImg
      src="/images/global/logo.png"
      class="w-[69px] block md:mx-auto md:w-[157px] h-auto invert mb-[36px] md:mb-0"
    />

    <!-- Qr -->
    <ul
      class="list-none hidden md:flex justify-center items-center gap-[30px] !mt-[70px] !mb-[90px]"
    >
      <li
        class="w-[91px] transition-all duration-500 ease-in-out scla hover:[transform:scale(1.5)]"
      >
        <NuxtImg
          src="/images/footer/qr1.png"
          class="w-[91px] h-auto"
          alt="Qr"
        />
        <div
          class="flex text-center justify-center font-medium text-xs mt-[10px] leading-[16px] align-top"
        >
          <NuxtImg
            src="/images/footer/icon-qr1.png"
            class="w-auto h-4"
            alt="Qr"
          />
          <span class="align-top ms-[10px]">加盟合作</span>
        </div>
      </li>
      <li
        class="w-[91px] transition-all duration-500 ease-in-out scla hover:[transform:scale(1.5)]"
      >
        <NuxtImg
          src="/images/footer/qr2.jpg"
          class="w-[91px] h-auto"
          alt="Qr"
        />
        <div
          class="flex text-center justify-center font-medium text-xs mt-[10px] leading-[16px] align-top"
        >
          <NuxtImg
            src="/images/footer/icon-qr2.png"
            class="w-auto h-4"
            alt="Qr"
          />
          <span class="align-top ms-[10px]">加盟合作</span>
        </div>
      </li>
      <li
        class="w-[91px] transition-all duration-500 ease-in-out scla hover:[transform:scale(1.5)]"
      >
        <NuxtImg
          src="/images/footer/qr3.png"
          class="w-[91px] h-auto"
          alt="Qr"
        />
        <div
          class="flex text-center justify-center font-medium text-xs mt-[10px] leading-[16px] align-top"
        >
          <NuxtImg
            src="/images/footer/icon-qr3.png"
            class="w-auto h-4"
            alt="Qr"
          />
          <span class="align-top ms-[10px]">加盟合作</span>
        </div>
      </li>
      <li
        class="w-[91px] transition-all duration-500 ease-in-out scla hover:[transform:scale(1.5)]"
      >
        <NuxtImg
          src="/images/footer/qr4.png"
          class="w-[91px] h-auto"
          alt="Qr"
        />
        <div
          class="flex text-center justify-center font-medium text-xs mt-[10px] leading-[16px] align-top"
        >
          <NuxtImg
            src="/images/footer/icon-qr4.png"
            class="w-auto h-4"
            alt="Qr"
          />
          <span class="align-top ms-[10px]">加盟合作</span>
        </div>
      </li>
    </ul>

    <!-- Links -->
    <ul
      class="list-none md:grid-cols-[unset] md:grid-rows-[unset] grid-cols-6 grid-rows-2 grid md:flex justify-center items-center md:gap-[30px] !mb-[14.4px] md:!m-[0_0_80px] h-[30vw] md:h-[unset]"
    >
      <li class="relative text-xs md:text-center text-start col-span-2 row-start-1 row-end-2 after:[content:''] md:after:[content:unset] after:block after:w-0 after:h-[8vw] after:absolute after:top-0 after:right-0 after:border-e after:border-[rgba(255,255,255,0.3)]">
        <h5 class="font-medium opacity-50 mb-[4px] text-[3.2vw] md:text-[10px] tracking-[0.05em] md:tracking-[unset]">加盟电话</h5>
        <p class="font-bold text-[3.2vw] md:text-xs">4000-666-577</p>
      </li>
      <li class="ps-[6vw] md:ps-0 text-xs md:text-center text-start col-span-4 row-start-1 row-end-2">
        <h5 class="font-medium opacity-50 mb-[4px] text-[3.2vw] md:text-[10px] tracking-[0.05em] md:tracking-[unset]">媒体联系</h5>
        <p class="font-bold text-[3.2vw] md:text-xs">chenhuiliang@gumingnc.com</p>
      </li>
      <li class="relative text-xs md:text-center text-start col-span-3 row-start-2 row-end-3  after:[content:''] md:after:[content:unset] after:block after:w-0 after:h-[8vw] after:absolute after:top-0 after:right-0 after:border-e after:border-[rgba(255,255,255,0.3)]">
        <h5 class="font-medium opacity-50 mb-[4px] text-[3.2vw] md:text-[10px] tracking-[0.05em] md:tracking-[unset]">供应商合作</h5>
        <p class="font-bold text-[3.2vw] md:text-xs">sourcing@gumingnc.com</p>
      </li>
      <li class="ps-[6vw] md:ps-0 text-xs md:text-center text-start col-span-3 row-start-2 row-end-3">
        <h5 class="font-medium opacity-50 mb-[4px] text-[3.2vw] md:text-[10px] tracking-[0.05em] md:tracking-[unset]">品牌合作</h5>
        <p class="font-bold text-[3.2vw] md:text-xs">brand@gumingnc.com</p>
      </li>
    </ul>

    <!-- Copyright  -->
     <div class="text-xs font-medium md:text-center">
        Copyright © 2021 GOODME 浙ICP备19008165号-1
     </div>
    <div class="mt-[14.4px] md:mt-[12px] flex md:justify-center items-center gap-[6px] font-bold text-[11.52px] md:text-xs md:text-center leading-[32px]">
        <NuxtImg src="/images/footer/img-footer.png" class="h-[19px] md:h-auto w-auto"/>
        浙公网安备33108102001114
    </div>
    <NuxtImg src="/images/footer/img-footer2.png" class="w-[103px] h-auto block mx-auto mt-[5px]"/>
  </footer>
</template>

<script lang="ts" setup></script>

<style scoped lang="scss"></style>
