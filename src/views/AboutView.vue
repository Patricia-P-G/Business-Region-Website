<template>
  <div>
    <section class="relative h-[760px] w-full overflow-hidden">

      <!-- HERO IMAGE -->
      <img src="@/assets/about us/hero-image-about-us.png" alt="About us hero"
        class="absolute inset-0 h-full w-full scale-[1.03] object-cover object-[center_35%] grayscale" />

      <!-- DARK OVERLAY -->
      <div class="absolute inset-0 bg-black/30"></div>

      <!-- CONTENT -->
      <div class="relative z-10 mx-auto flex h-full items-center justify-center px-5 text-center sm:px-6 lg:px-25">

        <div class="text-white">

          <!-- TITLE -->
          <h1 class="mx-auto max-w-6xl text-4xl font-semibold uppercase leading-tight tracking-wide text-white
                   drop-shadow-[0_4px_2px_rgba(0,0,0,0.5)]
                   sm:text-5xl
                   lg:text-4xl
                   pb-5">
            Expand your business – Across the border
          </h1>

          <!-- TEXT -->
          <p class="mx-auto pb-10 max-w-5xl text-xl font-normal leading-6
                   sm:text-2x drop-shadow-[0_4px_2px_rgba(0,0,0,0.5)]">
            Business DE-DK is a cross-border project focused on strengthening cooperation
            between businesses, institutions, and initiatives in the northern German and
            southern Danish border region.
          </p>

          <!-- LOGO BOX -->
          <div class="flex justify-center">
            <div class="mx-auto flex w-100 items-center justify-center rounded-2xl bg-white py-2 shadow-xl">
              <img src="@/assets/about us/logo partners about us.png" alt="Interreg logo" class="h-20" />
            </div>
          </div>
        </div>
      </div>

      <!-- BOTTOM FADE -->
      <div class="absolute bottom-0 left-0 z-20 h-[240px] w-full
               bg-[linear-gradient(to_top,#FFFFFF_0%,rgba(255,255,255,0.88)_35%,rgba(255,255,255,0)_100%)]">
      </div>

    </section>

    <MissionView />
    <PriorityView />
    <PartnersView />
    <ProfessionalGuidanceView />
    <ContactView />

  </div>
</template>

<script setup>
import ContactView from './aboutComponents/ContactView.vue'
import MissionView from './aboutComponents/MissionView.vue'
import PartnersView from './aboutComponents/PartnersView.vue'
import PriorityView from './aboutComponents/PriorityView.vue'
import ProfessionalGuidanceView from './aboutComponents/ProfessionalGuidanceView.vue'
</script>