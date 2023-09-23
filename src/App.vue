<template>
  <div>
    <NavBar/>>
  </div>
  <MiPrueba/>
</template>

<script>
  import MiPrueba from './components/MiPrueba.vue';
  import NavBar from './components/NavBar.vue';

  export default {
    name: 'App',
    components:{
      NavBar,
      MiPrueba
    }
  }
</script>

<style>
  *{
      padding: 0;
      margin: 0;
      box-sizing: border-box;
  }

  body{
      font-size: 15px;
      font-family: Arial, Helvetica, sans-serif;
  }
</style>

<!-- <template>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style> -->
