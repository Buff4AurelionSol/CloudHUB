<script setup>
  import OrderByInput from './OrderByInput/OrderByInput.vue'
  
  function handleSubmit(e) {
    e.preventDefault()
    const data = Object.fromEntries(new FormData(e.target))

    console.log(data)

  }
</script>

<template>
  <h1>Formulario</h1>
  <form @submit="handleSubmit">
    <OrderByInput/>
    <button type="submit">Enviar</button>
  </form>
</template>

<style scoped>
</style>
