<template>
  <main>
    <!-- About Us Hero Section -->
    <section class="relative min-h-162.5 h-screen w-full overflow-hidden px-5 sm:px-10" aria-labelledby="about-hero-title" aria-describedby="about-hero-description"
      itemscope itemtype="https://schema.org/WebPage">

      <!-- Hero Image -->
      <img src="@/assets/about us/hero-image-about-us.webp" alt="" aria-hidden="true" class="absolute inset-0 h-full w-full scale-[1.03] object-cover object-[center_35%] grayscale motion-reduce:scale-100"
        loading="eager" fetchpriority="high"
      />

      <!-- Dark Overlay -->
      <div class="absolute inset-0 bg-black/50" aria-hidden="true"></div>

      <!-- Right Space -->
      <div class="relative z-10 mx-auto flex h-full max-w-400 items-center justify-center px-5 text-center sm:px-6 lg:px-20">
        
        <!-- Position -->
        <div class="text-white">

          <!-- Title -->
          <h1 id="about-hero-title" class="pb-8 text-4xl font-semibold leading-tight text-white drop-shadow-[0_4px_2px_rgba(0,0,0,0.5)] sm:text-5xl wide:text-6xl"
            itemprop="headline">
            Expand your business across the border
          </h1>

          <!-- Description -->
          <p id="about-hero-description" class="mx-auto max-w-225 pb-10 text-base leading-7 tracking-wide text-white sm:text-xl" itemprop="description">
            Business DE-DK is a cross-border project focused on strengthening cooperation
            between businesses, institutions, and initiatives in the northern German and
            southern Danish border region.
          </p>

          <!-- Interreg Image Wrapper -->
          <div class="flex justify-center">
            <div class="mx-auto flex w-full max-w-100 items-center justify-center rounded-2xl bg-white py-2 shadow-xl">
              <!-- Image-->
              <img src="@/assets/about us/logo partners about us.png" alt="" aria-hidden="true" class="h-20" loading="lazy" itemprop="image"
              />
            </div>
          </div>
        </div>
      </div>

      <!-- Bottom Fade -->
      <div class="absolute bottom-0 left-0 z-20 h-60 w-full bg-[linear-gradient(to_top,#FFFFFF_0%,rgba(255,255,255,0.88)_35%,rgba(255,255,255,0)_100%)]"
      aria-hidden="true"></div>

    </section>

    <MissionView />
    <PriorityView />
    <PartnersView />
    <ProfessionalGuidanceView />
    <ContactView />
  </main>
</template>

<script setup>
import { onMounted } from 'vue';
import ContactView from './aboutComponents/ContactView.vue';
import MissionView from './aboutComponents/MissionView.vue';
import PartnersView from './aboutComponents/PartnersView.vue';
import PriorityView from './aboutComponents/PriorityView.vue';
import ProfessionalGuidanceView from './aboutComponents/ProfessionalGuidanceView.vue';
import { scrollToTop } from '@/components/modules/scrollToTop';

onMounted(() => {
  scrollToTop();
});

useHead({
  title: 'About Us | Business Region DE-DK',

  link: [
    {
      rel: 'canonical',
      href: 'https://business-region-de-dk.web.app/about',
    },
  ],

  meta: [
    {
      name: 'description',
      content:
        'Learn about Business Region DE-DK, our mission, priorities, and partner organizations supporting cross-border cooperation between Denmark and Germany.',
    },
    {
      name: 'keywords',
      content:
        'Business Region DE-DK, about us, cross-border cooperation, Denmark Germany, business development, regional partnerships',
    },
    {
      property: 'og:title',
      content: 'About Us | Business Region DE-DK',
    },
    {
      property: 'og:description',
      content:
        'Learn about Business Region DE-DK, our mission, priorities, and partner organizations supporting cross-border cooperation between Denmark and Germany.',
    },
    {
      property: 'og:type',
      content: 'website',
    },
    {
      property: 'og:image',
      content: '/about us/hero-image-about-us.webp',
    },
  ],
});
</script>