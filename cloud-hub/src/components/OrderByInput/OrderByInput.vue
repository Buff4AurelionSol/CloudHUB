<script setup>
    import {OPTIONS_ORDER_BY} from '../consts/const.ts'
</script>

<template>
    <div class="order-by-input">
        <span>Ordenar por:</span>
        <select name="orderBy">
            <option :value="option" v-for="(option) in OPTIONS_ORDER_BY" key="item">
                {{option}}
            </option>
        </select>
    </div>
</template>

<style scoped>
    .order-by-input{
        width: 50%;
        height: 25px;
        border: 2px solid black;
        margin-bottom: 6px;
    }
</style>