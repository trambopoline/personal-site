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

<style lang="scss">

@import "~bulma/sass/utilities/initial-variables";

$fuschia: #F012BE;

$primary: $red;

@import "~bulma/sass/utilities/_all";
@import "~bulma/sass/base/_all";
@import "~bulma/sass/elements/_all";
@import "~bulma/sass/components/_all";
@import "~bulma/sass/grid/_all";
@import "~bulma/sass/layout/_all";


</style>
