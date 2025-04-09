<script setup>
    import {OPTIONS} from './consts/const.ts'
</script>

<template>
    <div class="order-by-input">
        <span>Ordenar por:</span>
        <select name="order-by">
            <option :value="option" v-for="(option) in OPTIONS" key="item">
                {{option}}
            </option>
        </select>
    </div>
</template>

<style scoped>
    .order-by-input{
        width: 100%;
        height: 25px;
        border: 2px solid black;
        margin-bottom: 6px;
    }
</style>