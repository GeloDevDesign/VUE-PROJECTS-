<script setup>
import axios from 'axios';

import {ref} from 'vue';

const username = ref('Angelo');
const userProfie = ref(null);
const error = ref(null);

const gitURL = `https//api.github.com/users/${username.value}`

const getUserProfile = async () =>{
  try {
    
    const response = await axios.get(gitURL)

    const data = await response.json()

    if(response.ok){

      userProfie.value = data;
      error.value = null;

    } else{
      userProfie.value  = null;
      error.value `Error ${data.message}`
    }

  } catch (error) {
      console.error('Error Fetching', error)
      error.value = 'An Error occured while Fetching'
  }
}
  
</script>

<template>
      <div>
          <h1>Git User Profile</h1>
        <input type="text" v-model="username" @input="getUserProfile">
      </div>

      <div v-if="userProfie">

      </div>
</template>