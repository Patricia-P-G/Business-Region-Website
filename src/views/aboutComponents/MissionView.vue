<template>
  <!-- Mission Section -->
  <section class="relative w-full overflow-hidden bg-[linear-gradient(to_bottom,#FFFFFF_0%,#EEF0FF_55%,#9BA8F0_100%)] py-12 sm:py-16 lg:py-20" aria-labelledby="mission-title"
    aria-describedby="mission-description" itemscope itemtype="https://schema.org/WebPageElement">

    <!-- Right Space -->
    <div class="mx-auto max-w-400 px-5 sm:px-8 lg:px-20">

      <!-- Grid Wrapper -->
      <div class="grid grid-cols-12 items-center gap-y-10 md:gap-x-16 lg:gap-x-24">

        <!-- Image Wrapper -->
        <div class="col-span-12 overflow-hidden rounded-lg md:col-span-5">
          <!-- Image -->
          <img src="@/assets/about us/flags-de-dk.png" alt="Danish and German flags representing cross-border cooperation" class="h-60 w-full object-cover sm:h-80 md:h-100"
            loading="lazy" itemprop="image"
          />
        </div>

        <!-- Content Wrapper -->
        <div class="col-span-12 md:col-span-7">
          <!-- Position -->
          <div class="flex h-full flex-col justify-center">

            <!-- Title -->
            <h2 id="mission-title" class="text-center text-2xl font-bold uppercase text-black sm:text-3xl md:text-left lg:text-4xl" itemprop="headline">
              Our Mission
            </h2>

            <!-- Description -->
            <p id="mission-description" class="mt-5 text-base text-justify font-medium leading-6 text-black sm:text-lg" itemprop="description">
              The project aims to improve coordination and business collaboration across borders,
              helping address labor shortages, support economic growth, and create a more attractive
              and visible region for companies and job seekers.
            </p>

            <p class="mt-5 text-justify text-base font-medium leading-6 text-black sm:text-lg" itemprop="text">
              As part of the project we collect data and insights about regional opportunities,
              needs, and existing initiatives by collaborating with organizations, politicians, and
              notable stakeholders across the region. This information will be shared through an
              accessible media platform available to everyone.
            </p>

            <!-- Contact Us Wrapper  -->
            <div class="mt-8 flex w-full justify-center md:justify-start">

              <!-- Contact Us Button -->
              <router-link to="/contact" class="inline-flex items-center justify-center rounded-md bg-secondary px-10 py-2.5 text-sm font-bold uppercase
               text-white transition hover:bg-[#6677c7] focus:outline-none focus-visible:ring-4 focus-visible:ring-secondary/40 focus-visible:ring-offset-2">

                <span>Contact Us</span>

              </router-link>
            </div>
          
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

