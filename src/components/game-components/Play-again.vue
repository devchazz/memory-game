<template>
  <div class="block">
    <button id="btn-play-again" @click="emitReset">Play Again</button>
  </div>
</template>

<script>
export default {
  methods:{
    emitReset(){
      this.$emit('reset')
    }
  }
}
</script>

<style>
  .block{
    width: 100%;
    display: block;
  }
  #btn-play-again{
    font-size: 1.2em;
    margin: 10px 0 0 0;
    padding: 10px 15px;
    border-radius: 10px;
    background-color: #5DCB77;
    border: none;
  }
</style>