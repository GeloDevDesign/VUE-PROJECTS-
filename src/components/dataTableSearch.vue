<script setup>
    import {ref} from 'vue';

    const searcValue = ref('');

    const emit = defineEmits(['search'])

    emit('search',searcValue)


</script>


<template>
      

     <div class='flex gap-2 mt-5'>
      <form action="">
        
        <input  v-model="searcValue" type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs" />
      </form>
     </div>

</template>