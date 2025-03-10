<template>
  <div>
    <Navbar />
    <div class="contact-page">
      <h2>Contact</h2>
      <p>📧 Email : <a href="mailto:vignal.alex@orange.fr">vignal.alex@orange.fr</a></p>
      <p>📱 Téléphone : 07 77 04 40 86</p>
      <p>💼 LinkedIn : <a href="https://www.linkedin.com/in/alexandre-vignal-649764252/" target="_blank">Mon profil LinkedIn</a></p>
    </div>
  </div>
</template>

<script setup>
import Navbar from '../components/Navbar.vue';
</script>

<style scoped>
.contact-page {
  text-align: center;
  padding: 100px 20px;
}

a {
  color: #8A2BE2;
  text-decoration: none;
  transition: color 0.3s;
}

a:hover {
  color: #6E22B0;
}
</style>
