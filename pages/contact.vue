<template>
  <div
    class="bg-[var(--main-color-bg)] py-[40px] md:py-[80px] relative z-1 overflow-hidden"
  >
    <!-- Layers square -->
    <div
      class="-z-1 absolute inset-0 grid grid-cols-[repeat(auto-fill,minmax(100px,1fr))]"
    >
      <div
        v-for="n in 500"
        :key="n"
        class="aspect-square border-[0.5px] border-white/50"
      ></div>
    </div>
    <UiContainer>
      <div
        class="bg-white rounded-3xl overflow-hidden grid grid-cols-1 md:grid-cols-12 shadow-2xl"
      >
        <div
          class="bg-gray-900 md:col-span-4 p-10 text-white flex flex-col relative z-1 before:content-[''] before:absolute before:opacity-50 before:-z-1 before:left-0 before:top-0 before:w-full before:h-full before:bg-black"
        >
          <NuxtImg
            src="/images/landing/steps-slide-2.jpg"
            class="absolute left-0 top-0 w-full h-full object-cover -z-2"
          />
          <h3
            class="text-3xl sm:text-4xl leading-normal font-extrabold tracking-tight"
          >
            تواصل <span class="text-[var(--main-color)]">معنا</span>
          </h3>
          <p class="mt-4 mb-5 leading-7 text-gray-100">
            سواء كنت ترغب في معرفة المزيد عن فروعنا، تقديم اقتراح، أو مشاركة
            تجربتك معنا لا تتردد في التواصل. املأ النموذج وسنرد عليك في أقرب وقت
            ممكن.
          </p>
          <div class="flex items-center mt-auto gap-1">
            <Icon
              icon="ic:round-phone"
              width="22"
              class="text-[var(--main-color)]"
            />
            <span class="text-sm">01111111111</span>
          </div>
          <div class="flex items-center mt-4 gap-1">
            <Icon
              icon="ic:baseline-whatsapp"
              width="22"
              class="text-[var(--main-color)]"
            />
            <span class="text-sm">01111111111</span>
          </div>
        </div>
        <form class="md:col-span-8 p-10 relative z-1">
          <!-- Img -->
          <NuxtImg
            src="/images/landing/hero.webp"
            class="w-[50%] h-auto block absolute left-1/2 bottom-0 -translate-x-1/2 opacity-45 -z-1"
          />
          <div class="flex flex-wrap -mx-3 mb-6">
            <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <FormLabel label="الأسم الأول" />
              <FormInput v-model="form.firstName" placeholder="الأسم الأول" />
            </div>
            <div class="w-full md:w-1/2 px-3">
              <FormLabel label="الأسم الأخير" />
              <FormInput v-model="form.lastName" placeholder="الأسم الأخير" />
            </div>
          </div>
          <div class="flex flex-wrap -mx-3 mb-6">
            <div class="w-full px-3">
              <FormLabel label="البريد الألكتروني" />
              <FormInput
                v-model="form.email"
                type="email"
                placeholder="البريد الألكتروني"
              />
            </div>
          </div>

          <div class="flex flex-wrap -mx-3 mb-6">
            <div class="w-full px-3">
              <FormLabel label="رسالتك" />
              <FormTextarea
                v-model="form.message"
                placeholder="قم بكتابة الرسالة هنا..."
              />
            </div>
            <div class="flex justify-end w-full px-3">
              <button
                class="shadow cursor-pointer bg-[var(--main-color)] transition hover:bg-[var(--main-color)]/80 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-6 rounded"
                type="submit"
              >
                أرسل الرسالة
              </button>
            </div>
          </div>
        </form>
      </div>
    </UiContainer>
  </div>
</template>

<script lang="ts" setup>
// Imports
import { Icon } from "@iconify/vue";

// Seo Meta
useSeoMeta({
  title: "تواصل معنا",
});

// Data Form
const form = reactive({
  firstName: "",
  lastName: "",
  email: "",
  message: "",
});
</script>

<style scoped></style>
