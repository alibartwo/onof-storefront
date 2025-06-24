<template>
  <header class="sticky top-0 z-50 bg-white border-b border-gray-100">
    <div
      class="flex items-center justify-between max-w-screen-xl px-6 py-4 mx-auto"
    >
      <!-- Logo ve Navigation -->
      <div class="flex items-center gap-4 md:gap-8">
        <NuxtLink to="/" class="shrink-0">
          <img src="/images/logo.png" alt="Logo" class="h-10 md:h-12" />
        </NuxtLink>
        <div class="hidden w-px h-8 bg-gray-300 md:block opacity-30" />
        <nav
          class="items-center hidden gap-6 text-sm font-semibold text-gray-600 md:flex"
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
      <div class="items-center hidden gap-3 md:flex">
        <BaseButton
          to="/auth/giris"
          label="Kullanıcı Girişi"
          type="secondary"
        />
        <BaseButton
          to="/sepet"
          type="primary"
          icon="uil:shopping-cart"
          no-label
          icon-size="20"
        />
      </div>

      <!-- Hamburger Icon (Mobile) -->
      <button
        class="text-gray-600 md:hidden hover:text-primary"
        @click="isMobileMenuOpen = !isMobileMenuOpen"
      >
        <Icon name="mdi:menu" class="w-7 h-7" />
      </button>
    </div>

    <TheNavigation v-if="isMobileMenuOpen" @close="isMobileMenuOpen = false" />
  </header>
</template>

<script setup lang="ts">
import { ref } from "vue";
import TheNavigation from "~/components/Layout/TheNavigation.vue";

const isMobileMenuOpen = ref(false);
</script>
