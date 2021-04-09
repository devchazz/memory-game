<template>
  <div id="body" class="flex">
    <div id="container-controls">
      <Controls v-if="inGame" ref="controlsFunctions" @runGame="startTheGame" @playAgain="stopClicksAndGame"/>
      <PlayAgain v-else @reset="resetGame"/>
    </div>

    <div v-for="(e, i) in cards" :key="i">
      <Card 
        :name="e.name"
        :image="e.image"
        :id="i"
        :functionAddName="()=>{addArrayAndCheck({name: e.name, id: i})}"
      />
    </div>
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
      canClick: false, //Can turn on
      points: 0, //Won the game (n)
      checkingNow:[], //Check 2 cards 
      cards //List of cards -> go to cads.js
    }
  },
  components:{
    Card,
    Controls,
    PlayAgain
  },
  methods:{
    //Controls:
    canClickNow(){
      this.canClick = true
    },
    cannotClickNow(){
      this.canClick = false
    },

    //Start the game:
    startTheGame(){
      this.canClickNow()
    },

    //Check the pair of cards and doing something with that:
    addArrayAndCheck(e){
      if(this.canClick && this.checkingNow.length<2){
        if(!this.checkingNow[0]){
          this.rotate(e.id)
          this.checkingNow.push(e)
          this.checkCards()
        }else if(this.checkingNow[0].id != e.id){
          this.rotate(e.id)
          this.checkingNow.push(e)
          this.checkCards()
        }
      }
    },
    checkCards(){
      if(this.checkingNow.length == 2){
        this.cannotClickNow()
        if(this.checkingNow[0].name == this.checkingNow[1].name){
          this.points ++
          console.log(this.points)
          this.checkingNow = []
          setTimeout(() => {
            this.checkWin()
            this.canClickNow()
          },500)
        }else{
          setTimeout(() => {
            this.rotateBack(this.checkingNow[0].id, this.checkingNow[1].id)
            this.canClickNow()
            this.checkingNow = []
          },1000)
        }
      }
    },
    
    //Rotate functions:
    rotate(e){
      const cardToRotate = document.getElementById(e)
      cardToRotate.classList.add('rotate180deg')
    },
    rotateBack(e, e2){
      const cardToRotate = document.getElementById(e)
      const cardToRotate2 = document.getElementById(e2)
      cardToRotate.classList.remove('rotate180deg')
      cardToRotate2.classList.remove('rotate180deg')
    },

    //Check win:
    checkWin(){
      if(this.points == (cards.length/2)){
        this.playerWin()
      }
    },
    //When the player won:
    playerWin(){
      if(this.inGame){
        this.inGame = false
        this.cannotClickNow()
        alert("You won!!! Thanks for playing")
        this.$refs.controlsFunctions.stopTheGame()
        this.cannotClickNow()
      }
    },
    
    //Player lost:
    stopClicksAndGame(){
      this.cannotClickNow()
      this.inGame = false
    },

    //Play again:
    resetGame(){
      location.reload()
      /* 
      //Work in progress:
      console.log('Reset')
      this.inGame = true
      this.rotateAllBack()
      this.cannotClickNow()
      */
    },

    rotateAllBack(){
      /*
      //Work in progress
      for(let i=0;i<this.cards.length;i++){
        document.getElementById(i).classList.remove('rotate180deg')
        this.points = 0
        this.shuffleArray(this.cards)
      }
      */
    },

    //Shuffle:
    shuffleArray(array) {
      for (var i = array.length - 1; i > 0; i--) {
          var j = Math.floor(Math.random() * (i + 1));
          var temp = array[i];
          array[i] = array[j];
          array[j] = temp;
      }
    } 

  }
}
</script>

<style>
#container-controls{
  width: 100%;
  margin: 7px 0;
}
.flex{
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 90%;
  margin: auto;
}
@media screen and (max-width: 800px){
  .flex{
    width: 100%;
  }
}
</style>