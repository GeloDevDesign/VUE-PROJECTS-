<script setup>
import { defineProps, defineEmits, ref } from 'vue';

const props = defineProps({
  item: {
    type: Object,
    required: true
  }
});

const emit = defineEmits(['deleteItem', 'updateItem']);

const showToast = ref(false);
const deleteItemName = ref('');

const toggleModalDetails = (item) => {
  item.toggled = !item.toggled;
};

const toggleModalDelete = (item) => {
  item.deleteItem = !item.deleteItem;
  deleteItemName.value = item.name;
};

const deleteItem = (item) => {
  item.deleteItem = false;
  showToast.value = true;
  
  setTimeout(() => {
    showToast.value = false;
    emit('deleteItem', item);
  }, 2000);
};

const updateItem = (item) => {
    emit('updateItem', item);
}

</script>

<template>

        <div v-if="showToast"  role="alert" class="alert alert-error fixed top-5 right-5 items-center w-96">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6 shrink-0 stroke-current"
                  fill="none"
                  viewBox="0 0 24 24">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>{{ deleteItemName }} <span class="loading loading-dots loading-xs"></span></span>
              </div> 
        <td class="flex">
    


          
          <button class="btn btn-info" @click="updateItem(item)">Update</button>

          <button class="btn btn-info" @click="toggleModalDetails(item)">Details</button>

            <dialog :open="item.toggled" class="modal">

              <div class="modal-box">
                <h3 class="font-bold text-lg">Item Details</h3>
                
                <p class="py-4">
                  ID: {{ item.id }}<br>
                  Name: {{ item.name }}<br>
                  Price: {{ item.price }}<br>
                  Category: {{ item.category }}<br>
                  Stock: {{ item.stock }}
                </p>

                <div class="modal-action">
                  <button class="btn" @click="toggleModalDetails(item)">Close</button>
                </div>
              </div>

            </dialog> 
            
            <button @click="toggleModalDelete(item)"  class="btn btn-error">Delete</button>
             <dialog :open="item.deleteItem" class="modal">
              <div class="modal-box">
                <h3 class="font-bold text-lg">Are you sure you want to delete this item ? {{item.id}}</h3> 
                <div class="modal-action">
                  <button class="btn" @click="deleteItem(item)">Yes</button>
                  <button class="btn" @click="toggleModalDelete(item)">Close</button>
                </div>
              </div>

            </dialog> 

  </td>
</template>