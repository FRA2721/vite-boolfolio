<!-- script section -->
<script>
  // import components
  import AppHeader from './components/AppHeader.vue';
  
  export default {
    // name
    name: "App",
    components: {
      AppHeader,
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

  <!-- main section / router-view -->
  <main>
    <router-view></router-view>
  </main>
  <!-- /main section / router-view -->

</template>
<!-- /tempalte section -->



<!-- style section -->
<style lang="scss">
@use './styles/general.scss' as *;
</style>
<!-- /style section -->