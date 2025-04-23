<script setup>
    import { ref } from 'vue';
    import { OPTIONS_TRANSACTION } from '../consts/const';

    const selectedValues = ref([])
    const emit = defineEmits(['sendSelectedValues'])
    const sendValuesSelect = (value) => {
        emit('sendSelectedValues', value)
    }
  
</script>

<template>
    <v-combobox
      multiple
      label="Transacción"
      v-model="selectedValues"
      :items="OPTIONS_TRANSACTION"
      class="transactions"
      density="compact"
       @update:modelValue="sendValuesSelect"
    />
  </template>
  
  <style scoped>
  .transactions {
    width: 100%;
    margin-right: 10px;   
    height: 78px;  
  }
  
  </style>