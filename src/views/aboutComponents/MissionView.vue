<template>
  <section
    class="relative w-full overflow-hidden bg-[linear-gradient(to_bottom,#FFFFFF_0%,#EEF0FF_55%,#9BA8F0_100%)] py-15"
  >
    <div class="mx-auto px-12 sm:px-6 lg:px-25">
      <div class="grid grid-cols-12 items-center gap-10">

        <!-- Image -->
        <div class="col-span-12 md:col-start-1 md:col-end-6">
          <img
            src="@/assets/about us/flags-de-dk.png"
            alt="Danish and German flags"
            class="h-[400px] w-full object-cover rounded-lg"
          />
        </div>

        <!-- Text -->
        <div class="col-span-12 md:col-start-7 md:col-end-12">
          <h2 class="text-3xl font-medium uppercase text-black pb-5">
            Our Mission
          </h2>

          <p class="mt-6 text-lg leading-6 text-black pb-5">
            The project aims to improve coordination and business collaboration
            across borders, helping address labor shortages, support economic
            growth, and create a more attractive and visible region for
            companies and job seekers.
          </p>

          <p class="mt-6 text-lg leading-6 text-black pb-10">
            As part of the project we collect data and insights about regional
            opportunities, needs, and existing initiatives by collaborating with
            organizations, politicians, and stakeholders across the region. This
            information will be shared through an accessible media platform
            available to everyone.
          </p>

          <button
            class="mt-10 rounded-md bg-[#7C8BDA] px-10 py-3 text-sm font-bold uppercase text-white transition hover:bg-[#6677c7] cursor-pointer"
          >
            Contact Us
          </button>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
</script>