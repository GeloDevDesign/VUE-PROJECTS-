<template>
  <div>
    <h1>Inventory Management</h1>
    <ul>
      <li v-for="(quantity, item) in inventory" :key="item">
        {{ item }}: {{ quantity }} 
        <span v-if="quantity === 0" style="color: red;">(Out of Stock)</span>
      </li>
    </ul>

    <h2>Place Orders</h2>
    <div class="table">
      <button @click="placeOrder('sisig')">Order Sisig</button>
    <button @click="placeOrder('burger')">Order Burger</button>
    <button @click="placeOrder('pancit')">Order Pancit</button>
    <button @click="placeOrder('haloHalo')">Order Halo-Halo</button>
    <button @click="placeOrder('friedChicken')">Order Fried Chicken</button>
    <button @click="placeOrder('bukoPie')">Order Buko Pie</button>
    <button @click="placeOrder('lechon')">Order Lechon</button>
    <button @click="placeOrder('lumpia')">Order Lumpia</button>
    <button @click="placeOrder('kareKare')">Order Kare-Kare</button>
    <button @click="placeOrder('putoBumbong')">Order Puto Bumbong</button>
    </div>

    <h2>Reorder List</h2>
    <ul>
      <li v-for="item in reorderList" :key="item">{{ item }}</li>
    </ul>
  </div>
</template>

<script setup>
import { reactive, computed } from 'vue';

// Inventory of all components
const inventory = reactive({
  meat: 1000,  // in grams
  plasticBox: 50,
  straw: 100,
  condiment: 500, // in grams
  noodles: 300,  // in grams
  chicken: 1000, // in grams
  rice: 2000,    // in grams
  pork: 1500,    // in grams
  eggs: 100,     
  flour: 1000,   // in grams
  sugar: 800,    // in grams
  coconutMilk: 500, // in ml
});

// Bill of Materials (BOM) for each product
const bom = {
  sisig: {
    meat: 200,
    plasticBox: 1,
    straw: 1,
    condiment: 50,
  },
  burger: {
    meat: 150,
    plasticBox: 1,
    straw: 1,
    condiment: 30,
    flour: 100,
  },
  pancit: {
    noodles: 200,
    plasticBox: 1,
    condiment: 50,
    meat: 100,
  },
  haloHalo: {
    sugar: 50,
    coconutMilk: 100,
    plasticBox: 1,
    straw: 1,
  },

  friedChicken: {
    chicken: 200,
    plasticBox: 1,
    straw: 1,
  },

  bukoPie: {
    coconutMilk: 100,
    flour: 150,
    sugar: 50,
  },
  lechon: {
    pork: 500,
    rice: 300,
    plasticBox: 2,
    straw: 1,
  },

  lumpia: {
    pork: 200,
    flour: 100,
    plasticBox: 1,
    condiment: 30,
  },

  kareKare: {
    meat: 250,
    rice: 200,
    plasticBox: 1,
    condiment: 50,
  },

  putoBumbong: {
    rice: 150,
    sugar: 50,
    coconutMilk: 50,
    plasticBox: 1,
  },
};

// Reorder list for out-of-stock items
const reorderList = computed(() =>
  Object.keys(inventory).filter((item) => inventory[item] <= 0)
);

// Function to place an order
const placeOrder = (product) => {
  const requiredItems = bom[product];
  
  for (const [item, quantity] of Object.entries(requiredItems)) {
    if (inventory[item] >= quantity) {
      inventory[item] -= quantity;
    } else {
      console.log(`${item} is out of stock!`);
    }
  }
};
</script>

<style scoped>
h1, h2 {
  font-family: Arial, sans-serif;
}

button {
  margin: 5px 0;
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
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

.table {
  display: flex;
  gap: 16px;
  flex-direction: column ;
  justify-content: center;
  align-items: center;
}
</style>
