<!-- script section -->
<script>
  // import components
  import AppHeader from './components/AppHeader.vue';
  import AppMain from './components/AppMain.vue';
  
  export default {
    // name
    name: "App",
    components: {
      AppHeader,
      AppMain
    }
  }
</script>
<!-- &script section -->



<!-- tempalte section -->
<template>

  <!-- header section -->
  <header>
    <AppHeader />
  </header>
  <!-- /header section -->

  <!-- main section -->
  <main>
    <AppMain />
  </main>
  <!-- /main section -->
  
</template>
<!-- /tempalte section -->



<!-- style section -->
<style lang="scss">
@use './styles/general.scss' as *;
</style>
<!-- /style section -->