<script setup>
import { ref, onMounted } from "vue";
import { useInfiniteScroll } from "@vueuse/core";
import axios from "axios"; // Assuming you're using axios for API calls

const items = ref([]);
const PAGE = ref(1);
const MAX_LIMIT = 10;
const isLoading = ref(false);
const target = ref(null); // Element to trigger loading

const fetchData = async () => {
  if (isLoading.value) return;
  isLoading.value = true;

  try {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/posts?_page=${PAGE.value}&_limit=${MAX_LIMIT}` // Replace with your API endpoint
    );
    items.value = [...items.value, ...response.data]; // Append new items
    page.value++;
  } catch (error) {
    console.error("Error fetching data:", error);
  } finally {
    isLoading.value = false;
  }
};

onMounted(async () => {
  await fetchData(); // Initial data load
});

useInfiniteScroll(target, fetchData);
</script>

<template>
  <div class="infinite-scroll-container" style="overflow-y: scroll; height: 300px;">
    <div v-for="item in items" :key="item.id" class="item">
      {{ item.name }}
    </div>
    <div ref="target" v-if="!isLoading" class="target"></div>
    <div v-if="isLoading" class="loading">Loading...</div>
  </div>
</template>

<style scoped>
.infinite-scroll-container {
  border: 1px solid #ccc;
  padding: 10px;
}

.item {
  padding: 8px;
  border-bottom: 1px solid #eee;
}

.loading {
  text-align: center;
  padding: 10px;
}
.target{
    height: 10px;
}
</style>