<template>
  <section
    class="relative w-full overflow-hidden bg-[linear-gradient(to_bottom,#F8F8F8_0%,#EEF0FF_55%,#9BA8F0_100%)] py-14 sm:py-20"
  >
    <div class="relative z-10 mx-auto max-w-[1600px] px-5 xs:px-6 sm:px-8 lg:px-25">
      <div class="grid grid-cols-12 gap-2.5">

        <!-- TITLE -->
        <div class="col-span-12">
          <h2 class="text-center text-2xl font-black uppercase text-[#11213A] sm:text-left sm:text-4xl">
            Companies that trust us:
          </h2>

          <hr class="mt-3 border-0 border-t-[3px] border-[#12294B]" />
        </div>

        <!-- TESTIMONIALS -->
        <div class="col-span-12 mt-14 sm:mt-20">
          <Swiper
            :modules="[Pagination, Keyboard]"
            :slides-per-view="1"
            :centered-slides="true"
            :loop="true"
            :initial-slide="1"
            :pagination="{ clickable: true }"
            :keyboard="{ enabled: true }"
            :space-between="24"
            :breakpoints="{
              768: {
                slidesPerView: 3,
                spaceBetween: 32
              }
            }"
            class="testimonial-swiper"
            @swiper="onSwiperInit"
            @slideChange="onSlideChange"
          >
            <SwiperSlide
              v-for="(person, index) in testimonials"
              :key="person.name"
            >
              <button
                type="button"
                class="flex w-full justify-center text-left"
                @click="goToTestimonial(index)"
                :aria-label="`Show testimonial from ${person.name}`"
              >
                <!-- ACTIVE CARD -->
                <article
                  v-if="activeIndex === index"
                  class="relative min-h-[330px] w-full max-w-[330px] rounded-xl bg-[#112E56] px-7 py-6 text-white shadow-[0_0_16px_rgba(121,139,210,0.9)] transition-all duration-300 sm:min-h-[360px]"
                >
                  <div class="flex items-center gap-4">
                    <img
                      :src="person.image"
                      :alt="person.name"
                      class="h-14 w-14 rounded-full object-cover"
                    />

                    <div>
                      <h3 class="text-sm font-semibold">
                        {{ person.name }}
                      </h3>

                      <p class="mt-1 text-xs italic text-white/70">
                        {{ person.position }}
                      </p>
                    </div>
                  </div>

                  <span class="absolute left-7 top-24 text-6xl font-black text-[#7C8BDA]">
                    “
                  </span>

                  <p class="relative z-10 mt-10 pl-10 pr-4 text-sm leading-5 text-white">
                    {{ person.quote }}
                  </p>

                  <span class="absolute bottom-5 right-8 text-6xl font-black text-[#7C8BDA]">
                    ”
                  </span>
                </article>

                <!-- SIMPLE CARD -->
                <article
                  v-else
                  class="flex h-24 w-full max-w-[360px] items-center gap-5 rounded-lg bg-[#496587] px-6 text-white shadow-lg transition-all duration-300 hover:bg-[#405B77] md:mt-28"
                >
                  <img
                    :src="person.image"
                    :alt="person.name"
                    class="h-14 w-14 rounded-full object-cover"
                  />

                  <div>
                    <h3 class="text-sm font-semibold">
                      {{ person.name }}
                    </h3>

                    <p class="mt-2 text-xs italic text-white/75">
                      {{ person.position }}
                    </p>
                  </div>
                </article>
              </button>
            </SwiperSlide>
          </Swiper>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

import { Swiper, SwiperSlide } from 'swiper/vue'
import { Pagination, Keyboard } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/pagination'

import person1 from '@/assets/person1.png'
import person2 from '@/assets/person2.png'
import person3 from '@/assets/person3.png'

const activeIndex = ref(1)
const swiperInstance = ref(null)

const onSwiperInit = swiper => {
  swiperInstance.value = swiper
  activeIndex.value = swiper.realIndex
}

const onSlideChange = swiper => {
  activeIndex.value = swiper.realIndex
}

const goToTestimonial = index => {
  activeIndex.value = index

  if (swiperInstance.value) {
    swiperInstance.value.slideToLoop(index)
  }
}

const testimonials = [
  {
    name: 'Kristian Levering',
    position: 'Manager of Levering & CO',
    image: person1,
    quote:
      'Business Region helped us build stronger cross-border connections and discover valuable opportunities across the region.'
  },
  {
    name: 'Hans Zubruck',
    position: 'CEO of Mackletrusk',
    image: person2,
    quote:
      'Business Region was essential for our cross-border collaboration. We managed to increase revenue and productivity thanks to this platform.'
  },
  {
    name: 'Daniel Larsson',
    position: 'Head of department at ECRO',
    image: person3,
    quote:
      'The network helped us connect with relevant partners, companies, and initiatives across the Danish-German border.'
  }
]
</script>

<style scoped>
.testimonial-swiper {
  padding-bottom: 70px;
}

:deep(.swiper-wrapper) {
  align-items: center;
}

:deep(.swiper-pagination) {
  bottom: 10px;
}

:deep(.swiper-pagination-bullet) {
  width: 10px;
  height: 10px;
  background: #b8b8e9;
  opacity: 1;
}

:deep(.swiper-pagination-bullet-active) {
  background: #11213a;
}

@media (max-width: 767px) {
  .testimonial-swiper {
    padding-bottom: 80px;
  }

  :deep(.swiper-pagination) {
    right: 8px;
    left: auto;
    top: 50%;
    bottom: auto;
    width: auto;
    transform: translateY(-50%);
    display: flex;
    flex-direction: column;
    gap: 18px;
  }
}
</style>