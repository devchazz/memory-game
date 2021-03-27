<template>
  <div class="flex">
    <Controls v-if="inGame" ref="controlsFunctions" @runGame="canClickNow"/>
    <PlayAgain v-else @reset="resetGame"/>

    <div v-for="(e, i) in cards" :key="i">
      <Card 
        :name="e.name"
        :id="i"
      />
    </div>

    <button v-if="canClick" @click="playerWin">Test: end the game</button>
  </div>
</template>

<script>
import Controls from './game-components/Controls'
import Card from './game-components/Card'
import PlayAgain from './game-components/Play-again'
import cards from './game-components/cards.js'

export default {
  data(){
    return{
      inGame: true, //Controls
      canClick: false, //Cards (n)
      points: 0, //Won the game (n)
      checkingNow:[], //Check 2 cards (n)
      cards //List of cards -> go to cads.js
    }
  },
  components:{
    Card,
    Controls,
    PlayAgain
  },
  methods:{
    //Starting the game:
    canClickNow(){
      this.canClick = true
    },
    //When the player won:
    playerWin(){
      if(this.inGame){
        this.inGame = false
        this.canClick = false
        alert("You won!!! Thanks for playing")
        this.$refs.controlsFunctions.stopTheGame()
      }
    },
    checkCards(){
      if(this.checkingNow.length = 2){
        
      }
    },
    //Play again:
    resetGame(){
      console.log('Resetando')
      this.inGame = true
      this.canClick = false
    }
  }
}
</script>

<style>
.flex{
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 90%;
  margin: auto;
}
</style>