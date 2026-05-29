import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import AboutView from "@/views/AboutView.vue";
import MediaView from "@/views/MediaView.vue";
import NetworkView from "@/views/NetworkView.vue";

import ContactView from "@/views/aboutComponents/ContactView.vue";
import BecomeMember from "@/components/BecomeMember.vue";
import KatjaInterviewView from "@/views/mediaComponents/KatjaInterviewView.vue";
import BusinessEsbjergView from "@/views/networkComponents/business esbjerg/BusinessEsbjergView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),

   scrollBehavior() {
    return { top: 0 };
  },
  
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
      path: "/network",
      name: "network",
      component: NetworkView,
    },

    // Footer - Directs you to Home since the pages are not created
    {
      path: "/employees",
      redirect: "/",
    },
    {
      path: "/strategy",
      redirect: "/",
    },
    {
      path: "/b2b",
      redirect: "/",
    },
    {
      path: "/privacy",
      redirect: "/",
    },
    {
      path: "/businesses",
      redirect: "/",
    },

    // PARTNER PAGES
    {
      path: "/partners/business-esbjerg",
      name: "business-esbjerg",
      component: BusinessEsbjergView,
    },
    // Contact
    {
    path: '/contact',
    name: 'contact',
    component: ContactView
  },

  // Become a Member
  {
    path: '/join',
    name: 'join',
    component: BecomeMember
  },

  // Meet Katja
  {
    path: '/media/meet-katja',
    name: 'meet-katja',
    component: KatjaInterviewView
  }

  ],

 
});

export default router;
