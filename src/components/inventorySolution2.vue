<script setup>
import { reactive, ref } from 'vue';
import UpdateButton from './updateButton.vue';

// Prepared items that are dynamically tracked
const preparedItems = reactive({
  sisig: 10,
  chickenAdobo: 8,
});

// Raw materials that can be manually reordered
const rawMaterials = reactive({
  meat: 1000,  // in grams
  plasticBox: 50,
  condiments: 200,
  vegetables: 300,
});

// Reorder list
const reorderList = ref([]);

// Function to place an order for a prepared item
const placeOrder = (item) =>{

  if (preparedItems[item] > 0) {
    preparedItems[item]--;
  } else {
    console.log(`${item} is out of stock!`);
  }

};

// Function to add raw materials to the reorder list
const addToReorder = (item) => {
  
  if (!reorderList.value.includes(item)) {
    reorderList.value.push(item);
    rawMaterials[item] = 0
  }
};


const updateItem  = (Item) =>{
        
}
</script>

<template>
  <div>
    <h1>Inventory Management</h1>

    <h2>Prepared Items</h2>
    <ul>
      <li v-for="(quantity, item) in preparedItems" :key="item">
        {{ item }}: {{ quantity }} 
        <span v-if="quantity === 0" style="color: red;">(Out of Stock)</span>
      </li>
    </ul>

    <button @click="placeOrder('sisig')">Order Sisig</button>
    <button @click="placeOrder('chickenAdobo')">Order Chicken Adobo</button>

    <h2>Raw Materials</h2>
    <ul>
      <li v-for="(quantity, item) in rawMaterials" :key="item">
        {{ item }}: {{ quantity }}
        <button @click="addToReorder(item)">Reorder</button>
      </li>
    </ul>

    <h2>Reorder List</h2>
    <ul>
      <li v-for="item in reorderList" :key="item">{{ item }}</li>
    </ul>
  </div>
</template>

<style scoped>
h1, h2 {
  font-family: Arial, sans-serif;
}

button {
  margin: 5px 0;
  padding: 5px 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 3px;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  margin: 5px 0;
}
</style>
