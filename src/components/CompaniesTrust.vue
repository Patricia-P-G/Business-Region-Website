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
          <hr class="border-0 border-t-[2px] border-primary" />
        </div>

        <div class="col-span-12 mt-10 md:mt-20">
          <!-- MOBILE -->
          <div class="flex flex-col gap-8 md:hidden">
            <article
              v-for="person in testimonials"
              :key="person.name"
              class="testimonial-card active-card mobile-card"
            >
              <div class="flex items-center gap-4">
                <img
                  :src="person.image"
                  :alt="`${person.name} portrait`"
                  class="testimonial-img shrink-0 rounded-full object-cover"
                />

                <div class="min-w-0">
                  <h3 class="text-base font-semibold xs:text-lg">
                    {{ person.name }}
                  </h3>

                  <p class="mt-1 text-xs italic text-white/75">
                    {{ person.position }}
                  </p>
                </div>
              </div>

              <p class="testimonial-text">
                {{ person.quote }}
              </p>

              <span class="quote-right">”</span>
            </article>
          </div>

          <!-- TABLET / DESKTOP -->
          <div class="testimonial-desktop-grid hidden md:grid">
            <div
              v-for="(person, index) in testimonials"
              :key="person.name"
              class="testimonial-column"
            >
              <article
                class="testimonial-card"
                :class="activeIndex === index ? 'active-card' : 'small-card'"
                @click="activeIndex = index"
              >
                <div class="card-inner">
                  <div class="flex items-center gap-5">
                    <img
                      :src="person.image"
                      :alt="`${person.name} portrait`"
                      class="testimonial-img shrink-0 rounded-full object-cover"
                    />

                    <div class="min-w-0">
                      <h3 class="testimonial-name">
                        {{ person.name }}
                      </h3>

                      <p class="testimonial-position">
                        {{ person.position }}
                      </p>
                    </div>
                  </div>

                  <img
                    src="@/assets/quotes up.svg"
                    class="quote-img quote-img-up"
                    alt=""
                    aria-hidden="true"
                  />

                  <p class="testimonial-text">
                    {{ person.quote }}
                  </p>

                  <img
                    src="@/assets/quotes down.svg"
                    class="quote-img quote-img-down"
                    alt=""
                    aria-hidden="true"
                  />
                </div>
              </article>
            </div>
          </div>

          <div class="mt-16 hidden justify-center gap-3 md:flex">
            <button
              v-for="(_, index) in testimonials"
              :key="index"
              @click="activeIndex = index"
              class="h-2 w-2 rounded-full transition-all duration-300"
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


<style scoped>
.testimonial-desktop-grid {
  grid-template-columns: repeat(12, minmax(0, 1fr));
  gap: 10px;
  align-items: center;
}

.testimonial-column {
  grid-column: span 4 / span 4;
  width: 100%;
}

.testimonial-card {
  position: relative;
  width: 100%;
  border-radius: 14px;
  overflow: visible;
  transition:
    opacity 0.45s ease,
    background-color 0.45s ease;
}

.card-inner {
  position: relative;
  min-height: 420px;
  border-radius: 14px;
  background: #12294b;
  padding: 40px;
  color: white;
  box-shadow: 0 0 18px rgba(121, 139, 210, 0.65);
  transition:
    transform 0.45s ease,
    background-color 0.45s ease;
}

.testimonial-img {
  width: 72px;
  height: 72px;
}

.testimonial-name {
  font-size: 18px;
  font-weight: 600;
}

.testimonial-position {
  margin-top: 4px;
  font-size: 12px;
  font-style: italic;
  color: rgb(255 255 255 / 0.7);
}

.active-card {
  opacity: 1;
  z-index: 20;
}

.active-card .card-inner {
  transform: scale(1);
}

.small-card {
  opacity: 0.65;
}

.small-card .card-inner {
  transform: scale(0.82);
  background: #5d7091;
}

.testimonial-text {
  position: relative;
  z-index: 10;
  margin-top: 52px;
  padding-left: 48px;
  padding-right: 38px;
  font-size: 15px;
  line-height: 1.7;
}

.quote-img {
  position: absolute;
  width: 32px;
  height: 40px;
}

.quote-img-up {
  left: 26px;
  top: 128px;
}

.quote-img-down {
  right: 26px;
  bottom: 24px;
}

.quote-right {
  position: absolute;
  right: 24px;
  bottom: 10px;
  font-size: 58px;
  font-weight: 900;
  line-height: 1;
  color: #7c8bda;
}

/* DESKTOP SHRINK STEP 1 */
@media (min-width: 1200px) and (max-width: 1399px) {
  .card-inner {
    min-height: 360px;
    padding: 28px;
  }

  .testimonial-img {
    width: 58px;
    height: 58px;
  }

  .testimonial-name {
    font-size: 15px;
  }

  .testimonial-position {
    font-size: 10px;
  }

  .testimonial-text {
    margin-top: 36px;
    padding-left: 32px;
    padding-right: 22px;
    font-size: 13px;
    line-height: 1.6;
  }

  .quote-img {
    width: 26px;
    height: 32px;
  }

  .quote-img-up {
    left: 20px;
    top: 104px;
  }

  .quote-img-down {
    right: 20px;
    bottom: 20px;
  }

  .small-card .card-inner {
    transform: scale(0.86);
  }
}

/* DESKTOP SHRINK STEP 2 */
@media (min-width: 1050px) and (max-width: 1199px) {
  .card-inner {
    min-height: 330px;
    padding: 22px;
  }

  .testimonial-img {
    width: 50px;
    height: 50px;
  }

  .testimonial-name {
    font-size: 13px;
  }

  .testimonial-position {
    font-size: 9px;
  }

  .testimonial-text {
    margin-top: 28px;
    padding-left: 26px;
    padding-right: 14px;
    font-size: 12px;
    line-height: 1.55;
  }

  .quote-img {
    width: 22px;
    height: 28px;
  }

  .quote-img-up {
    left: 16px;
    top: 88px;
  }

  .quote-img-down {
    right: 16px;
    bottom: 18px;
  }

  .small-card .card-inner {
    transform: scale(0.88);
  }
}

/* DESKTOP SHRINK STEP 3 - still 3 cards */
@media (min-width: 949px) and (max-width: 1049px) {
  .testimonial-desktop-grid {
    gap: 8px;
  }

  .card-inner {
    min-height: 310px;
    padding: 18px;
  }

  .testimonial-img {
    width: 44px;
    height: 44px;
  }

  .testimonial-name {
    font-size: 12px;
  }

  .testimonial-position {
    font-size: 8px;
  }

  .testimonial-text {
    margin-top: 24px;
    font-size: 11px;
    line-height: 1.5;
  }

  .quote-img {
    width: 20px;
    height: 24px;
  }

  .quote-img-up {
    left: 14px;
    top: 78px;
  }

  .quote-img-down {
    right: 14px;
    bottom: 16px;
  }

  .small-card .card-inner {
    transform: scale(0.9);
  }
}

/* FROM 948PX DOWN: 1 CARD PER ROW */
@media (min-width: 768px) and (max-width: 948px) {
  .testimonial-desktop-grid {
    grid-template-columns: 1fr;
    gap: 24px;
  }

  .testimonial-column {
    grid-column: auto;
  }

  .card-inner {
    min-height: auto;
    padding: 24px 22px 30px;
  }

  .testimonial-img {
    width: 58px;
    height: 58px;
  }

  .testimonial-name {
    font-size: 16px;
  }

  .testimonial-position {
    font-size: 11px;
  }

  .testimonial-text {
    margin-top: 28px;
    padding-left: 24px;
    padding-right: 18px;
    font-size: 14px;
    line-height: 1.6;
  }

   .quote-right {
    display: none;
  }

  .quote-img {
    display: none;
  }

  .quote-img {
    width: 24px;
    height: 30px;
  }

  .quote-img-up {
    left: 18px;
    top: 86px;
  }

  .quote-img-down {
    right: 20px;
    bottom: 16px;
  }

  .small-card {
    opacity: 1;
  }

  .small-card .card-inner {
    transform: scale(1);
  }
}

/* MOBILE */
@media (max-width: 767px) {
  .mobile-card {
    background: #12294b;
    padding: 24px 22px 56px;
    color: white;
    box-shadow: 0 0 18px rgba(121, 139, 210, 0.65);
  }

  .mobile-card:nth-child(1),
  .mobile-card:nth-child(2),
  .mobile-card:nth-child(3)
 {
    background: #405b77;
  }

  .testimonial-img {
    width: 72px;
    height: 72px;
  }

  .testimonial-text {
    margin-top: 32px;
    padding-left: 24px;
    padding-right: 10px;
    font-size: 14px;
    line-height: 1.65;
    color: white;
  }

  .quote-right {
    display: none;
  }

  .quote-img {
    display: none;
  }
}

/* SMALL MOBILE */
@media (max-width: 420px) {
  .mobile-card {
    padding: 22px 18px 52px;
  }

  .testimonial-img {
    width: 62px;
    height: 62px;
  }

  .testimonial-text {
    margin-top: 28px;
    padding-left: 18px;
    padding-right: 6px;
    font-size: 13px;
    line-height: 1.6;
  }

   .quote-right {
    display: none;
  }

  .quote-img {
    display: none;
  }
}
</style>