import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import AboutView from "@/views/AboutView.vue";
import MediaView from "@/views/MediaView.vue";
import EventsView from "@/views/EventsView.vue";
import NetworkView from "@/views/NetworkView.vue"

import ContactView from "@/views/aboutComponents/ContactView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      component: AboutView,
    },
    {
      path: "/media",
      name: "media",
      component: MediaView,
    },
    {
      path: "/events",
      name: "events",
      component: EventsView,
    },
    {
      path: "/network",
      name: "network",
      component: NetworkView,
    },

    // PARTNER PAGES
    {
      path: "/partners/business-esbjerg",
      name: "business-esbjerg",
      component: () => import("@/views/networkComponents/business esbjerg/BusinessEsbjergView.vue"),
    },

    // {
    //   path: "/partners/business-kolding",
    //   name: "business-kolding",
    //   component: () =>
    //     import("@/views/partners/BusinessKoldingView.vue"),
    // },

    // {
    //   path: "/partners/copenhagen-capacity",
    //   name: "copenhagen-capacity",
    //   component: () =>
    //     import("@/views/partners/CopenhagenCapacityView.vue"),
    // },

    {
    path: '/contact',
    name: 'Contact',
    component: ContactView
  }
  
  ],

 
});

export default router;
