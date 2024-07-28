<script setup>
import { ref, computed } from 'vue';

const formData = ref({
    name: '',
    email: '',
    password: ''
});

const errors = ref({
    name: false,
    email: false,
    password: false,
    toast: false
});

const isNameValid = computed(() => formData.value.name.trim() !== '');

const isEmailValid = computed(() => /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(formData.value.email));

const isPasswordValid = computed(() => formData.value.password.length >= 10);

const formValidation = computed(() => isNameValid.value && isEmailValid.value && isPasswordValid.value);

const submitForm = () => {
    errors.value.name = !isNameValid.value;
    errors.value.email = !isEmailValid.value;
    errors.value.password = !isPasswordValid.value;
   

    if (formValidation.value) {
      errors.value.toast = true 

      setTimeout(()=>{
        errors.value.toast = false

        formData.value.name = ''
        formData.value.data = ''
        formData.value.email =''

      },3000)
      
    }
};

const inputClass = (fieldName) => {

    return {
      
        'input input-bordered flex items-center gap-5': true,
        'border-red-500': errors.value[fieldName]
    };

};
</script>

<template>
      <div v-if="errors.toast" role="alert" class="alert alert-success">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6 shrink-0 stroke-current"
          fill="none"
          viewBox="0 0 24 24">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <span>Your purchase has been confirmed!</span>
    </div>


    <form @submit.prevent="submitForm">
        <div class="w-64 flex flex-col gap-5 justify-center items-center">
            <label :class="inputClass('name')">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="h-4 w-4 opacity-70">
                    <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
                </svg>
                <input v-model="formData.name" type="text" class="grow" placeholder="Username" />
            </label>
            <span class="text-red-600" v-if="errors.name">Name is not Valid</span>

            <label :class="inputClass('email')">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="h-4 w-4 opacity-70">
                    <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                    <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                </svg>
                <input v-model="formData.email" type="text" class="grow" placeholder="Email" />
            </label>
            <span class="text-red-600" v-if="errors.email">Email is not Valid</span>

            <label :class="inputClass('password')">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="h-4 w-4 opacity-70">
                    <path fill-rule="evenodd" d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z" clip-rule="evenodd" />
                </svg>
                <input v-model="formData.password" type="password" class="grow" placeholder="Password" />
            </label>
            <span class="text-red-600" v-if="errors.password">Password is not Valid (must be at least 10 characters)</span>

            <button type="submit" class="btn w-full flex items-center">Login</button>
        </div>
    </form>
</template>