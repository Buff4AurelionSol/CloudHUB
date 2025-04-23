<script setup>
import { ref } from 'vue';

    const options = [10, 25, 50, 100];
    const defaultValue = ref(options[0])
</script>

<template>
    <v-select
        name="showPaysSelect"
        label="Cantidad de registros a mostrar"
        :items="options"
        variant="outlined"
        v-model="defaultValue"
    />
</template>

<style scoped>
    .labelShowPaysSelect{
        width: 100%;
        height: 25px;
        display: flex;
        justify-content: center;
        gap: 8px;
        background-color: #D9D9D9;
        align-items: center;
    }

    #showPaysSelect{
        width: 50px;
        height: 22px;
    }

</style>