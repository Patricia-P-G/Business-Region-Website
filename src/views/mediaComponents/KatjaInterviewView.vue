<template>
  <main>
    <!-- Katja Interview Section -->
    <section class="w-full pt-40 bg-[linear-gradient(to_bottom,rgba(121,136,210,1)_0%,rgba(121,136,210,0.38)_35%,rgba(255,255,255,0)_60%,#ffffff_100%)]"
      aria-labelledby="interview-page-title">

      <!-- Right Space -->
      <div class="mx-auto max-w-400 px-5 sm:px-8 lg:px-20">

        <!-- Title + Subtitle Wrapper -->
        <div class="mb-8">
          <!-- Title -->
          <h1 id="interview-page-title" class="mb-3 text-3xl font-bold text-primary sm:text-4xl">
            {{ interview.title }}
          </h1>

          <!-- Subtitle -->
          <p class="text-sm leading-6 text-primary sm:max-w-[50%] sm:text-base">
            {{ interview.subtitle }}
          </p>
        </div>

        <!-- Grid Wrapper -->
        <div class="grid grid-cols-12 gap-6">

          <!-- Video Player Wrapper -->
          <div class="group relative col-span-12 aspect-video overflow-hidden rounded-xl bg-black sm:aspect-auto sm:flex sm:h-125 sm:items-center sm:justify-center lg:col-span-8">
            <template v-if="isPlaying">
              <!-- Youtube Iframe -->
              <iframe
                :src="`${interview.embedUrl}?autoplay=1&rel=0&playsinline=1`"
                :title="`Video player for ${interview.title}`"
                class="absolute inset-0 h-full w-full sm:relative sm:inset-auto sm:aspect-video sm:h-auto"
                allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
                allowfullscreen
                webkit-allowfullscreen
                mozallowfullscreen
              ></iframe>
            </template>

            <!-- Video Player -->
            <template v-else>

              <!-- Thumbnail Picture -->
              <img :src="thumbnailSrc" :alt="`${interview.title} - video thumbnail`" class="absolute inset-0 h-full w-full object-cover"/>

              <!-- Bckground Overlay when Hover -->
              <div class="absolute inset-0 bg-black/15 transition duration-300 group-hover:bg-black/30" aria-hidden="true"></div>

              <!-- Play Button -->
              <button type="button" class="absolute inset-0 flex w-full cursor-pointer items-center justify-center focus:outline-none focus-visible:ring-4 focus-visible:ring-white/80"
                :aria-label="`Play ${interview.title}`" @click="isPlaying = true">
               
                <!-- Play Button Icon -->
                <img src="@/assets/icons/play-button.svg" alt="" aria-hidden="true" class="h-20 w-20 transition duration-300 group-hover:scale-110 group-hover:brightness-125"/>
              </button>
            </template>
          </div>

          <!-- Right Side Description Card -->
          <div class="col-span-12 flex flex-col rounded-xl bg-primary p-7 text-white lg:col-span-4">
            <!-- Posted Text -->
            <p class="mb-5 text-xs text-white/55">
              Posted: {{ interview.postedDate }}
            </p>
            
            <!-- Description -->
            <p class="mb-4 text-justify text-sm leading-6 text-white">
              {{ interview.description1 }}
            </p>

            <p class="mb-4 text-justify text-sm leading-6 text-white">
              {{ interview.description2 }}
            </p>

            <p class="text-justify text-sm leading-6 text-white">
              {{ interview.description3 }}
            </p>
          </div>

          <!-- Buttons Share + Watch on Youtube Wrapper -->
          <div class="col-span-12 flex justify-end gap-3 lg:col-span-4 lg:col-start-9">
            <!-- Share Button  -->
            <button type="button" @click="handleShare"
              class="flex cursor-pointer items-center gap-2 rounded-full bg-tertiary px-5 py-2 text-xs font-semibold text-white transition hover:bg-tertiary/85 focus:outline-none focus-visible:ring-2 focus-visible:ring-tertiary focus-visible:ring-offset-2">
              
              <!-- Share Icon -->
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 shrink-0" viewBox="0 0 24 24" aria-hidden="true">
                <path fill="currentColor" d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81c1.66 0 3-1.34 3-3s-1.34-3-3-3s-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65c0 1.61 1.31 2.92 2.92 2.92s2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z" />
              </svg>

              Share
            </button>

            <!-- Watch on Youtube Button -->
            <a :href="interview.youtubeUrl" target="_blank" rel="noopener noreferrer"
              class="flex items-center gap-2 rounded-full bg-tertiary px-5 py-2 text-xs font-semibold text-white transition hover:bg-tertiary/85 focus:outline-none focus-visible:ring-2 focus-visible:ring-tertiary focus-visible:ring-offset-2">
              
              <!-- Play Icom  -->
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 shrink-0" viewBox="0 0 24 24" aria-hidden="true">
                <path fill="currentColor" d="M8 5v14l11-7z" />
              </svg>

              Watch on YT
            </a>
          </div>
        </div>

        <!-- Person Info Left Side Grid -->
        <div class="mt-6 grid grid-cols-12 gap-x-6 gap-y-5 border-t border-gray-200 pt-6">
          <!-- Person Info Wrapper -->
          <div class="col-span-12 flex flex-wrap items-start justify-center gap-x-8 gap-y-6 sm:justify-start">
            <!-- Profile -->
            <div class="flex items-start gap-4 sm:gap-3">

              <!-- Image -->
              <img :src="profileSrc" alt="Katja Rosenburg" class="h-24 w-24 shrink-0 rounded-full object-cover sm:h-22 sm:w-22"/>

              <!-- Info Wrapper -->
              <div>
                <!-- Name -->
                <p class="text-xl font-bold text-primary sm:text-base">
                  {{ interview.person.name }}
                </p>

                <!-- Description -->
                <p class="mt-1 max-w-60 text-sm leading-5 text-gray-500 sm:max-w-52">
                  {{ interview.person.title }}
                </p>

                <!-- Mobile Version Email + Phone -->
                <div class="mt-2 text-sm leading-6 text-primary sm:hidden">

                  <!-- Email -->
                  <p>
                    <strong>Email: </strong>
                    <a :href="`mailto:${interview.person.email}`" class="hover:underline">
                      {{ interview.person.email }}
                    </a>
                  </p>

                  <!-- Phone -->
                  <p>
                    <strong>Phone: </strong>
                    <a :href="`tel:${interview.person.phone.replace(/\s/g, '')}`" class="hover:underline">
                      {{ interview.person.phone }}
                    </a>
                  </p>
                </div>

                <!-- Socials -->
                <div class="mt-3 flex gap-3 sm:mt-2 sm:gap-2">
                  <!-- Facebook -->
                  <a :href="interview.person.facebookUrl" :aria-label="`${interview.person.name} on Facebook`" class="transition hover:opacity-70"
                    rel="noopener noreferrer" target="_blank">

                    <!-- Facebook Icon -->
                    <img src="@/assets/icons/facebook icon.svg" alt="" aria-hidden="true" class="h-9 w-9 sm:h-6 sm:w-6" />
                  </a>

                  <!-- LinkedIn -->
                  <a :href="interview.person.linkedinUrl" :aria-label="`${interview.person.name} on LinkedIn`" class="transition hover:opacity-70"
                    rel="noopener noreferrer" target="_blank">

                    <!-- LinkedIn Icon -->
                    <img src="@/assets/icons/linkedin icon.svg" alt="" aria-hidden="true" class="h-9 w-9 sm:h-6 sm:w-6" />
                  </a>
                </div>
              </div>
            </div>

            <!-- Desktop Email + Phone -->
            <div class="hidden flex-col gap-1 text-sm leading-6 text-primary sm:flex">
              <!-- Email -->
              <p>
                <strong>Email: </strong>
                <a :href="`mailto:${interview.person.email}`" class="hover:underline">
                  {{ interview.person.email }}
                </a>
              </p>

              <!-- Phone -->
              <p>
                <strong>Phone: </strong>
                <a :href="`tel:${interview.person.phone.replace(/\s/g, '')}`" class="hover:underline">
                  {{ interview.person.phone }}
                </a>
              </p>
            </div>

            <!-- Involved In Right Side Wrapper -->
            <div class="flex basis-full flex-col gap-3 sm:ml-auto sm:basis-auto sm:shrink-0 sm:gap-2">
              <!-- Text -->
              <span class="text-base font-bold text-primary sm:text-sm">
                Involved in:
              </span>

              <!-- Companies -->
              <div class="flex w-full items-center sm:w-auto">
                <img :src="kliwinf" alt="KliWINF" class="h-10 max-w-[28%] object-contain sm:h-11 sm:max-w-none" />
                <!-- Divider -->
                <span class="mx-3 h-7 w-px shrink-0 bg-gray-300 sm:h-8" aria-hidden="true"></span>
                <img :src="interreg" alt="Interreg" class="h-10 max-w-[28%] object-contain sm:h-11 sm:max-w-none" />
                <!-- Divider -->
                <span class="mx-3 h-7 w-px shrink-0 bg-gray-300 sm:h-8" aria-hidden="true"></span>
                <img :src="businessDeDk" alt="Business DE-DK" class="h-10 max-w-[28%] object-contain sm:h-11 sm:max-w-none" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Browse More Section -->
    <section class="w-full bg-white pb-16 pt-32" aria-labelledby="browse-more-title">
      <!-- Right Space -->
      <div class="mx-auto max-w-400 px-5 sm:px-8 lg:px-20">
        <!-- Title -->
        <h2 id="browse-more-title" class="mb-8 text-2xl font-bold text-primary">
          Browse More:
        </h2>

        <!-- Mobile Browse More -->
        <div class="relative -mx-5 sm:-mx-8 lg:hidden">
          <div class="no-scrollbar flex gap-4 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-4">

            <!-- Left Spacer -->
            <span class="w-5 shrink-0 sm:w-8" aria-hidden="true"></span>

            <!-- Import Card Layout -->
            <MediaCard v-for="card in browseCards" :key="card.title" :card="card"
              link-class="group w-[82%] shrink-0 snap-start rounded-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 sm:w-[45%]"
            />
            <!-- Right Spacer -->
            <span class="w-3 shrink-0 xs:w-4" aria-hidden="true"></span>
          </div>
        </div>

        <!-- Desktop Browse More -->
        <div class="relative hidden lg:block">
          <!-- Previous Button -->
          <button type="button" @click="prevSlide"
            :disabled="currentSlide === 0" class="cursor-pointer absolute -left-5 top-1/2 z-10 -translate-y-1/2 rounded-full bg-primary p-2 text-white shadow-md transition hover:bg-primary/85 disabled:opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            aria-label="Previous media items">

            <!-- Arrow icon -->
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 24 24" aria-hidden="true">
              <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 12H5m6 6l-6-6m6-6l-6 6" />
            </svg>
          </button>

          <!-- Import Card layout -->
          <div class="grid grid-cols-3 gap-6 px-8">
            <MediaCard v-for="card in visibleBrowseCards" :key="card.title" :card="card"
              link-class="group block rounded-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
            />
          </div>

          <!-- Next Button -->
          <button type="button" @click="nextSlide" :disabled="currentSlide >= maxSlide"
            class="cursor-pointer absolute -right-5 top-1/2 z-10 -translate-y-1/2 rounded-full bg-primary p-2 text-white shadow-md transition hover:bg-primary/85 disabled:opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            aria-label="Next media items">

            <!-- Arrow Icon -->
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 24 24" aria-hidden="true">
              <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14m-6 6l6-6m-6-6l6 6" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
import { ref, computed, onMounted, nextTick } from 'vue';

import { scrollToTop } from '@/components/modules/scrollToTop';
import MediaCard from './MediaCard.vue';
import { mediaCards } from '@/components/modules/mediaCards';

import thumbnailSrc from '@/assets/media/katja/katja-vid-thumbnail.jpg';
import profileSrc from '@/assets/media/katja/katja-rosenburg.png';
import kliwinf from '@/assets/media/katja/kliwinf.png';
import interreg from '@/assets/media/katja/interreg.png';
import businessDeDk from '@/assets/media/katja/business-de-dk.png';

onMounted(async () => {
  await nextTick();
  scrollToTop('auto');
});

const interview = {
  title: 'Meet Katja Rosenburg',
  subtitle:'Project manager at Erhvervsfremme Nordfriesland and responsible for the project Interreg Business DE-DK.',
  youtubeUrl: 'https://www.youtube.com/watch?v=mqhIDMQmaTE',
  embedUrl: 'https://www.youtube.com/embed/mqhIDMQmaTE',
  postedDate: 'October 8, 2015',
  description1: 'In this video, Katja shares how cooperation between the border regions of Denmark and Germany can help solve the current shortage of qualified labor.',
  description2: 'Through Business DE-DK, companies on both sides of the border are brought together to find solutions to the needs of the workforce. Katja explains how networking and collaboration play a central role in attracting labor to the region, and how small obstacles can be overcome through joint efforts.',
  description3:'The project also supports the labor market by attracting global labor, who are given the opportunity to choose where they want to work in the border region.',

  person: {
    name: 'Katja Rosenburg',
    title: 'Sustainable Energy, Climate Neutral Economy, NF 467B1 NF1, Business DE-DK',
    email: 'k.rosenburg@see-style.de',
    phone: '+49 48 41 66 85 12',
    facebookUrl: '#',
    linkedinUrl: '#',
  },
};

const isPlaying = ref(false);

function handleShare() {
  if (navigator.share) {
    navigator.share({
      title: interview.title,
      url: window.location.href,
    }).catch(() => {});
  } else {
    navigator.clipboard?.writeText(window.location.href);
  }
}

// Browse More cards from shared mediaCards.js
// Removes the current Katja card so it does not recommend itself
const browseCards = computed(() => {
  return mediaCards.filter((card) => card.route !== '/media/meet-katja');
});

const cardsPerPage = 3;
const currentSlide = ref(0);

const maxSlide = computed(() => {
  return Math.max(0, browseCards.value.length - cardsPerPage);
});

const visibleBrowseCards = computed(() => {
  return browseCards.value.slice(
    currentSlide.value,
    currentSlide.value + cardsPerPage
  );
});

function prevSlide() {
  currentSlide.value = Math.max(0, currentSlide.value - 1);
}

function nextSlide() {
  currentSlide.value = Math.min(maxSlide.value, currentSlide.value + 1);
}
</script>