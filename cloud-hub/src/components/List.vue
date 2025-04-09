<script setup>
    import {ref} from 'vue'
    const list = ref([])

    function addNewTask(e){
        e.preventDefault()
        const data = new FormData(e.target)
        const taskInput = data.get("task-input")
        list.value.push(taskInput)
        console.log(list.value)              
    }
    
    function cleanList(){
        list.value = []
    }



</script>

<template>
    <div class="list">
        <h2>Lista de Tareas</h2>
        <form @submit="addNewTask">
            <input type="text" name="task-input">
            <div class="buttons">
                <button type="submit">Enviar</button>
                <button type="button" @click="cleanList">Limpiar</button>
            </div>
        </form>
        
        <ul>
            <li v-for="(item, index) in list" key="index">
                {{index+1}}-{{item}} 
            </li>
        </ul>
    </div>
</template>

<style scoped>
    .list{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center; 
    }

    input{ 
     width: 150px;
     height: 25px;
    }

    .buttons{
        display: flex;
        flex-direction: column;
    }

    .form-box{
        display:flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }
</style>