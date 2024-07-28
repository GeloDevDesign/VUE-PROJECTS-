<script setup>
  import { ref, onMounted } from 'vue';
  import ChildTable from './childTable.vue'; 

  const items = ref([]);

  onMounted(() => {
    items.value = [
      { id: 1, name: 'Laptop', price: 999, category: 'device', stock: 0 },
      { id: 2, name: 'Smartphone', price: 699, category: 'fruit', stock: 10 },
      { id: 3, name: 'Tablet', price: 399, category: 'sport', stock: 2 },
      { id: 4, name: 'Headphones', price: 199, category: 'device', stock: 30 },
      { id: 5, name: 'Monitor', price: 299, category: 'sport', stock: 0 },
      { id: 6, name: 'Apple', price: 1.5, category: 'fruit', stock: 4 },
      { id: 7, name: 'Banana', price: 0.5, category: 'device', stock: 30 },
      { id: 8, name: 'Orange', price: 1, category: 'fruit', stock: 50 },
      { id: 9, name: 'Mango', price: 2, category: 'sport', stock: 0 },
      { id: 10, name: 'Strawberry', price: 2.5, category: 'sport', stock: 0 }
   
    ];
  });
</script>

<template>
  <ChildTable :items="items" />

  
</template>
