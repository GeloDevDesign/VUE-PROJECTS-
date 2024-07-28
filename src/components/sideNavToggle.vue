<script setup>
import { ref, computed } from "vue"
import one from './userInterfaceOne.vue'
import two from './userInterfaceTwo.vue'
import three from './userInterfaceThree.vue'

const activeUI = ref(1)  

const toggleNav = (index) => {
    activeUI.value = index
}

const getButtonClass = computed(() => (index) => {
    return {
        'btn bg-white  ': true,
        'active-button': activeUI.value === index
    }
})


</script>

<template>

    <div class="flex flex-col gap-2 fixed left-0 top-0 bottom-0">
        <button @click="toggleNav(1)" :class="getButtonClass(1)">User Interface 1</button>
        <button @click="toggleNav(2)" :class="getButtonClass(2)">User Interface 2</button>
        <button @click="toggleNav(3)" :class="getButtonClass(3)">User Interface 3</button>
    </div>
    
    <div class="ml-52" v-show="activeUI === 1">
      <one/>
    </div>
   
    <div class="ml-52" v-show="activeUI === 2">
      <two/>  
    </div>

    <div class="ml-52" v-show="activeUI === 3">
      <three/>
    </div>
</template>

<style scoped>

.active-button {
    color: white;
    background-color: green;
}
</style>