<template>
  <main>
    <div class="cards">
      <img id="cartoes" src="../assets/cartoes.png" alt="" />
      <img id="paragraph" src="../assets/paragraph.png" alt="" />
      <img id="report" src="../assets/report.png" alt="" />
    </div>
  </main>
</template>

<script></script>

<style scoped>
main {
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: #141416;
  align-items: center;
}
.cards {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 10rem;
}
#cartoes {
  width: 20rem;
}
#paragraph {
  width: 18rem;
}
#report {
  width: 2rem;
  margin-top: 1rem;
}
</style>
