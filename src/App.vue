<!-- script section -->
<script>
import AppHeader from './components/AppHeader.vue';
export default {
  name: "App",
  components: {
    AppHeader,
  }
}
</script>
<!-- /script section -->



<!-- template section -->
<template>

  <!-- header section -->
  <header>
    <AppHeader />
  </header> 
  <!-- /header section -->

</template>
<!-- /template section -->



<!-- style section -->
<style lang="scss">
@use './styles/general.scss' as *;
</style>
<!-- /style section -->