// import router
import { createRouter, createWebHistory } from "vue-router";

// import "routes"
import HomePage from "./pages/HomePage.vue";
import AboutUs from "./pages/AboutUs.vue";
import PageNotFound from "./pages/PageNotFound.vue";
import PostsList from "./pages/PostsList.vue"

// router init
const router = createRouter({
  history: createWebHistory(),

  //routes array
  routes: [

    // home link
    {
      path: "/",
      name: "home",
      component: HomePage
    },

    // about us link
    {
      path: "/about-us",
      name: "about-us",
      component: AboutUs
    },

    // posts link
    {
      path: "/posts",
      name: "posts",
      component: PostsList
    },

    // page not found link
    {
      path: "/:pathMatch(.*)*",
      name: "not-found",
      component: PageNotFound,
    }
  ]
});

export { router };