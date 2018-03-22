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
import FontAwesome from "@fortawesome/fontawesome";
import FontAwesomeBrands from "@fortawesome/fontawesome-free-brands";
import FontAwesomeSolid from "@fortawesome/fontawesome-free-solid";
import FontAwesomeRegular from "@fortawesome/fontawesome-free-regular";
FontAwesome.library.add(FontAwesomeBrands);
FontAwesome.library.add(FontAwesomeSolid);
FontAwesome.library.add(FontAwesomeRegular);
export default {
  name: "App"
};
</script>

<style lang="scss">

@import "~bulma/sass/utilities/initial-variables";

$fuschia: #F012BE;

$primary: #7A08FA;

@import "~bulma/sass/utilities/_all";
@import "~bulma/sass/base/_all";
@import "~bulma/sass/elements/_all";
@import "~bulma/sass/components/_all";
@import "~bulma/sass/grid/_all";
@import "~bulma/sass/layout/_all";


</style>
