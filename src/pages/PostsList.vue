<!-- script section -->
<script>

// import libraries & components
import axios from 'axios';
import AppLoading from '../components/AppLoading.vue';
import PostCard from '../components/PostCard.vue';

export default{
  // name
  name: "AppMain",
  components: {
    PostCard,
    AppLoading
  },

  data(){
    return{
      baseUrl: "http://127.0.0.1:8000",
      posts: [],
      currentPage: 1,
      lastPage: null,
      totalPosts: null,
      loading: false
    }
  },

  created() {
    this.getPosts(1);
  },

  methods: {
    getPosts(page){
      this.loading = true; 
      // axios call
      axios.get(this.baseUrl + "/api/posts", {
        params: {
          page: page
        }
      }).then( resp => {
        console.log(resp.data.response);
        //this.posts = resp.data.response;
        this.posts = resp.data.response.data;
        this.currentPage = resp.data.response.current_page;
        this.lastPage = resp.data.response.last_page;
        this.totalPosts = resp.data.response.total;
        this.loading = false;
        
      }).catch( err => { //errors
        console.log(err);
      })
    }
  }
}
</script> 
<!-- /script section -->



<!-- template section -->
<template>
  <div class="container">
    <h2 class="my-3 text-center">Post section</h2>
    <AppLoading v-if="loading" />
    <div v-else class="row justify-content-center py-4">
      <div class="col-11 col-md-10 col-lg-8">
        <PostCard :post="post" v-for="post in posts" :key="post.id" />

        <!-- paginate -->
        <nav class="paginate d-flex justify-content-between py-3">
          <div>
            <h6>Page {{ currentPage }} of {{ lastPage }}</h6>
          </div>

          <div>
            <a class="btn btn-success me-2" :class="currentPage === 1 ? 'disabled' : ''" href="" @click.prevent="getPosts(currentPage - 1)">Back</a>
            <a class="btn btn-success" :class="currentPage === lastPage ? 'disabled' : ''" href="" @click.prevent="getPosts(currentPage + 1)">Next</a>
          </div>

        </nav>

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