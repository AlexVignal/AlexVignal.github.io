<template>
  <div class="profil-section">
    <img src="/src/images/pp.jpg" alt="Photo de profil" class="profil-image">
    <h1>Alexandre VIGNAL</h1>
    <h3>Étudiant en BUT Informatique</h3>
    <h1>Bienvenue sur mon portfolio</h1>

    <!-- Blocs de texte avec emojis -->
    <div class="profil-grid">
      <div class="profil-block violet1">
        <h3>💻 Mon attrait pour l'informatique</h3>
        <p>L'informatique m'intéresse depuis le collège et la formation en BUT Informatique a confirmé mon attrait pour ce domaine. J'ai développé une véritable passion pour le développement web au fil des années.</p>
      </div>
      
      <div class="profil-block violet2">
        <h3>⚽ Mes centres d'intérêts</h3>
        <p>Passionné par le football depuis tout petit, j'en ai pratiqué pendant 8 ans. La musique, la lecture (manga, light novel, roman) et les animes sont trois passions qui occupent une grande partie de mon temps libre. Enfin, j'aime également le montage vidéo que je pratique de temps en temps, et l'astronomie, un domaine qui me fascine.</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.profil-section {
  text-align: center;
  padding: 60px 20px;
}

.profil-image {
  width: 150px;
  border-radius: 50%;
  margin-bottom: 20px;
  border: 3px solid #8A2BE2;
}

h1 {
  margin: 10px 0;
  color: #E0E0E0;
}

h3 {
  margin: 5px 0 20px;
  color: #B0B0B0;
}

.profil-grid {
  display: flex;
  flex-direction: column;  /* 🟣 Blocs en colonne */
  gap: 20px;
  max-width: 800px;
  margin: 30px auto 0;
}

.profil-block {
  padding: 20px;
  border-radius: 10px;
  color: #E0E0E0;
  transition: transform 0.3s, box-shadow 0.3s;
  text-align: left;
}

.profil-block:hover {
  transform: translateY(-5px);
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
}

/* 🟣 Teintes de violet pour chaque bloc */
.violet1 { background-color: #8A2BE2; }
.violet2 { background-color: #6E22B0; }

.profil-block h3 {
  margin-top: 0;
  color: #E0E0E0;
}

.profil-block p {
  margin: 5px 0 0;
  color: #B0B0B0;
  line-height: 1.5;
}
</style>
