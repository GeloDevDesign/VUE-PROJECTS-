<script setup>
    import { ref } from "vue";

  
    const newTask = ref('');
    const tasks = ref([]);

  
    const addTask = () => {
        if (newTask.value.trim() !== '') {
            tasks.value.push(newTask.value);
            newTask.value = ''; 
        }
    };

    
    const deleteTask = (index) => {
        tasks.value.splice(index, 1); 
    };

</script>

<template>
    <div class="flex justify-center items-center">
        <div class="bg-slate-200 w-80 h-80 flex flex-col items-center p-5">
            <div class="mb-5">
                <input class="w-44" v-model="newTask" @keyup.enter="addTask" placeholder="Add new todo">
                <button @click="addTask" class="btn bg-blue-700 text-white border-none btn-sm">Add Task</button>
            </div>

            <div class="flex justify-between w-full">
                <ul>
                    <li class="text-red-500" v-for="(task, index) in tasks" :key="index">
                        {{ task }}
                        <button @click="deleteTask(index)" class="btn-sm btn bg-red-700 border-none text-white">Delete</button>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
