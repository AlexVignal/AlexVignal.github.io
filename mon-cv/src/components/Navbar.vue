<template>
  <nav class="navbar">
    <ul>
      <li><router-link to="/">Accueil</router-link></li>
      <li><router-link to="/#formation">Formation</router-link></li>
      <li><router-link to="/#competences-formation">Compétences de la formation</router-link></li>
      <li><router-link to="/#projets">Projets</router-link></li>
      <li><router-link to="/#experience">Expérience</router-link></li>
      <li><router-link to="/cv">CV</router-link></li>
      <li><router-link to="/contact">Contact</router-link></li>
    </ul>
  </nav>
</template>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  width: 100%;
  background-color: rgba(18, 18, 18, 0.9);
  padding: 10px 0;
  z-index: 100;
}

.navbar ul {
  display: flex;
  justify-content: center;
  list-style: none;
  gap: 20px;
}

.navbar a, .navbar .router-link-active {
  color: #E0E0E0;
  text-decoration: none;
  transition: color 0.3s;
}

.navbar a:hover, .navbar .router-link-active {
  color: #8A2BE2;
}
</style>
