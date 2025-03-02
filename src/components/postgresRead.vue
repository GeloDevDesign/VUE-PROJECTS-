<script setup>
import { onMounted, ref, computed } from 'vue'
import axios from 'axios';

const question = ref(null);
const dataSets = ref([]);
const currentIndex = ref(0);
const answer = ref('')
const stats = ref(false)
const score = ref(0)

const getRandomIndex = computed(() => {
  return Math.floor(Math.random() * dataSets.value.length);
});

const getCountry = async () => {
  try {
    const response = await axios.get('http://localhost:3000/data')
    dataSets.value = response.data
    
    if (dataSets.value.length > 0) {
      currentIndex.value = getRandomIndex.value;
      question.value = dataSets.value[currentIndex.value]
    }
    console.log(response.data)
  } catch (error) {
    console.error('Data Fetching', error)
  }
}

const checkAnswer = () => {
  const currentQuestion = dataSets.value[currentIndex.value];
  
  if (currentQuestion.capital.toLowerCase() === answer.value.toLowerCase()) {
    stats.value = true;
    score.value++
  } else {
    stats.value = false;
  }

  
  getCountry()

  answer.value = ''; 
}

onMounted(getCountry)
</script>

<template>
  <div class="h-screen flex justify-center items-center">
    <div class="w-96 aspect-square ">
      <h1 class="font-semibold mb-4 text-lg " v-if="question">
        What is the Capital of: {{ question.country }}
      </h1>
      <h1>{{ stats ? 'Correct!' : 'Incorrect' }}</h1>
      <h1>Your Score: {{ score }}</h1>
      <input v-model="answer" type="text" placeholder="Type the capital" class="input input-bordered w-full max-w-xs" />
      <button class="btn btn-primary text-white mt-4" @click="checkAnswer">Check</button>
    </div>
  </div>
</template>