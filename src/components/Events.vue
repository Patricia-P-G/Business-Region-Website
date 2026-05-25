<template>
    <section
        class="relative w-full bg-[linear-gradient(to_bottom,#F8F8F8_0%,#EEF0FF_55%,#9BA8F0_100%)] py-12"
        aria-labelledby="events-title"
    >

        <div class="relative z-10 mx-auto max-w-[1600px] px-5 xs:px-6 sm:px-8 lg:px-25">

            <div class="grid grid-cols-12 gap-2.5">

                <!-- TITLE -->
                <div class="col-span-12">
                    <h2
                        id="events-title"
                        class="text-4xl font-black uppercase tracking-tight text-[#11213A]"
                    >
                        Events
                    </h2>
                </div>

                <!-- UNDERLINE -->
                <div class="col-span-12">
                    <hr class="border-0 border-t-[3px] border-[#12294B]" />
                </div>

                <!-- SUBTITLE -->
                <div class="col-span-12">
                    <p class="text-xl text-[#11213A]">
                        Explore upcoming events and gatherings from across the Danish-German border region.
                    </p>
                </div>

                <!-- EVENTS -->
                <div class="col-span-12 mt-20 grid grid-cols-12 items-center gap-6">

                    <!-- LEFT ARROW -->
                  

                        <button
                            class="events-prev flex h-16 w-16  items-center justify-center rounded-full bg-white text-[#11213A] shadow-lg transition-all duration-300 hover:scale-105 hover:bg-[#7C8BDA] hover:text-white"
                            aria-label="Previous events">

                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                class="h-7 w-7"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2.5"
                                    d="m15 6l-6 6l6 6"
                                />
                            </svg>

                        </button>

                    <!-- SWIPER -->
                    <div class="col-span-12 lg:col-span-10">

                        <Swiper
                            :modules="[Navigation]"
                            :slides-per-view="1"
                            :space-between="24"
                            :navigation="{
                                prevEl: '.events-prev',
                                nextEl: '.events-next'
                            }"
                            :breakpoints="{
                                640: {
                                    slidesPerView: 2,
                                    spaceBetween: 24
                                },
                                1024: {
                                    slidesPerView: 3,
                                    spaceBetween: 34
                                }
                            }"
                            class="events-swiper"
                        >

                            <SwiperSlide
                                v-for="event in events"
                                :key="event.title"
                            >

                                <!-- EVENT CARD -->
                                <article
                                    class="relative h-[250px]  rounded-xl bg-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                                >

                                    <!-- IMAGE -->
                                    <div class="relative h-[120px]">

                                        <img
                                            :src="event.image"
                                            :alt="event.alt"
                                            loading="lazy"
                                            class="h-full w-full object-cover"
                                        />

                                        <!-- COUNTRY -->
                                        <span
                                            class="absolute right-3 top-3 rounded-md bg-[#7C8BDA] px-8 py-1 text-sm font-bold uppercase text-white"
                                        >
                                            {{ event.country }}
                                        </span>

                                    </div>

                                    <!-- CONTENT -->
                                    <div class="relative px-4 py-4">

                                        <!-- DATE -->
                                        <div
                                            class="absolute -top-10 left-4 flex h-14 w-12 flex-col items-center justify-center rounded-sm bg-white text-[#7C8BDA] shadow"
                                        >

                                            <span class="text-lg font-black">
                                                {{ event.day }}
                                            </span>

                                            <span class="text-xs">
                                                {{ event.month }}
                                            </span>

                                        </div>

                                        <div class="ml-14">

                                            <!-- LOCATION -->
                                            <div class="mb-2 flex justify-end gap-1 text-[10px] text-[#7A7A7A]">

                                                <img
                                                    src="@/assets/location icon.svg"
                                                    alt=""
                                                    aria-hidden="true"
                                                    class="h-3 w-3"
                                                />

                                                {{ event.location }}

                                            </div>

                                            <!-- TITLE -->
                                            <h3 class="text-base font-black leading-5 text-black">
                                                {{ event.title }}
                                            </h3>

                                            <!-- DESCRIPTION -->
                                            <p class="mt-2 text-sm leading-4 text-[#555]">
                                                {{ event.description }}
                                            </p>

                                        </div>

                                    </div>

                                </article>

                            </SwiperSlide>

                        </Swiper>

                    </div>

                    <!-- RIGHT ARROW -->

                        <button
                            class="events-next flex h-16 w-16 items-center justify-center rounded-full bg-white text-[#11213A] shadow-lg transition-all duration-300 hover:scale-105 hover:bg-[#7C8BDA] hover:text-white"
                            aria-label="Next events">

                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                class="h-7 w-7"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2.5"
                                    d="m9 6l6 6l-6 6"
                                />
                            </svg>

                        </button>
                </div>

                <!-- BROWSE MORE -->
                <div class="col-span-12 mt-8 flex justify-end">

                    <router-link
                        to="/events"
                        aria-label="Browse more events"
                        class="group flex items-center gap-3 text-xl font-black text-[#11213A] transition-all duration-300 hover:text-[#7C8BDA]"
                    >

                        Browse more

                        <span
                            class="transition-transform duration-300 group-hover:translate-x-1"
                            aria-hidden="true"
                        >
                            →
                        </span>

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
        description:
            'Annual gathering of business leaders, advisors, and policymakers from Southern Jutland and Schleswig-Holstein.',
        image: events1,
        alt: 'Cross-Border Business Forum event image',
        country: 'DE',
        day: '12',
        month: 'June',
        location: 'Tønder, Germany'
    },
    {
        title: 'Recruitment Across the Border — Workshop',
        description:
            'A hands-on workshop for HR managers and business owners hiring talent from across the border.',
        image: events2,
        alt: 'Recruitment workshop event image',
        country: 'DK',
        day: '19',
        month: 'June',
        location: 'Aabenraa, Denmark'
    },
    {
        title: 'Green Transition Networking Evening',
        description:
            'Informal networking evening for companies working on energy, sustainability, and the green transition.',
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
    padding: 10px 4px 18px;
}
</style>