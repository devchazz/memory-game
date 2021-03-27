<template>
  <div id="app">
    <div class="h-100">
      <Header title="Memory Game"/>
      <GameContainer/>
    </div>
    <About/>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import GameContainer from './components/Game-container'
import About from './components/About'

export default {
  name: 'App',
  components: {
    Header,
    GameContainer,
    About
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

</style>
