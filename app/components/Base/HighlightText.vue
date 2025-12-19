<script setup>
defineProps({
    text: {
        type: String,
        required: true
    },
    class: {
        type: String,
        default: '',
        required: false
    }
})
</script>

<template>
    <span
        class="relative pl-5 text-lg font-bold text-white  before:absolute before:h-[90%] before:w-[2px] before:rounded-full before:bg-accent before:bottom-0 before:left-[12px]"
        :class="class">{{
            text
        }}</span>
</template>