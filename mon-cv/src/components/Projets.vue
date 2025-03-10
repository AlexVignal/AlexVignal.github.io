<template>
  <div class="projects-section">
    <h2>Projets</h2>
    <div class="projects-grid">
      
      <!-- Projet 1 : Green Bloom -->
      <div class="project-block violet1">
        <img src="/src/images/greenbloom.jpg" alt="Green Bloom" class="project-image">
        <h3>Green Bloom</h3>
        <p>Site web d'e-commerce en HTML5&CSS3, PHP et Javascript permettant la vente de produits jardiniers.</p>
        <div class="skills-container">
          <div class="skill">Réaliser un développement d'application</div>
          <div class="skill">Optimiser des applications informatiques</div>
          <div class="skill">Administrer des systèmes complexes</div>
          <div class="skill">Gérer des données de l'information</div>
          <div class="skill">Conduire un projet</div>
          <div class="skill">Travailler dans une équipe informatique</div>
        </div>
      </div>

      <!-- Projet 2 : Safari Helper -->
      <div class="project-block violet2">
        <img src="/src/images/safarihelper.png" alt="Safari Helper" class="project-image">
        <h3>Safari Helper</h3>
        <p>Application permettant la publication d’annonces pour des objets perdus, en HTML5&CSS3, PHP et Javascript.</p>
        <div class="skills-container">
          <div class="skill">Réaliser un développement d'application</div>
          <div class="skill">Optimiser des applications informatiques</div>
          <div class="skill">Travailler dans une équipe informatique</div>
        </div>
      </div>

      <!-- Projet 3 : Application de gestion d'emploi du temps -->
      <div class="project-block violet3">
        <img src="/src/images/planning.jpg" alt="Planning" class="project-image">
        <h3>Application de gestion d'emploi du temps</h3>
        <p>Application permettant à un admin d'assigner des évènements dans un emploi du temps, en HTML5&CSS3, PHP et Javascript.</p>
        <div class="skills-container">
          <div class="skill">Réaliser un développement d'application</div>
          <div class="skill">Optimiser des applications informatiques</div>
          <div class="skill">Gérer des données de l'information</div>
        </div>
      </div>

      <!-- Projet 4 : Flappy Bird -->
      <div class="project-block violet4">
        <img src="/src/images/flappybird.png" alt="Flappy Bird" class="project-image">
        <h3>Flappy Bird</h3>
        <p>Jeu développé en C# avec Unity, incluant musique et bruit de mort personnalisés.</p>
        <div class="skills-container">
          <div class="skill skill-flappy">Réaliser un développement d'application</div>
        </div>
      </div>

    </div>
  </div>
</template>

<style scoped>
.projects-section {
  text-align: center;
  padding: 60px 20px;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));  /* 🟣 2 projets par ligne */
  gap: 30px;
  max-width: 1200px;
  margin: 0 auto;
}

.project-block {
  padding: 20px;
  border-radius: 10px;
  color: #E0E0E0;
  transition: transform 0.3s, box-shadow 0.3s;
  text-align: center;
}

.project-block:hover {
  transform: translateY(-5px);
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
}

.project-image {
  width: 100%;
  max-height: 250px;  /* 🟣 Montrer plus de l'image */
  object-fit: cover;
  border-radius: 10px;
  margin-bottom: 15px;
}

/* 🟣 Teintes de violet pour chaque bloc */
.violet1 { background-color: #8A2BE2; }
.violet2 { background-color: #6E22B0; }
.violet3 { background-color: #4B0E91; }
.violet4 { background-color: #3B077D; }

.skills-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
  margin-top: 10px;
}

.skill {
  background-color: #3B077D;  /* 🟣 Fond plus foncé par défaut */
  color: #E0E0E0;
  padding: 5px 10px;
  border-radius: 5px;
  font-size: 14px;
  transition: background-color 0.3s;
}

.skill:hover {
  background-color: #6E22B0;  /* 🟣 Effet au survol plus clair */
}

/* 🟣 Fond plus clair pour les compétences du bloc Flappy Bird */
.skill-flappy {
  background-color: #5C18A5;  /* 🟣 Violet plus clair pour contraste */
}

.skill-flappy:hover {
  background-color: #7A1FCE;  /* 🟣 Effet au survol plus lumineux */
}
</style>
