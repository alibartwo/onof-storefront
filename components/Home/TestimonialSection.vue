<template>
  <section class="py-24 px-4">
    <div class="max-w-screen-xl mx-auto">
      <div
        class="flex flex-col md:flex-row justify-between items-start md:items-center mb-10"
      >
        <div>
          <h3
            class="text-sm text-primary tracking-widest uppercase font-semibold"
          >
            Kullanıcı Yorumları
          </h3>
          <h2 class="text-3xl font-bold text-primary mt-2">
            Onbaby Kullananlar Ne Diyor?
          </h2>
          <p class="text-sm text-gray-500 mt-2 max-w-md">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius elementum tristique.
          </p>
        </div>
        <div class="mt-4 md:mt-0">
          <button
            class="bg-primary text-white px-4 py-2 rounded hover:bg-primary-dark transition text-sm"
          >
            Tüm Yorumları Gör →
          </button>
        </div>
      </div>

      <Swiper
        ref="testimonialSwiper"
        :modules="[Autoplay, Navigation]"
        :slides-per-view="1"
        :loop="true"
        :autoplay="{ delay: 5000, disableOnInteraction: false }"
        :navigation="{
          nextEl: '.custom-swiper-next',
          prevEl: '.custom-swiper-prev',
        }"
        class="rounded-xl overflow-hidden"
        @swiper="onSwiperInit"
      >
        <SwiperSlide>
          <div
            class="bg-secondary flex flex-col md:flex-row items-stretch gap-0 rounded-xl overflow-hidden"
          >
            <div class="flex-1 p-10">
              <p class="text-xl font-semibold text-gray-800 leading-relaxed">
                “ Etkinlik sırasında çocuklar özgürce boyama yapabiliyor, ben de
                temizlikle zaman kaybetmiyorum. Hijyen açısından da çok rahatım.
                Her sınıf için ideal! Çocukların yaratıcı yönlerini özgürce
                geliştirebildikleri, aynı zamanda bana da pratiklik sağlayan bu
                örtü sayesinde sınıf düzeni bozulmadan etkinlikleri
                tamamlayabiliyoruz. ”
              </p>
              <div
                class="mt-4 flex items-center space-x-2 text-yellow-500 text-lg"
              >
                <span>★★★★★</span>
              </div>
              <div class="mt-2">
                <p class="font-bold text-gray-800">Merve T.</p>
                <p class="text-sm text-gray-500">İstanbul, Türkiye</p>
              </div>
            </div>
            <div class="flex-1">
              <img
                src="/images/testimonials-1.png"
                alt="Müşteri yorumu"
                class="w-full h-full object-cover"
              />
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div
            class="bg-secondary flex flex-col md:flex-row items-stretch gap-0 rounded-3xl overflow-hidden"
          >
            <div class="flex-1 p-10">
              <p class="text-xl font-semibold text-gray-800 leading-relaxed">
                “ Temizlik derdi olmadan harika vakit geçirdik. Kullanımı çok
                kolay ve pratik. Çocuklar etkinlik boyunca rahat etti, ben de
                sonrasında temizlikle uğraşmadım. Bu tür ürünler sınıflar için
                büyük kolaylık sağlıyor. ”
              </p>
              <div
                class="mt-4 flex items-center space-x-2 text-yellow-500 text-lg"
              >
                <span>★★★★★</span>
              </div>
              <div class="mt-2">
                <p class="font-bold text-gray-800">Ahmet Y.</p>
                <p class="text-sm text-gray-500">Ankara, Türkiye</p>
              </div>
            </div>
            <div class="flex-1">
              <img
                src="/images/testimonials-1.png"
                alt="Müşteri yorumu"
                class="w-full h-full object-cover"
              />
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div
            class="bg-secondary flex flex-col md:flex-row items-stretch gap-0 rounded-3xl overflow-hidden"
          >
            <div class="flex-1 p-10">
              <p class="text-xl font-semibold text-gray-800 leading-relaxed">
                “ Her öğretmene tavsiye ederim. Güvenli ve pratik. Çocukların
                güvenliği için tasarlanmış olması ve kolay temizlenebilir yapısı
                sayesinde sınıf ortamında rahatlıkla kullanabiliyorum. Hem
                çocuklar hem ben çok memnunuz. ”
              </p>
              <div
                class="mt-4 flex items-center space-x-2 text-yellow-500 text-lg"
              >
                <span>★★★★★</span>
              </div>
              <div class="mt-2">
                <p class="font-bold text-gray-800">Elif K.</p>
                <p class="text-sm text-gray-500">İzmir, Türkiye</p>
              </div>
            </div>
            <div class="flex-1">
              <img
                src="/images/testimonials-1.png"
                alt="Müşteri yorumu"
                class="w-full h-full object-cover"
              />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>

      <!-- Custom navigation buttons below Swiper -->
      <div class="mt-6 flex justify-center gap-4">
        <button
          :class="[
            activeIndex === 0
              ? 'bg-secondary text-black'
              : 'bg-primary text-white',
            'rounded-full',
            'hover:brightness-110 hover:opacity-90 transition duration-300',
          ]"
          class="custom-swiper-prev w-12 h-12 flex items-center justify-center text-2xl"
          @click="testimonialSwiper?.swiper?.slidePrev()"
        >
          ‹
        </button>
        <button
          :class="[
            activeIndex === 2
              ? 'bg-secondary text-black'
              : 'bg-primary text-white',
            'rounded-full',
            'hover:brightness-110 hover:opacity-90 transition duration-300',
          ]"
          class="custom-swiper-next w-12 h-12 flex items-center justify-center text-2xl"
          @click="testimonialSwiper?.swiper?.slideNext()"
        >
          ›
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const testimonialSwiper = ref(null);
const activeIndex = ref(0);

function onSwiperInit(swiperInstance) {
  testimonialSwiper.value = swiperInstance;
  swiperInstance.on("slideChange", () => {
    activeIndex.value = swiperInstance.realIndex;
  });
}
</script>
