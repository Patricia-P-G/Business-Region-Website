<template>
  <main>
    <!-- Hero Network -->
    <section class="relative h-180 w-full overflow-hidden" aria-labelledby="network-hero-title" aria-describedby="network-hero-description"
      itemscope itemtype="https://schema.org/WebPage">

      <!-- Hero Image -->
      <img src="@/assets/network/hero-image-network.png" alt="" aria-hidden="true" class="absolute inset-0 h-full w-full scale-[1.03] object-cover object-[center_35%] grayscale"
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
            Network
          </h1>

          <!-- Description -->
          <p id="network-hero-description" class="mx-auto max-w-225 pb-10 text-base leading-7 tracking-wide text-white sm:text-xl"
            itemprop="description">
            Business DE-DK is a cross-border project focused on strengthening cooperation between
            businesses, institutions, and initiatives in the northern German and southern Danish
            border region.
          </p>

        </div>
      </div>

      <!-- Bottom Fade -->
      <div class="absolute bottom-0 left-0 z-20 h-60 w-full bg-[linear-gradient(to_top,#FFFFFF_0%,rgba(255,255,255,0.88)_35%,rgba(255,255,255,0)_100%)]"
        aria-hidden="true">
      </div>

    </section>

    <NetworkCompanies />
  </main>
</template>

<script setup>
import NetworkCompanies from "./networkComponents/NetworkCompanies.vue";
</script>
