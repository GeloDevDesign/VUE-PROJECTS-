<script setup>
import {ref , onMounted} from 'vue';







const nameParts = {
  prefixes: [
    'Al', 'Ber', 'Cal', 'Dan', 'El', 'Fran', 'Gre', 'Har', 'Is', 'Jo',
    'Kat', 'Leo', 'Mic', 'Nat', 'Oli', 'Pat', 'Qui', 'Rob', 'Sam', 'Tho'
  ],
  middleParts: [
    'an', 'ber', 'car', 'der', 'en', 'fer', 'gar', 'hen', 'in', 'jan',
    'ken', 'lyn', 'mar', 'ner', 'or', 'per', 'quin', 'ren', 'son', 'ter'
  ],
  suffixes: [
    'a', 'ah', 'an', 'ard', 'en', 'eth', 'ia', 'ina', 'ine', 'is',
    'ius', 'ly', 'na', 'ne', 'ney', 'ny', 'on', 'opher', 'ton', 'y'
  ]
};


const nameGenerated = ref('')




const generateName = () => {

  const getRandomPart = (partArray) => partArray[Math.floor(Math.random() * partArray.length)];
  
  const prefix = getRandomPart(nameParts.prefixes);

  const middlePart = Math.random() > 0.5 ? getRandomPart(nameParts.middleParts) : '';

  const suffix = getRandomPart(nameParts.suffixes);

  nameGenerated.value = prefix + middlePart + suffix;
};





const passwordLength = ref(12);


const generatedPassword = ref('')



const generatePassword = () => {


const lowerCaseChars = 'abcdefghijklmnopqrstuvwxyz';
const upperCaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const numberChars =  '0123456789';
const symbolChars = "!@#$%^&*()-_=+[]{}|:;,<.>/?~" ;

const allChars = lowerCaseChars + upperCaseChars + numberChars + symbolChars;

let password = '';

for (let index = 0; index < passwordLength.value; index++) {

  const randomIndex = Math.floor(Math.random() * allChars.length);
  password += allChars[randomIndex];

}

generatedPassword.value = password

}

const isButtonDisabled = ref(false);
const editText = ref(null)


const createAccount =()=>{

  isButtonDisabled.value = true;
  editText.value.style.color = 'green'
  editText.value.textContent = 'Generating ....'

  


  setTimeout(()=>{
    isButtonDisabled.value = false; 

    generateName();
    generatePassword();

    editText.value.textContent = 'Generate Password'
    editText.value.style.color = 'white'
  },2000)



}






</script>


<template>
  
      <div>
        <h1 class="">Your Name: {{nameGenerated}}</h1>
        <h1>Your Passord: {{generatedPassword}}</h1>
      </div>

      <button  ref="editText" :disabled="isButtonDisabled" class="btn btn-primary" @click="createAccount">Generate Name</button>
  
  
</template>