<script setup>
import { ref, computed } from 'vue';
import Search from './searchChild.vue'; 
import Sort from './childSort.vue'; 
import Pagination from './pagination.vue'; 



const searchResult = ref('');
const sortType = ref(null);
const showToast = ref(false);
const deleteItemName = ref('');
const currentPage = ref(1);
const itemsPerPage = 5;


const props = defineProps({
  items: {
    type: Array,
    required: true
  }
});


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
  currentPage.value = 1; // Reset to first page when searching
};

const handleSort = (sortName) => {
  sortType.value = sortName;
  currentPage.value = 1; // Reset to first page when sorting
};

const toggleModalDetails = (item) => {
  item.toggled = !item.toggled;
};

const toggleModalDelete = (item) => {
  item.deleteItem = !item.deleteItem;
  deleteItemName.value = item.name;
};

const deleteItem = (item) => {
  item.deleteItem = false;
  showToast.value = true;
  
  setTimeout(() => {
    showToast.value = false;
  }, 2000);
};

const handlePageChange = (page) => {
  currentPage.value = page;
};

// const itemCriticals = computed(()=>{
//     return  items.stock.filter(items => items.stock.value === 0)
// })
</script>

<template>

  <div class="w-full flex justify-between my-5">
     
    <Search @search="handleSearch" />
      
    

    <div class="flex gap-3">
      
      <Sort @sort="handleSort"/>
      
    </div>
  </div>

  <div class="overflow-x-auto">
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
          <td class="flex gap-5">

            <div v-if="showToast"  role="alert" class="alert alert-error fixed top-5 right-5 items-center w-96">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6 shrink-0 stroke-current"
                  fill="none"
                  viewBox="0 0 24 24">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>{{ deleteItemName }} <span class="loading loading-dots loading-xs"></span></span>
              </div>

            <button class="btn btn-info" @click="toggleModalDetails(item)">Details</button>

            <dialog :open="item.toggled" class="modal">

              <div class="modal-box">
                <h3 class="font-bold text-lg">Item Details</h3>
                
                <p class="py-4">
                  ID: {{ item.id }}<br>
                  Name: {{ item.name }}<br>
                  Price: {{ item.price }}<br>
                  Category: {{ item.category }}<br>
                  Stock: {{ item.stock }}
                </p>

                <div class="modal-action">
                  <button class="btn" @click="toggleModalDetails(item)">Close</button>
                </div>
              </div>

            </dialog>
            

            <button @click="toggleModalDelete(item)"  class="btn btn-error">Delete</button>

             <dialog :open="item.deleteItem" class="modal">
              <div class="modal-box">
                <h3 class="font-bold text-lg">Are you sure you want to delete this item ? {{item.id}}</h3>
                
                <div class="modal-action">
                  <button class="btn" @click="deleteItem(item)">Yes</button>
                  <button class="btn" @click="toggleModalDelete(item)">Close</button>
                </div>

              </div>

              </dialog>

          </td>
          
        </tr>
      </tbody>
    </table>

    
    <Pagination 
      :current-page="currentPage"
      :total-pages="totalPages"
      @page-change="handlePageChange"
    />

   
  </div>

  
</template>

<style>
</style>
