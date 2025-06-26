// stores/product.ts
import { defineStore } from "pinia";
import { ref } from "vue";
import { useMedusaClient } from "~/composables/useMedusaClient";
import type { HttpTypes } from "@medusajs/types";

export const useProductStore = defineStore("product", () => {
  const sdk = useMedusaClient();
  const products = ref<HttpTypes.StoreProduct[]>([]);
  const loading = ref(false);
  const error = ref<string | null>(null);

  const fetchProducts = async () => {
    loading.value = true;
    error.value = null;
    try {
      const res = await sdk.store.product.list();
      products.value = res.products;
    } catch (err) {
      console.error(err);
      error.value = "Ürünler alınamadı";
    } finally {
      loading.value = false;
    }
  };

  return { products, loading, error, fetchProducts };
});
