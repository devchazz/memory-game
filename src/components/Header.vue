<template>
  <header>
    <h1>{{ title }}</h1>
    <a href="">GitHub</a>
  </header>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    title: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  header {
    display: flex;
    flex-direction: row;
    width: 100%;
    padding: 15px 7%;
    justify-content: space-between;
    align-items: center;
  }
  header a{
    color: black;
    text-decoration: none;
    background-color: #5DCB77;
    padding: 10px 30px;
    border-radius: 20px;
  }
</style>
