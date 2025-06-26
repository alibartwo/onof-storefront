<template>
  <section class="max-w-7xl mx-auto px-4 py-12 lg:flex lg:gap-10 min-h-screen">
    <!-- Sol: Galeri -->
    <div class="w-full lg:w-1/2 space-y-4 overflow-y-auto max-h-[calc(100vh-120px)] pr-2">
      <div
        v-for="(img, index) in product?.images"
        :key="index"
        class="bg-gray-100 rounded-xl aspect-square flex items-center justify-center overflow-hidden"
      >
        <img :src="img.url" :alt="product.title" class="object-contain max-h-full max-w-full" />
      </div>
    </div>

    <!-- Sağ: Bilgi Kutusu -->
    <div class="w-full lg:w-1/2">
      <h1 class="text-2xl font-bold mb-2">{{ product?.title }}</h1>
      <p class="text-sm text-gray-500 mb-4">{{ product?.subtitle }}</p>

      <div class="mb-4">
        <span class="text-2xl font-semibold text-purple-700">₺69</span>
        <span class="ml-2 text-green-600 font-medium">-60%</span>
      </div>

      <p class="mb-6 text-gray-600 whitespace-pre-line">
        {{ product?.description }}
      </p>

      <!-- Varyantlar -->
      <div v-if="product?.options?.length" class="mb-6">
        <label class="block text-sm font-medium mb-1">{{ product.options[0].title }}</label>
        <div class="flex flex-wrap gap-2">
          <button
            v-for="option in product.options[0].values"
            :key="option.id"
            @click="selectedOption = option.value"
            :class="[
              'px-4 py-2 border rounded-md text-sm',
              selectedOption === option.value
                ? 'bg-purple-700 text-white border-purple-700'
                : 'bg-white text-gray-700 hover:bg-gray-100'
            ]"
          >
            {{ option.value }}
          </button>
        </div>
      </div>

      <!-- Adet -->
      <div class="flex items-center gap-3 mb-6">
        <button class="border px-3 py-1 rounded" @click="quantity = Math.max(1, quantity - 1)">-</button>
        <span>{{ quantity }}</span>
        <button class="border px-3 py-1 rounded" @click="quantity++">+</button>
      </div>

      <!-- Sepete Ekle -->
      <BaseButton label="Sepete Ekle" type="primary" class="w-full mb-6" />

      <!-- Detaylar -->
      <div>
        <div
          v-for="(item, index) in detailItems"
          :key="index"
          class="py-6 border-b border-gray-200 last:border-none"
        >
          <button
            class="flex justify-between items-start w-full text-left"
            @click="openDetail = openDetail === index ? null : index"
          >
            <div class="flex gap-4">
              <span class="text-primary font-semibold">
                {{ String(index + 1).padStart(2, '0') }}
              </span>
              <h3 class="font-semibold text-gray-900 leading-snug">
                {{ item.title }}
              </h3>
            </div>
            <Icon
              :name="openDetail === index ? 'mdi:close' : 'mdi:plus'"
              class="w-5 h-5 text-primary shrink-0 mt-1 transition-transform duration-200"
            />
          </button>

          <Transition name="fade">
            <div
              v-show="openDetail === index"
              class="pl-10 pr-2 mt-3 text-sm text-gray-600 leading-relaxed"
            >
              {{ item.content }}
            </div>
          </Transition>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useProductStore } from '~/stores/products'

const productStore = useProductStore()
const product = ref()
const quantity = ref(1)
const selectedOption = ref('')
const openDetail = ref<number | null>(null)

const detailItems = [
  {
    title: 'Kullanım Bilgisi',
    content: 'Tek kullanımlık rulo örtüler hijyenik koşullarda üretilmiştir.'
  },
  {
    title: 'Kargo',
    content: 'Ücretsiz kargo, 24 saat içinde kargoya verilir.'
  },
  {
    title: 'İade',
    content: '14 gün koşulsuz iade hakkı.'
  }
]

onMounted(async () => {
  if (!productStore.products.length) {
    await productStore.fetchProducts()
  }
  product.value = productStore.products[0]
})
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>