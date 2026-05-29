<template>
    <!-- Browse Our Partners Section  -->
    <section class="relative w-full overflow-hidden bg-white py-14 sm:py-20" aria-labelledby="partners-title" aria-describedby="partners-description"
       itemscope itemtype="https://schema.org/Organization">

        <!-- Right Space -->
        <div class="relative z-10 mx-auto max-w-400 px-5 xs:px-6 sm:px-8 lg:px-20">

            <!-- Grid Wrapper -->
            <div class="grid grid-cols-12 gap-2.5">

                <!-- Title Wrapper -->
                <div class="col-span-12 pt-6 sm:pt-10">
                    <h1 id="partners-title" class="flex justify-center text-center text-xl font-bold uppercase text-primary xs:text-2xl md:text-3xl lg:justify-start lg:text-4xl"
                        itemprop="name">
                        Browse our partners
                    </h1>

                    <!-- Screen Readers Only -->
                    <p id="partners-description" class="sr-only" itemprop="description">
                        Browse partner organizations connected to the Business DE-DK project.
                    </p>
                </div>

                <!-- Underline -->
                <div class="col-span-12 pb-8 sm:pb-10" aria-hidden="true">
                    <hr class="border-0 border-t-[3px] border-primary" />
                </div>

                <!-- Filter Buttons Wrapper -->
                <div class="col-span-12 mt-6 grid grid-cols-2 gap-4 pb-8 sm:grid-cols-4 sm:gap-6 lg:gap-16" aria-label="Filter partners by category">
                    <!-- Button -->
                    <button v-for="category in categories" :key="category" type="button" :aria-pressed="activeCategory === category"
                    @click="activeCategory = category" class="cursor-pointer rounded-lg py-3 text-sm font-medium uppercase text-white transition focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                    :class=" activeCategory === category ? 'bg-[#7C8BDA] hover:bg-[#6d7bd0]' : 'bg-[#3E5A78] hover:bg-[#334a63]'">
                        {{ category }}
                    </button>
                </div>

                <!-- Partners Grid Wrapper -->
                <ul class="col-span-12 mt-12 grid grid-cols-2 items-center gap-x-12 gap-y-5 sm:grid-cols-2 lg:mt-20 lg:grid-cols-3 lg:gap-x-20 lg:gap-y-20"
                 aria-label="Partner organizations" itemprop="member">

                    <!-- Partenrs Logo Card -->
                    <li v-for="partner in filteredPartners" :key="partner.name" class="flex min-h-25 list-none items-center justify-center"
                        itemscope itemtype="https://schema.org/Organization">
                        <img :src="partner.logo" :alt="partner.name" class="h-16 w-auto object-contain sm:h-20 lg:h-24" :class="partner.opacity ? 'opacity-70' : ''" loading="lazy"
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
import { ref, computed } from "vue";

import partner1 from "@/assets/about us/partner1.svg";
import partner2 from "@/assets/about us/partner2.svg";
import partner3 from "@/assets/about us/partner3.svg";
import partner4 from "@/assets/about us/partner4.svg";
import partner5 from "@/assets/about us/partner5.svg";
import partner6 from "@/assets/about us/partner6.svg";

// Currently selected filter
const activeCategory = ref("All");

// Available categories
const categories = ["All", "Lead Partner", "Project", "Network"];

// Partner data
const partners = [
  {
    name: "Tønder Kommune",
    logo: partner1,
    category: "Lead Partner",
  },

  {
    name: "Wirtschaftsforderung Nordfriesland",
    logo: partner2,
    category: "Project",
  },

  {
    name: "Wirtschaftsforderung Kreis Rendsburg-Eckernforde",
    logo: partner3,
    category: "Project",
  },

  {
    name: "Jackstadt-Zentrum",
    logo: partner4,
    category: "Network",
  },

  {
    name: "Gemeinsam Stark",
    logo: partner5,
    category: "Network",
  },

  {
    name: "Tønder Erhvervsråd",
    logo: partner6,
    category: "Lead Partner",
  },
];

// Filter partners based on selected category
const filteredPartners = computed(() => {
  if (activeCategory.value === "All") {
    return partners;
  }

  return partners.filter((partner) => partner.category === activeCategory.value);
});
</script>
