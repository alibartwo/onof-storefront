<script setup lang="ts">
defineProps<{
  label: string;
  icon?: string;
  to?: string;
  type?: "primary" | "secondary" | "white";
}>();
</script>

<template>
  <component
    :is="to ? 'NuxtLink' : 'button'"
    :to="to"
    class="flex items-center gap-2 px-5 py-2 text-sm transition-all rounded-lg w-fit"
    :class="{
      'bg-primary text-white hover:bg-primary-dark': type === 'primary',
      'bg-transparent text-white border border-white hover:bg-white hover:text-primary':
        type === 'white',
      'text-primary border border-primary hover:bg-primary hover:text-white':
        type === 'secondary',
    }"
  >
    {{ label }}
    <Icon v-if="icon" :name="icon" class="w-5 h-5" />
  </component>
</template>
