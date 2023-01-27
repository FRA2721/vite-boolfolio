<!-- script section -->
<script>
export default{
  // name
    name: "PostCard",
    props: {
      post: Object,
      baseUrl: String,
    },

    // data
    data() {
      return{
        maxLenght: 150
      }
    },

    // computed
    computed: {
      getTextInterruption(){
        if( this.post.description && this.post.description.length > this.maxLenght ){
            return this.post.description.substr(0, this.maxLenght) + "...";

        } else {
            return this.post.description;
        }
      }
    }
}
</script>
<!-- /script section -->



<!-- template section -->
<template>
  <div class="card mt-3">
    <div class="card-body">
      <div class="row justify-content-between">
        <div class="col-4">
          <img v-if="post.cover_image" class="w-100" :src="`${baseUrl}/storage/${post.cover_image}`" alt="">
          <div v-else>
            No image
          </div>
        </div>
        <div class="col-7 position-relative">
        <h3 class="card-title">{{ post.title }}</h3>
          <div class="d-flex justify-content-between">
            <p>
              <span v-for="tech in post.technologies" :key="tech.id">#{{ tech.name }} </span>
            </p>
            <p class="text-end text-success mb-4">{{ post.type ? post.type.name : 'No type' }}
            </p>
          </div>
          <p class="card-text">
            {{ getTextInterruption }}
          </p>
          <a class="btn btn-primary position-absolute bottom-0 end-0 mt-5" href="">Read</a>
        </div>
      </div>
    </div>
  </div>
</template>
<!-- /template section -->



<!-- style section -->
<style lang="scss" scoped>
</style>
<!-- /style section -->