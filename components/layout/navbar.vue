<template>
  <header
    class="flex w-full z-20 absolute md:fixed bg-[var(--main-color-bg-2)] p-[14.40px_4vw_14.40px_5vw] text-[var(--main-color-text)] md:px-[5%] md:py-[12.60px]"
  >
    <!-- Start Header -->
    <div class="flex items-center">
      <!-- Logo -->
      <NuxtImg
        src="/images/global/logo.png"
        class="object-contain w-[69.5px] h-[32.4px] md:w-[130px] md:h-[56px]"
        width="130"
        alt="Logo"
      />

      <!-- Links -->
      <ul class="list-links flex overflow-x-auto md:overflow-x-visible">
        <li>
          <NuxtLink to="/">
            <span>首页</span>
            <span> Home </span>
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/brandHistory">
            <span>品牌历程</span>
            <span> History </span>
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/cooperate">
            <span>加盟合作</span>
            <span> Franchise </span>
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/investors">
            <span>投资者关系</span>
            <span> Investor Relations </span>
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="#">
            <span>人才招聘</span>
            <span> Join Us </span>
          </NuxtLink>
        </li>
      </ul>
    </div>

    <!-- End Header -->
    <div
      class="flex-[1_1] text-end leading-[36px] m-2.5 whitespace-nowrap break-keep hidden md:flex gap-2.5 items-center justify-end"
    >
      <!-- Phone -->
      <span class="text-[var(--main-color-border)] text-base font-bold">
        加盟热线：4000-666-577
      </span>

      <!-- Icons Social -->
      <div class="flex gap-2.5 mx-[5px]">
        <UiLabelHover
          img-label="/images/nav/iconNav1.png"
          img-content="/images/global/qr.png"
          text="古茗官方微博"
        />
        <UiLabelHover
          img-label="/images/nav/iconNav2.png"
          img-content="/images/global/qr.png"
          text="古茗官方微博"
        />
        <UiLabelHover
          img-label="/images/nav/iconNav3.png"
          img-content="/images/global/qr.png"
          text="古茗官方微博"
        />
        <UiLabelHover
          img-label="/images/nav/iconNav4.png"
          img-content="/images/global/qr.png"
          text="古茗官方微博"
        />
      </div>

      <!-- Modal Btn -->
      <BtnsMain @click="showModal = !showModal">
        <NuxtImg
          src="/images/nav/btnNav.png"
          class="max-w-full max-h-full"
          alt="Content Button"
        />
      </BtnsMain>

      <!-- Modal -->
      <Teleport to="body">
        <UiModal :show-modal="showModal" @close="showModal = false">
          <UiBoxQrLink />
        </UiModal>
      </Teleport>
    </div>
  </header>
</template>

<script lang="ts" setup>
const showModal = ref(false);
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
    margin-left: 14.4px;

    @media (min-width: 640px) {
      margin-left: 30px;
    }

    span {
      display: block;
      color: var(--main-color-text);
      line-height: normal;
      transition: 300ms;

      &:nth-child(1) {
        font-weight: 700;
        font-size: 12.49px;

        @media (min-width: 640px) {
          font-size: 14px;
        }
      }

      &:nth-child(2) {
        font-weight: 700;
        font-size: 8px;
        
        @media (min-width: 640px) {
            font-weight: 500;
          font-size: 10px;
        }
      }
    }

    &.router-link-active {
      span {
        color: var(--main-color);
      }
    }
  }
}
</style>
