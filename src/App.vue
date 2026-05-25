<script setup>
import { RouterView } from 'vue-router'
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
import Newsletter from './components/Newsletter.vue';
</script>

<template>
  <Navbar />

  <RouterView />
  <Newsletter />

  <Footer />
</template>