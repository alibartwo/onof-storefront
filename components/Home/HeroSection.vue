<template>
  <section class="py-4 md:py-10 min-h-[500px]">
    <div
      class="max-w-screen-xl mx-auto grid grid-cols-12 gap-4 md:gap-4 px-4 items-center"
    >
      <!-- Left content -->
      <div
        class="col-span-12 md:col-span-4 bg-secondary rounded-3xl p-4 md:p-8 flex flex-col gap-1 h-full justify-between"
      >
        <!-- Badge -->
        <div class="flex items-center gap-3">
          <div class="flex -space-x-2">
            <NuxtImg
              src="/images/testimonials/avatar1.jpg"
              alt="avatar1"
              width="32"
              height="32"
              class="rounded-full border border-gray-600 object-cover"
            />

            <NuxtImg
              src="/images/testimonials/avatar2.jpg"
              alt="avatar2"
              width="32"
              height="32"
              class="rounded-full border border-gray-600 object-cover"
            />

            <NuxtImg
              src="/images/testimonials/avatar3.jpg"
              alt="avatar3"
              width="32"
              height="32"
              class="rounded-full border border-gray-600 object-cover"
            />
          </div>
          <p class="text-sm font-light text-primary">
            50.000+ etkinlikte tercih edildi.
          </p>
        </div>

        <!-- Heading, Button, Info group -->
        <div class="flex flex-col gap-4">
          <h1 class="text-xl md:text-2xl font-semibold text-primary">
            Yemek, etkinlik, oyun... <br />
            Leziz dağınıklıklara karşı <br />
            korumanız hazır
          </h1>

          <button
            class="bg-primary text-white px-4 py-2 rounded-lg w-fit flex items-center gap-2"
          >
            Ürünü İncele
            <Icon name="uil:arrow-right" class="w-5 h-5 text-white" />
          </button>

          <p class="text-xs text-gray-500">
            100×120cm Tek Kullanımlık Masa ve Aktivite Örtüsü
          </p>
        </div>
      </div>

      <!-- Right image -->
      <div class="col-span-12 md:col-span-8 overflow-hidden h-full">
        <img
          src="/images/hero-img.png"
          alt="Hero Görsel"
          class="w-full h-full object-cover rounded-3xl"
        />
      </div>
    </div>
  </section>
</template>
