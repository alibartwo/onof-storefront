<template>
  <header class="site-header">
    <div class="container">
      <div class="logo">
        <NuxtLink to="/">
          <img src="/onofset-logo.png" alt="Logo" />
        </NuxtLink>
      </div>
      <nav class="main-nav">
        <NuxtLink to="/">Anasayfa</NuxtLink>
        <NuxtLink to="/hakkimizda">Hakkımızda</NuxtLink>
        <NuxtLink to="/blog">Blog</NuxtLink>
        <NuxtLink to="/faq">Müşteri Yorumları</NuxtLink>
        <NuxtLink to="/iletisim">İletişim</NuxtLink>
      </nav>
      <div class="actions">
        <NuxtLink to="/sepet" class="cart">
          <Icon name="heroicons-outline/shopping-cart" />
        </NuxtLink>
      </div>
    </div>
  </header>
</template>
