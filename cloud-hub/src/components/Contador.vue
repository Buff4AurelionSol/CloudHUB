<script setup lang="ts">
  import {ref} from 'vue'

  const iterator = ref(0)
  const finalNumber = ref(0)

  function plusIterator(){
    iterator.value += finalNumber.value
  }

  function decrementIterator(){
    iterator.value -= finalNumber.value
  }

  function handleClick(e: Event){
    e.preventDefault() 
    const data = new FormData(e.target)
    const number = data.get('numero')
    console.log(`El numero es de tipo: ${typeof(number)}`)
    finalNumber.value = parseInt(number)  
  }

  function clean(){
    finalNumber.value = 0
    iterator.value = 0 
  }


</script>

<template>
  <div class="main">
    Prueba 
    <form @submit="handleClick">
      <input type="number" name="numero">
      <button type="submit">Elegir numero</button>
    </form>

    <div class="buttons">
      <button @click="plusIterator">Aumentar</button>
      <button @click="decrementIterator">Decrementar</button>
      <button @click="clean">Limpiar</button>
    </div>
    {{ iterator }}
  </div>
</template>

<style scoped>
  .main{
    padding: 0;
    margin: 0;
    display: flex;
    justify-content: center;
    flex-direction: column;
  }

  .buttons{ 
    display: flex; 
  }

</style>
