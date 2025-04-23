<script setup>
    const props = defineProps({
        name:{
            type: String
        }
    })
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