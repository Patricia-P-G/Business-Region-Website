import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import AboutView from "@/views/AboutView.vue";
import MediaView from "@/views/MediaView.vue";
import EventsView from "@/views/EventsView.vue";
import NetworkView from "@/views/NetworkView.vue"

import ContactView from "@/views/aboutComponents/ContactView.vue";
import BecomeMember from "@/components/BecomeMember.vue";
import KatjaInterviewView from "@/views/mediaComponents/KatjaInterviewView.vue";

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
    {
    path: '/contact',
    name: 'contact',
    component: ContactView
  },
  {
    path: '/join',
    name: 'Join',
    component: BecomeMember
  },

  {
    path: '/media/meet-katja',
    name: 'meet katja',
    component: KatjaInterviewView
  }

  ],

 
});

export default router;
