<template>
  <div>
    <section class="relative h-[760px] w-full overflow-hidden px-10">

      <!-- HERO IMAGE -->
      <img src="@/assets/about us/hero-image-about-us.png" alt="About us hero"
        class="absolute inset-0 h-full w-full scale-[1.03] object-cover object-[center_35%] grayscale" />

      <!-- DARK OVERLAY -->
      <div class="absolute inset-0 bg-black/50"></div>

      <!-- CONTENT -->
      <div class="relative z-10 mx-auto flex h-full items-center justify-center px-5 text-center sm:px-6 lg:px-25">

        <div class="text-white">

          <!-- TITLE -->
          <h1 class="pb-6 text-4xl font-semibold leading-tight text-white drop-shadow-[0_4px_2px_rgba(0,0,0,0.5)] sm:text-5xl pb-10 lg:text-5xl wide:text-6xl">
            Expand your business across the border
          </h1>

          <!-- TEXT -->
          <p class="mx-auto max-w-[900px] pb-10 text-base leading-7 tracking-wide text-white sm:text-xl md:mx-0 col-start-1 col-end-9">
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