<template>
  <div class="error-page">
    <div class="container">
      <h1 class="error-title">Bir Hata Oluştu</h1>
      <p v-if="error.statusCode === 404" class="error-message">Üzgünüz, aradığınız sayfa bulunamadı.</p>
      <p>{{ error.message }}</p>
      <NuxtLink to="/" class="back-home">Anasayfaya Dön</NuxtLink>
    </div>
  </div>
</template>

<script setup>
const error = useError()
definePageMeta({
  layout: false, 
})
</script>