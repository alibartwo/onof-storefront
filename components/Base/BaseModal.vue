<template>
    <div class="absolute top-16 right-6 mt-2 z-50">
        <div class="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden w-80">
            <div class="px-4 pt-4 pb-2 border-b border-gray-100 flex justify-between items-center">
                <slot name="title" />
                <button class="text-gray-400 hover:text-gray-600" @click="$emit('close')">
                    &times;
                </button>
            </div>
            <div class="p-4">
                <slot />
            </div>
        </div>
    </div>
</template>