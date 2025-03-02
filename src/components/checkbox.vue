<script setup>
import { ref, computed } from 'vue'

// Sample data representing orders with items
const orders = ref([
  { id: 1, name: 'Order 1',items: ['Item 1', 'Item 2', 'Item 3'] },
  { id: 2, name: 'Order 2', items: ['Item 4', 'Item 5', 'Item 6'] }
])

// Ref to store the selected order ID
const selectedOrderId = ref(1)

// Computed property to filter items based on the selected order
const filteredItems = computed(() => {
  const order = orders.value.find(order => order.id === selectedOrderId.value)
  return order ? order.items : [] //THIS PART IS FOR ERROR HANDLING FOR EXAMPLE WE DONT SELECT A ORDER IT WONT APPER ANY REACTIVIY
})
</script>

<template>
  <div class="todo-list">
    <h1>Todo List</h1>
    
    <!-- Dropdown to select an order -->
    <div>

      <select v-model="selectedOrderId" class="select select-bordered w-full max-w-xs">
        <option disabled selected>No item Selected</option>
        <option v-for="order in orders" :key="order.id" :value="order.id ">
          {{ order.name }}
        </option>
      </select>

    </div>

    <!-- List of items for the selected order -->
    <ul>
      <li v-for="(item, index) in filteredItems" :key="index">
        <div class="flex items-center gap-2">
            <input type="checkbox" v-model="item.completed" class="checkbox"/>
            <span>{{ item }}</span>
        </div>
      </li>
    </ul>


    <!-- REFUND PROCESS -->

      <button class="btn btn-sm bg-gray-300 text-gray-900">Process refund</button>
  </div>
</template>


