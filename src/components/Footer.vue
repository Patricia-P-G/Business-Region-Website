<template>
  <footer
    class="w-full bg-[#12294B] text-white"
    role="contentinfo"
    aria-labelledby="footer-title"
    itemscope
    itemtype="https://schema.org/Organization"
  >
    <div class="mx-auto max-w-[1600px] px-5 xs:px-6 sm:px-8 lg:px-20">

      <!-- RESPONSIVE GRID -->
      <div
        class="grid grid-cols-1 justify-items-center gap-10 py-10 text-center sm:grid-cols-2 sm:text-left lg:grid-cols-12 lg:justify-items-stretch lg:gap-2.5 lg:pb-16"
      >

        <!-- BRAND -->
        <div class="w-full max-w-[280px] lg:col-span-3">

          <h2 id="footer-title" class="text-xl font-bold" itemprop="name">
            Business Region DE-DK
          </h2>

          <!-- DECORATIVE DIVIDER -->
        <div class="col-span-12 mb-2 mt-3" aria-hidden="true">
          <div class="border-t-2 w-full bg-white/20"></div>
        </div>

          <!-- Logo -->
          <router-link
            to="/"
            class="mb-8 mt-8 flex justify-center sm:justify-start focus:outline-none focus-visible:ring-4 focus-visible:ring-white/80"
            aria-label="Go to Business Region DE-DK homepage"
          >
            <img
              src="@/assets/business-region-logo.svg"
              width="200"
              height="100"
              alt="Business Region DE-DK logo"
              class="invert"
              itemprop="logo"
            />
          </router-link>

          <!-- Partner Logo -->
          <div class="flex justify-center sm:justify-start">
            <img
              src="@/assets/interreg logo.png"
              alt="Interreg logo"
              class="h-11 rounded-md bg-white"
              loading="lazy"
            />
          </div>
        </div>

        <!-- CONTACT -->
        <address
          class="w-full max-w-[280px] not-italic lg:col-start-5 lg:col-end-7"
          aria-labelledby="footer-contact-title"
          itemprop="address"
          itemscope
          itemtype="https://schema.org/PostalAddress"
        >

          <h2 id="footer-contact-title" class="mb-4 text-xl font-bold">
            Contact
          </h2>

          <div class="flex flex-col gap-2 text-sm leading-6 text-white/90">

            <p>
              <span itemprop="streetAddress">Vestergade, 9</span><br />
              <span itemprop="postalCode">6270</span>
              <span itemprop="addressLocality">Tønder</span>,
              <span itemprop="addressCountry">Denmark</span>
            </p>

            <a
              href="tel:+4521775916"
              class="transition hover:text-blue-300 focus:outline-none focus-visible:ring-4 focus-visible:ring-white/80"
              itemprop="telephone"
            >
              +45 21 77 59 16
            </a>

            <a
              href="mailto:lecba@toender.dk"
              class="transition hover:text-blue-300 focus:outline-none focus-visible:ring-4 focus-visible:ring-white/80"
              itemprop="email"
            >
              lecba@toender.dk
            </a>

          </div>
        </address>

        <!-- OPENING HOURS -->
        <section
          class="w-full max-w-[280px] lg:col-start-7 lg:col-end-9"
          aria-labelledby="footer-opening-hours-title"
        >

          <h2 id="footer-opening-hours-title" class="mb-4 text-xl font-bold">
            Opening hours
          </h2>

          <div class="flex flex-col gap-1 text-sm leading-6 text-white/90">

            <p class="font-semibold">Phone hours:</p>

            <p>
              Mon - Thu<br />
              <time datetime="08:30">08.30</time> -
              <time datetime="15:00">15.00</time>
            </p>

            <p>
              Fri<br />
              <time datetime="08:30">08.30</time> -
              <time datetime="13:00">13.00</time>
            </p>

            <p class="pt-3">
              Visiting hours:<br />
              By appointment
            </p>

          </div>
        </section>

        <!-- FOLLOW US -->
        <nav
          class="w-full max-w-[280px] lg:col-start-9 lg:col-end-11"
          aria-labelledby="footer-social-title"
        >

          <h2 id="footer-social-title" class="mb-4 text-xl font-bold">
            Follow us
          </h2>

          <ul class="flex flex-col gap-2 text-sm text-white/90">

            <li>
              <a
                href="#"
                aria-label="Visit Business Region DE-DK on YouTube"
                class="transition hover:text-blue-300 focus:outline-none focus-visible:ring-4 focus-visible:ring-white/80"
              >
                Youtube
              </a>
            </li>

            <li>
              <a
                href="#"
                aria-label="Visit Business Region DE-DK on LinkedIn"
                class="transition hover:text-blue-300 focus:outline-none focus-visible:ring-4 focus-visible:ring-white/80"
              >
                LinkedIn
              </a>
            </li>

            <li>
              <a
                href="#"
                aria-label="Visit Business Region DE-DK on Instagram"
                class="transition hover:text-blue-300 focus:outline-none focus-visible:ring-4 focus-visible:ring-white/80"
              >
                Instagram
              </a>
            </li>

          </ul>
        </nav>

        <!-- MORE -->
        <nav
          class="w-full max-w-[280px] lg:col-start-11 lg:col-end-13"
          aria-labelledby="footer-more-title"
        >

          <h2 id="footer-more-title" class="mb-4 text-xl font-bold">
            More
          </h2>

          <ul class="flex flex-col gap-2 text-sm text-white/90">

            <li>
              <router-link
                to="/employees"
                class="transition hover:text-blue-300 focus:outline-none focus-visible:ring-4 focus-visible:ring-white/80"
              >
                Employees
              </router-link>
            </li>

            <li>
              <router-link
                to="/strategy"
                class="transition hover:text-blue-300 focus:outline-none focus-visible:ring-4 focus-visible:ring-white/80"
              >
                Strategy
              </router-link>
            </li>

            <li>
              <router-link
                to="/b2b"
                class="transition hover:text-blue-300 focus:outline-none focus-visible:ring-4 focus-visible:ring-white/80"
              >
                B2B
              </router-link>
            </li>

            <li>
              <router-link
                to="/privacy-policy"
                class="transition hover:text-blue-300 focus:outline-none focus-visible:ring-4 focus-visible:ring-white/80"
              >
                Privacy Policy
              </router-link>
            </li>

            <li>
              <router-link
                to="/for-businesses"
                class="transition hover:text-blue-300 focus:outline-none focus-visible:ring-4 focus-visible:ring-white/80"
              >
                For businesses
              </router-link>
            </li>

          </ul>
        </nav>
      </div>
    </div>

    <!-- BOTTOM BAR -->
    <div
      class="bg-white px-5 py-3 text-center text-[10px] text-black xs:px-6 sm:px-8 lg:px-20 lg:text-left"
    >
      <p>
        © 2026 Business Region - CVR: - EAN: - Alle rettigheder forbeholdes.
      </p>
    </div>
  </footer>
</template>

<script setup>
</script>

<style scoped></style>