<script setup lang="ts">
    interface Props {
        name: string
    }

    const props = defineProps<Props>()
    
</script>

<template>
    <input type="date" class="date-time" :name="props.name">
</template>

<style>
    .date-time{
        width: auto;
        height: 25px;
    }
    
</style>