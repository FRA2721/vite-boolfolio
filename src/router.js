// import router
import { createRouter, createWebHistory } from "vue-router";

// import "routes"
import HomePage from "./pages/HomePage.vue";
import AboutUs from "./pages/AboutUs.vue";
import PageNotFound from "./pages/PageNotFound.vue";

// router init
const router = createRouter({
  history: createWebHistory(),

  //routes array
  routes: [
    {
      path: "/",
      name: "home",
      component: HomePage
    },

    {
      path: "/about-us",
      name: "about-us",
      component: AboutUs
    },

    {
      path: "/:pathMatch(.*)*",
      name: "not-found",
      component: PageNotFound,
    }
  ]
});

export { router };