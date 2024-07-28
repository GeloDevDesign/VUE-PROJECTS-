<script setup>
import { ref } from 'vue'

const searchQuery = ref('')
const searchResults = ref([])
const isLoading = ref(false)
const error = ref(null)
const isDarkTheme = ref(false)

const searchWikipedia = async (query) => {

  const encodedQuery = encodeURIComponent(query)

  const endpoint = `https://en.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=10&srsearch=${encodedQuery}`

  try {
    isLoading.value = true
    const response = await fetch(endpoint)
    const data = await response.json()
    console.log(data)

    if (data.query && data.query.search) {
      searchResults.value = data.query.search
      error.value = null
    } else {
      searchResults.value = []
      error.value = 'No results found.'
    }
  } catch (err) {
    console.error('Error fetching data:', err)
    searchResults.value = []
    error.value = 'An error occurred while fetching data.'
  } finally {
    isLoading.value = false
  }


}


const submitSearch = () => {
  if (searchQuery.value.trim() !== '') {
    searchWikipedia(searchQuery.value)

  } else {
    searchResults.value = []
    error.value = 'Please enter a valid search term.'
  }
}
</script>

<template>
  <div class="w-full">
    
    <div class="container">
      <div class="text-center">
        <h1 class="text-white text-3xl my-10">Search Wikipedia</h1>
      
      </div>

      <form @submit.prevent="submitSearch" class="w-full flex justify-center gap-5">
        <input type="text" v-model="searchQuery"  placeholder="Enter search term" class="input input-bordered w-full max-w-lg" />
        
        <button type="submit" class="btn btn-primary">Search</button>
      </form>

      <div class="w-full flex justify-center items-center">
        <div class="w-full justify-center">

        

  <div class="w-full flex justify-center items-center mt-10">
    <span v-if="isLoading" class="loading loading-dots loading-lg"></span>
      
<p v-if="error">{{ error }}</p>

  <div v-if="searchResults.length" class=' flex w-full justify-center flex-col'>

  <div v-for="result in searchResults" :key="result.pageid" class=" w-full flex flex-col items-center gap-1 my-5 justify-center">
    <h3 class="font-semibold text-xl w-1/2 ">
      <a  
        :href="`https://en.wikipedia.org/?curid=${result.pageid}`"
        target="_blank"
        rel="noopener"
        >{{ result.title }}</a
      >
    </h3>
    <a
      :href="`https://en.wikipedia.org/?curid=${result.pageid}`"
      class="text-white w-1/2"
      target="_blank"
      rel="noopener"
    >
      {{ `https://en.wikipedia.org/?curid=${result.pageid}` }}
    </a>
    <p class="w-1/2" v-html="result.snippet"></p>
  </div>
</div>
</div>  

</div>
      </div>
      
    </div>
  </div>
</template>


