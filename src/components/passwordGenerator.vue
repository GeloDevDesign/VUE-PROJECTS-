<script setup>
import {ref} from 'vue'

const passwordLength = ref(0);

const includeUpperCase = ref(true);

const includeNumber = ref(true);

const includeSymbols = ref(true)

const generatedPassword = ref('')

const isButtonDisabled = ref(false);

const editText = ref(null)


const generatePassword = () => {

  isButtonDisabled.value = true;
  
  editText.value.textContent = 'Generating ...'
  editText.value.style.color = 'green'

  const lowerCaseChars = 'abcdefghijklmnopqrstuvwxyz';
  const upperCaseChars = includeUpperCase.value ? 'ABCDEFGHIJKLMNOPQRSTUVWXYZ': '';
  const numberChars = includeNumber.value ? '0123456789': '';
  const symbolChars = includeSymbols.value ? "!@#$%^&*()-_=+[]{}|:;,<.>/?~" : '';

  const allChars = lowerCaseChars + upperCaseChars + numberChars + symbolChars;

  let password = '';

  for (let index = 0; index < passwordLength.value; index++) {

    const randomIndex = Math.floor(Math.random() * allChars.length);
    password += allChars[randomIndex];
    console.log(randomIndex);

  }

  

  
  setTimeout(()=>{
    isButtonDisabled.value = false; 
    generatedPassword.value = password;

    editText.value.textContent = 'Generate Password'
    editText.value.style.color = 'white'
  },2000)


  


  
}






</script>


<template>
  

  
  <div class="w-screen h-screen flex items-center justify-center ">
    <div class="w-80 flex flex-col items-center p-5 rounded-lg bg-slate-200">
    <input type="number" v-model="passwordLength">

    <div class="form-control w-36">
      <label class="label cursor-pointer">
        <input v-model="includeUpperCase" type="checkbox"  class="checkbox" />
        <span class="label-text">Upper Case</span>
      </label>
    </div>

    <div class="form-control w-36">
      <label class="label cursor-pointer">
        <input v-model="includeNumber" type="checkbox"  class="checkbox" />
        <span class="label-text">Numbers</span>
      </label>
    </div>


    <div class="form-control w-36">
      <label class="label cursor-pointer">
        <input v-model="includeSymbols" type="checkbox"  class="checkbox" />
        <span class="label-text">Symbols</span>
      </label>
    </div>

    <button ref="editText" :disabled="isButtonDisabled" @click="generatePassword" class="btn w-full bg-green-950 text-white mt-2">Generate Password</button>

      <div class="flex gap-2" v-if="generatePassword">
        <strong>Your Password:</strong>{{ generatedPassword }}
      </div>
    
  </div>
  </div>
</template>