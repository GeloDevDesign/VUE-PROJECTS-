

<script setup>
  import { ref, defineEmits } from 'vue';

  const emit = defineEmits(['search'])


  const search = (e)=>{ 
    emit('search', e.target.value);
  } 


  
</script>




<template>
  
  <input @input="search" type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs" />
</template>
