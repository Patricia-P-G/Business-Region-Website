<script setup>
import { ref, computed } from 'vue'

const itemsPerLoad = 6
const visibleCount = ref(6)
const isLoading = ref(false)

const companies = [
  {
    name: 'Business Esbjerg',
    slug: 'business-esbjerg',
    route: '/partners/business-esbjerg',
    industry: 'Industry mentioned',
    years: '30+',
    employees: '200+',
    trust: 'trusted company #1',
    logo: new URL('../../assets/network/business esbjerg.png', import.meta.url).href
  },

  {
    name: 'Business Kolding',
    slug: 'business-kolding',
    route: '/partners/business-kolding',
    industry: 'Industry mentioned',
    years: '30+',
    employees: '200+',
    trust: 'trusted company #1',
    logo: new URL('../../assets/network/business kolding.png', import.meta.url).href
  },

  {
    name: 'Copenhagen Capacity',
    slug: 'copenhagen-capacity',
    route: '/partners/copenhagen-capacity',
    industry: 'Industry mentioned',
    years: '25+',
    employees: '150+',
    trust: 'trusted company #2',
    logo: new URL('../../assets/network/copenhagen capacity.png', import.meta.url).href
  },

  {
    name: 'Business Aabenraa',
    slug: 'business-aabenraa',
    route: '/partners/business-aabenraa',
    industry: 'Industry mentioned',
    years: '20+',
    employees: '100+',
    trust: 'trusted company #3',
    logo: new URL('../../assets/network/business aabenraa.png', import.meta.url).href
  },

  {
    name: 'Tønder Erhversråd',
    slug: 'tonder-erhversrad',
    route: '/partners/tonder-erhversrad',
    industry: 'Industry mentioned',
    years: '40+',
    employees: '300+',
    trust: 'trusted company #4',
    logo: new URL('../../assets/network/tønder erhversråd.png', import.meta.url).href
  },

  {
    name: 'Bundesagentur für Arbeit',
    slug: 'bundesagentur-fur-arbeit',
    route: '/partners/bundesagentur-fur-arbeit',
    industry: 'Industry mentioned',
    years: '10+',
    employees: '60+',
    trust: 'trusted company #5',
    logo: new URL('../../assets/network/bundesagentur für arbeit.png', import.meta.url).href
  },

  {
    name: 'Schleswig-Holstein',
    slug: 'schleswig-holstein',
    route: '/partners/schleswig-holstein',
    industry: 'Industry mentioned',
    years: '15+',
    employees: '80+',
    trust: 'trusted company #6',
    logo: new URL('../../assets/network/schleswig-holstein.png', import.meta.url).href
  },

  {
    name: 'Dansk Industri',
    slug: 'dansk-industri',
    route: '/partners/dansk-industri',
    industry: 'Industry mentioned',
    years: '12+',
    employees: '90+',
    trust: 'trusted company #7',
    logo: new URL('../../assets/network/dansk industri.png', import.meta.url).href
  },

  {
    name: 'Sønderborg Vækstråd',
    slug: 'sonderborg-vaekstrad',
    route: '/partners/sonderborg-vaekstrad',
    industry: 'Industry mentioned',
    years: '18+',
    employees: '120+',
    trust: 'trusted company #8',
    logo: new URL('../../assets/network/sønderborg vækstråd.png', import.meta.url).href
  }
]

const visibleCompanies = computed(() => {
  return companies.slice(0, visibleCount.value)
})

const hasMoreCompanies = computed(() => {
  return visibleCount.value < companies.length
})

const loadMore = () => {
  if (isLoading.value || !hasMoreCompanies.value) return

  isLoading.value = true

  setTimeout(() => {
    visibleCount.value += itemsPerLoad
    isLoading.value = false
  }, 700)
}
</script>

<template>
  <section class="w-full bg-white py-15">
    <div class="mx-auto px-12 sm:px-6 lg:px-25">

      <!-- SEARCH -->
      <div class="flex justify-center">
        <div
          class="flex h-12 w-full max-w-[760px] items-center rounded-xl border-2 border-[#12294B] bg-[#7988D221] px-5 shadow-sm"
        >

          <!-- ICON -->
          <div class="flex items-baseline pr-2.5">
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
              <path d="M0 0h24v24H0z" fill="none" />

              <path
                fill="#12294b"
                d="M9.5 16q-2.725 0-4.612-1.888T3 9.5t1.888-4.612T9.5 3t4.613 1.888T16 9.5q0 1.1-.35 2.075T14.7 13.3l5.6 5.6q.275.275.275.7t-.275.7t-.7.275t-.7-.275l-5.6-5.6q-.75.6-1.725.95T9.5 16m0-2q1.875 0 3.188-1.312T14 9.5t-1.312-3.187T9.5 5T6.313 6.313T5 9.5t1.313 3.188T9.5 14"
              />
            </svg>
          </div>

          <!-- INPUT -->
          <input
            type="text"
            placeholder="Search..."
            class="w-full bg-transparent text-base italic text-[#12294B] outline-none placeholder:text-[#12294B]/70"
          />
        </div>
      </div>

      <!-- FILTERS -->
      <div class="grid grid-cols-1 gap-6 py-20 sm:grid-cols-3">

        <button
          class="rounded-lg bg-[#7C8BDA] py-4 text-sm font-bold uppercase text-white transition hover:bg-[#6D7BD0]"
        >
          Industry Type
        </button>

        <button
          class="rounded-lg bg-[#3E5A78] py-4 text-sm font-bold uppercase text-white transition hover:bg-[#334A63]"
        >
          Alphabetically A-Z
        </button>

        <button
          class="rounded-lg bg-[#3E5A78] py-4 text-sm font-bold uppercase text-white transition hover:bg-[#334A63]"
        >
          Alphabetically Z-A
        </button>

      </div>

      <!-- CARDS -->
      <div class="grid grid-cols-1 gap-x-10 gap-y-14 md:grid-cols-3">

        <router-link
          v-for="company in visibleCompanies"
          :key="company.slug"
          :to="company.route"
          class="block"
        >

          <article
            class="cursor-pointer rounded-lg border border-[#CFCFCF] bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
          >

            <!-- TOP -->
            <div class="flex items-start justify-between pb-4">

              <!-- LOGO -->
              <div class="h-20 w-20 overflow-hidden rounded-full border border-[#777] bg-white">
                <img
                  :src="company.logo"
                  :alt="`${company.name} logo`"
                  class="h-full w-full object-cover"
                />
              </div>

              <!-- INFO -->
              <div class="text-right text-sm text-[#777]">
                <p>years {{ company.years }}</p>
                <p class="mt-1">employees {{ company.employees }}</p>
                <p class="mt-1">{{ company.trust }}</p>
              </div>

            </div>

            <hr class="border-[#B8C0F0] py-2" />

            <!-- TITLE -->
            <h3 class="text-base font-bold text-black">
              {{ company.name }}
            </h3>

            <!-- TEXT -->
            <p class="text-sm text-black">
              {{ company.industry }}
            </p>

          </article>

        </router-link>

      </div>

      <!-- VIEW MORE -->
      <div v-if="hasMoreCompanies" class="flex justify-center pt-16">

        <button
          @click="loadMore"
          :disabled="isLoading"
          class="flex min-w-[160px] items-center justify-center gap-3 rounded-lg bg-[#12294B] px-8 py-4 text-sm font-bold uppercase text-white transition hover:bg-[#1B355B] disabled:cursor-not-allowed disabled:opacity-70"
        >

          <span v-if="!isLoading">
            View More
          </span>

          <span v-else class="flex items-center gap-3">
            Loading

            <span
              class="h-5 w-5 animate-spin rounded-full border-2 border-white/40 border-t-white"
            ></span>
          </span>

        </button>

      </div>

    </div>
  </section>
</template>