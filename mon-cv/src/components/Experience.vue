<template>
  <div class="experience-section">
    <h2>Expériences Professionnelles</h2>
    <div class="experience-grid">
      <div class="experience-block violet1">
        <h3>Stage chez SPHEREA (Fév - Avr 2024)</h3>
        <p>Développeur web : amélioration d’outils web en HTML, CSS, PHP, Javascript.<br>
        ➤ Amélioration d’un outil web de gestion.<br>
        ➤ Ajout de fonctionnalités d’outils externes (team planning & clockify).</p>
      </div>

      <div class="experience-block violet2">
        <h3>Stage chez FIDSUD CDBA (Avr - Juin 2023)</h3>
        <p>Développeur web : création et améliorations d’applications web en HTML, CSS, PHP, Javascript.<br>
        ➤ Gestion des barèmes kilométriques.<br>
        ➤ Amélioration d’une application de gestion de mandats bancaires.</p>
      </div>

      <div class="experience-block violet3">
        <h3>Monteur vidéo YouTube (2023)</h3>
        <p>Monteur vidéo pour un vidéaste YouTube (~130 000 abonnés).<br>
        ➤ Montage d’épisodes pour des milliers de spectateurs.<br>
        ➤ Gestion des critiques et amélioration continue.</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.experience-section {
  text-align: center;
  padding: 60px 20px;
}

.experience-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  max-width: 1000px;
  margin: 0 auto;
}

.experience-block {
  padding: 20px;
  border-radius: 10px;
  color: #E0E0E0;
  transition: transform 0.3s, box-shadow 0.3s;
  text-align: left;
}

.experience-block:hover {
  transform: translateY(-5px);
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
}

/* 🟣 Teintes de violet pour chaque bloc */
.violet1 { background-color: #8A2BE2; }
.violet2 { background-color: #6E22B0; }
.violet3 { background-color: #4B0E91; }

.experience-block h3 {
  margin-top: 0;
  color: #E0E0E0;
}

.experience-block p {
  margin: 10px 0 0;
  color: #B0B0B0;
  line-height: 1.5;
}
</style>
