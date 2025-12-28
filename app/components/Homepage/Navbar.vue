<script setup lang="ts">
import { ref } from 'vue'

const router = useRouter()
const searchQuery = ref('')

const search = (query: string) => {
    searchQuery.value = query
    router.push(`/search?q=${query}`)
}
</script>

<template>
    <div class="flex flex-col gap-4 md:gap-0 md:flex-row justify-between items-center py-5">
        <div>
            <NuxtLink to="/">
                <p>NuxtAnime</p>
            </NuxtLink>
        </div>
        <div class="flex flex-col md:flex-row items-center gap-4 md:gap-10">
            <ul class="flex gap-5 text-xs">
                <li>
                    <NuxtLink to="/" class="text-nowrap hover:text-accent/70">All Anime</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/" class="text-nowrap hover:text-accent/70">Action</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/" class="text-nowrap hover:text-accent/70">Adventure</NuxtLink>
                </li>
            </ul>
            <BaseSearchAnime @search="search" />
        </div>
    </div>
</template>