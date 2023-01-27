// import router
import { createRouter, createWebHistory } from "vue-router";

// import "routes"
import HomePage from "./pages/HomePage.vue";
import AboutUs from "./pages/AboutUs.vue";
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
  ]
});

export { router };