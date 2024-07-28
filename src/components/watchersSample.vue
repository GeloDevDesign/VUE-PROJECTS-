

<script setup>
import { ref, reactive, watch } from 'vue';
import axios from 'axios';



    // Basic Watcher
    const count = ref(0);
    watch(count, (newValue, oldValue) => {
      console.log(`Count changed from ${oldValue} to ${newValue}`);
    });




    // Watching Multiple Sources
    const firstName = ref('');
    const lastName = ref('');
    watch([firstName, lastName], ([newFirst, newLast], [oldFirst, oldLast]) => {
      console.log(`Name changed from ${oldFirst} ${oldLast} to ${newFirst} ${newLast}`);
    });



    // Immediate Watcher
    const userInput = ref('');
    const validInput = ref(false);
    watch(userInput, (newValue) => {
      validInput.value = newValue.length > 3;
    }, { immediate: true });

    // Deep Watcher
    const user = reactive({
      name: 'Alice',
      address: {
        city: 'New York'
      }
    });
    watch(user, (newValue) => {
      console.log('User object changed:', newValue);
    }, { deep: true });

    // Watcher with Side Effects
    const userId = ref(1);
    const userData = ref(null);
    
    watch(userId, async (newId) => {
      try {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${newId}`);
        userData.value = response.data;
      } catch (error) {
        console.error('Failed to fetch user data:', error);
      }
    });

    // Stopping a Watcher
    const stoppableCount = ref(0);
    const stoppableWatcherStatus = ref('Watcher is active');
    const stopWatch = watch(stoppableCount, (newValue) => {
      console.log(`Stoppable count is now: ${newValue}`);
      if (newValue > 5) {
        stopWatch(); // Stop the watcher when count exceeds 5
        stoppableWatcherStatus.value = 'Watcher has been stopped';
      }
    });

  
  

</script>




<template>
  <div>
    <h1>Watcher Examples</h1>
    
    <h2>Basic Counter</h2>
    <button @click="count++">Increment: {{ count }}</button>
    
    <h2>Name Watcher</h2>
    <input v-model="firstName" placeholder="First Name">
    <input v-model="lastName" placeholder="Last Name">
    
    <h2>Input Validation</h2>
    <input v-model="userInput" placeholder="Enter text">
    <p>Valid input: {{ validInput }}</p>
    
    <h2>Deep Watcher</h2>
    <input v-model="user.name" placeholder="User name">
    <input v-model="user.address.city" placeholder="User city">
    
    <h2>User Data Fetcher</h2>
    <button @click="userId++">Next User</button>
    <p>User ID: {{ userId }}</p>
    <p>User Data: {{ userData }}</p>
    
    <h2>Stoppable Watcher</h2>
    <button @click="stoppableCount++">Increment: {{ stoppableCount }}</button>
    <p>{{ stoppableWatcherStatus }}</p>
  </div>
</template>