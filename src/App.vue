<template>
  <div>
    <NavBar />
    <router-view /> 
    <FooterMayic />
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue';
import FooterMayic from './components/FooterMayic.vue';

export default {
  name: 'App',
  components: {
    NavBar,
    FooterMayic,
  },
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
