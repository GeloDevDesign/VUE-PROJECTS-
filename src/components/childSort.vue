<script setup>
  import { ref,defineEmits } from 'vue';

  const sortType = ref('All');
  const index = ref(11)

  const newItem = ref({
  id: index.value,
  name: 'New Added Item',
  price: 500,
  category: 'device',
  stock: 200,
});


const addNewItem = () => {
  const itemToAdd = { ...newItem.value, id: index.value };
  emit('new', itemToAdd);
  index.value++;
  
  // Reset newItem for the next addition
  newItem.value = {
    id: index.value,
    name: 'New Added Item',
    price: 500,
    category: 'device',
    stock: 0,
  };
};


  const emit = defineEmits(['sort','new'])

  const handleSort = (value) => {
    sortType.value = value;
    emit('sort', sortType.value); 
  };

  
</script>

<template>
  <div class='flex gap-5'>
        
    <div class="flex gap-3">
      <button @click="handleSort('All')" class="btn btn-primary">All</button>
      <button @click="handleSort('device')" class="btn btn-primary">Device</button>
      <button @click="handleSort('fruit')" class="btn btn-primary">Fruit</button>
      <button @click="handleSort(0)" class="btn btn-primary">Out of Stock</button>
    </div>

    <button class="bg-green-500 text-white btn" @click="addNewItem">Add New Item</button>

  </div>
</template>
