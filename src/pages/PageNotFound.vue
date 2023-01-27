<!-- script section -->
<script>
export default {
  // name
  name: "PageNotFound",
};
</script>
<!-- /script section -->



<!-- template section -->
<template>

  <!-- main section -->
  <main>
    <div class="container text-center mt-5">
      <h1>Error 404 (Page Not Found)!</h1>
      <router-link :to="{ name: 'home' }" class="btn btn-primary mt-3">Go back to the Home Page</router-link>
    </div>
  </main>
  <!-- /main section -->

</template>
<!-- /template section -->



<!-- style section -->
<style lang="scss" scoped>
</style>
<!-- /style section -->