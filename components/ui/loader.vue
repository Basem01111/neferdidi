<template>
    <div class=" hidden lg:block loader z-50 bg-[var(--main-color-bg-2)] text-[var(--main-color-text)] inset-0 fixed" :class="count >= 100 ? 'hid' : ''">
        
        <div
        class="words absolute left-1/2 top-1/2 -translate-1/2 text-[9rem]  w-full text-center font-extrabold">
        <span>每</span>
        <span>天</span>
        <span>一</span>
        <span>杯</span>
        <span>喝</span>
        <span>不</span>
        <span>腻</span>
    </div>
    <NuxtImg class="icon3 absolute left-[27%] top-[51%]" src="/images/loader/loader2.png" width="162" height="auto" alt="Icon Loader" />
    <NuxtImg class="icon2 absolute left-[45%] top-[34%]" src="/images/loader/loader2.png" width="162" height="auto" alt="Icon Loader" />
    <NuxtImg class="icon1 absolute left-[56%] top-[34%]" src="/images/loader/loader1.png" width="155" height="auto" alt="Icon Loader" />

    <div class="progress-group max-w-[90%] gap-[5px] w-[490px] absolute top-[85%] left-[50%] -translate-x-1/2 flex flex-col items-end">
        <span class=" text-4xl text-[var(--main-color-text)]">{{count}}%</span>
        <div class="progress w-full border border-[var(--main-color-text)] h-[10px] rounded-4xl">
            <div class="progress-loading bg-[var(--main-color-text)] h-full" :style="`width: ${count}%;`"/>
        </div>
    </div>
    </div>
</template>

<script setup>
const count = ref(0)
onMounted(()=> {
    const timeCount = setInterval(() => {
    if(count.value >= 100) {
        return clearInterval(timeCount);
    } else {
        count.value += 1;
    }
}, 8);
})
</script>

<style scoped lang="scss">
// Loader
.loader {
        transition:
    transform 0.5s ease,
    opacity 0.5s ease 0s;

  opacity: 1;
  transform: translateY(0);
  pointer-events: auto;
  position: fixed;
    &.hid {
    transform: translateY(-100%);
    opacity: 0;
    pointer-events: none;
    z-index: -1;
    }

    // Icons
.icon1 {
    animation: animeIcon1 3s forwards;
}
.icon3 {
    animation: animeIcon3 3s forwards;
}

// Words
.words {
    span {
        opacity: 0;
        transform: translatex(50%);
        animation: animeWords 1.5s forwards;
        display: inline-block;
        &:nth-child(1) {
            animation-delay: 0s;
        }

        &:nth-child(2) {
            animation-delay: 0.2s;
        }

        &:nth-child(3) {
            animation-delay: 0.4s;
        }

        &:nth-child(4) {
            animation-delay: 0.6s;
        }

        &:nth-child(5) {
            animation-delay: 0.8s;
        }

        &:nth-child(6) {
            animation-delay: 1s;
        }

        &:nth-child(7) {
            animation-delay: 1.2s;
        }
    }

}
}


// keyframes
@keyframes animeIcon1 {
    to {
        transform: translateY(78px);
    }
}
@keyframes animeIcon3 {
    to {
        transform: translateY(78px);
    }
}
@keyframes animeWords {
    to {
        opacity: 1;
        transform: translateY(0);
    }
}
</style>