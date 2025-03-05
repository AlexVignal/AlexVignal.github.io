<template>
  <div>
    <Navbar />
    <section id="accueil">
      <img src="/src/assets/vue.svg" alt="Photo de profil" class="profile-pic" />
      <h1>Bienvenue sur mon site !</h1>
      <p>Je suis <strong>Alex Vignal</strong>, étudiant en informatique.</p>
    </section>

    <section id="formation">
      <h2>Formation</h2>
      <p>Baccalauréat scientifique, obtenu en 2020.</p>
      <p>BUT Informatique à ...</p>
    </section>

    <section id="competences-formation">
      <h2>Compétences de la formation</h2>
      <ul>
        <li>Réaliser un développement d'application</li>
        <li>Optimiser des applications informatiques</li>
        <li>Administrer des systèmes complexes</li>
        <li>Gérer des données de l'information</li>
        <li>Conduire un projet</li>
        <li>Travailler dans une équipe informatique</li>
      </ul>
    </section>

    <section id="competences-informatiques">
      <h2>Compétences informatiques</h2>
      <div class="logos">
        <img :src="htmlLogo" alt="HTML" />
        <img :src="cssLogo" alt="CSS" />
        <!-- Ajouter d'autres logos -->
      </div>
    </section>

    <section id="projets">
      <h2>Projets</h2>
      <p>Description des projets notables avec les compétences associées.</p>
    </section>

    <section id="experience">
      <h2>Expérience professionnelle</h2>
      <ul>
        <li>Stage chez XYZ - Développement Web (2022)</li>
        <li>Job étudiant - Vendeur (2021)</li>
      </ul>
    </section>

    <section id="centres-interets">
      <h2>Centres d'intérêts</h2>
      <p>Sport, Jeux vidéo, Programmation, etc.</p>
    </section>

    <section id="cv">
      <h2>CV</h2>
      <a href="/path/to/cv.pdf" download>Télécharger mon CV</a>
    </section>

    <section id="contact">
      <h2>Contact</h2>
      <p>Email : <a href="mailto:votre-email@example.com">votre-email@example.com</a></p>
      <p>Téléphone : 06 XX XX XX XX</p>
    </section>
  </div>
</template>

<style scoped>
body {
  margin: 0;
  background-color: #f0f0f0;
  font-family: Arial, sans-serif;
}
section {
  padding: 60px 20px;
  text-align: center;
  background-color: #fff;
  margin-bottom: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}
.profile-pic {
  border-radius: 50%;
  width: 150px;
  margin-bottom: 20px;
}
.logos img {
  width: 50px;
  margin: 0 10px;
  transition: transform 0.3s;
}
.logos img:hover {
  transform: scale(1.2);
}
</style>
