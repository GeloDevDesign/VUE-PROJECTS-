<script setup>
import { ref, onMounted } from "vue";
import { useInfiniteScroll } from "@vueuse/core";
import axios from "axios";

const posts = ref([]);
const currentPage = ref(1);
const pageSize = 10;
const isLoading = ref(false);
const scrollTarget = ref(null);
const noMoreData = ref(false); 

const fetchPosts = async () => {
  if (isLoading.value || noMoreData.value) return; 
  isLoading.value = true;

  try {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/posts?_page=${currentPage.value}&_limit=${pageSize}`
    );

    if (response.data.length === 0) { 
      noMoreData.value = true;
      isLoading.value = false;
      return;
    }

    posts.value = [...posts.value, ...response.data];
    currentPage.value++;
    console.log(posts.value);
  } catch (error) {
    console.error("Error fetching posts:", error);
    noMoreData.value = true; // Consider setting noMoreData on error too, if needed.
  } finally {
    isLoading.value = false;
  }
};

onMounted(async () => {
  await fetchPosts();
});

useInfiniteScroll(scrollTarget, fetchPosts);
</script>

<template>
  <div class="max-h-[screen] overflow-y-scroll border border-gray-300 p-4">
    <div class="card w-96 bg-base-100 card-xl shadow-sm">
      <div class="card-body" v-for="post in posts" :key="post.id">
        <h2 class="card-title">{{ post.title }}</h2>
        <p>
          A card component has a figure, a body part, and inside body there are
          title and actions parts
        </p>
        <div class="justify-end card-actions">
          <button class="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>

    <div v-if="isLoading" class="text-center py-2">Loading...</div>

    <div
      ref="scrollTarget"
      v-if="!isLoading && !noMoreData"
      class="h-2"
    ></div>
    <div v-if="noMoreData" class="text-center py-2">No more data.</div>
  </div>
</template>