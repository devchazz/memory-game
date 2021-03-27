<template>
  <div class="card" @click="() => {rotate(id)}">
    <div :id="id" class="card-content">
      <figure class="card-front">
        <p>Fundo da carta</p>
      </figure>
      <figure class="card-back">
        <p>{{name}}</p>
      </figure>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      canTurn: true
    }
  },
  props:{
    name: String,
    id: Number
  },
  methods:{
    //Rotate function param from cards:
    rotate(e){
      if (this.canTurn){
        const cardToRotate = document.getElementById(e)
        cardToRotate.classList.add('rotate180deg')
        this.check(e)
      }
    },
    check(e){
      setTimeout(() => {
        console.log('Ok, turn down')
        this.rotateBack(e)
      },1500)
    },
    rotateBack(e){
      const cardToRotate = document.getElementById(e)
      cardToRotate.classList.remove('rotate180deg')
    }
  }
}
</script>

<style scoped>
  .card{
    width: 120px;
    height: 120px;
    margin: 15px;
    color: black;
  }
  .card-content{
    width: 100%;
    height: 100%;
    border-radius: 10px;
    transition: transform 700ms ease-in-out;
    transform-style: preserve-3d;
  }
  .rotate180deg{
    transform: rotateY(180deg);
  }
  figure{
    width: 100%;
    height: 100%;
    position: absolute;
    backface-visibility: hidden; 
    border-radius: 10px;
  }
  .card-front{
    background-color: blueviolet;
  }
  .card-back{
    background-color: #84c77a;
    transform: rotateY(180deg);
  }
</style>