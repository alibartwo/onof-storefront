<template>
  <header class="sticky top-0 z-50 bg-white border-b border-gray-100">
    <div
      class="max-w-screen-xl mx-auto flex items-center justify-between px-6 py-4"
    >
      <!-- Logo ve Navigation -->
      <div class="flex items-center gap-4 md:gap-8">
        <NuxtLink to="/" class="shrink-0">
          <img src="/images/logo.png" alt="Logo" class="h-10 md:h-12" />
        </NuxtLink>
        <div class="hidden md:block w-px h-8 bg-gray-300 opacity-30" />
        <nav
          class="hidden md:flex items-center gap-6 text-sm font-semibold text-gray-600"
        >
          <NuxtLink to="/" class="hover:text-primary">Anasayfa</NuxtLink>

          <NuxtLink to="/hakkimizda" class="hover:text-primary"
            >Hakkımızda</NuxtLink
          >
          <NuxtLink to="/urunler" class="hover:text-primary">Ürünler</NuxtLink>
          <NuxtLink to="/blog" class="hover:text-primary">Blog</NuxtLink>
          <NuxtLink to="/iletisim" class="hover:text-primary"
            >İletişim</NuxtLink
          >
        </nav>
      </div>

      <!-- Sağ Butonlar (Desktop) -->
      <div class="hidden md:flex items-center gap-3">
        <NuxtLink
          to="/auth/giris"
          class="text-primary border border-primary px-5 py-2 rounded-lg text-sm"
          >Kullanıcı Girişi</NuxtLink
        >
        <NuxtLink
          to="/sepet"
          class="bg-primary text-white px-4 py-2 rounded-lg flex items-center gap-1"
        >
          <Icon name="uil:shopping-cart" class="w-6 h-6" />
        </NuxtLink>
      </div>

      <!-- Hamburger Icon (Mobile) -->
      <button
        class="md:hidden text-gray-600 hover:text-primary"
        @click="isMobileMenuOpen = !isMobileMenuOpen"
      >
        <Icon name="mdi:menu" class="w-7 h-7" />
      </button>
    </div>

    <TheNavigation v-if="isMobileMenuOpen" @close="isMobileMenuOpen = false" />
  </header>
</template>

<script setup>
import TheNavigation from "~/components/Layout/TheNavigation.vue";
import { ref } from "vue";

const isMobileMenuOpen = ref(false);
</script>
