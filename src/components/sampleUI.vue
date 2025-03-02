<script setup>
const props = defineProps(["sampleName"]);
</script>

<template>

  <button
    class="btn btn-primary lg:bg-red-500 lg:btn md:bg-green-500 md:btn-sm sm:bg-yellow-500"
  >
    {{ props.sampleName }}
  </button>
  
</template>
