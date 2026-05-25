<template>
  <section class="relative min-h-screen w-full">

    <!-- Hero Image -->
    <img
      src="@/assets/hero-image.png"
      alt="Hero Image"
      class="absolute inset-0 h-full w-full object-cover object-center"
    />

    <!-- Overlay -->
    <div class="absolute inset-0 bg-black/40"></div>

    <!-- CONTAINER -->
    <div class="relative z-10 mx-auto min-h-screen max-w-[1600px] px-5 xs:px-6 sm:px-8 lg:px-25 wide:px-25">

      <!-- 12 COLUMN GRID -->
      <div class="grid min-h-screen grid-cols-12 gap-2.5">

        <!-- CONTENT -->
        <div
          class="col-span-12 flex flex-col items-center justify-center text-center
                 md:col-start-1 md:col-end-11
                 md:items-start md:text-left
                 lg:col-end-10"
        >

          <h1
            class="pb-6 text-4xl font-semibold leading-tight text-white drop-shadow-[0_4px_2px_rgba(0,0,0,0.5)]
                   sm:text-5xl pb-10
                   lg:text-5xl
                   wide:text-6xl"
          >
            Cross-Border Business & Recruitment Denmark–Germany | Business DE-DK
          </h1>

          <p
            class="mx-auto max-w-[620px] pb-10 text-base leading-7 tracking-wide text-[#d4cfcf]
                   sm:text-lg md:mx-0"
          >
            Business Region supports cross-border collaboration,
            recruitment, and regional growth by connecting companies,
            talent, and opportunities across Southern Denmark and
            Northern Germany.
          </p>

          <button
            class="flex h-[42px] w-[168px] items-center justify-center rounded-md bg-secondary
                   text-sm font-thin uppercase text-white transition-all duration-300
                   hover:bg-[#5F73D9] cursor-pointer"
          >
            Read More
          </button>

        </div>

      </div>

    </div>

    <!-- BOTTOM FADE -->
    <div
      class="absolute bottom-0 left-0 z-20 h-24 w-full
             bg-[linear-gradient(to_top,#FFFFFF_0%,rgba(255,255,255,0)_100%)]"
    ></div>

  </section>
</template>

<script setup>
</script>