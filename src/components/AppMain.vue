<!-- script section -->
<script>

// import libraries & components
import axios from 'axios';
import AppLoader from './AppLoading.vue';
import PostCard from './PostCard.vue';

export default{
  // name
    name: "AppMain",
    components: {
      AppLoader,
      PostCard
    },

    data(){
      return{
        baseUrl: "http://127.0.0.1:8000",
        posts: [],
        loading: false
      }
    },

    methods: {
      getposts(){
      this.loading = true;

      // axios call
      axios
        .get(this.baseUrl + "/api/posts")

        .then( resp => {
          console.log(resp);
          this.posts = resp.data.response;
          this.loading = false;
          
        }).catch( err => { //errors
          console.log(err);
        })
      }
    },
    created() {
      this.getposts();
    }
}
</script>
<!-- /script section -->



<!-- template section -->
<template>
  <div class="container">
    <h2 class="my-3 text-center">Post section</h2>
    <AppLoading v-if="loading" />
    <div v-else class="row justify-content-center">
      <div class="col-11 col-md-10 col-lg-8">
        <PostCard :post="post" v-for="post in posts" :key="post.id" :baseUrl="baseUrl"/>
      </div>
    </div>
  </div>
</template>
<!-- template section -->



<!-- style section -->
<style lang="scss" scoped>

// container formatting section
// .container{
//   display: flex;
//   height: 500px;
//   justify-content: center;
//   align-items: center;
  
  // tipography
    h2{
      color: lightgrey;
      text-shadow: 5px 5px rgba(20, 20, 20, .09);
    }
// }
</style>
<!-- /style section -->