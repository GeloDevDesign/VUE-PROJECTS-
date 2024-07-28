<script setup>
import axios from 'axios';
import {ref} from 'vue';
import { compileScript } from 'vue/compiler-sfc';

  const dadJokes = ref(null);

  const joke = ref(null);


  const fetchDadJoke = async ()=>{

    try {
      const response = await axios.get('https://icanhazdadjoke.com/',{
        headers:{
          Accept: 'application/json'
        }
      })

      console.log(response)

        joke.value = response.data.joke

    } catch (error) {
      console.error('Data Fetching', error)
    }

  }
</script>

<template>
      <h1>Hello {{ joke }}</h1>
      <button @click="fetchDadJoke" class="btn btn-primary">Click me </button>
</template>