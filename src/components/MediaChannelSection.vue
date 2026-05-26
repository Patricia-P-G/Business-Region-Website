<template>
    <section class="relative w-full overflow-hidden bg-white py-20" aria-labelledby="media-preview-title">

        <div class="relative z-10 mx-auto max-w-[1600px] px-5 xs:px-6 sm:px-8 lg:px-20">

            <!-- GRID -->
            <div class="grid grid-cols-12 gap-2.5">

                <!-- TITLE -->
                <div class="col-span-12 pb-10 text-center sm:pb-14">
                    <h2
                        class="relative mx-auto inline-block max-w-[900px] px-8 text-2xl font-black leading-tight text-[#11213A] sm:px-14 sm:text-4xl">
                        <img src="@/assets/quotes up.svg"
                            class="absolute left-0 top-[-14px] h-5 w-5 sm:-left-2 sm:top-[-20px] sm:h-8 sm:w-8" alt=""
                            aria-hidden="true" />

                        One region. Two countries. Endless possibilities.

                        <img src="@/assets/quotes down.svg"
                            class="absolute bottom-[-14px] right-0 h-5 w-5 sm:-right-2 sm:bottom-[-20px] sm:h-8 sm:w-8"
                            alt="" aria-hidden="true" />
                    </h2>
                </div>

                <!-- CONTENT -->
                <div class="col-span-12 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">

                    <!-- VIDEO CARDS -->
                    <article v-for="(video, i) in videos" :key="video.title"
                        class="group relative h-[500px] overflow-hidden rounded-xl shadow-[0_4px_10px_rgba(0,0,0,0.28)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_18px_rgba(0,0,0,0.3)]">

                        <!-- If this video is playing, show iframe in-place -->
                        <template v-if="currentVideoIndex === i">
                            <div class="absolute inset-0 bg-black">
                                <div class="relative h-full w-full">
                                    <div class="relative h-full w-full">
                                        <iframe
                                            :src="video.embed + '?autoplay=1&rel=0'"
                                            class="h-full w-full"
                                            frameborder="0"
                                            allow="autoplay; encrypted-media; picture-in-picture"
                                            allowfullscreen
                                        ></iframe>
                                    </div>
                                    <button @click.prevent="closePlayer" aria-label="Close video"
                                        class="absolute right-3 top-3 z-10 rounded bg-white/90 px-3 py-1 text-sm font-semibold text-[#11213A]">Close</button>
                                </div>
                            </div>
                        </template>

                        <!-- Otherwise show thumbnail + play button -->
                        <template v-else>
                            <img :src="video.image" :alt="video.alt" loading="lazy"
                                class="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />

                            <!-- LAVENDER FADE -->
                            <div class="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-[#6F7FDD]/95 via-[#6F7FDD]/55 to-transparent"
                                aria-hidden="true"></div>

                            <!-- SHORT TAG -->
                            <span
                                class="absolute right-4 top-4 rounded-md bg-[#7C8BDA] px-5 py-1 text-[9px] font-bold uppercase text-white">
                                Short
                            </span>

                            <!-- PLAY ICON -->
                            <button type="button"
                                class="absolute inset-0 flex items-center justify-center focus:outline-none focus-visible:ring-4 focus-visible:ring-white/80"
                                :aria-label="`Play video: ${video.title}`"
                                @click.prevent="play(i)"
                            >
                                <img src="@/assets/play-button.svg" alt="" aria-hidden="true"
                                    class="h-20 w-20 transition duration-300 group-hover:scale-110 group-hover:brightness-125 cursor-pointer" />
                            </button>

                            <!-- TEXT -->
                            <div class="absolute bottom-5 left-5 right-5 text-white">

                                <div class="absolute bottom-10">

                                    <h3 class="pb-2 text-sm font-normal uppercase leading-4">
                                        {{ video.title }}
                                    </h3>

                                    <p class="mt-2 text-[10px] italic leading-4 text-white/85">
                                        {{ video.description }}
                                    </p>

                                </div>

                                <p class="mt-5 text-right text-[10px] font-bold">
                                    {{ video.views }} views
                                </p>

                            </div>
                        </template>

                    </article>

                    <!-- MEDIA CHANNEL CARD -->
                    <aside
                        class="flex h-[500px] flex-col justify-center items-center rounded-xl bg-[#7C8BDA] px-7 text-white shadow-[0_4px_10px_rgba(0,0,0,0.28)]"
                        aria-labelledby="media-channel-title">

                        <h3 id="media-channel-title" class="text-3xl font-bold uppercase">
                            Media Channel
                        </h3>

                        <p class="mt-7 text-lg font-light leading-5 text-white/95 py-10">
                            Interviews, conference talks, and footage from across the
                            cross-border region. Hear advisors, CEOs, and partners
                            share what’s working, what isn’t, and where the
                            opportunities are. A full library of voices shaping the
                            Danish-German business community.
                        </p>

                        <router-link to="/media" aria-label="Browse more videos from the media channel"
                            class="mt-8 flex w-full items-center justify-center gap-2 rounded-md  bg-white px-6 py-3 text-lg font-bold text-[#11213A] transition-all duration-300 hover:bg-[#EEF0FF] focus:outline-none focus-visible:ring-4 focus-visible:ring-white/80">
                            Browse More
                            <span aria-hidden="true">▶</span>
                        </router-link>

                    </aside>

                </div>

            </div>

        </div>

        <!-- MODAL PLAYER -->
        <div v-if="currentVideo" class="fixed inset-0 z-50 flex items-center justify-center bg-black/70" @click.self="closePlayer">
            <div class="w-full max-w-3xl px-4">
                <div class="relative pb-[56.25%]"> <!-- 16:9 -->
                    <iframe
                        :src="currentVideo + '?autoplay=1&rel=0'"
                        class="absolute left-0 top-0 h-full w-full rounded-lg"
                        frameborder="0"
                        allow="autoplay; encrypted-media; picture-in-picture"
                        allowfullscreen
                    ></iframe>
                </div>

                <button @click="closePlayer" class="mt-4 rounded bg-white px-4 py-2">Close</button>
            </div>
        </div>

    </section>
</template>

<script setup>
import mediaPerson1 from '@/assets/media-person1.png'
import mediaPerson2 from '@/assets/media-person2.png'
import mediaPerson3 from '@/assets/media-person3.png'

import { ref } from 'vue'

const currentVideoIndex = ref(null)

function play(index) {
    currentVideoIndex.value = index
}

function closePlayer() {
    currentVideoIndex.value = null
}

const videos = [
    {
        title: "Cross-border business, what's holding it back?",
        description: 'An interview with Business Director of Border Business Sønder, Peter Engel',
        image: mediaPerson1,
        alt: 'Business interview with Peter Engel discussing cross-border business challenges',
        views: '3.1K',
        embed: 'https://www.youtube.com/embed/5fDe_LQ-qcc'
    },
    {
        title: 'What does it really take to move to another country for a job?',
        description: 'An interview with HR Business Partner of Ambizz Feed & Biofuel, Maria Løvgaard Pedersen',
        image: mediaPerson2,
        alt: 'Interview discussing international relocation and jobs abroad',
        views: '3.1K',
        embed: 'https://www.youtube.com/embed/G5m4kabOHSc'
    },
    {
        title: 'What does the cross-border region need?',
        description: 'An interview with Project Manager at Erhvervsfremme Nordfriesland, Katja Rosenburg',
        image: mediaPerson3,
        alt: 'Discussion about future needs of the Danish-German cross-border region',
        views: '3.1K',
        embed: 'https://www.youtube.com/embed/nh4SJTDYbkA'
    }
]
</script>