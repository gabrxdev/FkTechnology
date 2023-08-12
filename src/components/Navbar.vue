<template>
  <nav :style="{ width: expandNav }">
    <div class="links">
      <router-link
        :style="{ width: expandDiv }"
        v-for="link in links"
        :key="link"
        :to="link.path"
        :id="link.id"
        ><span class="material-symbols-rounded">{{ link.icone }}</span
        >{{ link.content }}</router-link
      >
    </div>

    <span
      @click="nav"
      :class="['material-symbols-rounded', { 'arrow-up': isExpanded, 'arrow-down': !isExpanded }]"
      id="open-nav"
      >keyboard_arrow_right</span
    >
  </nav>
</template>

<script setup>
import { ref } from 'vue'
import { computed } from 'vue'
const links = ref([
  { path: '/', icone: 'space_dashboard', content: 'Dashboard', id: 'dashboard' },
  { path: '/infos', icone: 'credit_score', content: 'Infos', id: 'infos' }
])
const isExpanded = ref(false)
const nav = () => (isExpanded.value = !isExpanded.value)
const expand = 14
const shrink = 5
const expandNav = computed(() => `${isExpanded.value ? expand : shrink}em`)
// Aumentar/diminuir hover das divs
const expandDiv = computed(() => `${isExpanded.value ? divExpanded : divShrink}em`)
const divExpanded = 10.5
const divShrink = 2.5
</script>

<style scoped lang="scss">
:root {
  --body-color: #18191a;
  --navbar-color: #212121;
  --hover-color: #3a3b3c;
  --text-color: #ccc;
}

nav {
  background-color: #171828;
  display: flex;
  flex-direction: column;
  height: 36em;
  width: 14em;
  gap: 8px;
  transition: all ease-in 0.1s;
  border-radius: 15px;
  margin-left: 2em;
  margin-top: 1em;
  overflow: hidden;
  justify-content: space-between;
  padding: 1em 0em;
  position: relative;
  font-family: 'Poppins';
  color: #ccc;
}

nav img {
  width: 7rem;
  border-radius: 50%;
}

.links {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0.5em 0.8em;
  width: 3.2em;
  border-radius: 6px;
  transition: all ease-in 0.2s;
  gap: 10px;
}

a:hover {
  background-color: #34325f;
}

a {
  color: var(--text-color);
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 1.7em;
  width: 15em;
  padding: 0.5em 0.5em;
  border-radius: 4px;
  transition: all ease-in 0.1s;
  margin-left: 0.5em;
  font-weight: 600;
}
.material-symbols-rounded {
  font-variation-settings: 'FILL' 0;
}
a.router-link-active {
  background-color: #7d2ae8;
  color: #fff;

  .material-symbols-rounded {
    font-variation-settings: 'FILL' 1;
  }
}
#open-nav {
  font-size: 30px;
  color: #fff;
  background-color: #7d2ae8;
  border-radius: 20px;
  width: 30px;
  position: absolute;
  bottom: 12rem;
  left: 0.8em;
  cursor: pointer;
}
span {
  transition: all linear 0.1s;
}
.arrow-up {
  transform: rotate(180deg);
}

.arrow-down {
  transform: rotate(0deg);
}
</style>
