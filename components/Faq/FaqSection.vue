<!-- components/FaqSection.vue -->
<template>
  <section class="py-16 max-w-3xl mx-auto text-center">
    <p class="text-sm tracking-widest uppercase text-primary font-semibold">SSS</p>
    <h2 class="text-3xl font-bold text-primary mt-2">Sıkça Sorulan Sorular</h2>
    <p class="text-gray-500 max-w-xl mx-auto mt-4">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius elementum tristique...
    </p>

    <div class="mt-6 flex justify-center gap-4">
      <button class="bg-primary text-white px-5 py-2 rounded hover:bg-primary-dark text-sm">
        Siz de Deneyin →
      </button>
      <button class="border border-primary text-primary px-5 py-2 rounded hover:bg-primary/10 text-sm">
        Tümünü Gör
      </button>
    </div>

    <div class="mt-10 flex flex-col gap-4 text-left">
      <FaqItem
        v-for="(item, index) in faqList"
        :key="index"
        :question="item.question"
        :answer="item.answer"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
import FaqItem from './FaqItem.vue'

const faqList = [
  {
    question: "Masa ve aktivite örtüsünü kaç kez kullanabilirim?",
    answer: "Ürün tek kullanımlıktır.",
  },
  {
    question: "Ürün çocuklar için güvenli mi?",
    answer: "Evet, tüm Onbaby ürünleri çocuk sağlığına uygun malzemelerden üretilmiştir. Zararlı kimyasal içermez.",
  },
  {
    question: "Hangi yüzeylerde kullanılabilir?",
    answer: "Düz zeminli tüm masa, sehpa veya zeminlerde rahatlıkla kullanılabilir. Kayma yapmaz.",
  },
  {
    question: "Diş kliniğinde ya da sağlık alanında kullanabilir miyim?",
    answer: "Evet. Ürün, sağlık profesyonelleri tarafından da işlem öncesi hijyen örtüsü olarak kullanılmaktadır.",
  },
  {
    question: "Ürün paketinde kaç adet örtü var?",
    answer: "Paket içerisinde 3 rulo – toplam 30 adet örtü bulunmaktadır.",
  },
]
</script>
