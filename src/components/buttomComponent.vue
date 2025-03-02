<!-- buttonComponent.vue -->
<script setup>
</script>

<template>
  <div class="mt-2 w-full flex justify-center">
    <!-- Button element with two named slots -->
    <button class="btn btn-sm flex items-center space-x-2">
      <slot name="icon"></slot> <!-- Slot for the icon -->
      <slot name="name"></slot> <!-- Slot for the name -->
    </button>
  </div>
</template>

<style scoped>

</style>
