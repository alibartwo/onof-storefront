<template>
  <BaseModal @close="$emit('close')">
    <template #title>Sepetiniz ({{ items.length }})</template>
    <div class="space-y-4">
      <div v-for="item in items" :key="item.id" class="flex justify-between">
        <div>
          {{ item.variant_title }}
          x{{ item.quantity }}
          <div class="text-sm text-gray-500">₺{{ (item.unit_price).toFixed(2) }}</div>
        </div>
        <button @click="remove(item.id)">×</button>
      </div>
      <div class="font-semibold">
        Toplam: ₺{{ (total).toFixed(2) }}
      </div>
      <BaseButton @click="$emit('close')">Sepete Git</BaseButton>
    </div>
  </BaseModal>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useCartStore } from "~/stores/cart";

defineEmits(["close"]);

const cartStore = useCartStore();
const items = computed(() => cartStore.cart?.items ?? []);
const total = computed(() => cartStore.cart?.total ?? 0);

function remove(line_item_id: string) {
  cartStore.removeItem(line_item_id);
}
</script>