<script setup>
import { ref, computed } from 'vue';

const data = ref([
  { id: 1, name: 'Laptop', price: 999, category: 'device', stock: 0 },
  { id: 2, name: 'Smartphone', price: 699, category: 'fruit', stock: 10 },
  { id: 3, name: 'Tablet', price: 399, category: 'sport', stock: 2 },
  { id: 4, name: 'Headphones', price: 199, category: 'device', stock: 30 },
  { id: 5, name: 'Monitor', price: 299, category: 'sport', stock: 0 },
  { id: 6, name: 'Apple', price: 1.5, category: 'fruit', stock: 4 },
  { id: 7, name: 'Banana', price: 0.5, category: 'device', stock: 30 },
  { id: 8, name: 'Orange', price: 1, category: 'fruit', stock: 50 },
  { id: 9, name: 'Mango', price: 2, category: 'sport', stock: 0 },
  { id: 10, name: 'Strawberry', price: 2.5, category: 'sport', stock: 0 },
]);


const currentFilter = ref('all');
const searchQuery = ref('');
const currentPage = ref(1);
const itemsPerPage = ref(8);

const sortedAndFilteredData = computed(() => {
  let result = data.value
  // Apply search filter
  if (searchQuery.value) {
      result = result.filter(item => 
      item.name.toLowerCase().includes(searchQuery.value.toLowerCase())
    );
  }

  // Apply category/stock filter
  switch (currentFilter.value) {
    case 'all':
      // No additional filtering needed
      break;
    case 'inStock':
      result = data.value.filter(item => item.stock > 0);
      break;
    case 'outOfStock':
      result = data.value.filter(item => item.stock === 0);
      break;
    default:
      // Assume it's a category filter
      result = data.value.filter(item => item.category === currentFilter.value);
  }

  return result;
});

const paginatedData = computed(() => {
  const startIndex = (currentPage.value - 1) * itemsPerPage.value;
  const endIndex = startIndex + itemsPerPage.value;
  return sortedAndFilteredData.value.slice(startIndex, endIndex);
});



// const totalPages = computed(() => 
//   Math.ceil(sortedAndFilteredData.value.length / itemsPerPage.value)
// );

const categories = ['all', 'device', 'fruit', 'sport'];
const stockFilters = ['inStock', 'outOfStock'];

const applyFilter = (filter) => {
  currentFilter.value = filter;
  currentPage.value = 1; // Reset to first page when filter changes
};

// const changePage = (page) => {
//   currentPage.value = page;
// };

</script>

<template>
  <div class="mb-4">
    <input 
      v-model="searchQuery"
      type="text"
      placeholder="Search items..."
      class="input input-bordered w-full max-w-xs"
    />
  </div>

  <div class='flex gap-5 mb-4'>
    <button 
      v-for="category in categories" 
      :key="category" 
      @click="applyFilter(category)" 
      class="btn btn-primary text-white"
      :class="{ 'btn-active': currentFilter === category }"
    >
      {{ category }}
    </button>
  </div>

  <div class='flex gap-5 mb-4'>
    <button 
      v-for="filter in stockFilters" 
      :key="filter" 
      @click="applyFilter(filter)" 
      class="btn btn-secondary text-white"
      :class="{ 'btn-active': currentFilter === filter }"
    >
      {{ filter }}
    </button>


  </div>
 <!-- DATA TABLES -->
  <div class="overflow-x-auto">
    <table class="table">
      <thead>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Price</th>
          <th>Category</th>
          <th>Stock</th>
        </tr>
      </thead>
      <tbody>
        <tr :class="{ 'out-stock': item.stock === 0 }" v-for="item in paginatedData" :key="item.id" class="bg-base-200">
          <th>{{ item.id }}</th>
          <td>{{ item.name }}</td>
          <td >{{ item.price }}</td>
          <td >{{ item.category }}</td>
          <td >{{ item.stock }}</td>
        </tr>
      </tbody>
    </table>
  </div>

  <!-- Pagination controls -->
  <!-- <div class="flex justify-center mt-4">
    <button 
      v-for="page in totalPages" 
      :key="page" 
      @click="changePage(page)"
      class="btn btn-sm mx-1"
      :class="{ 'btn-active': currentPage === page }"
    >
      {{ page }}
    </button>
  </div> -->
</template>

<style>

.out-stock{
  background-color:rgb(82, 7, 7);
  color:white;
}

</style>