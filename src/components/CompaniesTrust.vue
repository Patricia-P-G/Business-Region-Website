<template>
  
  <section id="testimonials" class="relative w-full overflow-hidden bg-[linear-gradient(to_bottom,#F8F8F8_0%,#EEF0FF_55%,#9BA8F0_100%)] py-14 sm:py-20"
    aria-labelledby="partners-title"
    aria-describedby="partners-description"
    itemscope
    itemtype="https://schema.org/Organization"
  >
    <div class="relative z-10 mx-auto max-w-[1600px] px-5 xs:px-6 sm:px-8 lg:px-20">
      <div class="grid grid-cols-12 gap-2.5">
        <!-- TITLE -->
        <div class="col-span-12">
          <h2
            id="partners-title"
            class="flex justify-center text-center text-xl font-bold uppercase text-primary xs:text-2xl md:text-3xl lg:justify-start lg:text-4xl"
            itemprop="name"
          >
            Companies that trust us:
          </h2>

          <p id="partners-description" class="sr-only">
            Customer testimonials from companies and professionals who trust Business Region for
            cross-border business collaboration, networking, and growth opportunities.
          </p>
        </div>

        <!-- LINE -->
        <div class="col-span-12" aria-hidden="true">
          <hr class="border-0 border-t-[2px] border-primary" />
        </div>

        <div class="col-span-12 mt-10 md:mt-20">
          <!-- MOBILE -->
          <div class="flex flex-col gap-8 md:hidden" aria-label="Customer testimonials">
            <article
              v-for="person in testimonials"
              :key="`mobile-${person.name}`"
              class="relative w-full overflow-visible rounded-[14px] bg-[#405b77] p-6 pb-14 text-white shadow-[0_0_18px_rgba(121,139,210,0.65)] max-[420px]:px-[18px] max-[420px]:pb-[52px]"
              itemscope
              itemtype="https://schema.org/Review"
              itemprop="review"
            >
              <div class="flex items-center gap-4">
                <img
                  :src="person.image"
                  :alt="`Portrait of ${person.name}, ${person.position}`"
                  class="h-[72px] w-[72px] shrink-0 rounded-full object-cover max-[420px]:h-[62px] max-[420px]:w-[62px]"
                  width="72"
                  height="72"
                  loading="lazy"
                  decoding="async"
                />

                <div class="min-w-0">
                  <h3
                    class="text-base font-semibold xs:text-lg"
                    itemprop="author"
                    itemscope
                    itemtype="https://schema.org/Person"
                  >
                    <span itemprop="name">{{ person.name }}</span>
                  </h3>

                  <p class="mt-1 text-xs italic text-white/75">
                    {{ person.position }}
                  </p>
                </div>
              </div>

              <blockquote
                class="relative z-10 mt-8 pl-6 pr-2.5 text-sm leading-[1.65] text-white max-[420px]:mt-7 max-[420px]:pl-[18px] max-[420px]:pr-1.5 max-[420px]:text-[13px] max-[420px]:leading-[1.6]"
                itemprop="reviewBody"
              >
                {{ person.quote }}
              </blockquote>
            </article>
          </div>

          <!-- TABLET / DESKTOP -->
          <div
            class="hidden grid-cols-12 items-center gap-2.5 md:grid max-[1399px]:gap-2 max-[1049px]:grid-cols-1 max-[1049px]:gap-6"
            aria-label="Customer testimonials carousel"
          >
            <article
              v-for="(person, index) in testimonials"
              :key="`desktop-${person.name}`"
              class="col-span-4 w-full max-[1049px]:col-span-1"
              itemscope
              itemtype="https://schema.org/Review"
              itemprop="review"
            >
              <button
                type="button"
                class="relative w-full overflow-visible rounded-[14px] text-left transition-all duration-[0.45s] ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#6474bd] motion-reduce:transition-none"
                :class="[
                  activeIndex === index
                    ? 'z-20 opacity-100'
                    : 'opacity-65 max-[1049px]:z-auto max-[1049px]:opacity-100'
                ]"
                :aria-pressed="activeIndex === index"
                :aria-label="`Show testimonial from ${person.name}`"
                @click="activeIndex = index"
              >
                <div
                  class="relative min-h-[420px] rounded-[14px] p-10 text-white shadow-[0_0_18px_rgba(121,139,210,0.65)] transition-all duration-[0.45s] ease-in-out motion-reduce:transition-none motion-reduce:transform-none max-[1399px]:min-h-[360px] max-[1399px]:p-7 max-[1199px]:min-h-[330px] max-[1199px]:p-[22px] max-[1049px]:min-h-0 max-[1049px]:px-[22px] max-[1049px]:pb-[30px] max-[1049px]:pt-6"
                  :class="[
                    activeIndex === index
                      ? 'scale-100 bg-[#12294b] max-[1049px]:bg-[#405b77]'
                      : 'scale-[0.82] bg-[#5d7091] max-[1399px]:scale-[0.86] max-[1199px]:scale-[0.88] max-[1049px]:scale-100 max-[1049px]:bg-[#405b77]'
                  ]"
                >
                  <div class="flex items-center gap-5">
                    <img
                      :src="person.image"
                      :alt="`Portrait of ${person.name}, ${person.position}`"
                      class="h-[72px] w-[72px] shrink-0 rounded-full object-cover max-[1399px]:h-[58px] max-[1399px]:w-[58px] max-[1199px]:h-[50px] max-[1199px]:w-[50px] max-[1049px]:h-[58px] max-[1049px]:w-[58px]"
                      width="72"
                      height="72"
                      loading="lazy"
                      decoding="async"
                    />

                    <div class="min-w-0">
                      <h3
                        class="text-xl font-semibold max-[1399px]:text-[15px] max-[1199px]:text-[13px] max-[1049px]:text-base"
                        itemprop="author"
                        itemscope
                        itemtype="https://schema.org/Person"
                      >
                        <span itemprop="name">{{ person.name }}</span>
                      </h3>

                      <p class="mt-1 text-xs italic text-white/70 max-[1399px]:text-[10px] max-[1199px]:text-[9px] max-[1049px]:text-[11px]">
                        {{ person.position }}
                      </p>
                    </div>
                  </div>

                  <img
                    src="@/assets/quotes up.svg"
                    class="absolute left-[26px] top-[128px] h-10 w-8 max-[1399px]:left-5 max-[1399px]:top-[104px] max-[1399px]:h-8 max-[1399px]:w-[26px] max-[1199px]:left-4 max-[1199px]:top-[88px] max-[1199px]:h-7 max-[1199px]:w-[22px] max-[1049px]:hidden"
                    alt=""
                    aria-hidden="true"
                  />

                  <blockquote
                    class="relative z-10 mt-[52px] pl-12 pr-[38px] text-[15px] leading-[1.7] max-[1399px]:mt-9 max-[1399px]:pl-8 max-[1399px]:pr-[22px] max-[1399px]:text-[13px] max-[1399px]:leading-[1.6] max-[1199px]:mt-7 max-[1199px]:pl-[26px] max-[1199px]:pr-3.5 max-[1199px]:text-xs max-[1199px]:leading-[1.55] max-[1049px]:mt-7 max-[1049px]:pl-6 max-[1049px]:pr-[18px] max-[1049px]:text-sm max-[1049px]:leading-[1.6]"
                    itemprop="reviewBody"
                  >
                    {{ person.quote }}
                  </blockquote>

                  <img
                    src="@/assets/quotes down.svg"
                    class="absolute bottom-6 right-[26px] h-10 w-8 max-[1399px]:bottom-5 max-[1399px]:right-5 max-[1399px]:h-8 max-[1399px]:w-[26px] max-[1199px]:bottom-[18px] max-[1199px]:right-4 max-[1199px]:h-7 max-[1199px]:w-[22px] max-[1049px]:hidden"
                    alt=""
                    aria-hidden="true"
                  />
                </div>
              </button>
            </article>
          </div>

          <!-- DOTS -->
          <div
            class="mt-16 hidden justify-center gap-3 md:flex max-[1049px]:!hidden"
            aria-label="Select testimonial"
          >
            <button
              v-for="(person, index) in testimonials"
              :key="`dot-${person.name}`"
              type="button"
              class="h-3 w-3 rounded-full transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary motion-reduce:transition-none"
              :class="activeIndex === index ? 'scale-125 bg-primary' : 'bg-[#D9D9F2]'"
              :aria-label="`Show testimonial from ${person.name}`"
              :aria-current="activeIndex === index ? 'true' : undefined"
              @click="activeIndex = index"
            />
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
</script>