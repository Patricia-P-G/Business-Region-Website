<template>
  <section
    id="contact"
    class="w-full bg-white py-16 sm:py-20"
    aria-labelledby="contact-title"
  >
    <div class="mx-auto max-w-[1600px] px-5 xs:px-6 sm:px-8 lg:px-25">

      <!-- Title -->
      <div class="pt-6 sm:pt-10">
        <h2
          id="contact-title"
          class="text-3xl font-semibold uppercase tracking-tight text-black sm:text-4xl"
        >
          Contact
        </h2>
      </div>

      <hr
        class="pt-4 border-0 border-b-[3px] border-primary"
        aria-hidden="true"
      />

      <!-- Content -->
      <div class="grid grid-cols-12 items-start gap-y-10 py-10 lg:gap-10">

        <!-- Google Maps -->
        <div class="col-span-12 lg:col-start-1 lg:col-end-6">
          <iframe
            title="Map showing Business DE-DK office at Vestergade 9, 6270 Tønder, Denmark"
            src="https://www.google.com/maps?q=Vestergade+9,+6270+Tønder,+Denmark&output=embed"
            class="h-[260px] w-full rounded-xl border-0 sm:h-[300px] lg:h-[270px]"
            loading="lazy"
            allowfullscreen
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        <!-- Address -->
        <address
          class="col-span-12 not-italic lg:col-start-6 lg:col-end-9 lg:pt-10"
        >
          <h3 class="text-xl font-semibold text-black">
            Address:
          </h3>

          <p class="pb-8 pt-2 text-lg leading-7 text-black sm:text-xl">
            Vestergade 9 <br />
            6270 Tønder, Denmark
          </p>

          <div class="rounded-md bg-[#D5DAF2] px-6 py-5">
            <p class="text-base font-medium leading-5 text-black sm:text-lg">
              Visits are available only by appointment.
            </p>
          </div>
        </address>

        <!-- Email / Phone -->
        <div class="col-span-12 lg:col-start-10 lg:col-end-13 lg:pt-10">
          <div>
            <h3 class="text-xl font-semibold text-black">
              Email:
            </h3>

            <a
              href="mailto:lecba@toender.dk"
              class="inline-block pt-2 text-lg text-black transition hover:text-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-primary sm:text-xl"
            >
              lecba@toender.dk
            </a>
          </div>

          <div class="pt-10 lg:pt-16">
            <h3 class="text-xl font-semibold text-black">
              Phone:
            </h3>

            <a
              href="tel:+4521775916"
              class="inline-block pt-2 text-lg text-black transition hover:text-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-primary sm:text-xl"
            >
              +45 217 759 16
            </a>
          </div>
        </div>

      </div>

    </div>
  </section>
</template>

<script setup>
</script>