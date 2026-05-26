<template>
  <section
    class="relative w-full overflow-hidden bg-[linear-gradient(to_bottom,#F8F8F8_0%,#EEF0FF_55%,#9BA8F0_100%)] py-14 sm:py-20"
    aria-labelledby="partners-title"
  >
    <div class="relative z-10 mx-auto max-w-[1600px] px-5 xs:px-6 sm:px-8 lg:px-20">
      <div class="grid grid-cols-12 gap-2.5">
        <!-- TITLE -->
        <div class="col-span-12">
          <h2 id="partners-title" class="text-xl flex justify-center font-bold uppercase text-primary sm:text-4xl xs:text-xl">
            Companies that trust us:
          </h2>
        </div>

        <!-- UNDERLINE -->
        <div class="col-span-12">
          <hr class="border-0 border-t-[2px] border-primary" />
        </div>

        <!-- TESTIMONIALS -->
        <div class="col-span-12 mt-20">
          <!-- MOBILE -->
          <div class="flex flex-col gap-8 md:hidden">
            <article
              v-for="person in testimonials"
              :key="person.name"
              class="testimonial-card active-card"
            >
              <!-- HEADER -->
              <div class="flex items-center gap-4">
                <img
                  :src="person.image"
                  :alt="`${person.name} portrait`"
                  class="h-14 w-14 rounded-full object-cover"
                />

                <div>
                  <h3 class="text-lg  xs:text-sm font-semibold">
                    {{ person.name }}
                  </h3>

                  <p class="mt-1 text-xs italic text-black">
                    {{ person.position }}
                  </p>
                </div>
              </div>

              <!-- QUOTE -->
              <span class=" hidden md:visible quote-left"> “ </span>

              <p class="testimonial-text">
                {{ person.quote }}
              </p>

              <span class="quote-right"> ” </span>
            </article>
          </div>

          <!-- DESKTOP -->
          <div class="hidden md:grid grid-cols-12 items-center gap-2.5">
            <!-- LEFT CARD -->
            <div class="col-span-12 md:col-span-4">
              <article
                class="testimonial-card"
                :class="activeIndex === 0 ? 'active-card' : 'small-card'"
                @click="activeIndex = 0"
              >
                <div class="card-inner">
                  <!-- HEADER -->
                  <div class="flex items-center gap-4">
                    <img
                      :src="testimonials[0].image"
                      :alt="`${testimonials[0].name} portrait`"
                      class="h-14 w-14 rounded-full object-cover"
                    />

                    <div>
                      <h3 class="text-sm font-semibold">
                        {{ testimonials[0].name }}
                      </h3>

                      <p class="mt-1 text-xs italic text-white/70">
                        {{ testimonials[0].position }}
                      </p>
                    </div>
                  </div>

                  <!-- QUOTES -->
                  <span class="quote-left"> “ </span>

                  <p class="testimonial-text">
                    {{ testimonials[0].quote }}
                  </p>

                  <span class="quote-right"> ” </span>
                </div>
              </article>
            </div>

            <!-- MIDDLE CARD -->
            <div class="col-span-12 md:col-span-4">
              <article
                class="testimonial-card"
                :class="activeIndex === 1 ? 'active-card' : 'small-card'"
                @click="activeIndex = 1"
              >
                <div class="card-inner">
                  <!-- HEADER -->
                  <div class="flex items-center gap-4">
                    <img
                      :src="testimonials[1].image"
                      :alt="`${testimonials[1].name} portrait`"
                      class="h-14 w-14 rounded-full object-cover"
                    />

                    <div>
                      <h3 class="text-sm font-semibold">
                        {{ testimonials[1].name }}
                      </h3>

                      <p class="mt-1 text-xs italic text-white/70">
                        {{ testimonials[1].position }}
                      </p>
                    </div>
                  </div>

                  <!-- QUOTES -->
                  <span class="quote-left"> “ </span>

                  <p class="testimonial-text">
                    {{ testimonials[1].quote }}
                  </p>

                  <span class="quote-right"> ” </span>
                </div>
              </article>
            </div>

            <!-- RIGHT CARD -->
            <div class="col-span-12 md:col-span-4">
              <article
                class="testimonial-card"
                :class="activeIndex === 2 ? 'active-card' : 'small-card'"
                @click="activeIndex = 2"
              >
                <div class="card-inner">
                  <!-- HEADER -->
                  <div class="flex items-center gap-4">
                    <img
                      :src="testimonials[2].image"
                      :alt="`${testimonials[2].name} portrait`"
                      class="h-14 w-14 rounded-full object-cover"
                    />

                    <div>
                      <h3 class="text-sm font-semibold">
                        {{ testimonials[2].name }}
                      </h3>

                      <p class="mt-1 text-xs italic text-white/70">
                        {{ testimonials[2].position }}
                      </p>
                    </div>
                  </div>

                  <!-- QUOTES -->
                  <span class="quote-left"> “ </span>

                  <p class="testimonial-text">
                    {{ testimonials[2].quote }}
                  </p>

                  <span class="quote-right"> ” </span>
                </div>
              </article>
            </div>
          </div>

          <!-- DOTS -->
          <div class="mt-16 hidden justify-center gap-3 md:flex">
            <button
              v-for="(_, index) in testimonials"
              :key="index"
              @click="activeIndex = index"
              class="h-3 w-3 rounded-full transition-all duration-300"
              :class="activeIndex === index ? 'scale-125 bg-primary' : 'bg-[#D9D9F2]'"
              :aria-label="`Show testimonial ${index + 1}`"
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
      "Business Region was essential for our cross-border collaboration. We managed to increase revenue and productivity thanks to this platform.",
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

<style scoped>
.testimonial-card {
  width: 100%;
  min-height: 420px;
  border-radius: 14px;
  overflow: hidden;
  transition:
    opacity 0.45s ease,
    background-color 0.45s ease;
}

.card-inner {
  position: relative;

  min-height: 420px;

  border-radius: 14px;
  background: #12294b;

  padding: 28px;

  color: white;

  transition:
    transform 0.45s ease,
    background-color 0.45s ease;

  box-shadow: 0 0 18px rgba(121, 139, 210, 0.65);
}

.active-card {
  opacity: 1;
  z-index: 20;
}

.active-card .card-inner {
  transform: scale(1.08);
}

.small-card {
  opacity: 0.6;
}

.small-card .card-inner {
  transform: scale(0.82);
  background: #5d7091;
}

.testimonial-text {
  position: relative;
  z-index: 10;

  margin-top: 42px;

  padding-left: 38px;
  padding-right: 14px;

  font-size: 15px;
  line-height: 1.7;
}

.quote-left {
  position: absolute;

  left: 26px;
  top: 96px;

  font-size: 72px;
  font-weight: 900;

  color: #7c8bda;
}

.quote-right {
  position: absolute;
  right: 26px;
  bottom: 14px;
  font-size: 72px;
  font-weight: 900;
  color: #7c8bda;
}

@media (max-width: 767px) {
  .testimonial-card,
  .card-inner {
    min-height: auto;
  }

  .active-card .card-inner,
  .small-card .card-inner {
    transform: scale(1);
  }

  .small-card {
    opacity: 1;
  }
}
</style>
