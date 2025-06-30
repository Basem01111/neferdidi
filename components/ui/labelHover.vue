<template>
    <div class="cursor-pointer relative group">
        <!-- Label -->
        <NuxtImg
        :src="imgLabel"
        width="36"
        height="36"
        :alt="text"
        />
        
        <!-- Content -->
        <div 
        class="pointer-events-none absolute w-[102px] h-[120px] bottom-[-137px] rounded-[8px] border border-black left-[-32px] z-[5] bg-white opacity-0 translate-y-[-10%] transition-all duration-200 ease-in-out group-hover:opacity-100 group-hover:translate-y-[12.8px] before:content-[''] before:block before:absolute before:w-[2px] before:h-[30px] before:bg-[var(--main-color-text)] before:top-[-1px] before:left-1/2 before:[transform:translate3d(-50%,-100%,0)]"
        >
            <NuxtImg
            :src="imgContent"
            class="m-[5px_5px_0] block"
            width="92"
            height="92"
            alt="Qr"
            />
            <p class="text-[var(--main-color-text)] text-xs font-medium text-center leading-5">{{ text }}</p>
         </div>
    </div>
</template>

<script setup>
defineProps({
    imgLabel: {
        type: String,
        default: ''
    },
    imgContent: {
        type: String,
        default: ''
    },
    text: {
        type: String,
        default: ''
    },
})
</script>

<style scoped lang="scss"></style>