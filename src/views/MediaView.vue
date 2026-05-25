<template>
  <section class="relative h-[100vh] w-full">

    <!-- Hero Image -->
    <img src="@/assets/media/hero-image-media.png" alt="Media Hero"
      class="absolute inset-0 h-full w-full object-cover object-center grayscale" />

    <!-- Dark Overlay -->
    <div class="absolute inset-0 bg-black/35"></div>

    <!-- Content -->
    <div class="relative z-10 mx-auto flex h-full items-center justify-center px-12 sm:px-6 lg:px-25">
      <div class="text-center text-white">

        <!-- Title -->
        <h1 class="text-6xl font-black uppercase tracking-tight
                 text-white drop-shadow-[0_4px_4px_rgba(0,0,0,0.5)]">
          Media Channel
        </h1>

        <!-- Subtitle -->
        <p class="mx-auto mt-8 max-w-4xl text-3xl font-medium leading-10
                 text-white drop-shadow-[0_3px_3px_rgba(0,0,0,0.45)]">
          A growing library of interviews, conference talks,
          and event footage from across the cross-border region.
        </p>

      </div>
    </div>

    <!-- Bottom Fade -->
    <div class="absolute bottom-0 left-0 z-20 h-64 w-full
             bg-[linear-gradient(to_top,#FFFFFF_0%,rgba(255,255,255,0.9)_35%,rgba(255,255,255,0)_100%)]"></div>

    <MediaLibrary />
    <Footer />

  </section>
</template>

<script setup>
import Footer from '@/components/Footer.vue';
import MediaLibrary from './mediaComponents/MediaLibrary.vue';

</script>