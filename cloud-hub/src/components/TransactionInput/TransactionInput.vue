<script setup>
import { OPTIONS_TRANSACTION } from '../consts/const';
</script>

<template>
    <div class="transaction-input">
        <span>Trasacción:</span>
        <select name="transaction-input">
            <option :value="option" v-for="(option) in OPTIONS_TRANSACTION" key="item">
                {{option}}
            </option>
        </select>
    </div>
</template>

<style scoped>
  .transaction-input{
        width: 50%;
        height: 25px;
        border: 2px solid black;
        margin-bottom: 6px;
    }
</style>