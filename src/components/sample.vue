<script setup>
// You can add props or other logic here if needed
</script>

<template>
  <div class="card bg-base-100 w-96 shadow-xl">

    <figure>
      <img
        src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
        alt="Shoes" />
    </figure>

    <div class="card-body">
      <h2 class="card-title">
        <slot name="title">Default Product Title</slot>
      </h2>
      <p>If a dog chews shoes whose shoes does he choose?</p>
      <div class="reviews">
        <slot name="reviews">
          <p>No reviews yet</p>
        </slot>
      </div>
      <div class="card-actions justify-end">
        <button class="btn btn-primary">Buy Now</button>
      </div>
    </div>
    
  </div>
</template>