<script setup>
import { ref, onMounted, computed } from 'vue';



const display = ref('0');


const appendToDisplay = (value)=>{

      if(display.value  === '0' && value !== '.'){

          display.value = value
          
      } else {

        display.value += value

      }
  }

  const calculate = ()=>{

        try {

            display.value = eval(display.value).toString();

        } catch (error) {

            display.value = "Error"
        }

    }

    const errorHandler =()=>{
      display.value = display.value.slice(0, -1)
    }

    const displayClass = computed(()=>{

      return display.value.length > 10 ?  errorHandler(): '';

    })

    const clearDisplay = () =>{
      display.value = '0'
    }



    const deleteNumber = () => {
      if (display.value.length > 1) {
        errorHandler()
      } else {
        display.value = '0';
      }
}






</script>

<template>
      
      <div>

        <div>
          <input type="text" v-model="display" :class="displayClass">
          <div class="button flex flex-col gap-2">
            <div class="flex gap-2">
              <button @click="appendToDisplay('7')" class="btn">7</button>
              <button @click="appendToDisplay('8')" class="btn">8</button>
              <button @click="appendToDisplay('9')" class="btn">9</button>
              <button @click="appendToDisplay('/')" class="btn">/</button>
            </div>
 
            <div class="flex gap-2">
              <button @click="appendToDisplay('4')" class="btn">4</button>
              <button @click="appendToDisplay('5')" class="btn">5</button>
              <button @click="appendToDisplay('6')" class="btn">6</button>
              <button @click="appendToDisplay('*')" class="btn">*</button>
            </div>

            <div class="flex gap-2">
              <button @click="appendToDisplay('1')" class="btn">1</button>
              <button @click="appendToDisplay('2')" class="btn">2</button>
              <button @click="appendToDisplay('3')" class="btn">3</button>
              <button @click="appendToDisplay('-')" class="btn">-</button>
            </div>


            <div class="flex gap-2">
              <button @click="appendToDisplay('0')" class="btn">0</button>
              <button @click="appendToDisplay('.')" class="btn">.</button>
              <button @click="calculate()" class="btn">=</button>
              <button @click="appendToDisplay('-')" class="btn">+</button>
            </div>

            <div>
              <button class="btn bg-red-800 text-white" @click="clearDisplay">C</button>
              <button class="btn bg-red-800 text-white" @click="deleteNumber">Del</button>
            </div>
            
          </div>
        </div>
        
      </div>
</template>


