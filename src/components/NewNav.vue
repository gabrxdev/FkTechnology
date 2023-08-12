<template>
  <nav class="navigation">
    <div class="links-container">
      <router-link :id="item.id" :to="item.path" v-for="item in items" :key="item"
        ><span class="material-symbols-rounded">{{ item.icon }}</span
        >{{ item.conteudo }}</router-link
      >
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue'

const items = ref([
  { conteudo: 'Dashboard', path: '/', id: 'dashboard' },
  { conteudo: 'Infos', path: '/infos', id: 'infos' },
  { conteudo: 'Gerenciar lojas', path: '/infos', id: 'infos' },
  { conteudo: 'Produtos destaque', path: '/infos', id: 'infos' },
  { conteudo: 'Usuários', path: '/infos', id: 'infos' },
  { conteudo: 'Visualizar loja', path: '/infos', id: 'infos' }
])
</script>

<style scoped lang="scss">
:root {
  --bg-color: #f5f5f5;
  --medium-spring-green: #49fa90;
  --dark-jungle-green: #121816;
  --morning-blue: #9aada2;
  --charleston-green: #222626;
  --eerie-black: #151819;
  --hunter-green: #15582e;
}

nav {
  display: flex;
  width: 98%;
  height: 3rem;
  justify-content: center;
  position: absolute;
  padding: 2rem;
  align-items: center;
  border-radius: 30px;
  background-color: transparent;
  margin-top: 1rem;
}
button {
  padding: 8px 15px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  display: flex;
  gap: 12px;
  align-items: center;
  font-weight: 400;
  letter-spacing: 1px;
  font-family: 'Inter';
  background-color: #121816;
  color: #b187e8;
  transition: 0.3s all ease-in;
  position: relative;
  left: 3em;
  bottom: 0em;
}

button:hover {
  color: #fff;
}

.links-container {
  display: flex;
  gap: 20px;
  font-family: 'Inter';
  align-items: center;
}

a {
  padding: 10px 25px;
  text-decoration: none;
  border-radius: 6px;
  transition: 0.2s all ease-in;
  color: #ccc;
  font-weight: 500;
  letter-spacing: 1px;
  display: flex;
  align-items: center;
  gap: 0.4em;
}
a.router-link {
  transition: all ease-in 0.3s;
}
a:hover {
  background-color: #212121;
  color: #fff;
}
a.router-link-active {
  background-color: #7d2ae8;
  color: #fff;
}
h2 {
  color: #ccc;
}
@media screen and (max-width: 768px) {
  #config {
    display: none;
  }
  #usuarios {
    display: none;
  }
  .logo-container {
    display: none;
  }
  .links-container {
    gap: 5px;
  }
  a {
    padding: 5px 5px;
  }
  button {
    left: 2em;
  }
}
</style>
