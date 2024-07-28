<script setup>
import { computed } from 'vue';

const props = defineProps({
  currentPage: {
    type: Number,
    required: true
  },
  totalPages: {
    type: Number,
    required: true
  }
});

const emit = defineEmits(['pageChange']);

const pages = computed(() => {
  const range = [];
  for (let i = 1; i <= props.totalPages; i++) {
    if (
      i === 1 ||
      i === props.totalPages ||
      (i >= props.currentPage - 1 && i <= props.currentPage + 1)
    ) {
      range.push(i);
    } else if (range[range.length - 1] !== '...') {
      range.push('...');
    }
  }
  return range;
});

const changePage = (page) => {
  if (page !== '...' && page !== props.currentPage) {
    emit('pageChange', page);
  }
};
</script>

<template>
  <div class="flex justify-center space-x-2 my-4">
    <button
      v-for="page in pages" :key="page" @click="changePage(page)" :class="{'btn btn-primary': page === currentPage, 'btn btn-ghost': page !== currentPage && page !== '...', 'btn btn-disabled': page === '...'
      }"
    >
      {{ page }}
    </button>

    
  </div>
</template>