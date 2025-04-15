<script setup>
    const options = [10, 25, 50, 100];
</script>

<template>
    <label class="labelShowPaysSelect">
        Mostrar
        <select name="showPaysSelect" id="showPaysSelect">
            <option :value="option" v-for="(option) in options">
                {{ option }}
            </option>
        </select>
        Registros
    </label>

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