

<script setup >

import { ref, computed, watch, onMounted, onUnmounted } from 'vue';


    const tasks = ref([]);
    const newTask = ref('');
    const currentFilter = ref('all');
    const lastSaved = ref(null);

    // Task operations
    const addTask = () => {
      if (newTask.value.trim()) {

        tasks.value.push({
          id: Date.now(),
          title: newTask.value.trim(),
          completed: false
        });
        newTask.value = '';

      }
    };

    const toggleTask = (task) => {
      task.completed = !task.completed;
    };

    const removeTask = (task) => {
      tasks.value = tasks.value.filter(t => t.id !== task.id);
    };

    // Filtering
    const setFilter = (filter) => {
      currentFilter.value = filter;
    };

    const filteredTasks = computed(() => {

      switch (currentFilter.value) {
        case 'active':
          return tasks.value.filter(task => !task.completed);
        case 'completed':
          return tasks.value.filter(task => task.completed);
        default:
          return tasks.value;
          
      }
    });

    // Analytics
    const totalTasks = computed(() => tasks.value.length);
    const completedTasks = computed(() => tasks.value.filter(task => task.completed).length);
    
    const completionRate = computed(() => {
      return totalTasks.value ? Math.round((completedTasks.value / totalTasks.value) * 100) : 0;
    });

    // Persistence
    const saveTasks = () => {
      localStorage.setItem('tasks', JSON.stringify(tasks.value));
      lastSaved.value = new Date();
    };

    const loadTasks = () => {
      const savedTasks = localStorage.getItem('tasks');
      if (savedTasks) {
        tasks.value = JSON.parse(savedTasks);
      }
    };

    // Watchers
    watch(tasks, saveTasks, { deep: true });

    // Lifecycle hooks
    onMounted(() => {
      loadTasks();
      window.addEventListener('beforeunload', saveTasks);
    });

    onUnmounted(() => {
      window.removeEventListener('beforeunload', saveTasks);
    });

   

</script>


<template>
  <div>
    <h1>Task Manager</h1>

    <!-- Task Input -->
    <input v-model="newTask" @keyup.enter="addTask" placeholder="Add new task">
    <button @click="addTask">Add Task</button>

    <!-- Filters -->
    <div>
      <button @click="setFilter('all')" :class="{ active: currentFilter === 'all' }">All</button>
      <button @click="setFilter('active')" :class="{ active: currentFilter === 'active' }">Active</button>
      <button @click="setFilter('completed')" :class="{ active: currentFilter === 'completed' }">Completed</button>
    </div>

    <!-- Task List -->
    <ul>
      <li v-for="task in filteredTasks" :key="task.id">
        <input type="checkbox" :checked="task.completed" @change="toggleTask(task)">
        <span :class="{ completed: task.completed }">{{ task.title }}</span>
        <button @click="removeTask(task)">Delete</button>
      </li>
    </ul>

    <!-- Analytics -->      
    <div>
      <h2>Analytics</h2>
      <p>Total Tasks: {{ totalTasks }}</p>
      <p>Completed Tasks: {{ completedTasks }}</p>
      <p>Completion Rate: {{ completionRate }}%</p>
    </div>
  </div>
</template>

<style scoped>
.completed {
  text-decoration: line-through;
}
.active {
  font-weight: bold;
}
</style>