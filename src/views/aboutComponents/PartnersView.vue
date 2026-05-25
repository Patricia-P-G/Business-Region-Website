<template>
    <section class="relative w-full overflow-hidden bg-white py-14 sm:py-20">
        <div class="relative z-10 mx-auto max-w-[1600px] px-5 xs:px-6 sm:px-8 lg:px-25">
            <div class="grid grid-cols-12 gap-2.5">

                <!-- TITLE -->
                <div class="col-span-12 pt-6 sm:pt-10">
                    <h1 class="text-3xl font-semibold uppercase tracking-tight text-black sm:text-4xl">
                        Browse our partners
                    </h1>
                </div>

                <!-- UNDERLINE -->
                <div class="col-span-12 pb-8 sm:pb-10">
                    <hr class="border-0 border-t-[3px] border-primary" />
                </div>

                <!-- FILTER BUTTONS -->
                <div class="col-span-12 mt-6 grid grid-cols-2 gap-4 pb-8 sm:grid-cols-4 sm:gap-6 lg:gap-16">
                    <button class="rounded-lg bg-[#7C8BDA] py-3 text-sm font-medium uppercase text-white transition hover:bg-[#6d7bd0]">
                        All
                    </button>

                    <button class="rounded-lg bg-[#3E5A78] py-3 text-sm font-medium uppercase text-white transition hover:bg-[#334a63]">
                        Lead Partner
                    </button>

                    <button class="rounded-lg bg-[#3E5A78] py-3 text-sm font-medium uppercase text-white transition hover:bg-[#334a63]">
                        Project
                    </button>

                    <button class="rounded-lg bg-[#3E5A78] py-3 text-sm font-medium uppercase text-white transition hover:bg-[#334a63]">
                        Network
                    </button>
                </div>

                <!-- PARTNERS -->
                <div class="col-span-12 mt-12 grid grid-cols-1 items-center gap-x-12 gap-y-14 sm:grid-cols-2 lg:mt-20 lg:grid-cols-3 lg:gap-x-20 lg:gap-y-20">
                    <div
                        v-for="partner in partners"
                        :key="partner.name"
                        class="flex min-h-[100px] items-center justify-center"
                    >
                        <img
                            :src="partner.logo"
                            :alt="partner.name"
                            class="h-16 w-auto object-contain sm:h-20 lg:h-24"
                            :class="partner.opacity ? 'opacity-70' : ''"
                        />
                    </div>
                </div>

            </div>
        </div>
    </section>
</template>

<script setup>
import partner1 from '@/assets/about us/partner1.png'
import partner2 from '@/assets/about us/partner2.png'
import partner3 from '@/assets/about us/partner3.png'

const partners = [
    { name: 'Partner 1 logo', logo: partner1 },
    { name: 'Partner 2 logo', logo: partner2 },
    { name: 'Partner 3 logo', logo: partner3 },
    { name: 'Partner 1 logo', logo: partner1, opacity: true },
    { name: 'Partner 2 logo', logo: partner2 },
    { name: 'Partner 3 logo', logo: partner3 }
]
</script>