<template>
  <!-- Events Sectiom -->
  <section class="relative w-full overflow-hidden bg-[linear-gradient(to_bottom,#FFFFFF_0%,#FFFFFF_18%,#D5DDF8_100%)] py-14" aria-labelledby="partners-title">

    <!-- Right Space -->
    <div class="relative z-10 mx-auto px-6 sm:px-16 lg:px-20">

      <!-- Grid Wrapper -->
      <div class="grid grid-cols-12 gap-2.5">

        <!-- Title Wrapper -->
        <div class="col-span-12">
          <!-- Title -->
          <h2 id="partners-title" class="flex justify-center text-center text-xl font-bold uppercase text-primary xs:text-2xl md:text-3xl lg:justify-start lg:text-4xl" itemprop="name">
            Events
          </h2>
        </div>

        <!-- Underline -->
        <div class="col-span-12 mb-2">
          <hr class="border-0 border-t-2 border-primary" />
        </div>

        <!-- Description Wrapper -->
        <div class="col-span-12 mb-8">
            <!-- Description -->
          <p class="text-base text-primary text-center lg:text-left">
            Explore upcoming events and gatherings from across the Danish-German border region.
          </p>
        </div>

        <!-- Grid Wrapper Card Slider -->
        <div class="col-span-12 mt-4 grid grid-cols-12 gap-2.5 items-center">
          <!-- Right Button -->
            <button class="events-prev cursor-pointer hidden lg:flex lg:col-span-1 h-12 w-12 items-center justify-center justify-self-center rounded-full bg-white
             text-primary shadow-md transition-all duration-300 hover:scale-105 hover:bg-secondary hover:text-white" aria-label="Previous events">
                <!-- Arrow Icon -->
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="h-5 w-5">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                </svg>
            </button>

            <!-- Slider Wrapper -->
            <div class="col-span-12 lg:col-span-10 min-w-0">
                <Swiper :modules="[Navigation, Pagination]" :slides-per-view="1" :space-between="24" :loop="true" :navigation="{prevEl: '.events-prev', nextEl: '.events-next'}" :pagination="{ el: '.events-pagination', clickable: true, dynamicBullets: true}"
                    :breakpoints="{ 640: { slidesPerView: 2, spaceBetween: 24 }, 1024: { slidesPerView: 3, spaceBetween: 12 }}" class="events-swiper">

                    <!-- Card Wrapper -->
                    <SwiperSlide v-for="event in events" :key="event.title">

                        <!-- Card -->
                        <article class="relative mx-auto w-85.75 h-68 flex flex-col overflow-hidden rounded-xl bg-white shadow-md cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">

                            <!-- Image Wrapper -->
                            <div class="relative h-27.5 w-full shrink-0">
                                <!-- Image/Thumbnail -->
                                <img :src="event.image" :alt="event.alt" loading="lazy" class="h-full w-full object-cover"/>

                                <!-- Right Top Country Tag -->
                                <span class="absolute right-3 top-3 rounded-md bg-secondary px-4 py-1 text-xs font-bold uppercase text-white">
                                    {{ event.country }}
                                </span>
                            </div>

                            <!-- Bottom Content Wrapper -->
                            <div class="relative p-4 pt-6 flex-1 flex flex-col justify-between">

                                <!-- Day + Month (Right Side) Wrapper -->
                                <div class="absolute -top-7 left-4 flex h-12 w-11 flex-col items-center justify-center rounded bg-white text-center shadow-md z-10">
                                    <!-- Day -->
                                    <span class="text-sm font-black leading-none text-secondary">
                                        {{ event.day }}
                                    </span>
                                    <!-- Month -->
                                    <span class="text-[9px] font-bold uppercase tracking-wider text-secondary">
                                        {{ event.month.substring(0, 3) }}
                                    </span>
                                </div>

                                <!-- Bottom Content Wrapper  -->
                                <div class="flex-1 flex flex-col justify-between">
                                    <!-- Position -->
                                    <div>
                                        <!-- Location Wrapper -->
                                        <div class="mb-1 flex items-center justify-end gap-1 text-[10px] text-[#7A7A7A]">
                                            <!-- Location Icon -->
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="h-3 w-3 text-secondary">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                                            </svg>
                                            {{ event.location }}
                                        </div>

                                        <!-- Title of the Card -->
                                        <h3 class="text-sm font-black leading-snug text-black line-clamp-2 min-h-10 mb-1">
                                            {{ event.title }}
                                        </h3>
                                    </div>

                                    <!-- Description -->
                                    <p class="text-xs leading-relaxed text-[#555] line-clamp-2 flex-1">
                                        {{ event.description }}
                                    </p>
                                </div>
                            </div>
                        </article>
                    </SwiperSlide>
                </Swiper>

                <!-- Swiper Pagination Dots -->
                <div class="events-pagination flex justify-center items-center gap-1 mx-auto mt-6 lg:hidden"></div>
            </div>

           <!-- Button -->
           <button class="events-next cursor-pointer hidden lg:flex lg:col-span-1 h-12 w-12 items-center justify-center justify-self-center rounded-full bg-white
            text-primary shadow-md transition-all duration-300 hover:scale-105 hover:bg-secondary hover:text-white" aria-label="Next events">

                <!-- Arrow Icon -->
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="h-5 w-5">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
          </button>

        </div>

        <!-- Browse More Wrapper  -->
        <div class="col-span-12 mt-8 flex justify-end">
          <!-- Browse More Button -->
          <router-link to="/events" class="cursor-pointer group flex items-center gap-2 rounded-md px-4 py-2 text-base font-black text-primary transition-all duration-300 hover:bg-[#EEF0FF] hover:text-secondary focus:outline-none focus-visible:ring-4 focus-visible:ring-white/80"
            aria-label="Browse more events" title="Browse more events">
            <span>Browse more</span>

            <!-- Arrow Icon -->
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" viewBox="0 0 24 24"
              aria-hidden="true" focusable="false"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5"
              d="M5 12h14m-6 6l6-6m-6-6l6 6"/>
            </svg>
          </router-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import events1 from "@/assets/events/home/events1.webp";
import events2 from "@/assets/events/home/events2.webp";
import events3 from "@/assets/events/home/events3.webp";

const events = [
  {
    title: "Cross-Border Business Forum 2026",
    description:
      "Annual gathering of business leaders, advisors, and policymakers from Southern Jutland and Schleswig-Holstein.",
    image: events1,
    alt: "Cross-Border Business Forum event image",
    country: "DE",
    day: "12",
    month: "June",
    location: "Tønder, Germany",
  },
  {
    title: "Recruitment Across the Border — Workshop",
    description:
      "A hands-on workshop for HR managers and business owners hiring talent from across the border.",
    image: events2,
    alt: "Recruitment workshop event image",
    country: "DK",
    day: "19",
    month: "June",
    location: "Aabenraa, Denmark",
  },
  {
    title: "Green Transition Networking Evening",
    description:
      "Informal networking evening for companies working on energy, sustainability, and the green transition.",
    image: events3,
    alt: "Green transition networking event image",
    country: "DK",
    day: "25",
    month: "June",
    location: "Sønderborg, Denmark",
  },
  {
    title: "Cross-Border Business Forum 2026",
    description:
      "Annual gathering of business leaders, advisors, and policymakers from Southern Jutland and Schleswig-Holstein.",
    image: events1,
    alt: "Cross-Border Business Forum event image",
    country: "DE",
    day: "12",
    month: "June",
    location: "Tønder, Germany",
  },
];
</script>

<style scoped>
.events-swiper {
  padding: 16px 4px 16px 4px;
}

/* Custom coloring for Swiper responsive dots to match your #7C8BDA theme */
:deep(.swiper-pagination-bullet-active) {
  background-color: #7c8bda !important;
}
:deep(.swiper-pagination-bullet) {
  background-color: #7c8bda;
}

/* OVERRIDES: Fixes Swiper's internal styles to force center positioning */
.events-pagination {
  position: relative !important;
  left: 0 !important;
  transform: none !important;
  width: 100% !important;
}

:deep(.swiper-pagination-bullets-dynamic) {
  left: 50% !important;
  transform: translateX(-50%) !important;
  white-space: nowrap;
}

</style>