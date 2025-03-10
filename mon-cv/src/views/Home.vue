<template>
  <div>
    <Navbar />
    <section id="accueil" class="section">
      <Profil />
    </section>
    <section id="formation" class="section">
      <Formation />
    </section>
    <section id="competences-formation" class="section">
      <CompetencesFormation />
    </section>
    <section id="competences-informatiques" class="section">
      <CompetencesInformatiques />
    </section>
    <section id="projets" class="section">
      <Projets />
    </section>
    <section id="experience" class="section">
      <Experience />
    </section>
    <section id="interets" class="section">
      <Interets />
    </section>
  </div>
</template>

<script setup>
import Navbar from '../components/Navbar.vue';
import Profil from '../components/Profil.vue';
import Formation from '../components/Formation.vue';
import CompetencesFormation from '../components/CompetencesFormation.vue';
import CompetencesInformatiques from '../components/CompetencesInformatiques.vue';
import Projets from '../components/Projets.vue';
import Experience from '../components/Experience.vue';
import Interets from '../components/Interets.vue';
</script>

<style>
.section {
  text-align: center;
  padding: 120px 20px;
}
</style>
