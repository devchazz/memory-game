<template>
  <div id="app">
    <div class="h-100 flex-column">
      <div>
        <Header title="Memory Game"/>
        <GameContainer/>
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

</style>
