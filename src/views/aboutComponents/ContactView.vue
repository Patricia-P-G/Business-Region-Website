<template>
  <!-- Contact Section -->
  <section id="contact" class="w-full bg-white py-16 sm:py-20" aria-labelledby="contact-title" aria-describedby="contact-description" itemscope
    itemtype="https://schema.org/LocalBusiness">

    <!-- Right Space -->
    <div class="mx-auto max-w-400 px-5 xs:px-6 sm:px-8 lg:px-20">

      <!-- Grid Wrapper for Title -->
      <div class="grid grid-cols-12 gap-2.5">

        <!-- Title Wrapper -->
        <div class="col-span-12">
          <!-- Title -->
          <h2 id="contact-title" itemprop="name" class="flex justify-center text-center text-xl font-bold uppercase text-primary xs:text-2xl md:text-3xl lg:justify-start lg:text-4xl">
            Contact
          </h2>

          <!-- Only for Screen Readers -->
          <p id="contact-description" class="sr-only" itemprop="description">
            Contact Business DE-DK by email, phone, or visit the office in Tønder by appointment.
          </p>
        </div>

        <!-- Underline -->
        <div class="col-span-12">
          <hr class="border-0 border-t-2 border-primary" aria-hidden="true" />
        </div>
      </div>

      <!-- Grid Wrapper for Content -->
      <div class="grid grid-cols-2 items-start gap-x-6 gap-y-10 py-15 lg:grid-cols-12 lg:gap-15">

        <!-- Google Maps Wrapper -->
        <div class="col-span-2 lg:col-start-1 lg:col-end-6">
          <!-- Iframe Google Maps -->
          <iframe title="Map showing Business DE-DK office at Vestergade 9, 6270 Tønder, Denmark" aria-label="Business DE-DK office location" src="https://www.google.com/maps?q=Vestergade+9,+6270+Tønder,+Denmark&output=embed"
            class="h-65 w-full rounded-xl border-0 sm:h-75 lg:h-67.5" loading="lazy" allowfullscreen referrerpolicy="no-referrer-when-downgrade">
          </iframe>
        </div>

        <!-- Adress Wrapper -->
        <address class="col-span-1 not-italic lg:col-start-6 lg:col-end-9 lg:pt-10" itemprop="address" itemscope itemtype="https://schema.org/PostalAddress"
          aria-label="Business DE-DK office location">

          <!-- Adress Title -->
          <h3 class="text-base font-semibold text-black sm:text-xl">Address:</h3>

          <!-- Location -->
          <p class="pb-8 pt-2 text-sm leading-6 text-black sm:text-xl">
            <span itemprop="streetAddress">Vestergade 9</span>
            <br aria-hidden="true" />

            <span itemprop="postalCode">6270</span>
            <span itemprop="addressLocality">Tønder</span>,
            <span itemprop="addressCountry">Denmark</span>
          </p>

          <!-- Schedule/Visits Wrapper -->
          <div class="rounded-md bg-[#D5DAF2] px-4 py-4 sm:px-6 sm:py-5">
            <!-- Visits -->
            <p class="text-xs font-medium leading-4 sm:leading-5 text-black sm:text-lg">
              Visits are available only by appointment.
            </p>
          </div>
        </address>

        <!-- Email / Phone Wrapper (Right Side) -->
        <div class="col-span-1 lg:col-start-10 lg:col-end-13 lg:pt-10">

          <!-- Email Wrapper -->
          <div>
            <!-- Email Title -->
            <h3 class="text-base font-semibold text-black sm:text-xl">Email:</h3>

            <!-- Email Adress -->
            <a href="mailto:lecba@toender.dk" class="inline-block wrap-break-words pt-2 text-sm text-black transition hover:text-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 sm:text-xl"
              itemprop="email" aria-label="Email Business DE-DK at lecba@toender.dk">
              lecba@toender.dk
            </a>
          </div>

          <!-- Phone Wrapper -->
          <div class="pt-10 lg:pt-16">
            <!-- Phone Title -->
            <h3 class="text-base font-semibold text-black sm:text-xl">Phone:</h3>

            <!-- Phone Number -->
            <a href="tel:+4521775916" class="inline-block pt-2 text-sm text-black transition hover:text-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 sm:text-xl"
              itemprop="telephone" aria-label="Call Business DE-DK at +45 217 759 16">
              +45 217 759 16
            </a>
          </div>

        </div>
      </div>
    </div>
  </section>
</template>