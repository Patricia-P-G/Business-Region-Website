<template>
  <section class="relative min-h-screen w-full" aria-labelledby="hero-title">

    <!-- Hero Image -->
    <img
      src="/home/hero-image.webp"
      alt=""
      aria-hidden="true"
      class="absolute inset-0 h-full w-full object-cover object-center"
      fetchpriority="high"
    />

    <!-- Dark overlay for better text contrast -->
    <div class="absolute inset-0 bg-black/40" aria-hidden="true"></div>

    <!-- Container -->
    <div class="relative z-10 mx-auto min-h-screen max-w-400 px-5 xs:px-6 sm:px-8 lg:px-20 wide:px-20">

      <!-- 12 column grid -->
      <div class="grid min-h-screen grid-cols-12 gap-2.5">

        <!-- Hero content -->
        <div class="col-span-12 flex flex-col items-center justify-center text-center lg:col-start-1 lg:col-end-10 lg:items-start lg:text-left">

          <!-- Title -->
          <h1 id="hero-title" class="pb-8 text-4xl font-semibold leading-tight text-white drop-shadow-[0_4px_2px_rgba(0,0,0,0.5)] sm:pb-10 sm:text-5xl lg:text-5xl wide:text-6xl">
            Cross-Border Business & Recruitment Denmark–Germany
          </h1>

          <!-- Description -->
          <p class="mx-auto max-w-225 pb-10 text-base leading-7 tracking-wide text-white sm:text-xl lg:mx-0">
            Business Region DE-DK supports cross-border collaboration,
            recruitment, and regional growth by connecting companies,
            talent, and opportunities across Southern Denmark and
            Northern Germany.
          </p>

          <!-- CTA Button -->
          <router-link
            to="/about"
            class="cta-lavander-button w-42"
            aria-label="Read more about Business Region DE-DK"
            title="Read more about Business Region DE-DK">
            Read More
          </router-link>

        </div>

      </div>
    </div>

    <!-- Bottom fade Decoration -->
    <div class="hero-bottom-fade" aria-hidden="true"></div>

  </section>
</template>


<script setup>
import { onMounted } from 'vue';

const updateMeta = (name, content, isProperty = false) => {
  if (typeof window === 'undefined') return;

  const selector = isProperty ? `meta[property="${name}"]` : `meta[name="${name}"]`;
  let meta = document.querySelector(selector);
  
  if (!meta) {
    meta = document.createElement('meta');
    if (isProperty) {
      meta.setAttribute('property', name);
    } else {
      meta.name = name;
    }
    document.head.appendChild(meta);
  }
  meta.content = content;
};

onMounted(() => {

  document.title = "Business DE-DK Cross-Border Cooperation";
  
  // SEO Standard Tags
  updateMeta('description', 'Connect with partner companies, institutions, and initiatives driving the cross-border business cooperation between Germany and Denmark.');
  updateMeta('keywords', 'business network, cross-border cooperation, Germany Denmark, DE-DK partners, regional initiatives');
  
  // Open Graph (Social Media / Facebook / LinkedIn)
  updateMeta('og:title', 'Network - Business DE-DK Cross-Border Cooperation', true);
  updateMeta('og:description', 'Connect with partner companies, institutions, and initiatives driving the cross-border business cooperation between Germany and Denmark.', true);
  updateMeta('og:type', 'website', true);
  updateMeta('og:image', '/network/hero-image-network.webp', true);
  
});
</script>

<style scoped>
.hero-bottom-fade {
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 20;
  height: 10rem;
  width: 100%;

  background-image: linear-gradient(
    to top,
    rgba(255, 255, 255, 1) 0%,
    rgba(255, 255, 255, 0.75) 18%,
    rgba(255, 255, 255, 0.55) 35%,
    rgba(255, 255, 255, 0.3) 55%,
    rgba(255, 255, 255, 0.12) 75%,
    rgba(255, 255, 255, 0) 100%
  );
}
</style>