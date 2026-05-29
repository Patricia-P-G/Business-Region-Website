<template>

  <Hero />
  <CompaniesTrust/>
  <WhoWeWorkWith/>
  <BecomeMember />
  <MediaChannelSection />
  
</template>


<script setup>
import { useHead } from '@vueuse/head';

import BecomeMember from '@/components/BecomeMember.vue';
import CompaniesTrust from '@/components/CompaniesTrust.vue';
import Hero from '@/components/Hero.vue';
import MediaChannelSection from '@/components/MediaChannelSection.vue';
import WhoWeWorkWith from '@/components/WhoWeWorkWith.vue';

useHead({
  title: 'Business Region DE-DK | Cross-Border Business Cooperation',

  link: [
    {
      rel: 'canonical',
      href: 'https://business-region-de-dk.web.app/',
    },
  ],

  meta: [
    {
      name: 'description',
      content:
        'Business Region DE-DK strengthens cross-border cooperation between businesses, institutions, and organizations in Denmark and Germany.',
    },
    {
      name: 'keywords',
      content:
        'Business Region DE-DK, Denmark Germany cooperation, business network, cross-border business, regional development, business partnerships',
    },
    {
      property: 'og:title',
      content: 'Business Region DE-DK | Cross-Border Business Cooperation',
    },
    {
      property: 'og:description',
      content:
        'Business Region DE-DK strengthens cross-border cooperation between businesses, institutions, and organizations in Denmark and Germany.',
    },
    {
      property: 'og:type',
      content: 'website',
    },
    {
      property: 'og:image',
      content: '/home/hero-image-home.webp',
    },
  ],
});
</script>

