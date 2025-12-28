<script setup lang="ts">
import { ref } from 'vue'

const emit = defineEmits(['search'])
const query = ref('')

const handleSearch = () => {
    emit('search', query.value)
}
</script>

<template>
    <div class="flex items-center gap-2 w-full">
        <UInput v-model="query" size="md" variant="outline" placeholder="Search..." @keyup.enter="handleSearch" />

        <button @click="handleSearch" class="text-sm cursor-pointer">Search</button>
    </div>
</template>