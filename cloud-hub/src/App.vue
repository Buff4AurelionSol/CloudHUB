<script setup>
  import { ref } from 'vue'
  import Form from './components/Form.vue'
  import Table from './components/Table/Table.vue'

  const indexState = ref(10)
  const filters = ref([])
  const transactions = ref([])
  const orderBy = ref("")
  const haveIChangeDirectionOrderBy = ref(false)

function getNumberToFilter(value) {
  indexState.value = Number(value)
}

function getData(data){
  filters.value = data
}

function getTransactions(data){
  transactions.value = data
}

function getOrderBy(data){
  orderBy.value = data
}

function isChangeDirectionOrderBy(data){
  haveIChangeDirectionOrderBy.value 
  ? 
    haveIChangeDirectionOrderBy.value = false 
  : 
    haveIChangeDirectionOrderBy.value = true

  console.log(haveIChangeDirectionOrderBy.value)
}


</script>

<template>
  <div class="form-box">    
    <Form @numberToFilter="getNumberToFilter" 
      @sendData="getData" 
      @transactions="getTransactions" 
      @orderBy="getOrderBy"
      :haveIChangeDirectionOrderBy="haveIChangeDirectionOrderBy"
      @isChangeDirectionOrderBy="isChangeDirectionOrderBy"
    />
    <Table 
      :indexState="indexState" 
      :filters="filters" 
      :transactions="transactions" 
      :orderBy="orderBy"
      :haveIChangeDirectionOrderBy="haveIChangeDirectionOrderBy"
    />
  </div>
</template>


<style scoped>
 
</style>
