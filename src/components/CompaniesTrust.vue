<template>
  <section
    class="relative w-full overflow-hidden bg-[linear-gradient(to_bottom,#F8F8F8_0%,#EEF0FF_55%,#9BA8F0_100%)] py-14 sm:py-20"
    aria-labelledby="partners-title"
  >
    <div class="relative z-10 mx-auto max-w-[1600px] px-5 xs:px-6 sm:px-8 lg:px-20">
      <div class="grid grid-cols-12 gap-2.5">
        <div class="col-span-12">
          <h2
            id="partners-title"
            class="flex justify-center text-center text-xl font-bold uppercase text-primary xs:text-2xl md:text-3xl lg:justify-start lg:text-4xl"
          >
            Companies that trust us:
          </h2>
        </div>

        <div class="col-span-12">
          <hr class="border-0 border-t-[2px] border-primary" aria-hidden="true" />
        </div>

        <div class="col-span-12 mt-10 md:mt-20">
          
          <div class="flex flex-col gap-8 md:hidden" aria-hidden="true">
            <article
              v-for="(person, index) in testimonials"
              :key="`mobile-${person.name}`"
              class="relative w-full overflow-visible rounded-[14px] opacity-100 transition-all duration-[0.45s] ease-in-out p-6 pb-14 max-[420px]:px-4.5 max-[420px]:pb-13 text-white shadow-[0_0_18px_rgba(121,139,210,0.65)]"
              :class="[
                index < 3 ? 'bg-[#405b77]' : 'bg-[#12294b]'
              ]"
            >
              <div class="flex items-center gap-4">
                <img
                  :src="person.image"
                  class="shrink-0 rounded-full object-cover w-[72px] h-[72px] max-[420px]:w-[62px] max-[420px]:h-[62px]"
                />

                <div class="min-w-0">
                  <h3 class="text-base font-semibold xs:text-lg">
                    <span>{{ person.name }}</span>
                  </h3>

                  <p class="mt-1 text-xs italic text-white/75">
                    {{ person.position }}
                  </p>
                </div>
              </div>

              <p class="relative z-10 text-white mt-8 pl-6 pr-2.5 text-sm leading-[1.65] max-[420px]:mt-7 max-[420px]:pl-4.5 max-[420px]:pr-1.5 max-[420px]:text-xs max-[420px]:leading-[1.6]">
                {{ person.quote }}
              </p>
            </article>
          </div>

          <div 
            class="hidden md:grid grid-cols-12 items-center gap-2.5 max-[1399px]:gap-2 max-[1049px]:grid-cols-1 max-[1049px]:gap-6" 
            role="list" 
            aria-label="Customer Testimonials"
          >
            <div
              v-for="(person, index) in testimonials"
              :key="`desktop-${person.name}`"
              class="col-span-4 w-full max-[1049px]:col-span-1"
              role="listitem"
            >
              <article
                class="relative w-full overflow-visible rounded-[14px] transition-all duration-[0.45s] ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#6474bd] focus-visible:outline-offset-4"
                :class="[
                  activeIndex === index 
                    ? 'opacity-100 z-20' 
                    : 'max-[1049px]:opacity-100 max-[1049px]:z-auto opacity-65'
                ]"
                role="button"
                :tabindex="0"
                :aria-pressed="activeIndex === index ? 'true' : 'false'"
                @click="activeIndex = index"
                @keydown="(e) => handleCardKeydown(e, index)"
                itemscope
                itemtype="https://schema.org/Review"
              >
                <div 
                  class="relative rounded-[14px] p-10 text-white transition-all duration-[0.45s] ease-in-out shadow-[0_0_18px_rgba(121,139,210,0.65)] min-h-[420px] max-[1399px]:min-h-[360px] max-[1399px]:p-7 max-[1199px]:min-h-[330px] max-[1199px]:p-5.5 max-[1049px]:min-h-0 max-[1049px]:px-5.5 max-[1049px]:pt-6 max-[1049px]:pb-7.5"
                  :class="[
                    activeIndex === index 
                      ? 'scale-100 bg-[#12294b] max-[1049px]:bg-[#405b77]' 
                      : 'scale-[0.82] bg-[#5d7091] max-[1399px]:scale-[0.86] max-[1199px]:scale-[0.88] max-[1049px]:scale-100 max-[1049px]:bg-[#405b77]'
                  ]"
                >
                  <div class="flex items-center gap-5">
                    <img
                      :src="person.image"
                      :alt="`Portrait of ${person.name}`"
                      class="shrink-0 rounded-full object-cover w-[72px] h-[72px] max-[1399px]:w-14 max-[1399px]:h-14 max-[1199px]:w-12 max-[1199px]:h-12 max-[1049px]:w-14 max-[1049px]:h-14"
                    />

                    <div class="min-w-0">
                      <h3 class="text-xl font-semibold max-[1399px]:text-sm max-[1199px]:text-xs max-[1049px]:text-base" itemprop="author" itemscope itemtype="https://schema.org/Person">
                        <span itemprop="name">{{ person.name }}</span>
                      </h3>

                      <p class="mt-1 text-xs italic text-white/70 max-[1399px]:text-[10px] max-[1199px]:text-[9px] max-[1049px]:text-xs">
                        {{ person.position }}
                      </p>
                    </div>
                  </div>

                  <img
                    src="@/assets/quotes up.svg"
                    class="absolute w-8 h-10 left-[26px] top-[128px] max-[1399px]:w-[26px] max-[1399px]:h-8 max-[1399px]:left-5 max-[1399px]:top-[104px] max-[1199px]:w-5.5 max-[1199px]:h-7 max-[1199px]:left-4 max-[1199px]:top-[88px] max-[1049px]:hidden"
                    alt=""
                    aria-hidden="true"
                  />

                  <p 
                    class="relative z-10 leading-[1.7] mt-[52px] pl-12 pr-[38px] text-[15px] max-[1399px]:mt-9 max-[1399px]:pl-8 max-[1399px]:pr-5.5 max-[1399px]:text-[13px] max-[1399px]:leading-[1.6] max-[1199px]:mt-7 max-[1199px]:pl-6.5 max-[1199px]:pr-3.5 max-[1199px]:text-[12px] max-[1199px]:leading-[1.55] max-[1049px]:mt-7 max-[1049px]:pl-6 max-[1049px]:pr-4.5 max-[1049px]:text-sm max-[1049px]:leading-[1.6]" 
                    itemprop="reviewBody"
                  >
                    {{ person.quote }}
                  </p>

                  <img
                    src="@/assets/quotes down.svg"
                    class="absolute w-8 h-10 right-[26px] bottom-6 max-[1399px]:w-[26px] max-[1399px]:h-8 max-[1399px]:right-5 max-[1399px]:bottom-5 max-[1199px]:w-5.5 max-[1199px]:h-7 max-[1199px]:right-4 max-[1199px]:bottom-4.5 max-[1049px]:hidden"
                    alt=""
                    aria-hidden="true"
                  />
                </div>
              </article>
            </div>
          </div>

          <div class="mt-16 hidden justify-center gap-3 max-[1049px]:!hidden md:flex" role="tablist" aria-label="Testimonial navigation dots">
            <button
              v-for="(person, index) in testimonials"
              :key="index"
              @click="activeIndex = index"
              class="h-2 w-2 rounded-full transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-2"
              :class="activeIndex === index ? 'scale-125 bg-primary' : 'bg-[#D9D9F2]'"
              role="tab"
              :aria-selected="activeIndex === index ? 'true' : 'false'"
              :aria-label="`Show testimonial from ${person.name}`"
            ></button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";

import person1 from "@/assets/person1.png";
import person2 from "@/assets/person2.png";
import person3 from "@/assets/person3.png";

const activeIndex = ref(1);

const testimonials = [
  {
    name: "Kristian Levering",
    position: "Manager of Levering & CO",
    image: person1,
    quote:
      "Business Region helped us build stronger cross-border connections and discover valuable opportunities across the region.",
  },
  {
    name: "Hans Zubruck",
    position: "CEO of Mackletrusk",
    image: person2,
    quote:
      "Business Region played a major role in improving our cross-border collaboration. Through this platform, we connected with valuable partners, expanded our network, and discovered new opportunities that helped increase both productivity and growth.",
  },
  {
    name: "Daniel Larsson",
    position: "Head of department at ECRO",
    image: person3,
    quote:
      "The network helped us connect with relevant partners, companies, and initiatives across the Danish-German border.",
  },
];

const handleCardKeydown = (event, index) => {
  if (event.key === "Enter" || event.key === " ") {
    event.preventDefault();
    activeIndex.value = index;
  }
};
</script>