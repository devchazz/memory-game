<template>
  <div class="card">
    <div :id="id" class="card-content" @click="functionAddName">
      <figure class="card-front">
        <p>Fundo da carta</p>
      </figure>
      <figure class="card-back">
        <img class="figure-img" :src="image" alt="Figure here">
        <p>{{name}}</p>
      </figure>
    </div>
  </div>
</template>

<script>
export default {
  props:{
    name: String,
    id: Number,
    image: String,
    functionAddName: Function
  }
}
</script>

<style scoped>
  .card{
    width: 110px;
    height: 110px;
    margin: 12px;
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
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px;
    user-select: none;
  }
  figure p{
    display: none;
  }
  .figure-img{
    width: 100%;
  }
  .card-front{
    background-color: blueviolet;
  }
  .card-back{
    background-color: #84c77a;
    transform: rotateY(180deg);
  }
</style>