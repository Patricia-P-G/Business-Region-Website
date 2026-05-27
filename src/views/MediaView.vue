<template>
  <main>
   <!-- Hero Media Channel -->
    <section class="relative h-180 w-full overflow-hidden" aria-labelledby="network-hero-title" aria-describedby="network-hero-description"
      itemscope itemtype="https://schema.org/WebPage">

      <!-- Hero Image -->
      <img src="@/assets/media/hero-image-media.png" alt="" aria-hidden="true" class="absolute inset-0 h-full w-full scale-[1.03] object-cover object-[center_35%] grayscale"
        loading="eager" fetchpriority="high"
      />

      <!-- Dark Overlay -->
      <div class="absolute inset-0 bg-black/40" aria-hidden="true"></div>

      <!-- Content Wrapper -->
      <div class="relative z-10 max-w-400 mx-auto flex h-full items-center justify-center px-5 text-center sm:px-6 lg:px-20">
        <!-- Position -->
        <div>
      
          <!-- Title -->
          <h1 id="network-hero-title" class="mx-auto max-w-6xl pb-5 text-4xl font-semibold uppercase leading-tight text-white drop-shadow-[0_4px_2px_rgba(0,0,0,0.5)]"
            itemprop="headline">
            Media Channel
          </h1>

          <!-- Description -->
          <p id="media-hero-description" class="mx-auto max-w-190 pb-10 text-base leading-7 tracking-wide text-white sm:text-xl"
            itemprop="description">
            A growing library of interviews, conference talks, and event footage from across the cross-border region.
          </p>

        </div>
      </div>

      <!-- Bottom Fade -->
      <div class="hero-bottom-fade"
        aria-hidden="true">
      </div>

    </section>

    <MediaLibrary />
  </main>
</template>

<script setup>
import { onMounted } from 'vue';
import MediaLibrary from "./mediaComponents/MediaLibrary.vue";

// Injectare dinamică a metadatelor SEO
if (typeof window !== 'undefined') {
  document.title = "Media Channel - Cross-Border Region Library";
  
  const updateMeta = (name, content, isProperty = false) => {
    const selector = isProperty ? `meta[property="${name}"]` : `meta[name="${name}"]`;
    let meta = document.querySelector(selector);
    if (!meta) {
      meta = document.createElement('meta');
      if (isProperty) meta.setAttribute('property', name);
      else meta.name = name;
      document.head.appendChild(meta);
    }
    meta.content = content;
  };

  onMounted(() => {
    // Tag-uri SEO standard
    updateMeta('description', 'Explore our comprehensive media library featuring interviews, conference talks, and exclusive event footage.');
    updateMeta('keywords', 'media channel, cross-border region, interviews, conference talks, business events');
    
    // Open Graph (Social Media)
    updateMeta('og:title', 'Media Channel - Cross-Border Region Library', true);
    updateMeta('og:description', 'Explore our comprehensive media library featuring interviews, conference talks, and exclusive event footage.', true);
    updateMeta('og:type', 'website', true);
    
    // Twitter Card
    updateMeta('twitter:card', 'summary_large_image');
  });
}
</script>

<style scoped>
/* Gradientul pentru tranzitia fina - ramane vizibil pe orice rezolutie */
.hero-bottom-fade {
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 20;
  height: 25vh; /* Se adaptează fluid în funcție de înălțimea ecranului */
  width: 100%;
  pointer-events: none; /* Nu blochează interacțiunile utilizatorului în acea zonă */

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