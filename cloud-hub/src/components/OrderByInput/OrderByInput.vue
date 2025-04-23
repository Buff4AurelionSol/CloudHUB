<script setup>
    import {OPTIONS_ORDER_BY} from '../consts/const.ts'
</script>

<template>
        <v-combobox
            width="50%"
            name="orderBy"
            label="Ordenar por"
            :items="OPTIONS_ORDER_BY"
            class="order-by-input"
        />
</template>

<style scoped>
    .order-by-input{
        width: 50%;
        height: 60px;
        margin-bottom: 6px; 
    }

</style>