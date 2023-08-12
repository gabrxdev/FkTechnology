<template>
  <main>
    <NewNav />
    <section></section>
  </main>
</template>

<script setup>
import NewNav from '../components/NewNav.vue'
import { ref } from 'vue'
</script>

<style scoped>
main {
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: #141416;
  align-items: center;
}

section {
  width: 100%;
  margin-top: 7rem;
  height: 14rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
}

.card {
  padding: 1rem;
  display: flex;
  width: 60rem;
  justify-content: center;
  height: 12rem;
  align-items: center;
  gap: 2rem;
  border-radius: 12px;
}
.card button {
  border: none;
  padding: 1rem;
  border-radius: 8px;
  width: 12rem;
  display: flex;
  align-items: center;
  text-decoration: none;
  justify-content: center;
  background-color: #303030;
  color: #ccc;
  font-family: 'inter';
  font-weight: 600;
  gap: 0.2rem;
  cursor: pointer;
  transition: all 0.2s ease-in;
}
.card button:hover {
  background-color: #7d2ae8;
  color: #fff;
}
a {
  text-decoration: none;
}
</style>
