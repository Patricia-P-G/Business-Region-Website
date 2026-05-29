<template>
  <!-- Network Card Section -->
  <section class="w-full bg-white py-15" aria-labelledby="network-companies-title" aria-describedby="network-companies-description"
    itemscope itemtype="https://schema.org/ItemList">

    <!-- Right Spacing  -->
    <div class="mx-auto max-w-400 px-5 xs:px-6 sm:px-8 lg:px-20">

      <!-- Accessible Section Heading --- not visually displayed (screen readers read only) -->
      <h2 id="network-companies-title" class="sr-only">Network companies</h2>

      <!-- Accessible Section Description --- not visually displayed (screen readers read only) -->
      <p id="network-companies-description" class="sr-only">
        Browse trusted companies and partners from the Danish-German cross-border business network.
      </p>

      <!-- Search Wrapper -->
      <div class="flex justify-center" role="search">

        <!-- Screen Readers Only -->
        <label for="company-search" class="sr-only">Search companies</label>

        <!--Input Wrapper  -->
        <div class="search-input-wrapper max-w-190">

          <!--Icon Wrapper  -->
          <div class="search-input-icon" aria-hidden="true">

            <!-- Magnifying Glass -->
            <svg focusable="false" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none" />
              <path fill="#12294b" d="M9.5 16q-2.725 0-4.612-1.888T3 9.5t1.888-4.612T9.5 3t4.613 1.888T16 9.5q0 1.1-.35 2.075T14.7 13.3l5.6 5.6q.275.275.275.7t-.275.7t-.7.275t-.7-.275l-5.6-5.6q-.75.6-1.725.95T9.5 16m0-2q1.875 0 3.188-1.312T14 9.5t-1.312-3.187T9.5 5T6.313 6.313T5 9.5t1.313 3.188T9.5 14"/>
            </svg>

          </div>
          
          <!-- Input + Text -->
          <input id="company-search" v-model="searchQuery" type="search" placeholder="Search..." autocomplete="off" aria-label="Search companies by name or industry"
            class="search-input"
          />

        </div>
      </div>

      <!-- Filter Grid -->
      <div class="grid grid-cols-1 gap-6 py-20 sm:grid-cols-3" aria-label="Company filters">

        <!-- Default Button -->
        <button type="button" @click="setSort('default')" :aria-pressed="sortType === 'default'" :class="sortType === 'default' ? 'filter-button-active' : 'filter-button-inactive'">
          All Companies
        </button>

        <!-- Alphabetically A-Z Button -->
        <button type="button" @click="setSort('az')" :aria-pressed="sortType === 'az'" :class="sortType === 'az' ? 'filter-button-active' : 'filter-button-inactive'">
          Alphabetically A-Z
        </button>

        <!-- Alphabetically Z-A Button -->
        <button type="button" @click="setSort('za')" :aria-pressed="sortType === 'za'" :class="sortType === 'za' ? 'filter-button-active' : 'filter-button-inactive'">
          Alphabetically Z-A
        </button>

      </div>

      <!-- Cards Grid -->
      <div id="company-list" class="grid grid-cols-1 gap-x-10 gap-y-14 md:grid-cols-3" role="list" aria-label="Company list" aria-live="polite">

        <!-- Company Card Link -->
        <router-link v-for="(company, index) in visibleCompanies" :key="company.slug" :to="company.route" class="block focus:outline-none focus-visible:ring-4 focus-visible:ring-primary/40"
          :aria-label="`View profile for ${company.name}`" itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem" role="listitem">

          <!--  -->
          <meta itemprop="position" :content="index + 1" />

          <!-- Company Card Container -->
          <article class="cursor-pointer rounded-lg border border-[#CFCFCF] bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg motion-reduce:transition-none motion-reduce:hover:translate-y-0"
            itemscope itemtype="https://schema.org/Organization">

            <!--  -->
            <meta itemprop="name" :content="company.name" />
            <meta itemprop="url" :content="company.route" />

            <!-- Company Details Wrapper -->
            <div class="flex items-start justify-between pb-4">

              <!-- Image Wrapper -->
              <div class="h-20 w-20 overflow-hidden rounded-full border border-[#777] bg-white">
                <!-- Image -->
                <img :src="company.logo" alt="" aria-hidden="true" class="h-full w-full object-cover"
                  loading="lazy" itemprop="logo"
                />
              </div>

              <!-- Company Micro Details Wrapper (Right Side) -->
              <div class="text-right text-sm text-[#777]">
                <!-- Years -->
                <p>{{ company.years }} years</p>
                <!-- Employees -->
                <p class="mt-1">{{ company.employees }} employees</p>
                <!-- Trust -->
                <p class="mt-1">{{ company.trust }}</p>
              </div>
            </div>

            <!-- Divider -->
            <hr class="border-[#B8C0F0] py-2" aria-hidden="true" />

            <!-- Company Title -->
            <h3 class="text-base font-bold text-black" itemprop="name">
              {{ company.name }}
            </h3>

            <!-- Company Details -->
            <p class="text-sm text-black" itemprop="description">
              {{ company.industry }}
            </p>
          </article>
        </router-link>
      </div>

      <!-- No Results -->
      <p v-if="filteredCompanies.length === 0" class="pt-5 text-center text-lg text-primary" role="status" aria-live="polite">
        No companies found.
      </p>

      <!-- View More Wrapper -->
      <div v-if="hasMoreCompanies" class="flex justify-center pt-16">

        <!-- View More Button -->
        <button type="button" @click="loadMore" :disabled="isLoading" :aria-busy="isLoading.toString()" aria-controls="company-list"
          class="cta-dark min-w-40 gap-3 disabled:cursor-not-allowed disabled:opacity-70">
          <span v-if="!isLoading">View More</span>

          <span v-else class="flex items-center gap-3">
            Loading

            <!-- Loading Spin -->
            <span
              class="h-5 w-5 animate-spin rounded-full border-2 border-white/40 border-t-white motion-reduce:animate-none" aria-hidden="true"></span>
            </span>
        </button>
      </div>
    </div>
  </section>
</template>


<script setup>
import { ref, computed, watch } from 'vue'
import { companies } from '@/components/modules/companies';

// Controls how many company cards are shown each time (Default)
const itemsPerLoad = 6;

// Reactive state for --- visible cards, loading, search, and sorting
const visibleCount = ref(6);
const isLoading = ref(false);
const searchQuery = ref('');
const sortType = ref('default');

// Filters companies based on the search input and selected sorting option
const filteredCompanies = computed(() => {
  const query = searchQuery.value.toLowerCase().trim();

  // Creates searchable text from each company object
  let result = companies.filter((company) => {
    const searchableText = `
      ${company.name}
      ${company.industry}
      ${company.years}
      ${company.employees}
      ${company.trust}
    `.toLowerCase();

    return searchableText.includes(query);
  });

  // Alphabetically sorts A-Z
  if (sortType.value === 'az') {
    result = [...result].sort((a, b) => a.name.localeCompare(b.name));
  }

  // Alphabetically sorts Z-A
  if (sortType.value === 'za') {
    result = [...result].sort((a, b) => b.name.localeCompare(a.name));
  }
  return result;
});

  // Returns only the companies currently visible on the page
const visibleCompanies = computed(() => {
  return filteredCompanies.value.slice(0, visibleCount.value);
});

  // Checks if there are more companies to load
const hasMoreCompanies = computed(() => {
  return visibleCount.value < filteredCompanies.value.length;
});


// Updates the active sorting type and resets visible company cards
const setSort = (type) => {
  sortType.value = type;
  visibleCount.value = itemsPerLoad;
};

// Prevents duplicate loading or loading beyond available companies
const loadMore = () => {
  if (isLoading.value || !hasMoreCompanies.value) return;

  isLoading.value = true;

  // Increases the number of visible company cards
  setTimeout(() => {
    visibleCount.value += itemsPerLoad;
    isLoading.value = false;
  }, 700);
};

// Resets visible cards whenever the search query changes
watch(searchQuery, () => {
  visibleCount.value = itemsPerLoad;
});
</script>