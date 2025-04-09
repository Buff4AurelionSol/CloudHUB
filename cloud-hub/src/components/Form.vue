<script setup>
  import OrderByInput from './OrderByInput/OrderByInput.vue'
  import TransactionInput from './TransactionInput/TransactionInput.vue'


  function handleSubmit(e) {
    e.preventDefault()
    const data = Object.fromEntries(new FormData(e.target))

    console.log(data)

  }
</script>

<template>
  <h1>Formulario</h1>
  <form @submit="handleSubmit">
    <div class="data-form">
      <OrderByInput/>
      <TransactionInput/>
    </div>
    <button type="submit">Enviar</button>
  </form>
</template>

<style scoped>
  .data-form{
    display: flex;
    gap: 2px; 

  }
</style>

