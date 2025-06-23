<template>
  <section class="relative py-12 px-4">
    <div
      class="bg-secondary rounded-3xl max-w-screen-xl mx-auto px-12 py-12 flex flex-col md:flex-row items-stretch justify-between gap-8 relative h-full"
    >
      <div class="md:w-5/12 z-0 flex flex-col justify-between h-full">
        <div class="flex-grow md:h-[330px]">
          <h3
            class="text-sm text-primary tracking-widest uppercase font-semibold"
          >
            Blog
          </h3>
          <h2 class="text-3xl font-bold text-primary mt-2">
            Güncel Yazılarla Yanınızdayız
          </h2>
          <p class="text-gray-500 mt-2 max-w-md">
            Çocuk gelişimi, hijyen, pratik öneriler ve daha fazlası blog
            sayfamızda.
          </p>
          <div class="mt-6">
            <button
              class="bg-primary text-white px-5 py-3 rounded hover:bg-primary-dark transition text-sm"
            >
              Tümünü Gör →
            </button>
          </div>
        </div>
        <div class="flex gap-4 pt-8 self-start">
          <button
            :class="
              blogIndex === 0
                ? 'bg-secondary text-black'
                : 'bg-primary text-white'
            "
            class="w-12 h-12 flex items-center justify-center text-2xl rounded-full hover:brightness-110 hover:opacity-90 transition duration-300"
            @click="blogSwiper?.slidePrev()"
          >
            ‹
          </button>
          <button
            :class="
              blogIndex === blogs.length - 1
                ? 'bg-secondary text-black'
                : 'bg-primary text-white'
            "
            class="w-12 h-12 flex items-center justify-center text-2xl rounded-full hover:brightness-110 hover:opacity-90 transition duration-300"
            @click="blogSwiper?.slideNext()"
          >
            ›
          </button>
        </div>
      </div>

      <div class="md:w-7/12 relative z-10">
        <Swiper
          ref="swiperRef"
          :modules="[Autoplay, Navigation]"
          :slides-per-view="1"
          :space-between="12"
          :loop="true"
          :autoplay="{ delay: 5000, disableOnInteraction: false }"
          :navigation="{
            nextEl: '.custom-swiper-next',
            prevEl: '.custom-swiper-prev',
          }"
          :breakpoints="{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 2 },
          }"
          class="pt-4"
          @swiper="onSwiperInit"
          @slide-change="onSlideChange"
        >
          <SwiperSlide v-for="(blog, i) in blogs" :key="i" class="pr-4 pb-1">
            <div
              class="rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-transform transform hover:scale-[1.01] bg-white"
            >
              <NuxtImg
                :src="blog.image"
                :alt="blog.title"
                width="600"
                height="300"
                class="w-full h-[300px] object-cover rounded-2xl"
              />
              <div class="p-4">
                <h3 class="text-lg font-semibold text-gray-900 leading-tight">
                  {{ blog.title }}
                </h3>
                <p class="text-sm text-gray-500 mt-2">{{ blog.date }}</p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const blogs = [
  {
    title: "Kullan At Ürünler Ne Kadar Hijyenik?",
    date: "17 Haziran 2025",
    image: "/images/blog-1.png",
  },
  {
    title: "Çocuklar İçin Güvenli Etkinlik Alanları",
    date: "10 Haziran 2025",
    image: "/images/blog-2.png",
  },
  {
    title: "Sınıf Hijyeninde Yeni Trendler",
    date: "3 Haziran 2025",
    image: "/images/blog-1.png",
  },
];

const swiperRef = ref(null);
const blogSwiper = ref(null);
const blogIndex = ref(0);

function onSwiperInit(swiper) {
  blogSwiper.value = swiper;
  blogIndex.value = swiper.realIndex;
}

function onSlideChange(swiper) {
  blogIndex.value = swiper.realIndex;
}
</script>

<style scoped>
.swiper {
  padding-top: 1rem;
}
</style>
