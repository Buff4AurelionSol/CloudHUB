<script setup>
  import { ref } from 'vue'
  import Form from './components/Form.vue'
  import Table from './components/Table/Table.vue'

  const indexState = ref(10)
  const filters = ref([])
  const transactions = ref([])


function getNumberToFilter(value) {
  indexState.value = Number(value)
}

function getData(data){
  filters.value = data
}

function getTransactions(data){
  transactions.value = data
}


</script>

<template>
  <div class="form-box">    
    <Form @numberToFilter="getNumberToFilter" @sendData="getData" @transactions="getTransactions"/>
    <Table :indexState="indexState" :filters="filters" :transactions="transactions"/>
  </div>
</template>


<style scoped>
 
</style>
