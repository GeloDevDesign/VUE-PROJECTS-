<script setup>
  import {ref,computed} from 'vue';


  const items = ref([
    { id: 1, name: 'Laptop', price: 999, category: 'device' },
    { id: 2, name: 'Smartphone', price: 699, category: 'device' },
    { id: 3, name: 'Tablet', price: 399, category: 'device' },
    { id: 4, name: 'Headphones', price: 199, category: 'device' },
    { id: 5, name: 'Monitor', price: 299, category: 'device' },
    { id: 6, name: 'Apple', price: 1.5, category: 'fruit' },
    { id: 7, name: 'Banana', price: 0.5, category: 'fruit' },
    { id: 8, name: 'Orange', price: 1, category: 'fruit' },
    { id: 9, name: 'Mango', price: 2, category: 'fruit' }
])



const filteredItems = computed(() => {
  return items.value.filter(item => item.category === currentCategory.value)
})

console.log(filteredItems)



</script>


<template>
    <div class="flex gap-2">
      <button class="btn btn-primary">Fruit</button>
      <button class="btn btn-primary">Device</button>
    </div>
      <div v-for="({id,name,price,},index) in items" :key="index">
          <ul>
            <li class="flex gap-2">
              <h1 class="font-bold">{{ id }}</h1>
              <h1>{{ name }}</h1>
              <h1>{{ price }}</h1>
            </li>
          </ul>
      </div>
</template>