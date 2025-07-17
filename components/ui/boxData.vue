<template>
  <div
    ref="box"
    class="tea-card [box-shadow:0_0_45px_0_#00000026] relative z-1 rounded-[2.67vw] md:rounded-[30px] overflow-hidden pb-[18.2vw] pt-[40px] md:pt-[80px] md:p-[5.6vw_7vw_3vw] bg-[var(--main-color-bg-2)]"
  >
    <!-- Layer boba -->
    <div class="tea-liquid"></div>
    <div class="milk-layer"></div>
    <div class="bubbles-container">
      <div class="bubble"></div>
      <div class="bubble"></div>
      <div class="bubble"></div>
      <div class="bubble"></div>
      <div class="bubble"></div>
      <div class="bubble"></div>
      <div class="bubble"></div>
      <div class="bubble"></div>
    </div>
    <!-- Content -->
    <div class="md:gap-[5vw] flex-col flex lg:flex-row">
      <div class="flex flex-col md:flex-[70%_1]">
        <!-- Title -->
        <h3
        ref="titleRef"
          class="font-bold text-white tracking-widest md:tracking-[unset] text-[25px] md:text-[40px] leading-[5.33vw] md:leading-[unset] text-center md:text-start"
        >
          {{ title }}
        </h3>

        <!-- Content -->
        <p
        ref="contentRef"
          class="mb-0 mx-3 md:mx-0 mt-[20px] md:mt-[10px] text-black bg-white/70 p-4 rounded-[20px] leading-[6vw] md:leading-[26px] text-[3.47vw] md:text-base text-center md:text-start relative backdrop-blur-[2px]"
        >
          {{ content }}
        </p>
      </div>

      <div class="flex-[30%_1] flex flex-col items-center md:items-end">
        <!-- Data -->
        <div
          class="flex m-[5.3vw_0] md:m-0 md:h-full flex-col justify-center w-full"
        >
          <div
            v-for="(item, i) in data"
            :key="i"
            ref="dataItems"
            class="border-b py-5 px-3 h-[calc(100%/3)] flex items-center justify-center flex-col border-white/50 last:border-none text-center"
          >
            <!-- Title Data -->
            <h5
              class="mb-0 text-center text-[20px] md:text-[25px] md:tracking-[unset] tracking-[0.05em] font-bold text-white"
            >
              {{ item.title }}
            </h5>

            <!-- Items Data -->
            <p
              v-for="(text, j) in item.text"
              :key="j"
              class="mb-0 first:text-[14px] text-[16px] md:text-sm font-normal text-white/85 leading-[1.5]"
            >
              {{ text }}
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- Btn -->
    <div v-if="btn?.text" class="flex justify-center mt-[30px]">
      <BtnsMain
        class="!ps-5 !py-[20px] hover:scale-110 border-white transition"
      >
        <NuxtLink
          v-if="btn?.text && !btn?.notLink"
          :to="btn?.link"
          type="button"
          class="flex gap-[2px] items-center w-auto cursor-pointer"
        >
          <span class="text-base transition text-white">
            {{ btn?.text }}
          </span>
          <Icon
            icon="iconoir:nav-arrow-left"
            class="transition text-white"
            width="24"
            height="24"
          />
        </NuxtLink>

        <button
          v-if="btn?.text && btn?.notLink"
          :to="btn?.link"
          type="button"
          class="flex gap-[2px] items-center w-auto cursor-pointer"
          @click="showModal = !showModal"
        >
          <span class="text-white text-base">
            {{ btn?.text }}
          </span>
          <Icon
            icon="iconoir:nav-arrow-left"
            class="text-white"
            width="24"
            height="24"
          />
        </button>
      </BtnsMain>

      <!-- Modal -->
      <Teleport to="body">
        <UiModal :show-modal="showModal" @close="showModal = false">
          <UiBoxQrLink />
        </UiModal>
      </Teleport>
    </div>
  </div>
</template>

<script setup>
import { Icon } from "@iconify/vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// props
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

// Show Modal
const showModal = ref(false);

// Gsap
const box = ref(null);
const titleRef = ref(null);
const contentRef = ref(null);
const dataItems = ref([]);
onMounted(() => {
  // Int
  gsap.registerPlugin(ScrollTrigger);
  
  // Box
  gsap.from(box.value, {
    scrollTrigger: {
      trigger: box.value,
      start: "top 70%",
      end: "bottom 30%",
      toggleActions: "play none none reverse",
    },
    opacity: 0,
    y: 50,
    duration: 1,
    ease: "power2.out",
  });

  // List Data
    gsap.from(dataItems.value, {
    scrollTrigger: {
      trigger: box.value,
      start: "top 65%",
      end: "bottom 30%",
      toggleActions: "play none none reverse",
    },
    opacity: 0,
    y: 30,
    duration: 1,
    ease: "power2.out",
    stagger: 0.2,
  });

 // Title
  gsap.from(titleRef.value, {
    scrollTrigger: {
      trigger: box.value,
      start: "top 75%",
      toggleActions: "play none none reverse",
    },
    opacity: 0,
    x: 20,
    duration: 1,
    ease: "power2.out",
  });

  // Conten
  gsap.from(contentRef.value, {
    scrollTrigger: {
      trigger: box.value,
      start: "top 75%",
      toggleActions: "play none none reverse",
    },
    opacity: 0,
    x: 20,
    duration: 1,
    ease: "power2.out",
  });
});
</script>

<style scoped lang="scss">
.tea-card {
  $card-width: 250px;
  $card-height: 350px;
  $tea-color: #d4a76aba;
  $milk-color: rgba(255, 255, 255, 0.9);
  $cup-rim: 20px;
  overflow: hidden;

  .bubbles-container {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
    overflow: hidden;

    .bubble {
      position: absolute;
      background-color: #4e341d;
      border-radius: 50%;
      animation: float 6s infinite ease-in-out;
      z-index: -1;
      opacity: 0.5;
      filter: blur(0.5px);

      &:nth-child(1) {
        width: 50px;
        height: 50px;
        left: 15%;
        bottom: 10%;
        animation-delay: 0s;
        animation-duration: 8s;
      }

      &:nth-child(2) {
        width: 40px;
        height: 40px;
        right: 20%;
        bottom: 15%;
        animation-delay: 1s;
        animation-duration: 7s;
      }

      &:nth-child(3) {
        width: 30px;
        height: 30px;
        left: 50%;
        top: 50%;
        animation-delay: 2s;
        animation-duration: 6s;
      }

      &:nth-child(4) {
        width: 35px;
        height: 35px;
        right: 30%;
        top: 40%;
        animation-delay: 1.5s;
        animation-duration: 7s;
      }

      &:nth-child(5) {
        width: 20px;
        height: 20px;
        left: 20%;
        top: 30%;
        animation-delay: 3s;
        animation-duration: 5s;
      }

      &:nth-child(6) {
        width: 25px;
        height: 25px;
        right: 15%;
        top: 60%;
        animation-delay: 2.5s;
        animation-duration: 6s;
      }

      &:nth-child(7) {
        width: 15px;
        height: 15px;
        left: 40%;
        bottom: 30%;
        animation-delay: 4s;
        animation-duration: 4s;
      }

      &:nth-child(8) {
        width: 18px;
        height: 18px;
        right: 40%;
        top: 70%;
        animation-delay: 3.5s;
        animation-duration: 5s;
      }
    }
  }
  .tea-liquid {
    position: absolute;
    top: $cup-rim;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      to bottom,
      rgba($tea-color, 0.95) 0%,
      $tea-color 100%
    );
    z-index: -1;
  }

  .milk-layer {
    position: absolute;
    top: $cup-rim;
    left: 0;
    right: 0;
    height: 60px;
    background: linear-gradient(
      to bottom,
      $milk-color,
      rgba(255, 255, 255, 0.3)
    );
    border-radius: 0 0 30% 30%;
    animation: milk-flow 4s infinite ease-in-out;
    z-index: -1;
  }
}

@keyframes float {
  0%,
  100% {
    transform: translateY(0) translateX(0) rotate(0deg);
  }
  25% {
    transform: translateY(-20px) translateX(5px) rotate(5deg);
  }
  50% {
    transform: translateY(-40px) translateX(-5px) rotate(-5deg);
  }
  75% {
    transform: translateY(-30px) translateX(5px) rotate(3deg);
  }
}

@keyframes milk-flow {
  0% {
    transform: translateY(0) scaleX(1);
  }
  50% {
    transform: translateY(-10px) scaleX(1.05);
  }
  100% {
    transform: translateY(0) scaleX(1);
  }
}
</style>
