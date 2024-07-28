<script setup>
import { ref } from 'vue';

import QRCode from 'qrcode';


const url = ref('');
const qrCodeDataUrl = ref('');

const generateQRCode = async () => {
  try { 
    qrCodeDataUrl.value = await QRCode.toDataURL(url.value);
    console.log(qrCodeDataUrl.value)
  } catch (error) {
    console.error('Error generating QR code:', error);
  }
};


</script>

<template>
  <div class="flex h-screen justify-center items-center">
    <div class="w-96 h-96 bg-slate-900 flex flex-col justify-start items-center">
      <div class="mt-10">
        <h1 class="text-white font-semibold text-2xl mb-5">Generate QR Code</h1>
      <input v-model="url" @input="generateQRCode" type="text" placeholder="Enter URL or message" class="input input-bordered w-full max-w-xs">
      </div>
      <img class="w-40 aspect-square mt-10" v-if="qrCodeDataUrl" :src="qrCodeDataUrl" alt="QR Code">
    </div>
  </div>
</template>