<template>
  <section
    class="relative min-h-screen w-full"
    aria-labelledby="hero-title"
  >
    <!-- Hero Image -->
    <img
      src="@/assets/hero-image.png"
      alt="Business professionals collaborating across the Denmark-Germany border region"
      class="absolute inset-0 h-full w-full object-cover object-center"
      fetchpriority="high"
    />

    <!-- Dark overlay for better text contrast -->
    <div class="absolute inset-0 bg-black/40" aria-hidden="true"></div>

    <!-- Container -->
    <div class="relative z-10 mx-auto min-h-screen max-w-[1600px] px-5 xs:px-6 sm:px-8 lg:px-20 wide:px-20">
      <!-- 12 column grid -->
      <div class="grid min-h-screen grid-cols-12 gap-2.5">

        <!-- Hero content -->
        <div
          class="col-span-12 flex flex-col items-center py-50 text-center md:col-start-1 md:col-end-11 md:items-start md:text-left lg:col-end-10"
        >
          <!-- Main page title -->
          <h1
            id="hero-title"
            class="pb-10 text-4xl font-semibold leading-tight text-white drop-shadow-[0_4px_2px_rgba(0,0,0,0.5)] sm:text-5xl lg:text-5xl wide:text-6xl"
          >
            Cross-Border Business & Recruitment Denmark–Germany
          </h1>

          <!-- SEO-friendly hero description -->
          <p
            class="mx-auto max-w-[900px] pb-10 text-base leading-7 tracking-wide text-white sm:text-xl md:mx-0"
          >
            Business Region DE-DK supports cross-border collaboration, recruitment, and regional
            growth by connecting companies, talent, and opportunities across Southern Denmark and
            Northern Germany.
          </p>

          <!-- CTA link -->
          <router-link
            to="/about"
            class="flex h-[42px] w-[168px] items-center justify-center rounded-md bg-secondary text-sm font-normal uppercase text-white transition-all duration-300 hover:bg-[#5F73D9] focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-secondary"
            aria-label="Read more about Business Region DE-DK"
            title="Read more about Business Region DE-DK"
          >
            Read More
          </router-link>
        </div>

      </div>
    </div>

    <!-- Bottom fade decoration -->
    <div class="hero-bottom-fade" aria-hidden="true"></div>
  </section>
</template>

<script setup></script>

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