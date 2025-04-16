<script setup >
  import { ref } from 'vue';
  import DateInput from './DateInput/DateInput.vue'
  import OrderByInput from './OrderByInput/OrderByInput.vue'
  import TransactionInput from './TransactionInput/TransactionInput.vue'
  import ShowPaysInput from './SearchInput/SearchInput.vue'
  import ShowNInput from './ShowNPaysInput/ShowNInput.vue'

   const emit = defineEmits(['numberToFilter','sendData', 'transactions'])
   const selectedValues = ref([])

  function handleSubmit(e) {
    e.preventDefault()
    const dataArray = []
    const data = Object.fromEntries(new FormData(e.target)) 
    let showPaysSelect = data["showPaysSelect"]
    let trasactionData = data["transaction"]    
    data.transaction = selectedValues.value

    emit('numberToFilter', showPaysSelect)
    emit('sendData', dataArray)
    emit('transactions', data.transaction)
  }


  function getTransactions(values){
     selectedValues.value =  values
  }


</script>

<template>
  <h1>Formulario</h1>
  <form @submit="handleSubmit">
    <div class="box-form">
      <div class="box-search">
        <ShowPaysInput/>
      </div>
  
      <div class="box-date-time">
        <span>Fechas:</span>
        <DateInput name="fecha-1"/>
        <DateInput name="fecha-2"/>
      </div>

      <div class="showRegisters">
        <ShowNInput/>
      </div>

      <div class="orderBy">
        <OrderByInput/>
      </div>
      <div class="transaction">
        <TransactionInput @sendSelectedValues="getTransactions"/>
      </div>
   
      
    </div>

    <button type="submit">Enviar</button>
  </form>
</template>

<style scoped>

  .box-form{
    display: grid;
    grid-template-columns: 2;
    grid-template-rows: 3;
    gap: 10px; 
  }
  
  .orderBy{
    grid-column: 2;
    grid-row: 2;
  }

  .transaction{
    grid-column: 2;
    grid-row: 3; 
  }

  .box-date-time{
    display: flex;
    align-items: center;
    text-align: center;
    gap: 2px;
    margin-bottom: 10px;
    grid-column: 1;
    grid-row: 2;
    background-color: #D9D9D9;
    padding-left: 10px;
  }

  .box-search{
    height: 40px;
    margin-bottom: 10px;
    grid-row: 1/2; 
  }

  .showRegisters{
    margin-bottom: 10px;
    grid-column: 1;
    grid-row: 3;
  }
</style>

