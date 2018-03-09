<template>
  <div id="app">
    <router-view/>
    <section class="footer">
      <div class="container has-text-centered">
      Copyright © {{new Date().getFullYear() || "2018" }} - Devin Dodson - All Rights Reserved
    </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style>
/* #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
