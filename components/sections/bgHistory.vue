<template>
    <div class="relative overflow-hidden">
      <!-- Bg Large -->
      <NuxtImg
        src="/images/brand-history/bg.png"
        class="w-full h-auto hidden md:block"
        
      />
      <!-- Bg small -->
      <NuxtImg
        src="/images/brand-history/bg-mobile.png"
        class="w-full h-auto md:hidden"
        
      />

      <!-- Layers -->
      <NuxtImg
        src="/images/brand-history/layer.png"
        class="absolute w-[71.35vw] md:w-[25%] start-[-20vw] md:start-[-5%] top-0 md:top-[35%] h-auto"
      />
      <NuxtImg
        src="/images/brand-history/layer2.png"
        class="absolute w-[67.55vw] md:w-[22%] end-[-12vw] md:end-[-5%] top-[118vw] md:top-[22%] h-auto"
      />

      <!-- Content -->
      <div
        class="absolute top-[60vw] md:top-[20%] md:start-1/2 text-center px-[8vw] md:px-0 md:w-1/2 md:[transform:translateX(-50%)]"
      >
        <h3
          class="mb-0 text-[5.33vw] md:text-[40px] font-semibold md:font-bold tracking-widest text-[var(--main-color-text)]"
        >
          品牌历程
        </h3>
        <h3
          class="mb-0 text-[3.73vw] md:text-[18px] md:font-normal text-[var(--main-color-text)]"
        >
          Brand Journey
        </h3>
        <p
          class="mt-[5.4vw] md:mt-[40px] text-[3.47vw] md:text-[18px] md:font-normal leading-[5.87vw] md:leading-[28px] text-[var(--main-color-text-2)] md:text-[var(--main-color-text)]"
        >
          2010年4月古茗成立，隶属于古茗科技集团有限公司，总部位于浙江温岭大溪。从创立至今，古茗一直保持市场份额整体呈增长趋势，历经近15年稳步发展现已成为茶饮行业的头部品牌之一。自创立以来，我们一直致力于成为“每天一杯喝不腻”的日常化国民茶饮，让每一位消费者，随时随地都能喝到新鲜、真材实料的茶饮。
        </p>
      </div>
    </div>
</template>

<script setup>
</script>

<style scoped lang="scss"></style>
