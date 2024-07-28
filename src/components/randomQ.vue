<script setup>
import { ref, onMounted } from 'vue';
import { compileScript } from 'vue/compiler-sfc';

const jokeData = ref(null);

  const edit = ref(null);

  

async function fetchJoke() {


   edit.value.textContent = 'Getting Jokes...'

  try {


    const response = await fetch('https://icanhazdadjoke.com/slack');

      
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

   
    
    const data = await response.json();

    jokeData.value = data.attachments[0].text;

   edit.value.textContent = 'Get Joke'

    // console.log(jokeData.value);

  } catch (error) {
    console.error('There was a problem with the fetch operation:', error);
  }
}


onMounted(fetchJoke)

  

</script>

<template>
  <div class="flex flex-col gap-5">
    <h1 >Generated Joke</h1>
    <h1 >{{ jokeData }}</h1>
  </div>
  <button ref="edit" @click=" fetchJoke" class="btn btn-lg btn-primary text-white">Generate Joke</button>
</template>