<template>
  <section class="w-full bg-white py-10 sm:py-15">
    <div class="mx-auto px-5 xs:px-6 sm:px-8 lg:px-20 wide:px-20">
      
      <div class="flex justify-center mb-10 sm:mb-20" role="search">
        <label for="company-search" class="sr-only">Search companies</label>
        
        <div class="flex h-12 w-full max-w-190 items-center rounded-xl border-2 border-primary bg-[#7988D221] px-5 shadow-sm">
          <div class="flex items-baseline pr-2.5" aria-hidden="true">
            <svg focusable="false" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
              <path d="M0 0h24v24H0z" fill="none" />
              <path fill="#12294b" d="M9.5 16q-2.725 0-4.612-1.888T3 9.5t1.888-4.612T9.5 3t4.613 1.888T16 9.5q0 1.1-.35 2.075T14.7 13.3l5.6 5.6q.275.275.275.7t-.275.7t-.7.275t-.7-.275l-5.6-5.6q-.75.6-1.725.95T9.5 16m0-2q1.875 0 3.188-1.312T14 9.5t-1.312-3.187T9.5 5T6.313 6.313T5 9.5t1.313 3.188T9.5 14"/>
            </svg>
          </div>
          
          <input 
            id="company-search" 
            v-model="searchQuery" 
            type="search" 
            placeholder="Search..." 
            autocomplete="off" 
            aria-label="Search companies by name or industry"
            class="w-full bg-transparent text-base italic text-primary outline-none placeholder:text-primary/70 focus:outline-none"
          />
        </div>
      </div>

      <div class="pb-10 sm:pb-20 flex gap-3 overflow-x-auto no-scrollbar md:grid md:grid-cols-5 md:gap-4 -mx-5 px-5 xs:-mx-6 xs:px-6 sm:-mx-8 sm:px-8 lg:mx-0 lg:px-0">
        <button 
          v-for="filter in filters" 
          :key="filter"
          :class="[
            'rounded-lg py-3 sm:py-4 px-5 sm:px-2 text-xs sm:text-sm font-bold uppercase text-white transition duration-200 whitespace-nowrap md:whitespace-normal flex-shrink-0 md:flex-shrink',
            filter === activeFilter ? 'bg-[#7C8BDA]' : 'bg-[#3E5A78] hover:bg-[#3E5A78]/90'
          ]"
          @click="activeFilter = filter"
        >
          {{ filter }}
        </button>
      </div>

      <div class="mt-8 grid grid-cols-[repeat(auto-fill,minmax(min(100%,400px),1fr))] gap-x-6 gap-y-10 justify-center">
        
        <article 
          v-for="(card, index) in cards" 
          :key="index"
          class="w-full overflow-hidden rounded-2xl bg-white shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition duration-300 hover:shadow-[0_8px_30px_rgb(0,0,0,0.16)] flex flex-col justify-between mx-auto"
        >
          <div class="relative h-[170px] w-full overflow-hidden bg-slate-100">
            <img :src="getImageUrl(card.imageName)" alt="" class="h-full w-full object-cover" />
            
            <span class="absolute right-3 top-3 rounded-md bg-[#3E5A78] px-6 sm:px-8 py-2 text-xs font-bold uppercase text-white">
              {{ card.type }}
            </span>
          </div>

          <div class="px-4 py-5 flex flex-col justify-between flex-grow">
            <div>
              <h3 class="text-base sm:text-lg font-semibold text-black line-clamp-2">
                {{ card.title }}
              </h3>

              <p class="mt-1 text-sm leading-4 text-[#777] line-clamp-2">
                {{ card.description }}
              </p>
            </div>

            <div class="mt-6 sm:mt-8 flex justify-between text-sm text-black items-end">
              <span>{{ card.durationOrRead }}</span>

              <span class="text-right">
                {{ card.location }}
                <br />
                {{ card.date }}
              </span>
            </div>
          </div>
        </article>

      </div>

      <div class="mt-16 sm:mt-24 flex justify-end pb-10">
        <button class="text-lg sm:text-xl font-bold italic text-[#7C8BDA] transition hover:opacity-70">
          Next →
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';

const searchQuery = ref('');
const activeFilter = ref('All');

const filters = ['All', 'Interviews', 'Conference Talks', 'Event Highlights', 'Articles'];

const getImageUrl = (name) => {
  return new URL(`/src/assets/media/${name}`, import.meta.url).href;
};

const cards = ref([
  {
    title: 'Friendly Danes at the negotiating table',
    description: 'See the interview with Gwyn Nissen Chief Editor for Der Nordschleswiger',
    type: 'Interview',
    imageName: 'card1.png',
    durationOrRead: '10:03 min',
    location: 'DK',
    date: 'December 2'
  },
  {
    title: 'Sharing skills across the border at Eutin Brewery',
    description: '40 business leaders met at Eutin Brewery to tackle the skilled worker shortage across the Danish-German border.',
    type: 'Conference',
    imageName: 'card2.png',
    durationOrRead: '5:56 min',
    location: 'DK/DE',
    date: 'October 8'
  },
  {
    title: 'Onboarding international talent at ANDRITZ',
    description: 'How ANDRITZ Feed & Biofuel turns international hires into long-term team members.',
    type: 'Event Highlights',
    imageName: 'card3.png',
    durationOrRead: '5 min read',
    location: 'DE',
    date: 'December 2'
  },
  {
    title: 'Business DE-DK borderless cooperation.',
    description: 'Hard to name, easy to feel — the cross-border region where Danish and German businesses find each other.',
    type: 'Article',
    imageName: 'card4.png',
    durationOrRead: '6 min read',
    location: 'DK/DE',
    date: 'December 2'
  },
  {
    title: 'Meet Katja Rosenburg',
    description: 'Project manager at Erhvervsfremme Nordfriesland and responsible for the project Interreg Business DE-DK.',
    type: 'Interview',
    imageName: 'card5.png',
    durationOrRead: '10:45 min',
    location: 'DE',
    date: 'October 8'
  },
  {
    title: 'The two-step approach: attract and retain',
    description: 'Gitte Crami Davidson of Work-live-stay: international hires aren’t just a strategic advantage — they’re people.',
    type: 'Article',
    imageName: 'card6.png',
    durationOrRead: '7 min read',
    location: 'DK/DE',
    date: 'June 6'
  }
]);
</script>

<style scoped>
/* Ascunde bara de scroll pe mobile pentru zona de filtre, păstrând funcționalitatea glisării */
.no-scrollbar::-webkit-scrollbar {
  display: none;
}
.no-scrollbar {
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
}
</style>