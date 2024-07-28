<script setup>
import {ref, computed} from 'vue';


const steps = ref(['Step 1','Step 2','Step 3','Step 4','Step 5','Step 6'])

const currentTab = ref('Step 1')


const currentStep = ref(0);
   
const nextStep = ()=>{
  if(currentStep.value < steps.value.length - 1){
      currentStep.value ++
      currentTab.value = steps.value[currentStep.value]
  }
}

const prevStep = ()=>{
  if(currentStep.value > 0){
      currentStep.value --
      currentTab.value = steps.value[currentStep.value]
      
  }
}

</script>


<template>
  
    <div>
        <div class="w-24 bg-green-950 text-white" :id="{'step-active': true}" >
            <h1>{{ currentTab }}</h1>
        </div>
    </div>

   

    <div class="w-96">
      <button @click="prevStep" :disabled="currentStep === 0" class="btn btn-primary">Prev</button>
      <button @click="nextStep" :disabled="currentStep === steps.length -1" class="btn btn-primary">Next</button>
    </div>
</template>


<style>
#step-active{
  background-color: red;
  color: white;
}

</style>