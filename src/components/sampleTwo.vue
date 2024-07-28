<script setup>
  import ProductCard from './sample.vue'
</script>

<template>
  <ProductCard>
    <template v-slot:title>
      <h1>Custome Title</h1>
    </template>
    
    <!-- If you have reviews, use this slot -->
    <template v-slot:reviews>
      <ul>
        <li>Great product!</li>
        <li>Would buy again!</li>
      </ul>
    </template>
    
    <!-- If you don't provide the reviews slot, it will show the default "No reviews yet" message -->
  </ProductCard>
  
  <!-- You can create multiple cards with different content -->
  <!-- <ProductCard>

    <template v-slot:title>
      Another Product
    </template>

    <template v-slot:reviews>
      <p>This product is amazing!</p>
    </template>
    
  </ProductCard> -->
</template>

<style>
* {
  font-family: montserrat;
}
</style>