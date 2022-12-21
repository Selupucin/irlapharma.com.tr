<script setup>
import Hero from '../components/index/Hero.vue'
import About from '../components/index/About.vue'
import Product from '../components/index/Product.vue'
import Promo from '../components/index/Promo.vue'
import Effects from '../components/index/Effects.vue'
</script>

<template>
  <!-- Homepage content start -->
  <main>
    <Hero />
    <About />
    <Product />
    <Promo />
    <Effects />
  </main>
  <!-- Homepage content end -->
</template>

<script>
import "@/assets/js/index.min.js"
import "@/assets/css/index.css"
</script>