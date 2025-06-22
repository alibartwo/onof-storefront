<template>
  <header class="sticky top-0 z-50 bg-white border-b border-gray-100">
    <div
      class="max-w-screen-xl mx-auto flex items-center justify-between px-6 py-4"
    >
      <!-- Logo ve Navigasyon -->
      <div class="flex items-center gap-8">
        <!-- Logo -->
        <NuxtLink to="/" class="shrink-0">
          <img src="/images/onofset-logo.png" alt="Logo" class="h-12" />
        </NuxtLink>

        <!-- Separator -->
        <div class="w-px h-8 bg-gray-300 opacity-30"></div>

        <!-- Menü -->
        <nav
          class="flex items-center gap-6 text-sm font-semibold text-gray-600"
        >
          <NuxtLink
            to="/"
            class="hover:text-primary transition-colors duration-200"
          >
            Anasayfa
          </NuxtLink>
          <NuxtLink
            to="/urunler"
            class="hover:text-primary transition-colors duration-200"
          >
            Ürünler
          </NuxtLink>
          <NuxtLink
            to="/hakkimizda"
            class="hover:text-primary transition-colors duration-200"
          >
            Hakkımızda
          </NuxtLink>
          <NuxtLink
            to="/iletisim"
            class="hover:text-primary transition-colors duration-200"
          >
            İletişim
          </NuxtLink>
        </nav>
      </div>

      <!-- Right -->
      <div class="flex items-center gap-3">
        <NuxtLink
          to="/auth/giris"
          class="px-5 py-2 rounded-lg border border-primary text-primary text-sm font-medium hover:bg-primary/5 transition-all duration-200"
        >
          Kullanıcı Girişi
        </NuxtLink>
        <NuxtLink
          to="/sepet"
          class="px-5 py-2 rounded-lg bg-primary text-lg text-white hover:bg-primary/90 transition-all duration-200 flex items-center gap-1"
        >
          <Icon name="uil:shopping-cart" class="w-12 h-12 text-white" />
        </NuxtLink>
      </div>
    </div>
  </header>
</template>
