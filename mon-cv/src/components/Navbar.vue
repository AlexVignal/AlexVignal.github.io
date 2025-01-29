<template>
  <nav>
    <ul>
      <li><router-link to="/">Profil</router-link></li>
      <li><router-link to="/formation">Formation</router-link></li>
      <li><router-link to="/experience">Expérience</router-link></li>
      <li><router-link to="/contact">Contact</router-link></li>
    </ul>
  </nav>
</template>

<style scoped>
nav {
  background: #42b983;
  padding: 1rem;
}
ul {
  list-style: none;
  display: flex;
  justify-content: space-around;
}
li a {
  color: white;
  text-decoration: none;
  font-weight: bold;
}
li a:hover {
  text-decoration: underline;
}
</style>
