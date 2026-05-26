<template>
  <section
    class="relative w-full overflow-hidden bg-[linear-gradient(to_right,#0B234E_0%,#7383D8_55%,#0B234E_100%)] py-14"
    aria-labelledby="partners-title"
  >
    <!-- CENTER GLOW / DECORATIVE -->
    <div
      class="pointer-events-none absolute left-1/2 top-1/2 h-[650px] w-[650px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#A5B4FF]/25 blur-3xl"
      aria-hidden="true"
    ></div>

    <div class="relative z-10 mx-auto max-w-[1600px] px-5 xs:px-6 sm:px-8 lg:px-20">
      <div class="grid grid-cols-12 gap-2.5">
        <!-- TITLE -->
        <div class="col-span-12">
          <h2 id="partners-title" class="text-xl flex justify-center font-bold uppercase text-white sm:text-4xl">
            Who do we work with:
          </h2>
        </div>

        <div class="col-span-12" aria-hidden="true">
          <hr class="border-0 border-t-[2px] border-white/90" />
        </div>

        <!-- CARDS -->
        <div
          class="col-span-12 grid grid-cols-1 gap-8 pt-10 md:grid-cols-3 md:gap-12 cursor-pointer"
          aria-label="Partner companies"
        >
          <router-link
            v-for="company in companies"
            :key="company.name"
            :to="company.route"
            class="group rounded-lg bg-white p-5 shadow-[0_4px_4px_rgba(0,0,0,0.25)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_25px_rgba(255,255,255,0.85)]"
            :aria-label="`View partner ${company.name}`"
          >
            <div class="flex items-start justify-between">
              <div
                :class="[
                  'flex h-20 w-20 shrink-0 items-center justify-center overflow-hidden rounded-full',
                  company.darkLogo ? 'bg-black' : 'border border-gray-400',
                ]"
              >
                <img
                  :src="company.logo"
                  :alt="`${company.name} partner logo`"
                  class="h-14 w-14 object-contain"
                  loading="lazy"
                  width="56"
                  height="56"
                />
              </div>

              <ul
                class="text-right text-sm leading-6 text-[#7A7A7A]"
                :aria-label="`${company.name} company facts`"
              >
                <li>years {{ company.years }}</li>
                <li>employees {{ company.employees }}</li>
                <li>{{ company.trust }}</li>
              </ul>
            </div>

            <div class="pb-2 pt-5" aria-hidden="true">
              <hr class="border-[#B8C0F0]" />
            </div>

            <h3 class="text-lg font-semibold text-black">
              {{ company.name }}
            </h3>

            <p class="text-base text-[#444]">
              {{ company.industry }}
            </p>
          </router-link>
        </div>

        <!-- BROWSE MORE -->
        <div class="col-span-12 mt-8 flex justify-end">
          <router-link
            to="/network"
            class="group flex items-center gap-2 rounded-md px-4 py-2 text-base font-bold text-white transition-all duration-300 hover:bg-white/10 hover:text-[#D6DEFF] focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
            aria-label="Browse more partner companies"
          >
            <span>Browse more</span>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M0 0h24v24H0z" fill="none" />
              <path
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5 12h14m-6 6l6-6m-6-6l6 6"
              />
            </svg>
          </router-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import businessEsbjerg from "@/assets/network/business esbjerg.png";
import businessKolding from "@/assets/network/business kolding.png";
import copenhagenCapacity from "@/assets/network/copenhagen capacity.png";

const companies = [
  {
    name: "Business Esbjerg",
    industry: "Industry mentioned",
    logo: businessEsbjerg,
    years: "30+",
    employees: "200+",
    trust: "trusted company #1",
    darkLogo: false,
    route: "/partners/business-esbjerg",
  },
  {
    name: "Business Kolding",
    industry: "Industry mentioned",
    logo: businessKolding,
    years: "30+",
    employees: "200+",
    trust: "trusted company #1",
    darkLogo: true,
    route: "/partners/business-kolding",
  },
  {
    name: "Copenhagen Capacity",
    industry: "Industry mentioned",
    logo: copenhagenCapacity,
    years: "30+",
    employees: "200+",
    trust: "trusted company #1",
    darkLogo: false,
    route: "/partners/copenhagen-capacity",
  },
];
</script>
