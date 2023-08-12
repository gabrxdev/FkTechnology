<template>
  <main>
    <NewNav />
    <section>
      <div class="cards-container">
        <div class="card">
          <div class="first-section">
  
            <h4>Visitas</h4>
            <span class="material-symbols-rounded">group</span>
          
          </div>
  
          <div class="second-section">
            <h2>{{ numeroVisitas }}</h2>
          </div>
        </div>
        <div id="infosCard" class="card">
          <div class="first-section">
  
            <h4>Infos</h4>
            <span class="material-symbols-rounded">credit_card</span>
          
          </div>
  
          <div class="second-section">
            <h2>{{ numeroInfos }}</h2>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
import NewNav from '../components/NewNav.vue'
import { ref } from 'vue'

const numeroVisitas = ref('249')
const numeroInfos = ref('465')
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
  margin-top: 15rem;
  height: 14rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  flex-direction: column;
}

.card{
  display: flex;
  width: 381px;
  height: 215px;
  padding: 25px 38px;
  align-items: flex-start;
  align-content: flex-start;
  gap: 25px 131px;
  flex-wrap: wrap;
  border-radius: 15px;
  background: linear-gradient(90deg, #1D1D29 0%, #698CBF 100%);
  flex-direction: column;
  justify-content: space-between;
  font-family: 'Inter';
  color: #FFF;
}
.first-section{
  display: flex;
  justify-content: space-between;
  width: 100%;
}
.first-section h4{
  color: #FFF;
  font-size: 28px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;  
}
.first-section span{
  font-size: 40px;
  flex-shrink: 0;
}
.second-section h2{
  color: #FFF;
  font-size: 60px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
}
.cards-container{
  display: flex;
  gap: 15px;
}
h1{
  font-size: 30px;
  color: #FFF;
  font-family: 'Inter'
}
#infosCard{
  background-image: url('../assets/perfume.png');
  background-size: cover; 
}
</style>
