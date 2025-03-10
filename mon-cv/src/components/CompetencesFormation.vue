<template>
  <div class="competences-section">
    <h2>Compétences de la formation</h2>
    <div class="competences-grid">
      <div class="competence-block violet1">
        <h3>Réaliser un développement d'application</h3>
      </div>
      <div class="competence-block violet2">
        <h3>Optimiser des applications informatiques</h3>
      </div>
      <div class="competence-block violet3">
        <h3>Administrer des systèmes complexes</h3>
      </div>
      <div class="competence-block violet4">
        <h3>Gérer des données de l'information</h3>
      </div>
      <div class="competence-block violet5">
        <h3>Conduire un projet</h3>
      </div>
      <div class="competence-block violet6">
        <h3>Travailler dans une équipe informatique</h3>
      </div>
    </div>
  </div>
</template>

<style scoped>
.competences-section {
  text-align: center;
  padding: 60px 20px;
}

.competences-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  max-width: 1000px;
  margin: 0 auto;
}

.competence-block {
  padding: 20px;
  border-radius: 10px;
  color: #E0E0E0;
  transition: transform 0.3s, box-shadow 0.3s;
  text-align: center;
}

.competence-block:hover {
  transform: translateY(-5px);
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
}

/* 🟣 Teintes de violet pour chaque bloc */
.violet1 { background-color: #8A2BE2; }  /* Violet classique */
.violet2 { background-color: #7A1FCE; }  /* Un peu plus foncé */
.violet3 { background-color: #6E22B0; }  /* Foncé élégant */
.violet4 { background-color: #5C18A5; }  /* Violet profond */
.violet5 { background-color: #4B0E91; }  /* Violet intense */
.violet6 { background-color: #3B077D; }  /* Très foncé */

.competence-block h3 {
  margin: 0;
  font-size: 16px;
}
</style>
