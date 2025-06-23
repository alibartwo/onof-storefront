<template>
  <section class="pt-12 bg-white">
    <div class="w-full px-0">
      <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4">
        <img
          v-for="index in 4"
          :key="index"
          :src="`/images/ig-${index}.png`"
          alt="Instagram post"
          class="w-full h-auto object-cover"
        />
      </div>
    </div>
  </section>
</template>
