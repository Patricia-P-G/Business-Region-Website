<template>
    <section class="relative h-[720px] w-full overflow-hidden">

      <!-- HERO IMAGE -->
      <img src="@/assets/network/hero-image-network.png" alt="About us hero"
        class="absolute inset-0 h-full w-full scale-[1.03] object-cover object-[center_35%] grayscale" />

      <!-- DARK OVERLAY -->
      <div class="absolute inset-0 bg-black/30"></div>

      <!-- CONTENT -->
      <div class="relative z-10 mx-auto flex h-full items-center justify-center px-5 text-center sm:px-6 lg:px-25">

        <div class="text-white">

          <!-- TITLE -->
          <h1 class="mx-auto max-w-6xl text-4xl font-semibold uppercase leading-tight text-white
                   drop-shadow-[0_4px_2px_rgba(0,0,0,0.5)]
                   sm:text-5xl
                   lg:text-4xl
                   pb-5">
            Network
          </h1>

          <!-- TEXT -->
          <p class="mx-auto pb-35 max-w-5xl text-xl font-normal leading-6
                   sm:text-2x drop-shadow-[0_4px_2px_rgba(0,0,0,0.5)]">
            Business DE-DK is a cross-border project focused on strengthening cooperation
            between businesses, institutions, and initiatives in the northern German and
            southern Danish border region.
          </p>

          
        </div>
      </div>

      <!-- BOTTOM FADE -->
      <div class="absolute bottom-0 left-0 z-20 h-[240px] w-full
               bg-[linear-gradient(to_top,#FFFFFF_0%,rgba(255,255,255,0.88)_35%,rgba(255,255,255,0)_100%)]">
      </div>

    </section>
    <NetworkCompanies />


   
</template>

<script setup>
import NetworkCompanies from './networkComponents/NetworkCompanies.vue';

NetworkCompanies
</script>