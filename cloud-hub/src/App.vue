<script setup lang="ts">
import { ref } from 'vue'
import Form from './components/Form.vue'
import Table from './components/Table/Table.vue'

const indexState = ref(10)

function getNumberToFilter(value: string) {
  indexState.value = Number(value)
  console.log(indexState.value)
}
</script>

<template>
  <div class="form-box">    
    <Form @numberToFilter="getNumberToFilter" />
    <Table :indexState="indexState" />
  </div>
</template>


<style scoped>
 
</style>
