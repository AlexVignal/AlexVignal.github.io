<template>
  <nav>
    <ul>
      <li><a href="#accueil">Accueil</a></li>
      <li><a href="#formation">Formation</a></li>
      <li><a href="#competences-formation">Compétences de la formation</a></li>
      <li><a href="#competences-informatiques">Compétences informatiques</a></li>
      <li><a href="#projets">Projets</a></li>
      <li><a href="#experience">Expérience</a></li>
      <li><a href="#centres-interets">Centres d'intérêts</a></li>
      <li><a href="#cv">CV</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>
  </nav>
</template>

<style scoped>
nav {
  background-color: #1b2a4e; /* Bleu foncé */
  position: fixed;
  top: 0;
  width: 100%;
  padding: 0.5rem 0;
  z-index: 1000;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
}
ul {
  display: flex;
  justify-content: center;
  list-style: none;
  gap: 20px;
}
li a {
  color: #fff;
  text-decoration: none;
  font-weight: bold;
  transition: color 0.3s;
}
li a:hover {
  color: #4a90e2; /* Bleu clair pour le hover */
}
</style>
