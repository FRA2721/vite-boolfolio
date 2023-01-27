<!-- script section -->
<script>
export default{
  // name
    name: "AppHeader"
}
</script>
<!-- /script section -->



<!-- tempalte section -->
<template>
  <header>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Navbar</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link :to="{name: 'home'}" class="nav-link active" aria-current="page" href="#">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link :to="{name: 'about-us'}" class="nav-link" href="#">About Us</router-link>
            </li>
          </ul>
        </div>
      </div>
      <div class="collapse navbar-collapse" id="navbarText">
        <a class="navbar-text me-4" href="http://127.0.0.1:8000/admin">
          Admin 
        </a>
      </div>
    </nav>
  </header>
</template>
<!-- tempalte section -->



<!-- style section -->
<style lang="scss" scoped>
a{
  text-decoration: none;
}
</style>
<!-- /style section -->