<template>
  <div>
    <NavBar/>
  </div>
  <div>
    <ShopMayic/>
  </div>
  <div>
    <FooterMayic/>
  </div>

</template>

<script>

  import NavBar from './components/NavBar.vue';
  import FooterMayic from './components/FooterMayic.vue'
  // import HomeMayic from './components/HomeMayic.vue'
  import ShopMayic from './components/ShopMayic.vue'

  export default {
    name: 'App',
    components:{
    NavBar,
    ShopMayic,
    FooterMayic  
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
