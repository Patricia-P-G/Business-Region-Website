<template>
  <!-- Media Channel Section -->
  <section class="w-full bg-white py-10 sm:py-15" aria-labelledby="media-title" aria-describedby="media-description" itemscope itemtype="https://schema.org/ItemList">
    
    <!-- Right Space -->
    <div class="mx-auto px-5 xs:px-6 sm:px-8 lg:px-20 wide:px-20">

      <!-- Only for Screen Readers -->
      <div class="sr-only">
        <h2 id="media-title">Media, interviews, events, and articles</h2>

        <p id="media-description">
          Browse interviews, conference talks, event highlights, and articles about Danish-German
          business cooperation.
        </p>
      </div>

      <!-- Search Wrapper -->
      <div class="mb-10 flex justify-center sm:mb-20" role="search">
        <label for="company-search" class="sr-only">
          Search media by title, company, or industry
        </label>

        <!-- Search Bar Wrapper -->
        <div class="search-input-wrapper max-w-190">
          <!-- Search Icon Wrapper -->
          <div class="search-input-icon" aria-hidden="true">

            <!-- Magnifying Glass Icon  -->
            <svg focusable="false" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M0 0h24v24H0z" fill="none" /><path fill="#12294b" d="M9.5 16q-2.725 0-4.612-1.888T3 9.5t1.888-4.612T9.5 3t4.613 1.888T16 9.5q0 1.1-.35 2.075T14.7 13.3l5.6 5.6q.275.275.275.7t-.275.7t-.7.275t-.7-.275l-5.6-5.6q-.75.6-1.725.95T9.5 16m0-2q1.875 0 3.188-1.312T14 9.5t-1.312-3.187T9.5 5T6.313 6.313T5 9.5t1.313 3.188T9.5 14"/>
            </svg>
          </div>

          <!-- Input -->
          <input id="company-search" v-model="searchQuery" type="search" placeholder="Search..." autocomplete="off" aria-label="Search media by title, company, or industry"
            class="search-input"
          />
        </div>
      </div>

      <!-- Filters Wrapper -->
      <div class="grid grid-cols-2 gap-4 pb-10 sm:grid-cols-3 sm:gap-6 sm:pb-20 lg:grid-cols-5 lg:gap-4"
        aria-label="Filter media content">
        <!-- Buttons -->
        <button v-for="filter in filters" :key="filter" type="button" :aria-pressed="filter === activeFilter" :class="[filter === activeFilter ? 'filter-button-active' : 'filter-button-inactive']" @click="activeFilter = filter">
          {{ filter }}
        </button>
      </div>

      <!-- Media Card Wrapper -->
      <div id="media-card-list" class="mt-8 grid grid-cols-[repeat(auto-fill,minmax(min(100%,400px),1fr))] justify-center gap-x-6 gap-y-10"
        aria-label="Media cards" aria-live="polite" role="list">
        <!-- Imported Card Component -->
        <MediaCard
          v-for="card in visibleCards"
          :key="card.id"
          :card="card"
        />
      </div>

      <!-- No Results -->
      <p v-if="filteredCards.length === 0" role="status" aria-live="polite" class="mb-10 text-center text-sm text-primary">
        No media items found.
      </p>

      <!-- Next Button Wrapper -->
      <div class="mt-5 flex justify-end pb-10 sm:mt-10">
        <!-- Next Button -->
        <button type="button" @click="loadNextCards" :disabled="!hasMoreCards" class="group flex cursor-pointer items-center gap-2 rounded-md px-4 py-2 text-base font-bold text-[#7C8BDA] transition-all duration-300 hover:bg-[#7C8BDA]/10 hover:text-[#5c6cb3] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#7C8BDA] disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-[#7C8BDA]"
          aria-label="Load more media cards" aria-controls="media-card-list">
          <span>Next</span>

          <!-- Arrow Icon -->
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1 motion-reduce:transition-none"
            viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M0 0h24v24H0z" fill="none" /><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14m-6 6l6-6m-6-6l6 6"/>
          </svg>
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, watch } from 'vue';

import MediaCard from './MediaCard.vue';
import { mediaCards } from '@/components/modules/mediaCards';

// Search Filter State
const searchQuery = ref('');
const activeFilter = ref('All');
const currentPage = ref(1);
const itemsPerPage = 6;

// Categories
const filters = ['All', 'Interview', 'Conference', 'Event Highlights', 'Article'];

// Media Card List
const cards = ref(mediaCards);

// Cards matching Search Query and Selected Filter
const filteredCards = computed(() => {
  const query = searchQuery.value.toLowerCase().trim();

  return cards.value.filter((card) => {
    const searchableText = `
      ${card.title}
      ${card.description}
      ${card.type}
      ${card.location}
      ${card.durationOrRead}
      ${card.date}
    `.toLowerCase();

    const matchesSearch = searchableText.includes(query);

    const matchesFilter =
      activeFilter.value === 'All' || card.type === activeFilter.value;

    return matchesSearch && matchesFilter;
  });
});

// Cards Visible on the Page
const visibleCards = computed(() => {
  const end = currentPage.value * itemsPerPage;

  return filteredCards.value.slice(0, end);
});

// Checks if more Cards can be loaded
const hasMoreCards = computed(() => {
  return visibleCards.value.length < filteredCards.value.length;
});

// Here it loads the Next Group of Cards
const loadNextCards = () => {
  if (!hasMoreCards.value) return;

  currentPage.value++;
};

// Reset Pagination when Search or Filter changes
watch([searchQuery, activeFilter], () => {
  currentPage.value = 1;
});
</script>

<style scoped>
.no-scrollbar::-webkit-scrollbar {
  display: none;
}

.no-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>