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

            <!-- Search Wrapper  -->
            <div class="mb-10 flex justify-center sm:mb-20" role="search">

                <!-- Only for Scren Readers -->
                <label for="company-search" class="sr-only">
                    Search media by title, company, or industry
                </label>

                <!-- Input Wrapper -->
                <div class="flex h-12 w-full max-w-190 items-center rounded-xl border-2 border-primary bg-[#7988D221] px-5 shadow-sm">
                    <!-- Icon Wrapper -->
                    <div class="flex items-baseline pr-2.5" aria-hidden="true">
                        <!-- Magnifying Glass -->
                        <svg focusable="false" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" aria-hidden="true">
                            <path d="M0 0h24v24H0z" fill="none" /><path fill="#12294b" d="M9.5 16q-2.725 0-4.612-1.888T3 9.5t1.888-4.612T9.5 3t4.613 1.888T16 9.5q0 1.1-.35 2.075T14.7 13.3l5.6 5.6q.275.275.275.7t-.275.7t-.7.275t-.7-.275l-5.6-5.6q-.75.6-1.725.95T9.5 16m0-2q1.875 0 3.188-1.312T14 9.5t-1.312-3.187T9.5 5T6.313 6.313T5 9.5t1.313 3.188T9.5 14"/>
                        </svg>
                    </div>

                    <!-- Input -->
                    <input id="company-search" v-model="searchQuery" type="search" placeholder="Search..." autocomplete="off" aria-label="Search media by title, company, or industry"
                        class="w-full bg-transparent text-base italic text-primary outline-none placeholder:text-primary/70 focus:outline-none"
                    />
                </div>
            </div>

            <!-- Filters Wrapper -->
            <div class="-mx-5 flex gap-3 overflow-x-auto px-5 pb-10 sm:-mx-8 sm:px-8 sm:pb-20 xs:-mx-6 xs:px-6 md:grid md:grid-cols-5 md:gap-4 lg:mx-0 lg:px-0 no-scrollbar"
                aria-label="Filter media content">

                <!-- Filter Buttons -->
                <button v-for="filter in filters" :key="filter" type="button" :aria-pressed="filter === activeFilter" :class="[
                    'flex-shrink-0 cursor-pointer rounded-lg px-5 py-3 text-xs font-bold uppercase text-white transition duration-200 whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 sm:px-2 sm:py-4 sm:text-sm md:flex-shrink md:whitespace-normal',
                    filter === activeFilter ? 'bg-secondary' : 'bg-[#3E5A78] hover:bg-[#3E5A78]/90']" @click="activeFilter = filter">
                    {{ filter }}
                </button>
            </div>

            <!-- Media Card Wrapper -->
            <div id="media-card-list" class="mt-8 grid grid-cols-[repeat(auto-fill,minmax(min(100%,400px),1fr))] justify-center gap-x-6 gap-y-10"
                aria-label="Media cards" aria-live="polite" role="list">

                <!-- Media Card Link -->
                <router-link v-for="(card, index) in visibleCards" :key="index" :to="card.route || '#'" class="group mx-auto block h-full w-full rounded-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                    :aria-label="`Read more about ${card.title}`" itemprop="url">

                    <!-- Media Card-->
                    <article class="flex h-full w-full flex-col justify-between overflow-hidden rounded-2xl bg-white shadow-[0px_-1.2px_20.23px_0px_rgba(0,0,0,0.25)] transition duration-300 hover:-translate-y-2 hover:shadow-[0_12px_35px_rgb(0,0,0,0.16)] motion-reduce:transition-none motion-reduce:hover:translate-y-0"
                        itemscope itemtype="https://schema.org/Article">

                        <!-- Media Card Thumbnail  -->
                        <div class="relative h-[170px] w-full overflow-hidden bg-slate-100">

                            <!-- Image -->
                            <img :src="getImageUrl(card.imageName)" :alt="`${card.title} cover image`" class="h-full w-full object-cover"
                                loading="lazy" itemprop="image"
                            />

                            <!-- Card Tag/Type (Right Side) -->
                            <span class="absolute right-3 top-3 rounded-md bg-[#3E5A78] px-6 py-2 text-xs font-bold uppercase text-white sm:px-8"
                                itemprop="articleSection">
                                {{ card.type }}
                            </span>
                        </div>

                        <!-- Media Card Details Wrapper -->
                        <div class="flex grow flex-col justify-between px-4 py-5">
                            <div>
                                <!-- Title -->
                                <h3 class="line-clamp-2 text-base font-semibold text-black transition group-hover:text-primary sm:text-lg"
                                    itemprop="headline">
                                    {{ card.title }}
                                </h3>

                                <!-- Description -->
                                <p class="mt-1 line-clamp-2 text-sm leading-4 text-[#5F5F5F]" itemprop="description">
                                    {{ card.description }}
                                </p>
                            </div>

                            <!-- Media Micro Details (Bottom) -->
                            <div class="mt-6 flex items-end justify-between text-sm text-black sm:mt-8">
                                <!--Duration (Left) -->
                                <span aria-label="Duration or reading time">
                                    {{ card.durationOrRead }}
                                </span>

                                <!-- Right Details -->
                                <span class="text-right">
                                    <!-- Location -->
                                    <span aria-label="Location">{{ card.location }}</span>
                                    <br />
                                    <!-- Time -->
                                    <time :datetime="card.date" itemprop="datePublished">
                                        {{ card.date }}
                                    </time>
                                </span>
                            </div>
                        </div>
                    </article>
                </router-link>
            </div>

            <!-- No Results -->
            <p v-if="filteredCards.length === 0" role="status" aria-live="polite" class="mb-10 text-center text-sm text-primary">
                No media items found.
            </p>

            <!-- Next Button Wrapper -->
            <div class="mt-5 flex justify-end pb-10 sm:mt-10">

                <!-- Next Button -->
                <button type="button" @click="loadNextCards"
                    class="group flex cursor-pointer items-center gap-2 rounded-md px-4 py-2 text-base font-bold text-[#7C8BDA] transition-all duration-300 hover:bg-[#7C8BDA]/10 hover:text-[#5c6cb3] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#7C8BDA] disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-[#7C8BDA]"
                    aria-label="Load more media cards"
                    aria-controls="media-card-list">

                    <span>Next</span>

                    <!-- Arrow -->
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1 motion-reduce:transition-none" viewBox="0 0 24 24" 
                        aria-hidden="true" focusable="false"><path d="M0 0h24v24H0z" fill="none" /><path fill="none" stroke="currentColor" stroke-linecap="round" 
                        stroke-linejoin="round" stroke-width="2" d="M5 12h14m-6 6l6-6m-6-6l6 6"/>
                    </svg>
                </button>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref, computed, watch } from "vue";

const searchQuery = ref("");
const activeFilter = ref("All");
const currentPage = ref(1);
const itemsPerPage = 6;

const filters = ["All", "Interview", "Conference", "Event Highlights", "Article"];

// Thumbnail Pictures
const getImageUrl = (name) => {
  return new URL(`/src/assets/media/${name}`, import.meta.url).href;
};

// Cards
const cards = ref([
  {
    title: "Friendly Danes at the negotiating table",
    description: "See the interview with Gwyn Nissen Chief Editor for Der Nordschleswiger",
    type: "Interview",
    imageName: "card1.png",
    durationOrRead: "10:03 min",
    location: "DK",
    date: "December 2",
  },
  {
    title: "Sharing skills across the border at Eutin Brewery",
    description:
      "40 business leaders met at Eutin Brewery to tackle the skilled worker shortage across the Danish-German border.",
    type: "Conference",
    imageName: "card2.png",
    durationOrRead: "5:56 min",
    location: "DK/DE",
    date: "October 8",
  },
  {
    title: "Onboarding international talent at ANDRITZ",
    description:
      "How ANDRITZ Feed & Biofuel turns international hires into long-term team members.",
    type: "Event Highlights",
    imageName: "card3.png",
    durationOrRead: "5 min read",
    location: "DE",
    date: "December 2",
  },
  {
    title: "Business DE-DK borderless cooperation.",
    description:
      "Hard to name, easy to feel — the cross-border region where Danish and German businesses find each other.",
    type: "Article",
    imageName: "card4.png",
    durationOrRead: "6 min read",
    location: "DK/DE",
    date: "December 2",
  },
  {
    title: "Meet Katja Rosenburg",
    description:
      "Project manager at Erhvervsfremme Nordfriesland and responsible for the project Interreg Business DE-DK.",
    type: "Interview",
    imageName: "card5.png",
    durationOrRead: "10:45 min",
    location: "DE",
    date: "October 8",
    route: "/media/friendly-danes",
  },
  {
    title: "The two-step approach: attract and retain",
    description:
      "Gitte Crami Davidson of Work-live-stay: international hires aren’t just a strategic advantage — they’re people.",
    type: "Article",
    imageName: "card6.png",
    durationOrRead: "7 min read",
    location: "DK/DE",
    date: "June 6",
  },
]);

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
      activeFilter.value === "All" || card.type === activeFilter.value;

    return matchesSearch && matchesFilter;
  });
});

const visibleCards = computed(() => {
  const end = currentPage.value * itemsPerPage;
  return filteredCards.value.slice(0, end);
});

const hasMoreCards = computed(() => {
  return visibleCards.value.length < filteredCards.value.length;
});

const loadNextCards = () => {
  if (!hasMoreCards.value) return;

  currentPage.value++;
};

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