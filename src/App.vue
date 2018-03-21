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

@import '~bulma/';
// @import "~bulma/sass/utilities/functions";
// @import "~bulma/sass/utilities/derived-variables";
// @import "~bulma/sass/utilities/animations";
// @import "~bulma/sass/utilities/mixins";
// @import "~bulma/sass/utilities/controls";


</style>
