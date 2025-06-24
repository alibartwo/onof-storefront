<template>
  <section class="w-full max-w-md mx-auto">
    <form @submit.prevent="handleLogin" class="space-y-4">
      <!-- Email or Phone -->
      <div>
        <label class="block text-sm font-medium text-gray-700 mb-1"
          >E-posta ya da Telefon</label
        >
        <input
          v-model="email"
          type="text"
          placeholder=""
          class="w-full bg-gray-100 text-gray-900 rounded-md px-4 py-3 outline-none focus:ring-2 focus:ring-purple-700"
        />
      </div>

      <!-- Password -->
      <div>
        <label class="block text-sm font-medium text-gray-700 mb-1"
          >Şifre</label
        >
        <input
          v-model="password"
          type="password"
          placeholder=""
          class="w-full bg-gray-100 text-gray-900 rounded-md px-4 py-3 outline-none focus:ring-2 focus:ring-purple-700"
        />
        <div class="text-right mt-1">
          <NuxtLink
            to="/forgot-password"
            class="text-xs text-gray-400 hover:underline"
          >
            Şifrenizi mi unuttunuz?
          </NuxtLink>
        </div>
      </div>

      <!-- Submit Button -->
      <BaseButton
        type="primary"
        label="Giriş Yap"
        class="w-full justify-center"
        @click="handleLogin"
      />
    </form>

    <!-- Sign up link -->
    <p class="text-center text-sm text-gray-500 mt-6">
      Hesabınız yok mu?
      <NuxtLink
        to="/auth/kayit"
        class="text-purple-700 font-semibold hover:underline"
        >Kayıt Ol</NuxtLink
      >
    </p>
  </section>
</template>

<script setup lang="ts">
const email = ref("");
const password = ref("");

const handleLogin = () => {
  console.log("Logging in with", email.value, password.value);
};
</script>
