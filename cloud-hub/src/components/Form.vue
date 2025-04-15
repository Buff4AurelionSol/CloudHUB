<script setup>
  import DateInput from './DateInput/DateInput.vue'
  import OrderByInput from './OrderByInput/OrderByInput.vue'
  import TransactionInput from './TransactionInput/TransactionInput.vue'
  import ShowPaysInput from './SearchInput/SearchInput.vue'

  function handleSubmit(e) {
    e.preventDefault()
    const data = Object.fromEntries(new FormData(e.target))

    console.log(data)

  }
</script>

<template>
  <h1>Formulario</h1>
  <form @submit="handleSubmit">
    <div class="box-search">
      <ShowPaysInput/>
    </div>
    <div class="data-form">
      <OrderByInput/>
      <TransactionInput/>
    </div>
    <div class="box-date-time">
      <span>Fechas:</span>
      <DateInput name="fecha-1"/>
      <DateInput name="fecha-2"/>
    </div>

    <button type="submit">Enviar</button>
  </form>
</template>

<style scoped>
  .data-form{
    display: flex;
    gap: 2px; 
    margin-bottom: 8px;

  }

  .box-date-time{
    width: 30%;
    display: flex;
    align-items: center;
    text-align: center;
    gap: 2px;
    margin-bottom: 10px;
  }

  .box-search{
    width: 30%;
    height: 40px;
    margin-bottom: 10px;
  }
</style>

