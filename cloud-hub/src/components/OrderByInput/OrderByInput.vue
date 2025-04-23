<script setup>
    import {OPTIONS_ORDER_BY} from '../consts/const.ts'
</script>

<template>
        <v-combobox
            name="orderBy"
            label="Ordenar por"
            :items="OPTIONS_ORDER_BY"
            class="order-by-input"
        />
</template>

<style scoped>
    .order-by-input{
        width: 50%;
        height: 45px;
        margin-bottom: 6px; 
    }

</style>