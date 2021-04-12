<template>
  <div id="container-controls">
    <h2>Time: {{time}}</h2>
    <button id="btn-start" v-if="buttonPlay" @click="startGame">Play</button>
  </div>
</template>

<script>
export default {
  data(){
    return{
      time: 45,
      buttonPlay: true,
      gameRunning: true
    }
  },
  methods:{
    startGame(){
      //start the game
      this.$emit('runGame')
      this.functionStart()
    },
    functionStart(){
      if(this.gameRunning == true){
        
        //Hiding the button:
        if(this.time>0){
          this.buttonPlay = false
        }
        //Timer control:
        setTimeout(()=>{
          if(this.time>0){
            this.time -= 1
            this.functionStart()
            return 
          }
          this.time = 45
          this.buttonPlay = true
          this.$emit('thePlayerLost')
        },1000)
      }
    },
    stopTheGame(){
      this.gameRunning = false
    }
  }
}
</script>

<style scoped>
  #container-controls{
    font-size: 1.2em;
    width: 100%;
    padding: 15px auto;
    display: flex;
    justify-content: space-around;
  }
  #btn-start{
    padding: 5px 15px;
    border-radius: 10px;
    background-color: #5DCB77;
    border: none;
  }
</style>