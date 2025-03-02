<script setup>
import { ref, onMounted, onUnmounted } from "vue";

// Section 1 (Hero)
const heroSection = ref(null);
const heroVisible = ref(false);


// Section 2 (About)
const aboutSection = ref(null);
const aboutVisible = ref(false);


// Section 3 (Projects)
const projectsSection = ref(null);
const projectsVisible = ref(false);


const observer = ref(null);

const handleIntersect = (entries) => {
  entries.forEach((entry) => {
    if (entry.target === heroSection.value) {
      
      heroVisible.value = entry.isIntersecting;
     
    } else if (entry.target === aboutSection.value) {
      
      aboutVisible.value = entry.isIntersecting;
     
    } else if (entry.target === projectsSection.value) {
    
      projectsVisible.value = entry.isIntersecting;
    }
  });
};

onMounted(() => {
  observer.value = new IntersectionObserver(handleIntersect, {
    threshold: 0.1,
    rootMargin: "0px",
  });

  if (heroSection.value) observer.value.observe(heroSection.value);
  if (aboutSection.value) observer.value.observe(aboutSection.value);
  if (projectsSection.value) observer.value.observe(projectsSection.value);

});

onUnmounted(() => {
  if (observer.value) observer.value.disconnect();
});
</script>

<template>
  <div class="portfolio-container">
    <div ref="heroSection" class="section-placeholder h-screen w-full">
      <section v-if="heroVisible" class="h-screen bg-gray-100 w-full p-8">
        <h1 class="text-3xl font-bold">Welcome to My Portfolio</h1>
        <p>I'm a passionate developer...</p>
        </section>
    </div>

    <div ref="aboutSection" class="section-placeholder h-screen w-full">
      <section v-if="aboutVisible" class="h-screen bg-gray-200 w-full p-8">
        <h2 class="text-2xl font-semibold">About Me</h2>
        <p>Here are some of my projects...</p>
        </section>
    </div>

    <div ref="projectsSection" class="section-placeholder h-screen w-full">
      <section v-if="projectsVisible" class="h-screen bg-gray-300 w-full p-8">
        <h2 class="text-2xl font-semibold">About Me</h2>
        <p>I have experience in...</p>
        </section>
    </div>
  </div>
</template>


<style scoped>
.section-placeholder {
    border: 1px solid red; /* Add this for debugging */
}

</style>