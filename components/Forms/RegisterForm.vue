<template>
  <form @submit.prevent="handleRegister" class="w-full max-w-md space-y-4">
    <!-- Full Name -->
    <div>
      <label class="block text-sm font-medium text-gray-700 mb-1"
        >Ad Soyad</label
      >
      <input
        v-model="fullName"
        type="text"
        class="w-full bg-gray-100 text-gray-900 rounded-md px-4 py-3 outline-none focus:ring-2 focus:ring-purple-700"
      />
    </div>

    <!-- Email -->
    <div>
      <label class="block text-sm font-medium text-gray-700 mb-1"
        >E-posta</label
      >
      <input
        v-model="email"
        type="email"
        class="w-full bg-gray-100 text-gray-900 rounded-md px-4 py-3 outline-none focus:ring-2 focus:ring-purple-700"
      />
    </div>

    <!-- Password -->
    <div>
      <label class="block text-sm font-medium text-gray-700 mb-1">Şifre</label>
      <input
        v-model="password"
        type="password"
        class="w-full bg-gray-100 text-gray-900 rounded-md px-4 py-3 outline-none focus:ring-2 focus:ring-purple-700"
      />
    </div>

    <!-- Submit Button -->
    <BaseButton
      type="primary"
      label="Kaydol"
      class="w-full justify-center"
      @click="handleRegister"
    />

    <!-- Already have an account -->
    <p class="text-center text-sm text-gray-500 mt-4">
      Zaten hesabınız var mı?
      <NuxtLink
        to="/auth/giris"
        class="text-purple-700 font-semibold hover:underline"
        >Giriş yap</NuxtLink
      >
    </p>
  </form>
</template>

<script setup lang="ts">
import BaseButton from "~/components/Base/BaseButton.vue";

const fullName = ref("");
const email = ref("");
const password = ref("");

const handleRegister = () => {
  console.log("Kayıt bilgileri:", fullName.value, email.value, password.value);
};
</script>
