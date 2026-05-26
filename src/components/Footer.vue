<template>
  <footer class="w-full bg-[#12294B] text-white">
    <div class="mx-auto px-12 sm:px-6 lg:px-20">

      <!-- 12 COLUMN GRID -->
      <div class="grid grid-cols-12 gap-2.5 pt-10 pb-16">

        <!-- TITLES -->
        <div class="col-span-12 md:col-span-3">
          <h2 class="text-xl font-bold">
            Business Region DE-DK
          </h2>
        </div>

        <div class="col-span-12 md:col-start-5 md:col-end-7">
          <h2 class="text-xl font-bold">
            Contact
          </h2>
        </div>

        <div class="col-span-12 md:col-start-7 md:col-end-9">
          <h2 class="text-xl font-bold">
            Opening hours
          </h2>
        </div>

        <div class="col-span-12 md:col-start-9 md:col-end-11">
          <h2 class="text-xl font-bold">
            Follow us
          </h2>
        </div>

        <div class="col-span-12 md:col-start-11 md:col-end-13">
          <h2 class="text-xl font-bold">
            More
          </h2>
        </div>

        <!-- ONE BIG LINE -->
        <div class="col-span-12 mb-2 mt-3">
          <div class="h-px w-full bg-white/40"></div>
        </div>

        <!-- LOGO / BRAND -->
        <div class="col-span-12 md:col-span-3">
          <router-link to="/" class="mb-8 flex items-center">
            <img src="@/assets/business-region-logo.svg" width="200" height="100" alt="Business Region logo"
              class="pt-10 filter invert" />
          </router-link>

          <div class="flex items-center gap-1 pt-2">
            <img src="@/assets/interreg logo.png" alt="Interreg logo" class="h-11 rounded-md bg-white cursor-pointer" />
          </div>
        </div>

        <!-- CONTACT -->
        <div class="col-span-12 md:col-start-5 md:col-end-7">
          <div class="flex flex-col gap-2 text-sm leading-6 text-white/90">
            <p>
              Vestergade, 9<br />
              6270 Tønder, Denmark
            </p>

            <p>+45 21 77 59 16</p>

            <p>lecba@toender.dk</p>
          </div>
        </div>

        <!-- OPENING HOURS -->
        <div class="col-span-12 md:col-start-7 md:col-end-9">
          <div class="flex flex-col gap-1 text-sm leading-6 text-white/90">
            <p>Phone hours:</p>

            <p>
              Mon - Thu<br />
              08.30 - 15.00
            </p>

            <p>
              Fri<br />
              08.30 - 13.00
            </p>

            <p class="pt-3">
              Visiting hours:<br />
              By appointment
            </p>
          </div>
        </div>

        <!-- FOLLOW US -->
        <div class="col-span-12 md:col-start-9 md:col-end-11">
          <ul class="flex flex-col gap-2 text-sm text-white/90">
            <li>
              <a href="#" class="transition hover:text-blue-300">
                Youtube
              </a>
            </li>

            <li>
              <a href="#" class="transition hover:text-blue-300">
                LinkedIn
              </a>
            </li>

            <li>
              <a href="#" class="transition hover:text-blue-300">
                Instagram
              </a>
            </li>
          </ul>
        </div>

        <!-- MORE -->
        <div class="col-span-12 md:col-start-11 md:col-end-13">
          <ul class="flex flex-col gap-2 text-sm text-white/90">
            <li>
              <router-link to="/employees" class="transition hover:text-blue-300">
                Employees
              </router-link>
            </li>

            <li>
              <router-link to="/strategy" class="transition hover:text-blue-300">
                Strategy
              </router-link>
            </li>

            <li>
              <router-link to="/b2b" class="transition hover:text-blue-300">
                B2B
              </router-link>
            </li>

            <li>
              <router-link to="/privacy-policy" class="transition hover:text-blue-300">
                Privacy Policy
              </router-link>
            </li>

            <li>
              <router-link to="/for-businesses" class="transition hover:text-blue-300">
                For businesses
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <!-- BOTTOM BAR -->
    <div class="bg-white px-12 py-2 text-[10px] text-black sm:px-6 lg:px-20">
      © 2026 Business Region - CVR: - EAN: - Alle rettigheder forbeholdes.
    </div>
  </footer>
</template>

<script setup>
</script>

<style scoped></style>