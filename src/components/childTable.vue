<script setup>
import { ref, computed,provide  } from 'vue';
import Search from './searchChild.vue'; 
import Sort from './childSort.vue'; 
import Pagination from './pagination.vue'; // Make sure the component name starts with a capital letter
import itemStatus from './itemStatisNotif.vue'
import tableButton from './tableButton.vue'

const searchResult = ref('');
const sortType = ref(null);
const currentPage = ref(1);
const itemsPerPage = 6; 


const props = defineProps({
  items: {
    type: Array,
    required: true
  }
});

provide('items', props.items);

const filterItems = computed(() => {
  let result = props.items;

  if (searchResult.value !== '') {
    return result.filter(item => 
      item.name.toLowerCase().includes(searchResult.value.toLowerCase()) || 
      item.category.toLowerCase().includes(searchResult.value.toLowerCase()) || 
      item.stock === 0 || 
      item.price.toString() === searchResult.value
    );
  }

  switch (sortType.value) {
    case 'device':
    case 'fruit':
      result = result.filter(item => item.category === sortType.value);
      break;
    case 0:
      result = result.filter(item => item.stock === sortType.value);
      break;
    case 'All':
      // No filtering needed
      break;
    default:
      break;
  }

  return result;
});

const paginatedItems = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  return filterItems.value.slice(start, end);
});

const totalPages = computed(() => Math.ceil(filterItems.value.length / itemsPerPage));

const handleSearch = (search) => {
  searchResult.value = search;
  currentPage.value = 1;
};

const handleSort = (sortName) => {
  sortType.value = sortName;
  currentPage.value = 1;
};



const handlePageChange = (page) => {
  currentPage.value = page;
};



const handleDeleteItem = (itemToDelete) => {
  const index = props.items.findIndex(item => item.id === itemToDelete.id);
  if (index !== -1) {
    props.items.splice(index, 1);
  }
};



const handleUpdateItem = (itemToUpdate) => {
  const index =   props.items.findIndex(item => item.id === itemToUpdate.id);
  if (index !== -1) {
    props.items[index].name = 'New Item';
  }
};

const addNewItem = (newItem) => {
  props.items.push(newItem);
};

</script>

<template>
  <div class="w-full flex justify-between my-5">
    <div class="flex gap-5">
      <itemStatus :items="props.items" />
      <Search @search="handleSearch" />
    </div>
    

    <div class="flex gap-3">

      <Sort @sort="handleSort" @new="addNewItem"/>

    </div>
  </div>
    


  <div class="">
    <table class="table">
      
      <thead>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Price</th>
          <th>Category</th>
          <th >Stock</th>
          <th class="w-10">Modify</th>
        </tr>
      </thead>
      <tbody>
    <tr v-for="item in paginatedItems" :key="item.id" class="bg-base-200">
      <td>{{ item.id }}</td>
      <td>{{ item.name }}</td>
      <td>{{ item.price }}</td>
      <td>{{ item.category }}</td>
      <td :class="{ 'text-red-400': item.stock === 0 }">{{ item.stock }}</td>
      <tableButton :item="item" @delete-item="handleDeleteItem"
      @update-item="handleUpdateItem"/>
    </tr>
  </tbody>
    </table>

    
  </div>

    <Pagination 
      :current-page="currentPage"
      :total-pages="totalPages"
      @page-change="handlePageChange"
    />


    

  
</template>


<style>

</style>