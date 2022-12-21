<script setup>
import Header from '../components/about/Header.vue'
import About from '../components/about/About.vue'
import Features from '../components/about/Features.vue'
import Newsletter from '../components/about/Newsletter.vue'
import Guide from '../components/about/Guide.vue'
</script>

<template>
  <Header />
  <!-- About content start -->
  <main>
    <About />
    <Features />
    <Newsletter />
    <Guide />
  </main>
  <!-- About content end -->
</template>

<script>
import "@/assets/js/about.min.js"
import "@/assets/css/about.css"
</script>