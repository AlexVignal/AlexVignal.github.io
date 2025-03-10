<template>
  <div class="timeline-section">
    <h2>Formations</h2>
    <div class="timeline">
      <!-- Bac en premier -->
      <div class="timeline-item">
        <div class="timeline-date">2018 - 2021</div>
        <div class="timeline-content">
          <h3>Baccalauréat général</h3>
          <p>Mention assez bien, spécialité mathématiques, LLCE<br>
          Lycée Jean-Pierre Vernant, Pins-Justaret</p>
        </div>
      </div>

      <!-- BUT ensuite -->
      <div class="timeline-item">
        <div class="timeline-date">2021 - 2025</div>
        <div class="timeline-content">
          <h3>BUT Informatique</h3>
          <p>IUT de Blagnac, Université Toulouse 2 Jean Jaurès</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.timeline-section {
  text-align: center;
  padding: 60px 20px;
}

.timeline {
  position: relative;
  max-width: 600px;
  margin: 0 auto;
  padding: 20px 0;
  border-left: 3px solid #8A2BE2;
}

.timeline-item {
  margin: 20px 0;
  padding-left: 20px;
  position: relative;
}

.timeline-item::before {
  content: '';
  position: absolute;
  left: -10px;
  background-color: #8A2BE2;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  top: 5px;
}

.timeline-date {
  font-weight: bold;
  color: #8A2BE2;
}

.timeline-content h3 {
  margin: 0;
  color: #E0E0E0;
}

.timeline-content p {
  color: #B0B0B0;
}
</style>
