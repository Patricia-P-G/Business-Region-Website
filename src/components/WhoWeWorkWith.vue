<template>
    <!-- Who We Work With Section -->
  <section class="relative w-full overflow-hidden bg-[linear-gradient(to_right,#0B234E_0%,#7383D8_55%,#0B234E_100%)] py-14" aria-labelledby="partners-title"
    aria-describedby="partners-description" itemscope itemtype="https://schema.org/Organization">

    <!-- Center Glow -->
    <div class="pointer-events-none absolute left-1/2 top-1/2 h-162.5 w-162.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#A5B4FF]/25 blur-3xl"
        aria-hidden="true"></div>

    <!-- Right Spacing -->
    <div class="relative z-10 mx-auto max-w-400 px-5 xs:px-6 sm:px-8 lg:px-20">

        <!-- Grid Wrapper -->
        <div class="grid grid-cols-12 gap-2.5">

            <!-- Title -->
            <div class="col-span-12">
                <h2 id="partners-title" class="flex justify-center text-center text-xl font-bold uppercase text-white xs:text-2xl md:text-3xl lg:justify-start lg:text-4xl"
                    itemprop="name">
                    Who do we work with:
                </h2>

                <p id="partners-description" class="sr-only" itemprop="description">
                    Explore the partner companies we work with, including their experience, employees, industry, and company profiles.
                </p>
            </div>

            <!-- Underline -->
            <div class="col-span-12">
                <hr class="border-0 border-t-2 border-white/90" />
            </div>

            <!-- Cards Grid Wrapper -->
            <ul class="col-span-12 grid grid-cols-1 gap-8 pt-10 md:grid-cols-3 md:gap-12" aria-label="Partner companies">

            <!-- Card -->
                <li v-for="company in companies" :key="company.name" class="list-none">

                    <!-- To make it accessible (each page) -->
                    <router-link :to="company.route" class="group block h-full rounded-lg bg-white p-5 shadow-[0_4px_4px_rgba(0,0,0,0.25)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_25px_rgba(255,255,255,0.85)] focus:outline-none focus-visible:ring-4 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B234E]"
                        :aria-label="`View more information about ${company.name}`" :title="`View more information about ${company.name}`" itemscope itemtype="https://schema.org/Organization"
                        itemprop="member">

                        <!-- Details Wrapper -->
                        <div class="flex items-start justify-between">

                            <!-- Image Wrapper -->
                            <div :class="['flex h-20 w-20 shrink-0 items-center justify-center overflow-hidden rounded-full', company.darkLogo ? 'bg-black' : 'border border-gray-400']">

                                <!-- Image -->
                                <img :src="company.logo" :alt="`${company.name} partner logo`" class="h-14 w-14 object-contain" loading="lazy" width="56"
                                    height="56"
                                    itemprop="logo"
                                />
                            </div>

                            <!-- Description List Wrapper -->
                            <dl class="text-right text-sm leading-6 text-[#7A7A7A]" :aria-label="`${company.name} company facts`">

                                <div>
                                    <dt class="sr-only">Years of experience</dt>
                                    <dd>years {{ company.years }}</dd>
                                </div>

                                <div>
                                    <dt class="sr-only">Employees</dt>
                                    <dd>employees {{ company.employees }}</dd>
                                </div>

                                <div>
                                    <dt class="sr-only">Trust status</dt>
                                    <dd>{{ company.trust }}</dd>
                                </div>
                            </dl>
                        </div>

                        <!-- Underline -->
                        <div class="pb-2 pt-5" aria-hidden="true">
                            <hr class="border-[#B8C0F0]" />
                        </div>

                        <!-- Company Name -->
                        <h3 class="text-lg font-semibold text-black" itemprop="name">
                            {{ company.name }}
                        </h3>

                        <!-- Industry -->
                        <p class="text-base text-[#444]" itemprop="description">
                            {{ company.industry }}
                        </p>
                    </router-link>
                </li>
            </ul>

            <!-- Browse More Wrapper -->
            <div class="col-span-12 mt-8 flex justify-end">

                <!-- Browse More Button -->
                <router-link to="/network" class="group flex items-center gap-2 rounded-md px-4 py-2 text-base font-bold text-white transition-all duration-300 hover:bg-white/10 hover:text-[#D6DEFF] focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
                    aria-label="Browse more partner companies" title="Browse more partner companies">
                    
                    <span>Browse more</span>

                    <!-- Arrow -->
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" viewBox="0 0 24 24" aria-hidden="true"
                        focusable="false"><path d="M0 0h24v24H0z" fill="none" /><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                        stroke-width="2" d="M5 12h14m-6 6l6-6m-6-6l6 6"/>
                    </svg>
                </router-link>
            </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import businessEsbjerg from "@/assets/network/business esbjerg.png";
import businessKolding from "@/assets/network/business kolding.png";
import copenhagenCapacity from "@/assets/network/copenhagen capacity.png";

const companies = [
  {
    name: "Business Esbjerg",
    industry: "Industry mentioned",
    logo: businessEsbjerg,
    years: "30+",
    employees: "200+",
    trust: "trusted company #1",
    darkLogo: false,
    route: "/partners/business-esbjerg",
  },
  {
    name: "Business Kolding",
    industry: "Industry mentioned",
    logo: businessKolding,
    years: "30+",
    employees: "200+",
    trust: "trusted company #1",
    darkLogo: true,
    route: "/partners/business-kolding",
  },
  {
    name: "Copenhagen Capacity",
    industry: "Industry mentioned",
    logo: copenhagenCapacity,
    years: "30+",
    employees: "200+",
    trust: "trusted company #1",
    darkLogo: false,
    route: "/partners/copenhagen-capacity",
  },
];
</script>
