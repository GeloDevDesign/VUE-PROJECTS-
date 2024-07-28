<script setup>
import { ref, computed } from 'vue'

const items = ref([
  { id: 1, name: 'Laptop', price: 999, category: 'device' },
  { id: 2, name: 'Smartphone', price: 699, category: 'device' },
  { id: 3, name: 'Tablet', price: 399, category: 'device' },
  { id: 4, name: 'Headphones', price: 199, category: 'device' },
  { id: 5, name: 'Monitor', price: 299, category: 'device' },
  { id: 6, name: 'Apple', price: 1.5, category: 'fruit' },
  { id: 7, name: 'Banana', price: 0.5, category: 'fruit' },
  { id: 8, name: 'Orange', price: 1, category: 'fruit' },
  { id: 9, name: 'Mango', price: 2, category: 'fruit' },
  { id: 10, name: 'Strawberry', price: 2.5, category: 'fruit' },
  { id: 1, name: 'Laptop', price: 999, category: 'device' },
  { id: 2, name: 'Smartphone', price: 699, category: 'device' },
  { id: 3, name: 'Tablet', price: 399, category: 'device' },
  { id: 4, name: 'Headphones', price: 199, category: 'device' },
  { id: 5, name: 'Monitor', price: 299, category: 'device' },
  { id: 6, name: 'Apple', price: 1.5, category: 'fruit' },
  { id: 7, name: 'Banana', price: 0.5, category: 'fruit' },
  { id: 8, name: 'Orange', price: 1, category: 'fruit' },
  { id: 9, name: 'Mango', price: 2, category: 'fruit' },
  { id: 10, name: 'Strawberry', price: 2.5, category: 'fruit' },
  { id: 1, name: 'Laptop', price: 999, category: 'device' },
  { id: 2, name: 'Smartphone', price: 699, category: 'device' },
  { id: 3, name: 'Tablet', price: 399, category: 'device' },
  { id: 4, name: 'Headphones', price: 199, category: 'device' },
  { id: 5, name: 'Monitor', price: 299, category: 'device' },
  { id: 6, name: 'Apple', price: 1.5, category: 'fruit' },
  { id: 7, name: 'Banana', price: 0.5, category: 'fruit' },
  { id: 8, name: 'Orange', price: 1, category: 'fruit' },
  { id: 9, name: 'Mango', price: 2, category: 'fruit' },
  { id: 10, name: 'Strawberry', price: 2.5, category: 'fruit' },

  { id: 1, name: 'Laptop', price: 999, category: 'device' },
  { id: 2, name: 'Smartphone', price: 699, category: 'device' },
  { id: 3, name: 'Tablet', price: 399, category: 'device' },
  { id: 4, name: 'Headphones', price: 199, category: 'device' },
  { id: 5, name: 'Monitor', price: 299, category: 'device' },
  { id: 6, name: 'Apple', price: 1.5, category: 'fruit' },
  { id: 7, name: 'Banana', price: 0.5, category: 'fruit' },
  { id: 8, name: 'Orange', price: 1, category: 'fruit' },
  { id: 9, name: 'Mango', price: 2, category: 'fruit' },
  { id: 10, name: 'Strawberry', price: 2.5, category: 'fruit' },

  { id: 11, name: 'Laptop', price: 999, category: 'device' },
  { id: 12, name: 'Smartphone', price: 699, category: 'device' },
  { id: 13, name: 'Tablet', price: 399, category: 'device' },
  { id: 14, name: 'Headphones', price: 199, category: 'device' },
  { id: 15, name: 'Monitor', price: 299, category: 'device' },
  { id: 16, name: 'Apple', price: 1.5, category: 'fruit' },
  { id: 17, name: 'Banana', price: 0.5, category: 'fruit' },
  { id: 18, name: 'Orange', price: 1, category: 'fruit' },
  { id: 19, name: 'Mango', price: 2, category: 'fruit' },
  { id: 20, name: 'Strawberry', price: 2.5, category: 'fruit' },

  { id: 21, name: 'Laptop', price: 999, category: 'device' },
  { id: 22, name: 'Smartphone', price: 699, category: 'device' },
  { id: 23, name: 'Tablet', price: 399, category: 'device' },
  { id: 24, name: 'Headphones', price: 199, category: 'device' },
  { id: 25, name: 'Monitor', price: 299, category: 'device' },
  { id: 26, name: 'Apple', price: 1.5, category: 'fruit' },
  { id: 27, name: 'Banana', price: 0.5, category: 'fruit' },
  { id: 28, name: 'Orange', price: 1, category: 'fruit' },
  { id: 99, name: 'Mango', price: 2, category: 'fruit' },
  { id: 30, name: 'Strawberry', price: 2.5, category: 'fruit' },


  { id: 31, name: 'Laptop', price: 999, category: 'device' },
  { id: 32, name: 'Smartphone', price: 699, category: 'device' },
  { id: 33, name: 'Tablet', price: 399, category: 'device' },
  { id: 34, name: 'Headphones', price: 199, category: 'device' },
  { id: 35, name: 'Monitor', price: 299, category: 'device' },
  { id: 36, name: 'Apple', price: 1.5, category: 'fruit' },
  { id: 37, name: 'Banana', price: 0.5, category: 'fruit' },
  { id: 38, name: 'Orange', price: 1, category: 'fruit' },
  { id: 39, name: 'Mango', price: 2, category: 'fruit' },
  { id: 40, name: 'Strawberry', price: 2.5, category: 'fruit' },


  { id: 1, name: 'Laptop', price: 999, category: 'device' },
  { id: 2, name: 'Smartphone', price: 699, category: 'device' },
  { id: 3, name: 'Tablet', price: 399, category: 'device' },
  { id: 4, name: 'Headphones', price: 199, category: 'device' },
  { id: 5, name: 'Monitor', price: 299, category: 'device' },
  { id: 6, name: 'Apple', price: 1.5, category: 'fruit' },
  { id: 7, name: 'Banana', price: 0.5, category: 'fruit' },
  { id: 8, name: 'Orange', price: 1, category: 'fruit' },
  { id: 9, name: 'Mango', price: 2, category: 'fruit' },
  { id: 10, name: 'Strawberry', price: 2.5, category: 'fruit' },
  { id: 1, name: 'Laptop', price: 999, category: 'device' },
  { id: 2, name: 'Smartphone', price: 699, category: 'device' },
  { id: 3, name: 'Tablet', price: 399, category: 'device' },
  { id: 4, name: 'Headphones', price: 199, category: 'device' },
  { id: 5, name: 'Monitor', price: 299, category: 'device' },
  { id: 6, name: 'Apple', price: 1.5, category: 'fruit' },
  { id: 7, name: 'Banana', price: 0.5, category: 'fruit' },
  { id: 8, name: 'Orange', price: 1, category: 'fruit' },
  { id: 9, name: 'Mango', price: 2, category: 'fruit' },
  { id: 10, name: 'Strawberry', price: 2.5, category: 'fruit' },
  { id: 1, name: 'Laptop', price: 999, category: 'device' },
  { id: 2, name: 'Smartphone', price: 699, category: 'device' },
  { id: 3, name: 'Tablet', price: 399, category: 'device' },
  { id: 4, name: 'Headphones', price: 199, category: 'device' },
  { id: 5, name: 'Monitor', price: 299, category: 'device' },
  { id: 6, name: 'Apple', price: 1.5, category: 'fruit' },
  { id: 7, name: 'Banana', price: 0.5, category: 'fruit' },
  { id: 8, name: 'Orange', price: 1, category: 'fruit' },
  { id: 9, name: 'Mango', price: 2, category: 'fruit' },
  { id: 10, name: 'Strawberry', price: 2.5, category: 'fruit' },

  { id: 1, name: 'Laptop', price: 999, category: 'device' },
  { id: 2, name: 'Smartphone', price: 699, category: 'device' },
  { id: 3, name: 'Tablet', price: 399, category: 'device' },
  { id: 4, name: 'Headphones', price: 199, category: 'device' },
  { id: 5, name: 'Monitor', price: 299, category: 'device' },
  { id: 6, name: 'Apple', price: 1.5, category: 'fruit' },
  { id: 7, name: 'Banana', price: 0.5, category: 'fruit' },
  { id: 8, name: 'Orange', price: 1, category: 'fruit' },
  { id: 9, name: 'Mango', price: 2, category: 'fruit' },
  { id: 10, name: 'Strawberry', price: 2.5, category: 'fruit' },

  { id: 11, name: 'Laptop', price: 999, category: 'device' },
  { id: 12, name: 'Smartphone', price: 699, category: 'device' },
  { id: 13, name: 'Tablet', price: 399, category: 'device' },
  { id: 14, name: 'Headphones', price: 199, category: 'device' },
  { id: 15, name: 'Monitor', price: 299, category: 'device' },
  { id: 16, name: 'Apple', price: 1.5, category: 'fruit' },
  { id: 17, name: 'Banana', price: 0.5, category: 'fruit' },
  { id: 18, name: 'Orange', price: 1, category: 'fruit' },
  { id: 19, name: 'Mango', price: 2, category: 'fruit' },
  { id: 20, name: 'Strawberry', price: 2.5, category: 'fruit' },

  { id: 21, name: 'Laptop', price: 999, category: 'device' },
  { id: 22, name: 'Smartphone', price: 699, category: 'device' },
  { id: 23, name: 'Tablet', price: 399, category: 'device' },
  { id: 24, name: 'Headphones', price: 199, category: 'device' },
  { id: 25, name: 'Monitor', price: 299, category: 'device' },
  { id: 26, name: 'Apple', price: 1.5, category: 'fruit' },
  { id: 27, name: 'Banana', price: 0.5, category: 'fruit' },
  { id: 28, name: 'Orange', price: 1, category: 'fruit' },
  { id: 99, name: 'Mango', price: 2, category: 'fruit' },
  { id: 30, name: 'Strawberry', price: 2.5, category: 'fruit' },


  { id: 31, name: 'Laptop', price: 999, category: 'device' },
  { id: 32, name: 'Smartphone', price: 699, category: 'device' },
  { id: 33, name: 'Tablet', price: 399, category: 'device' },
  { id: 34, name: 'Headphones', price: 199, category: 'device' },
  { id: 35, name: 'Monitor', price: 299, category: 'device' },
  { id: 36, name: 'Apple', price: 1.5, category: 'fruit' },
  { id: 37, name: 'Banana', price: 0.5, category: 'fruit' },
  { id: 38, name: 'Orange', price: 1, category: 'fruit' },
  { id: 39, name: 'Mango', price: 2, category: 'fruit' },
  { id: 40, name: 'Strawberry', price: 2.5, category: 'fruit' },
  
  // Add more items here to test pagination
])

const currentCategory = ref('device')
const sortBy = ref('name')
const sortOrder = ref('asc')
const currentPage = ref(1)
const itemsPerPage = 5



const filteredItems = computed(() => {
  return items.value.filter(item => item.category === currentCategory.value)
})

const sortedItems = computed(() => {
  return [...filteredItems.value].sort((a, b) => {
    let modifier = sortOrder.value === 'asc' ? 1 : -1
    if (a[sortBy.value] < b[sortBy.value]) return -1 * modifier
    if (a[sortBy.value] > b[sortBy.value]) return 1 * modifier
    return 0
  })
})

const paginatedItems = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage
  const end = start + itemsPerPage
  return sortedItems.value.slice(start, end)
})

const totalPages = computed(() => Math.ceil(sortedItems.value.length / itemsPerPage))

const pageNumbers = computed(() => {
  const showPages = 5
  const pages = []
  if (totalPages.value <= showPages) {
    for (let i = 1; i <= totalPages.value; i++) {
      pages.push(i)
    }
  } else {
    let start = Math.max(currentPage.value - Math.floor(showPages / 2), 1)
    let end = Math.min(start + showPages - 1, totalPages.value)

    if (end - start + 1 < showPages) {
      start = Math.max(end - showPages + 1, 1)
    }

    if (start > 1) {
      pages.push(1)
      if (start > 2) pages.push('...')
    }

    for (let i = start; i <= end; i++) {
      pages.push(i)
    }

    if (end < totalPages.value) {
      if (end < totalPages.value - 1) pages.push('...')
      pages.push(totalPages.value)
    }
  }
  return pages
})




const changeSortBy = (field) => {
  if (field === sortBy.value) {
    sortOrder.value = sortOrder.value === 'asc' ? 'desc' : 'asc'
  } else {
    sortBy.value = field
    sortOrder.value = 'asc'
  }
  currentPage.value = 1
}

const changeCategory = (category) => {
  currentCategory.value = category
  sortBy.value = 'name'
  sortOrder.value = 'asc'
  currentPage.value = 1
}

const categories = computed(() =>{
  return [...new Set(items.value.map(item => item.category))]
})

const changePage = (page) => {
  if (typeof page === 'number' && page >= 1 && page <= totalPages.value) {
    currentPage.value = page
  }
}


</script>

<template>
  <div>
    <h2>Item List</h2>
    <div>
      <button 
        v-for="category in categories" 
        :key="category"
        @click="changeCategory(category)" 
        :class="{ active: currentCategory === category }"
      >
        {{ category.charAt(0).toUpperCase() + category.slice(1) }}
      </button>
    </div>
    <table v-if="paginatedItems.length">
      <thead>
        <tr>
          <th @click="changeSortBy('name')">
            Name
            <span v-if="sortBy === 'name'">{{ sortOrder === 'asc' ? '▲' : '▼' }}</span>
          </th>
          <th @click="changeSortBy('price')">
            Price
            <span v-if="sortBy === 'price'">{{ sortOrder === 'asc' ? '▲' : '▼' }}</span>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in paginatedItems" :key="item.id">
          <td>{{ item.name }}</td>
          <td>${{ item.price.toFixed(2) }}</td>
        </tr>
      </tbody>
    </table>
    <div class="pagination" v-if="totalPages > 1">
      <button @click="changePage(currentPage - 1)" :disabled="currentPage === 1">Previous</button>

      <button 
        v-for="page in pageNumbers" :key="page"n@click="changePage(page)" :class="{ active: currentPage === page }" :disabled="page === '...'"
      >
        {{ page }}
      </button>


      <button @click="changePage(currentPage + 1)" :disabled="currentPage === totalPages">Next</button>


    </div>
  </div>
</template>

<style scoped>
table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
}
th, td {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
}
th {
  background-color: #f2f2f2;
  cursor: pointer;
}
button {
  margin-right: 10px;
  padding: 5px 10px;
  cursor: pointer;
}
button.active {
  background-color: #007bff;
  color: white;
}
.pagination {
  margin-top: 20px;
}
.pagination button {
  margin: 0 5px;
}
.pagination button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
</style>