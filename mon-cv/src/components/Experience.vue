<template>
  <div class="experience-section">
    <h2>Expériences Professionnelles</h2>
    <div class="experience-column">
      <!-- Bloc FIDSUD CDBA -->
      <div class="experience-block violet1">
        <img src="/src/images/fidsud.png" alt="FIDSUD CDBA" class="company-logo">
        <div class="experience-content">
          <h3>Stage chez FIDSUD CDBA (Avr - Juin 2023)</h3>
          <p>Développeur web : création et améliorations d’applications web en HTML, CSS, PHP, Javascript.</p>
        </div>
      </div>

      <!-- Bloc SPHEREA -->
      <div class="experience-block violet2">
        <img src="/src/images/spherea.png" alt="SPHEREA" class="company-logo">
        <div class="experience-content">
          <h3>Stage chez SPHEREA (Fév - Avr 2024)</h3>
          <p>Développeur web : amélioration d’outils web en HTML, CSS, PHP, Javascript.</p>
        </div>
      </div>

      <!-- Bloc Monteur vidéo -->
      <div class="experience-block violet3">
        <div class="experience-content">
          <h3>🎥 Monteur vidéo YouTube (2023)</h3>
          <p>Monteur vidéo pour un vidéaste YouTube (~130 000 abonnés).</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.experience-section {
  text-align: center;
  padding: 60px 20px;
}

.experience-column {
  display: flex;
  flex-direction: column;  /* 🟣 Blocs en colonne */
  gap: 20px;
  max-width: 800px;  /* Centrer les blocs */
  margin: 0 auto;
}

.experience-block {
  display: flex;
  align-items: center;
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

.company-logo {
  width: 60px;
  height: auto;
  margin-right: 20px;
  border-radius: 5px;
  background-color: #fff;
  padding: 5px;
}

.experience-content h3 {
  margin-top: 0;
  color: #E0E0E0;
}

.experience-content p {
  margin: 5px 0 0;
  color: #B0B0B0;
  line-height: 1.5;
}
</style>
