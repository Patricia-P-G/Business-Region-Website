<template>
  <section class="relative w-full overflow-hidden py-14" aria-labelledby="partners-title">

    <div class="pointer-events-none absolute left-1/2 top-1/2 h-[650px] w-[650px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#A5B4FF]/25 blur-3xl"
        aria-hidden="true"></div>

    <div class="relative z-10 mx-auto px-6 sm:px-16 lg:px-20">

        <div class="grid grid-cols-12 gap-2.5">

            <div class="col-span-12">
                <h2 id="partners-title" class="flex justify-center text-center text-xl font-bold uppercase text-primary xs:text-2xl md:text-3xl lg:justify-start lg:text-4xl"
                    itemprop="name">
                    Events
                </h2>
            </div>

            <div class="col-span-12 mb-2">
                <hr class="border-0 border-t-2 border-primary" />
            </div>

            <div class="col-span-12 mb-8">
                <p class="text-base text-[#11213A] text-center lg:text-left">
                    Explore upcoming events and gatherings from across the Danish-German border region.
                </p>
            </div>

            <div class="col-span-12 relative w-full mt-4">
          
                <div class="w-full">
                  <Swiper
                    :modules="[Navigation]"
                    :slides-per-view="1"
                    :space-between="24"
                    :navigation="{
                      prevEl: '.events-prev',
                      nextEl: '.events-next'
                    }"
                    :breakpoints="{
                      640: { slidesPerView: 2, spaceBetween: 24 },
                      // Setting slidesPerView to 4 forces each card to occupy exactly 3 columns (12 / 4 = 3)
                      1024: { slidesPerView: 4, spaceBetween: 24 }
                    }"
                    class="events-swiper match-grid-offset"
                  >
                    <SwiperSlide v-for="event in events" :key="event.title">
                      <article
                        class="relative h-[250px] overflow-hidden rounded-xl bg-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                      >
                        <div class="relative h-[110px] w-full">
                          <img
                            :src="event.image"
                            :alt="event.alt"
                            loading="lazy"
                            class="h-full w-full object-cover"
                          />
                          <span
                            class="absolute right-3 top-3 rounded-md bg-[#7C8BDA] px-4 py-1 text-xs font-bold uppercase text-white"
                          >
                            {{ event.country }}
                          </span>
                        </div>

                        <div class="relative p-4 pt-6">
                          <div
                            class="absolute -top-7 left-4 flex h-12 w-11 flex-col items-center justify-center rounded bg-white text-center shadow-md"
                          >
                            <span class="text-sm font-black leading-none text-[#7C8BDA]">
                              {{ event.day }}
                            </span>
                            <span class="text-[9px] font-bold uppercase tracking-wider text-[#7C8BDA]">
                              {{ event.month.substring(0, 3) }}
                            </span>
                          </div>

                          <div class="mb-2 flex items-center justify-end gap-1 text-[10px] text-[#7A7A7A]">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="h-3 w-3 text-[#7C8BDA]">
                              <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                              <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                            </svg>
                            {{ event.location }}
                          </div>

                          <h3 class="text-sm font-black leading-snug text-black line-clamp-2">
                            {{ event.title }}
                          </h3>
                          <p class="mt-1 text-xs leading-relaxed text-[#555] line-clamp-3">
                            {{ event.description }}
                          </p>
                        </div>
                      </article>
                    </SwiperSlide>
                  </Swiper>
                </div>

                <div class="pointer-events-none absolute inset-y-0 left-3 right-3 z-20 hidden lg:flex items-center justify-between lg:left-6 lg:right-6">
                    <button
                      class="events-prev pointer-events-auto flex h-13 w-13 items-center justify-center rounded-full bg-white text-[#11213A] shadow-md transition-all duration-300 hover:scale-105 hover:bg-[#7C8BDA] hover:text-white"
                      aria-label="Previous events"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="h-6 w-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                      </svg>
                    </button>

                    <button
                      class="events-next pointer-events-auto flex h-13 w-13 items-center justify-center rounded-full bg-white text-[#11213A] shadow-md transition-all duration-300 hover:scale-105 hover:bg-[#7C8BDA] hover:text-white"
                      aria-label="Next events"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="h-6 w-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                      </svg>
                    </button>
                </div>

            </div>

            <div class="col-span-12 mt-8 flex justify-end">
                <router-link 
                  to="/events" 
                  class="group flex items-center gap-2 text-xs font-black text-[#11213A] transition-all duration-300 hover:text-[#7C8BDA] focus:outline-none focus-visible:underline"
                  aria-label="Browse more events" 
                  title="Browse more events"
                >
                    <span>Browse more</span>

                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 12h14m-6 6l6-6m-6-6l6 6"/>
                    </svg>
                </router-link>
            </div>

        </div>
    </div>
  </section>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/navigation'

import events1 from '@/assets/events1.png'
import events2 from '@/assets/events2.png'
import events3 from '@/assets/events3.png'

const events = [
  {
    title: 'Cross-Border Business Forum 2026',
    description: 'Annual gathering of business leaders, advisors, and policymakers from Southern Jutland and Schleswig-Holstein.',
    image: events1,
    alt: 'Cross-Border Business Forum event image',
    country: 'DE',
    day: '12',
    month: 'June',
    location: 'Tønder, Germany'
  },
  {
    title: 'Recruitment Across the Border — Workshop',
    description: 'A hands-on workshop for HR managers and business owners hiring talent from across the border.',
    image: events2,
    alt: 'Recruitment workshop event image',
    country: 'DK',
    day: '19',
    month: 'June',
    location: 'Aabenraa, Denmark'
  },
  {
    title: 'Green Transition Networking Evening',
    description: 'Informal networking evening for companies working on energy, sustainability, and the green transition.',
    image: events3,
    alt: 'Green transition networking event image',
    country: 'DK',
    day: '25',
    month: 'June',
    location: 'Sønderborg, Denmark'
  }
]
</script>

<style scoped>
.events-swiper {
  padding: 16px 4px;
}

@media (min-width: 1024px) {
  /* Shifts the swiper inner window exactly 1 grid column unit wide rightwards (1/12th of total width) */
  .match-grid-offset :deep(.swiper-wrapper) {
    padding-left: calc(8.333333% + 30px);
  }
}
</style>