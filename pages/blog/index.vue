<template>
  <section class="px-4 py-16 bg-white">
    <div class="max-w-screen-md mx-auto">
      <!-- Section Heading -->
      <div class="mb-12 text-center">
        <p class="text-sm font-semibold tracking-wide uppercase text-primary">
          Blog
        </p>
        <h2 class="mt-2 text-3xl font-bold text-primary">
          Güncel Yazılarla Yanınızdayız
        </h2>
        <p class="max-w-xl mx-auto mt-2 text-gray-500">
          Çocuk gelişimi, hijyen, pratik öneriler ve daha fazlası blog
          sayfamızda.
        </p>
      </div>

      <!-- Blog List -->
      <div class="space-y-6">
        <BlogCard
          v-for="(post, index) in posts"
          :key="index"
          :title="post.title"
          :excerpt="post.excerpt"
          :image="post.image"
          :slug="post.slug"
          :date="post.date"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import BlogCard from "@/components/Blog/BlogCard.vue";

const posts = [
  {
    title: "Hijyenik Oyun Alanları Nasıl Oluşturulur?",
    excerpt:
      "Evde ve dış mekanda çocuklar için temiz, güvenli ve eğlenceli ortamlar yaratmanın yolları...",
    image: "/images/hero-img.jpg",
    slug: "hijyenik-oyun-alanlari",
    date:"2023-10-01",
  },
  {
    title: "Çocuklarda Sağlıklı Uyku Rutini Oluşturmak",
    excerpt:
      "Uyku düzeni, çocuk gelişiminin en önemli parçalarındandır. İşte birkaç öneri...",
    image: "/images/hero-img.jpg",
    slug: "saglikli-uyku-rutini",
    date:"2023-10-01",
  },
  {
    title: "Oyun Halısı Temizliği Nasıl Yapılır?",
    excerpt:
      "Oyun halıları hijyenin sağlanması açısından önemlidir. Temizlik ve bakım tüyoları...",
    image: "/images/hero-img.jpg",
    slug: "oyun-halisi-temizligi",
    date:"2023-10-01",
  },
  {
    title: "Bebeklerde Güvenli Oyun Ortamı",
    excerpt:
      "Bebekler için güvenli, hijyenik ve uyarıcı bir oyun alanı nasıl oluşturulur?",
    image: "/images/hero-img.jpg",
    slug: "bebeklerde-guvenli-oyun",
    date:"2023-10-01",
  },
  {
    title: "Evde Hijyen Kuralları ile Yaşamak",
    excerpt:
      "Aileler için kolay uygulanabilir temizlik ve hijyen ipuçları bu yazıda.",
    image: "/images/hero-img.jpg",
    slug: "evde-hijyen-kurallari",
    date:"2023-10-01",
  },
];
</script>
