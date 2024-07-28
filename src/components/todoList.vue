<script setup>


    import {ref,computed} from "vue";

    const weight = ref(null);
    const height = ref(null);
    const status = ref(0)
   

   


    const result = ()=>{
        status.value = weight.value / height.value
        console.log(status.value)
    }
    

    

    



</script>

<template >
   

      <div class="flex w-full justify-center h-screen items-center">
          <div class=" flex justify-center flex-col items-center w-96 gap-5 py-5">
              <h1 class="font-semibold text-2xl">BMI Calculator</h1>
                <div class="flex justify-between">
                    <p>Your Status is:</p> 
                    <p>{{ status }}</p>
                </div>
              <div class="flex flex-col gap-5">

                  <input @keyup.enter="result" v-model="weight"  type="number" placeholder="Weight" class="w-80 input input-bordered"/>

                  <input @keyup.enter="result" v-model="height" type="number" placeholder="Height" class="input input-bordered w-80" />
                  
              </div>
             <button @click="result" class="btn w-80 btn-primary text-lg text-white">Calculate</button>
         </div>
        </div>


</template>