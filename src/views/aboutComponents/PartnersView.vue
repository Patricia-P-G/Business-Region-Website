<template>
    <section
        class="relative w-full overflow-hidden bg-white py-14 sm:py-20"
        aria-labelledby="partners-title"
        aria-describedby="partners-description"
        itemscope
        itemtype="https://schema.org/Organization"
    >
        <div class="relative z-10 mx-auto max-w-[1600px] px-5 xs:px-6 sm:px-8 lg:px-25">
            <div class="grid grid-cols-12 gap-2.5">

                <!-- TITLE -->
                <div class="col-span-12 pt-6 sm:pt-10">
                    <h1
                        id="partners-title"
                        class="text-3xl font-semibold uppercase text-black sm:text-4xl"
                        itemprop="name"
                    >
                        Browse our partners
                    </h1>

                    <p id="partners-description" class="sr-only" itemprop="description">
                        Browse partner organizations connected to the Business DE-DK project.
                    </p>
                </div>

                <!-- UNDERLINE -->
                <div class="col-span-12 pb-8 sm:pb-10" aria-hidden="true">
                    <hr class="border-0 border-t-[3px] border-primary" />
                </div>

                <!-- FILTER BUTTONS -->
                <div
                    class="col-span-12 mt-6 grid grid-cols-2 gap-4 pb-8 sm:grid-cols-4 sm:gap-6 lg:gap-16"
                    aria-label="Filter partners by category"
                >
                    <button
                        type="button"
                        aria-pressed="true"
                        class="rounded-lg bg-[#7C8BDA] py-3 text-sm font-medium uppercase text-white transition hover:bg-[#6d7bd0] focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                    >
                        All
                    </button>

                    <button
                        type="button"
                        aria-pressed="false"
                        class="rounded-lg bg-[#3E5A78] py-3 text-sm font-medium uppercase text-white transition hover:bg-[#334a63] focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                    >
                        Lead Partner
                    </button>

                    <button
                        type="button"
                        aria-pressed="false"
                        class="rounded-lg bg-[#3E5A78] py-3 text-sm font-medium uppercase text-white transition hover:bg-[#334a63] focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                    >
                        Project
                    </button>

                    <button
                        type="button"
                        aria-pressed="false"
                        class="rounded-lg bg-[#3E5A78] py-3 text-sm font-medium uppercase text-white transition hover:bg-[#334a63] focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                    >
                        Network
                    </button>
                </div>

                <!-- PARTNERS -->
                <ul
                    class="col-span-12 mt-12 grid grid-cols-2 items-center gap-x-12 gap-y-5 sm:grid-cols-2 lg:mt-20 lg:grid-cols-3 lg:gap-x-20 lg:gap-y-20"
                    aria-label="Partner organizations"
                    itemprop="member"
                >
                    <li
                        v-for="partner in partners"
                        :key="partner.name"
                        class="flex min-h-[100px] items-center justify-center list-none"
                        itemscope
                        itemtype="https://schema.org/Organization"
                    >
                        <img
                            :src="partner.logo"
                            :alt="partner.name"
                            class="h-16 w-auto object-contain sm:h-20 lg:h-24"
                            :class="partner.opacity ? 'opacity-70' : ''"
                            loading="lazy"
                            itemprop="logo"
                        />

                        <meta itemprop="name" :content="partner.name" />
                    </li>
                </ul>

            </div>
        </div>
    </section>
</template>

<script setup>
import partner1 from '@/assets/about us/partner1.png';
import partner2 from '@/assets/about us/partner2.png';
import partner3 from '@/assets/about us/partner3.svg';
import partner4 from '@/assets/about us/partner4.svg';
import partner5 from '@/assets/about us/partner5.svg';
import partner6 from '@/assets/about us/partner6.svg';




const partners = [
    { name: 'Partner 1 logo', logo: partner1 },
    { name: 'Partner 2 logo', logo: partner2 },
    { name: 'Partner 3 logo', logo: partner3 },
    { name: 'Partner 4 logo', logo: partner4 },
    { name: 'Partner 5 logo', logo: partner5 },
    { name: 'Partner 6 logo', logo: partner6 }
]
</script>