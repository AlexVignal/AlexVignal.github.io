<template>
  <div class="competences-informatiques">
    <h2>Compétences informatiques</h2>
    <div class="logos">
      <img src="../images/html.png" alt="HTML">
      <img src="../images/css.png" alt="CSS">
      <!-- Ajoute d'autres logos ici -->
    </div>
  </div>
</template>

<style scoped>
.competences-informatiques {
  text-align: center;
  margin-bottom: 80px;
}

.logos {
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
}

.logos img {
  width: 50px;
  transition: transform 0.3s;
}

.logos img:hover {
  transform: scale(1.1);
}
</style>
