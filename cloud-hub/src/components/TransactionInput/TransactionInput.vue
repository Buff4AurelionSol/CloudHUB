<script setup>
    import { ref } from 'vue';
    import { OPTIONS_TRANSACTION } from '../consts/const';
    const selectedValues = ref([])
    

    const emit = defineEmits(['sendSelectedValues'])

    function addSelection(e){
        let aux = e.target.selectedOptions
        selectedValues.value = Array.from(aux).map(option => option.value)
        emit('sendSelectedValues', selectedValues.value )
    }

</script>

<template>
    <div class="transaction-input">
        <span>Trasacción:</span>
        <select name="transaction" class="option-box" @change="addSelection" multiple>
            <option :value="option" 
                v-for="(option) in OPTIONS_TRANSACTION" 
                key="option" 
                class="option">
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

    .option-box{
        width: 100%;
             
    }

    
</style>