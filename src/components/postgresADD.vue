<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';

const sampleData = ref([]);
const name = ref('');
const price = ref(0);

const addSampleData = async () => {
  try {
    const response = await axios.post('http://localhost:3000/add', {
      name: name.value,
      price: price.value,
    });

    name.value = '';
    price.value = 0;

    getData();

    console.log('Item created:', response.data);
  } catch (error) {
    console.error('Error creating item:', error);
  }
};

const getData = async () => {
  try {
    const response = await axios.get('http://localhost:3000/data');
    if (response.data.length === 0) {
      console.log('No data found');
    } else {
      sampleData.value = response.data;
    }
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

onMounted(getData);
</script>

<template>
  <div class="flex flex-col gap-2 justify-center items-center h-screen">
    <input class="input input-bordered" v-model="name" placeholder="Enter name" />
    <input class="input input-bordered" type="number" v-model="price" placeholder="Enter price" />
    <button class="btn btn-sm" @click="addSampleData">Create Item</button>
  </div>

  <div v-for="item in sampleData" :key="item.id">
    <h1>Item: {{ item.name }} - Price: {{ item.price }}</h1>
  </div>
</template>
