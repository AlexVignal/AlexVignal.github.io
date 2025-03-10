<template>
  <Navbar />
  <div class="cv-page">
    <h2>Mon CV</h2>
    <a href="../images/CV_VignalAlexandre.pdf" download class="download-button">Télécharger le CV</a>
  </div>
</template>

<script setup>
import Navbar from '../components/Navbar.vue';
</script>

<style scoped>
.cv-page {
  text-align: center;
  padding: 100px 20px;
}

.download-button {
  background-color: #8A2BE2;
  color: #E0E0E0;
  padding: 10px 20px;
  border-radius: 5px;
  text-decoration: none;
  transition: background-color 0.3s;
}

.download-button:hover {
  background-color: #6E22B0;
}
</style>
