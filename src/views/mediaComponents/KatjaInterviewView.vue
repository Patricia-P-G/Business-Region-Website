<template>
  <main>
    <!-- ── Hero + Video (shared gradient background) ─────────────────────── -->
    <section
      class="w-full pt-40"
      style="background: linear-gradient(to bottom, rgba(121,136,210,1) 0%, rgba(121,136,210,0.38) 35%, rgba(255,255,255,0) 60%, #ffffff 100%);"
      aria-labelledby="interview-page-title"
    >
      <div class="mx-auto max-w-400 px-5 sm:px-8 lg:px-20">

        <!-- Title + subtitle -->
        <div class="mb-8">
          <h1 id="interview-page-title" class="mb-3 text-3xl font-bold text-white sm:text-4xl">
            {{ interview.title }}
          </h1>
          <p class="text-sm leading-6 text-white/85 sm:max-w-[50%] sm:text-base">
            {{ interview.subtitle }}
          </p>
        </div>

        <div class="grid grid-cols-12 gap-6">

          <!-- Video Player — columns 1–8 -->
          <div class="group relative col-span-12 aspect-video overflow-hidden rounded-xl bg-black sm:aspect-auto sm:flex sm:h-125 sm:items-center sm:justify-center lg:col-span-8">

            <template v-if="isPlaying">
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

            <!-- Thumbnail + play button (shown by default) -->
            <template v-else>
              <img
                :src="thumbnailSrc"
                :alt="`${interview.title} – video thumbnail`"
                class="absolute inset-0 h-full w-full object-cover"
              />
              <!-- Dark overlay on hover -->
              <div class="absolute inset-0 bg-black/15 transition duration-300 group-hover:bg-black/30" aria-hidden="true"></div>
              <!-- Play button -->
              <button
                type="button"
                class="absolute inset-0 flex w-full cursor-pointer items-center justify-center focus:outline-none focus-visible:ring-4 focus-visible:ring-white/80"
                :aria-label="`Play ${interview.title}`"
                @click="isPlaying = true"
              >
                <img
                  src="@/assets/icons/play-button.svg"
                  alt=""
                  aria-hidden="true"
                  class="h-20 w-20 transition duration-300 group-hover:scale-110 group-hover:brightness-125"
                />
              </button>
            </template>
          </div>

          <!-- Description Card — columns 9–12 -->
          <div class="col-span-12 flex flex-col rounded-xl bg-primary p-7 text-white lg:col-span-4">
            <p class="mb-5 text-xs text-white/55">Posted: {{ interview.postedDate }}</p>
            <p class="mb-4 text-sm text-justify leading-6 text-white">
              {{ interview.description1 }}
            </p>
            <p class="mb-4 text-sm text-justify leading-6 text-white">
              {{ interview.description2 }}
            </p>
            <p class="text-sm text-justify leading-6 text-white">
              {{ interview.description3 }}
            </p>
          </div>

          <!-- Buttons — directly below description card, cols 9–12 -->
          <div class="col-span-12 flex justify-end gap-3 lg:col-span-4 lg:col-start-9">
            <button
              type="button"
              @click="handleShare"
              class="flex cursor-pointer items-center gap-2 rounded-full bg-tertiary px-5 py-2 text-xs font-semibold text-white transition hover:bg-tertiary/85 focus:outline-none focus-visible:ring-2 focus-visible:ring-tertiary focus-visible:ring-offset-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 shrink-0" viewBox="0 0 24 24" aria-hidden="true">
                <path fill="currentColor" d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81c1.66 0 3-1.34 3-3s-1.34-3-3-3s-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65c0 1.61 1.31 2.92 2.92 2.92s2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z"/>
              </svg>
              Share
            </button>
            <a
              :href="interview.youtubeUrl"
              target="_blank"
              rel="noopener noreferrer"
              class="flex items-center gap-2 rounded-full bg-tertiary px-5 py-2 text-xs font-semibold text-white transition hover:bg-tertiary/85 focus:outline-none focus-visible:ring-2 focus-visible:ring-tertiary focus-visible:ring-offset-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 shrink-0" viewBox="0 0 24 24" aria-hidden="true">
                <path fill="currentColor" d="M8 5v14l11-7z"/>
              </svg>
              Watch on YT
            </a>
          </div>
        </div>

        <!-- ── Person Info Row ──────────────────────────────────────────────── -->
        <div class="mt-6 grid grid-cols-12 gap-x-6 gap-y-5 border-t border-gray-200 pt-6">

          <!-- Profile + logos — full width, wraps on mobile -->
          <div class="col-span-12 flex flex-wrap items-start justify-center gap-x-8 gap-y-6 sm:justify-start">

            <!-- Profile photo + name + title + email + phone + socials -->
            <div class="flex items-start gap-4 sm:gap-3">
              <img
                :src="profileSrc"
                alt="Katja Rosenburg"
                class="h-24 w-24 shrink-0 rounded-full object-cover sm:h-22 sm:w-22"
              />
              <div>
                <p class="text-xl font-bold text-primary sm:text-base">{{ interview.person.name }}</p>
                <p class="mt-1 max-w-60 text-sm leading-5 text-gray-500 sm:max-w-52 sm:text-sm sm:leading-5">
                  {{ interview.person.title }}
                </p>
                <!-- Email + Phone: mobile only (desktop version is a separate column) -->
                <div class="mt-2 text-sm leading-6 text-primary sm:hidden">
                  <p>
                    <strong>Email: </strong>
                    <a :href="`mailto:${interview.person.email}`" class="hover:underline">{{ interview.person.email }}</a>
                  </p>
                  <p>
                    <strong>Phone: </strong>
                    <a :href="`tel:${interview.person.phone.replace(/\s/g, '')}`" class="hover:underline">{{ interview.person.phone }}</a>
                  </p>
                </div>
                <div class="mt-3 flex gap-3 sm:mt-2 sm:gap-2">
                  <a
                    :href="interview.person.facebookUrl"
                    :aria-label="`${interview.person.name} on Facebook`"
                    class="transition hover:opacity-70"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <img src="@/assets/icons/facebook icon.svg" alt="" aria-hidden="true" class="h-9 w-9 sm:h-6 sm:w-6" />
                  </a>
                  <a
                    :href="interview.person.linkedinUrl"
                    :aria-label="`${interview.person.name} on LinkedIn`"
                    class="transition hover:opacity-70"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <img src="@/assets/icons/linkedin icon.svg" alt="" aria-hidden="true" class="h-9 w-9 sm:h-6 sm:w-6" />
                  </a>
                </div>
              </div>
            </div>

            <!-- Email + Phone: desktop only (mobile version is inside profile block) -->
            <div class="hidden flex-col gap-1 text-sm leading-6 text-primary sm:flex">
              <p>
                <strong>Email: </strong>
                <a :href="`mailto:${interview.person.email}`" class="hover:underline">{{ interview.person.email }}</a>
              </p>
              <p>
                <strong>Phone: </strong>
                <a :href="`tel:${interview.person.phone.replace(/\s/g, '')}`" class="hover:underline">{{ interview.person.phone }}</a>
              </p>
            </div>

            <!-- Involved In: wraps to own row on mobile, pushed right on desktop -->
            <div class="flex basis-full flex-col gap-3 sm:ml-auto sm:basis-auto sm:shrink-0 sm:gap-2">
              <span class="text-base font-bold text-primary sm:text-sm">Involved in:</span>
              <div class="flex w-full items-center sm:w-auto">
                <img :src="kliwinf" alt="KliWINF" class="h-10 max-w-[28%] object-contain sm:h-11 sm:max-w-none" />
                <span class="mx-3 h-7 w-px shrink-0 bg-gray-300 sm:h-8" aria-hidden="true"></span>
                <img :src="interreg" alt="Interreg" class="h-10 max-w-[28%] object-contain sm:h-11 sm:max-w-none" />
                <span class="mx-3 h-7 w-px shrink-0 bg-gray-300 sm:h-8" aria-hidden="true"></span>
                <img :src="businessDeDk" alt="Business DE-DK" class="h-10 max-w-[28%] object-contain sm:h-11 sm:max-w-none" />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- ── Browse More ─────────────────────────────────────────────────────── -->
    <section class="w-full bg-white pb-16 pt-32" aria-labelledby="browse-more-title">
      <div class="mx-auto max-w-400 px-5 sm:px-8 lg:px-20">

        <h2 id="browse-more-title" class="mb-8 text-2xl font-bold text-primary">Browse More:</h2>

        <!-- ── Mobile carousel (< lg): CSS scroll-snap, next card peeks ── -->
        <div class="relative -mx-5 sm:-mx-8 lg:hidden">
          <div
            class="no-scrollbar flex gap-4 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-4"
          >
            <!-- left spacer — aligns first card with section content -->
            <span class="w-5 sm:w-8 shrink-0" aria-hidden="true"></span>

            <router-link
              v-for="card in browseCards"
              :key="card.title"
              :to="card.route || '#'"
              class="group w-[82%] shrink-0 snap-start rounded-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 sm:w-[45%]"
              :aria-label="`Read more about ${card.title}`"
            >
              <article class="flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-[0px_-1.2px_20.23px_0px_rgba(0,0,0,0.25)] transition duration-300 hover:-translate-y-2 hover:shadow-[0_12px_35px_rgb(0,0,0,0.16)] motion-reduce:transition-none motion-reduce:hover:translate-y-0">
                <div class="relative h-42.5 w-full overflow-hidden bg-slate-100">
                  <img :src="getCardImage(card.imageName)" :alt="`${card.title} cover image`" class="h-full w-full object-cover" loading="lazy" />
                  <span class="absolute right-3 top-3 rounded-md bg-[#3E5A78] px-6 py-2 text-xs font-bold uppercase text-white">{{ card.type }}</span>
                </div>
                <div class="flex grow flex-col justify-between px-4 py-5">
                  <div>
                    <h3 class="line-clamp-2 text-base font-semibold text-black transition group-hover:text-primary sm:text-lg">{{ card.title }}</h3>
                    <p class="mt-1 line-clamp-2 text-sm leading-4 text-[#5F5F5F]">{{ card.description }}</p>
                  </div>
                  <div class="mt-6 flex items-end justify-between text-sm text-black sm:mt-8">
                    <span>{{ card.durationOrRead }}</span>
                    <span class="text-right"><span>{{ card.location }}</span><br /><time :datetime="card.date">{{ card.date }}</time></span>
                  </div>
                </div>
              </article>
            </router-link>

            <!-- right spacer -->
            <span class="w-3 xs:w-4 shrink-0" aria-hidden="true"></span>
          </div>
        </div>

        <!-- ── Desktop carousel (lg+): 3-card window, arrow buttons ── -->
        <div class="relative hidden lg:block">
          <!-- Prev arrow -->
          <button
            type="button"
            @click="prevSlide"
            :disabled="currentSlide === 0"
            class="absolute -left-5 top-1/2 z-10 -translate-y-1/2 rounded-full bg-primary p-2 text-white shadow-md transition hover:bg-primary/85 disabled:opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            aria-label="Previous media items"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 24 24" aria-hidden="true">
              <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 12H5m6 6l-6-6m6-6l-6 6"/>
            </svg>
          </button>

          <!-- 3-card grid -->
          <div class="grid grid-cols-3 gap-6 px-8">
            <router-link
              v-for="card in visibleBrowseCards"
              :key="card.title"
              :to="card.route || '#'"
              class="group block rounded-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
              :aria-label="`Read more about ${card.title}`"
            >
              <article class="flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-[0px_-1.2px_20.23px_0px_rgba(0,0,0,0.25)] transition duration-300 hover:-translate-y-2 hover:shadow-[0_12px_35px_rgb(0,0,0,0.16)] motion-reduce:transition-none motion-reduce:hover:translate-y-0">
                <div class="relative h-42.5 w-full overflow-hidden bg-slate-100">
                  <img :src="getCardImage(card.imageName)" :alt="`${card.title} cover image`" class="h-full w-full object-cover" loading="lazy" />
                  <span class="absolute right-3 top-3 rounded-md bg-[#3E5A78] px-6 py-2 text-xs font-bold uppercase text-white">{{ card.type }}</span>
                </div>
                <div class="flex grow flex-col justify-between px-4 py-5">
                  <div>
                    <h3 class="line-clamp-2 text-base font-semibold text-black transition group-hover:text-primary sm:text-lg">{{ card.title }}</h3>
                    <p class="mt-1 line-clamp-2 text-sm leading-4 text-[#5F5F5F]">{{ card.description }}</p>
                  </div>
                  <div class="mt-6 flex items-end justify-between text-sm text-black sm:mt-8">
                    <span>{{ card.durationOrRead }}</span>
                    <span class="text-right"><span>{{ card.location }}</span><br /><time :datetime="card.date">{{ card.date }}</time></span>
                  </div>
                </div>
              </article>
            </router-link>
          </div>

          <!-- Next arrow -->
          <button
            type="button"
            @click="nextSlide"
            :disabled="currentSlide >= maxSlide"
            class="absolute -right-5 top-1/2 z-10 -translate-y-1/2 rounded-full bg-primary p-2 text-white shadow-md transition hover:bg-primary/85 disabled:opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            aria-label="Next media items"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 24 24" aria-hidden="true">
              <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14m-6 6l6-6m-6-6l6 6"/>
            </svg>
          </button>
        </div>
      </div>
    </section>

  </main>
</template>

<script setup>
import { ref, computed, onMounted, nextTick } from 'vue'
import { scrollToTop } from '@/components/modules/scrollToTop';

onMounted(async () => {
  await nextTick()
  scrollToTop('auto')
})


import thumbnailSrc from '@/assets/media/katja/katja-vid-thumbnail.jpg'
import profileSrc from '@/assets/media/katja/katja-rosenburg.png'
import kliwinf from '@/assets/media/katja/kliwinf.png'
import interreg from '@/assets/media/katja/interreg.png'
import businessDeDk from '@/assets/media/katja/business-de-dk.png'


// TODO (connector): replace this object with a prop, composable, or route-param fetch
const interview = {
  title: 'Meet Katja Rosenburg',
  subtitle:'Project manager at Erhvervsfremme Nordfriesland and responsible for the project Interreg Business DE-DK.',
  youtubeUrl:'https://www.youtube.com/watch?v=mqhIDMQmaTE',
  embedUrl:'https://www.youtube.com/embed/mqhIDMQmaTE',
  postedDate:'October 8, 2015',
  description1:'In this video, Katja shares how cooperation between the border regions of Denmark and Germany can help solve the current shortage of qualified labor.',
  description2:'Through Business DE-DK, companies on both sides of the border are brought together to find solutions to the needs of the workforce. Katja explains how networking and collaboration play a central role in attracting labor to the region, and how small obstacles can be overcome through joint efforts.',
  description3:'The project also supports the labor market by attracting global labor, who are given the opportunity to choose where they want to work in the border region.',
  
  person: {
    name:'Katja Rosenburg',
    title:'Sustainable Energy, Climate Neutral Economy, NF 467B1 NF1, Business DE-DK',
    email:'k.rosenburg@see-style.de',
    phone:'+49 48 41 66 85 12',
    facebookUrl: '#', // TODO (connector): link real profile
    linkedinUrl: '#', // TODO (connector): link real profile
  },
}

// ── Video player state ────────────────────────────────────────────────────────
const isPlaying = ref(false)

// ── Share handler ─────────────────────────────────────────────────────────────
function handleShare () {
  if (navigator.share) {
    navigator.share({ title: interview.title, url: window.location.href }).catch(() => {})
  } else {
    navigator.clipboard?.writeText(window.location.href)
  }
}

// ── Browse More cards ─────────────────────────────────────────────────────────
// TODO (connector): replace with a prop or shared media store
const browseCards = [
  {
    title: 'Friendly Danes at the negotiating table',
    description: 'See the interview with Gwyn Nissen Chief Editor for Der Nordschleswiger',
    type: 'Interview',
    imageName: 'card1.png',
    durationOrRead: '10:03 min',
    location: 'DK',
    date: 'December 2',
    route: '#',
  },
  {
    title: 'Sharing skills across the border at Eutin Brewery',
    description: '40 business leaders met at Eutin Brewery to tackle the skilled worker shortage across the Danish-German border.',
    type: 'Conference',
    imageName: 'card2.png',
    durationOrRead: '5:56 min',
    location: 'DK/DE',
    date: 'October 8',
    route: '#',
  },
  {
    title: 'Onboarding international talent at ANDRITZ',
    description: 'How ANDRITZ Feed & Biofuel turns international hires into long-term team members.',
    type: 'Event Highlights',
    imageName: 'card3.png',
    durationOrRead: '5 min read',
    location: 'DE',
    date: 'December 2',
    route: '#',
  },
  {
    title: 'Business DE-DK borderless cooperation.',
    description: 'Hard to name, easy to feel — the cross-border region where Danish and German businesses find each other.',
    type: 'Article',
    imageName: 'card4.png',
    durationOrRead: '6 min read',
    location: 'DK/DE',
    date: 'December 2',
    route: '#',
  },
  {
    title: 'The two-step approach: attract and retain',
    description: 'Gitte Crami Davidson of Work-live-stay: international hires aren\'t just a strategic advantage — they\'re people.',
    type: 'Article',
    imageName: 'card6.png',
    durationOrRead: '7 min read',
    location: 'DK/DE',
    date: 'June 6',
    route: '#',
  },
]

// ── Browse More carousel ──────────────────────────────────────────────────────
// Desktop: JS sliding window of 3 cards
const cardsPerPage = 3
const currentSlide = ref(0)
const maxSlide = computed(() => Math.max(0, browseCards.length - cardsPerPage))
const visibleBrowseCards = computed(() =>
  browseCards.slice(currentSlide.value, currentSlide.value + cardsPerPage)
)

function prevSlide () {
  currentSlide.value = Math.max(0, currentSlide.value - 1)
}
function nextSlide () {
  currentSlide.value = Math.min(maxSlide.value, currentSlide.value + 1)
}

const getCardImage = (name) =>
  new URL(`/src/assets/media/${name}`, import.meta.url).href
</script>

<style scoped>
.no-scrollbar::-webkit-scrollbar { display: none; }
.no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
</style>
