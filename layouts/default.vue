<template>
    <Header />
    <main><slot></slot></main>
    <Footer />
</template>
<script setup lang="ts">
import Header from '@/components/layout/Header.vue'
import Footer from '@/components/layout/Footer.vue'
</script>