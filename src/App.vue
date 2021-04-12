<template>
  <div id="app">
    <!--Appear when the player won the game:-->
    <div v-if="modalWinVisibility" class="modal">
      <div class="modal-content">
        <p>
          Congratulations, you won!
        </p>
        <button class="modal-btn" @click="hideModals">
          Close
        </button>
      </div>
    </div>

    <!--Appear when the player lose the game:-->
    <div v-if="modalLoseVisibility" class="modal">
      <div class="modal-content">
        <p>
          Time is over, I'm sorry.
        </p>
        <button class="modal-btn" @click="hideModals">
          Close
        </button>
      </div>
    </div>

    <div class="h-100 flex-column">
      <div>
        <Header title="Memory Game"/>
        <GameContainer @showModalWin="showModalWin" @showModalLose="showModalLose"/>
      </div>
      <div class="p-20">
        <Footer/>
      </div>
    </div>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import GameContainer from './components/Game-container'
import Footer from './components/Footer'

export default {
  name: 'App',
  components: {
    Header,
    GameContainer,
    Footer
  },
  data(){
    return{
      modalWinVisibility: false,
      modalLoseVisibility: false
    }
  },
  methods:{
    hideModals(){
      this.modalWinVisibility = false
      this.modalLoseVisibility = false
    },
    showModalWin(){
      this.modalWinVisibility = true
    },
    showModalLose(){
      this.modalLoseVisibility = true
    }
  }
  
}
</script>

<style>
*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
#app {
  letter-spacing: 1px;
  min-height: 100vh;
  color: white;
  background-color: #171717;
  font-family: Helvetica, Arial, sans-serif;
  text-align: center;
}
.h-100{
  min-height: 100vh;
}
.flex-column{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.p-20{
  padding: 20px 0;
}
.modal{
  position: absolute;
  width: 100%;
  height: 100vh;
  background-color: rgb(0,0,0,0.2);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 5;
}
.modal-content{
  font-weight: bold;
  font-size: 1.5em;
  min-height: 200px;
  border-radius: 10px;
  padding: 20px;
  background-color: #111;
  border: black 1px solid;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
.modal-btn{
  font-size: 1.1em;
  border-radius: 10px;
}

</style>
