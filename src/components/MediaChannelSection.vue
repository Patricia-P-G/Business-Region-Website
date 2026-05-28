<template>
    <!-- Media Channel Section -->
    <section class="relative w-full overflow-hidden bg-white py-20" aria-labelledby="media-preview-title" aria-describedby="media-preview-description"
     itemscope itemtype="https://schema.org/ItemList">

        <!-- Right SpACE -->
        <div class="relative z-10 mx-auto max-w-400 px-5 xs:px-6 sm:px-8 lg:px-20">

            <!-- Grid Title Wrapper -->
            <div class="grid grid-cols-12 gap-2.5">
                <div class="col-span-12 pb-10 text-center sm:pb-14">
                    <h2 id="media-preview-title" class="relative mx-auto inline-block max-w-225 px-8 text-xl font-bold leading-tight text-primary sm:px-14 sm:text-4xl"
                        itemprop="name">

                        <!-- Up Quote Icon -->
                        <img src="@/assets/icons/quotes up.svg" alt="" aria-hidden="true" class="absolute left-0 -top-3.5 h-5 w-5 sm:-left-2 sm:-top-5 sm:h-8 sm:w-8"
                        />

                        One region. Two countries. Endless possibilities.

                        <!-- Quotes Down Icon -->
                        <img src="@/assets/icons/quotes down.svg" alt="" aria-hidden="true"class="absolute bottom-[-14px] right-0 h-5 w-5 sm:-right-2 sm:bottom-[-20px] sm:h-8 sm:w-8"
                        />
                    </h2>

                    <p id="media-preview-description" class="sr-only" itemprop="description">
                        Watch interviews, short videos, conference talks, and business stories from the
                        Danish-German cross-border region.
                    </p>
                </div>

                <!--Grid Cards Wrapper -->
                <div class="col-span-12 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
                    <!-- Card -->
                    <article v-for="(video, i) in videos" :key="video.title" class="group relative h-125 overflow-hidden rounded-xl shadow-[0_4px_10px_rgba(0,0,0,0.28)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_18px_rgba(0,0,0,0.3)]"
                        itemscope itemtype="https://schema.org/VideoObject" itemprop="itemListElement" :aria-labelledby="`video-title-${i}`">
                        
                        <!-- Meta Tags -->
                        <meta itemprop="name" :content="video.title" />
                        <meta itemprop="description" :content="video.description" />
                        <meta itemprop="embedUrl" :content="video.embed" />
                        <meta itemprop="uploadDate" content="2026-01-01" />

                        <!-- Video Player --- Displys embedded YouTube video when selected -->
                        <template v-if="currentVideoIndex === i">

                            <!-- Full-size video container -->
                            <div class="absolute inset-0 bg-black">
                                <iframe :src="video.embed + '?autoplay=1&rel=0'" :title="`Video player for ${video.title}`" class="h-full w-full" allow="autoplay; encrypted-media; picture-in-picture"
                                    allowfullscreen>
                                </iframe>

                                <!-- Close Button -->
                                <button type="button" @click.prevent="closePlayer" aria-label="Close video player" class="absolute right-3 top-3 z-10 rounded bg-white/90 px-3 py-1 text-sm font-semibold text-primary focus:outline-none focus-visible:ring-4 focus-visible:ring-white">
                                    Close
                                </button>
                            </div>
                        </template>

                        <!-- Thumbnail Preview -->
                        <template v-else>
                    
                            <!-- Thumbnail Picture -->
                            <img :src="video.image" :alt="video.alt" loading="lazy" class="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                            />

                            <!-- Purple Gradient -->
                            <div class="absolute inset-x-0 bottom-0 h-2/3 bg-linear-to-t from-secondary/95 via-[#6F7FDD]/55 to-transparent"
                            aria-hidden="true"></div>

                            <!-- Video Category/Tag -->
                            <span class="absolute right-4 top-4 rounded-md bg-secondary px-5 py-1 text-[9px] font-bold uppercase text-white">
                                Short
                            </span>

                            <!-- Play Button -->
                            <button type="button" class="absolute inset-0 flex items-center justify-center focus:outline-none focus-visible:ring-4 focus-visible:ring-white/80"
                                :aria-label="`Play video: ${video.title}`" @click.prevent="play(i)">

                                <!-- Play Icon -->
                                <img src="@/assets/icons/play-button.svg" alt="" aria-hidden="true" class="h-20 w-20 cursor-pointer transition duration-300 group-hover:scale-110 group-hover:brightness-125"
                                />
                            </button>

                            <!-- Video Details Wrapper -->
                            <div class="absolute inset-x-5 bottom-10 flex h-35 flex-col justify-end text-white">
                            
                                <!-- Title -->
                                <h3 :id="`video-title-${i}`" class="line-clamp-3 min-h-0 sm:min-h-18 pb-2 text-lg font-normal uppercase leading-6"
                                    itemprop="name">
                                    {{ video.title }}
                                </h3>

                                <!-- Description -->
                                <p class="line-clamp-3 min-h-12 text-[14px] italic leading-4 text-white/85" itemprop="description">
                                    {{ video.description }}
                                </p>

                                <!-- Accessibility Transcript -->
                                <a :href="`/transcripts/${i}`" class="sr-only focus:not-sr-only">
                                    Read transcript for {{ video.title }}
                                </a>
                            </div>
                        </template>
                    </article>

                    <!-- Media Channel Card -->
                    <aside class="flex h-125 flex-col items-center justify-center rounded-xl bg-secondary px-7 text-white shadow-[0_4px_10px_rgba(0,0,0,0.28)]"
                        aria-labelledby="media-channel-title">

                        <!-- Title -->
                        <h3 id="media-channel-title" class="text-3xl font-bold uppercase">Media Channel</h3>

                        <!-- Paragraph -->
                        <p class="py-10 text-justify text-lg font-normal leading-6 tracking-wide text-white">
                            Interviews, conference talks, and footage from across the cross-border region. Hear
                            advisors, CEOs, and partners share what’s working, what isn’t, and where the
                            opportunities are.
                        </p>

                        <!-- Browse More Button -->
                        <router-link to="/media" aria-label="Browse more videos from the media channel" class="mt-8 flex w-full items-center justify-center gap-2 rounded-md bg-white px-6 py-3 text-lg font-bold text-[#11213A] transition-all duration-300 hover:bg-[#EEF0FF] focus:outline-none focus-visible:ring-4 focus-visible:ring-white/80">
                            Browse More

                            <!-- Arrow -->
                            <svg aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 32 32"><path d="M0 0h32v32H0z" fill="none" />
                                <path fill="currentColor" d="M11.166 23.963L22.36 17.5c1.43-.824 1.43-2.175 0-3L11.165 8.037c-1.43-.826-2.598-.15-2.598 1.5v12.926c0 1.65 1.17 2.326 2.598 1.5z"/>
                            </svg>
                        </router-link>
                    </aside>
                </div>
            </div>
        </div>
   </section>
</template>

<script setup>
import mediaPerson1 from "@/assets/media/home/media-person1.webp";
import mediaPerson2 from "@/assets/media/home/media-person2.webp";
import mediaPerson3 from "@/assets/media/home/media-person3.webp";

import { ref } from "vue";

const currentVideoIndex = ref(null);

function play(index) {
  currentVideoIndex.value = index;
}

function closePlayer() {
  currentVideoIndex.value = null;
}

const videos = [
  {
    title: "Cross-border business, what's holding it back?",
    description: "An interview with Business Director of Border Business Sønder, Peter Engel",
    image: mediaPerson1,
    alt: "Business interview with Peter Engel discussing cross-border business challenges",
    views: "3.1K",
    embed: "https://www.youtube.com/embed/cP1LckqWuyQ",
  },
  {
    title: "What does it really take to move to another country for a job?",
    description:
      "An interview with HR Business Partner of Ambizz Feed & Biofuel, Maria Løvgaard Pedersen",
    image: mediaPerson2,
    alt: "Interview discussing international relocation and jobs abroad",
    views: "3.1K",
    embed: "https://www.youtube.com/embed/1ny8k3w_noM",
  },
  {
    title: "What does the cross-border region need?",
    description:
      "An interview with Project Manager at Erhvervsfremme Nordfriesland, Katja Rosenburg",
    image: mediaPerson3,
    alt: "Discussion about future needs of the Danish-German cross-border region",
    views: "3.1K",
    embed: "https://www.youtube.com/embed/AV2WvYJ9wlw",
  },
];
</script>
