<template>
  <section
    class="relative w-full overflow-hidden bg-[linear-gradient(to_bottom,#FFFFFF_0%,#F3F5FF_35%,#9BA8F0_100%)] py-16"
    aria-labelledby="guidance-title" aria-describedby="guidance-description" itemscope itemtype="https://schema.org/Organization">
    
    <div class="mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-25">
      
      <div>
        <div class="pt-6 text-center lg:col-start-1 lg:col-end-8 lg:pt-10 lg:text-left">
          <h1
            id="guidance-title"
            class="text-2xl font-semibold uppercase tracking-tight text-black xs:text-3xl lg:text-4xl"
            itemprop="name"
          >
            Receive a professional guidance
          </h1>
        </div>

        <hr class="border-primary pt-4 border-0 border-b-[3px]" aria-hidden="true" />

        <p
          id="guidance-description"
          class="max-w-6xl pb-5 pt-5 text-base leading-6 text-black text-center sm:text-lg lg:text-left lg:text-xl lg:leading-7"
          itemprop="description"
        >
          Our
          <span class="uppercase">advisors</span>
          bring together regional expertise, cross-border business knowledge,
          and valuable industry connections.
        </p>
      </div>

      <div
        class="mt-12 flex flex-col items-center gap-y-16 gap-x-6 transition-all duration-500 ease-in-out
               md:grid md:grid-cols-2 lg:grid-cols-12 lg:mt-20 lg:gap-y-24"
        aria-label="Professional advisors"
      >
        <article
          v-for="(person, index) in people"
          :key="person.name"
          @click="toggleFlip(index)"
          @keydown.enter="toggleFlip(index)"
          tabindex="0"
          :role="'button'"
          :aria-expanded="person.isFlipped"
          :class="[
            /* Base settings with smooth transition-all for fluid scaling */
            'group relative w-full [perspective:1000px] cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-4 rounded-[12px] transition-all duration-500 ease-in-out justify-self-center',
            
            /* Height scaling across breakpoints */
            'h-[260px] max-[1200px]:h-[230px] xs:max-[1200px]:h-[220px]',
            
            /* Width scaling: Auto fluid width for the 2-column grid system under 1023px, max cap on desktop views */
            'min-[1201px]:w-[500px] max-[1200px]:max-w-[440px] max-[1023px]:max-w-[460px]',
            
            /* Columns span configurations matching 12-grid standard desktop specs */
            person.side === 'left'
              ? 'lg:col-start-1 lg:col-end-6'
              : 'lg:col-start-7 lg:col-end-13'
          ]"
          itemscope
          itemtype="https://schema.org/Person"
        >
          <meta itemprop="name" :content="person.name" />
          <meta itemprop="jobTitle" :content="person.role" />
          <meta itemprop="email" :content="person.email" />
          <meta itemprop="telephone" :content="person.phone" />

          <div
            :class="[
              'relative h-full w-full rounded-[12px] transition-transform duration-700 ease-in-out [transform-style:preserve-3d] motion-reduce:transition-none',
              person.isFlipped ? '[transform:rotateY(180deg)]' : '[transform:none]'
            ]"
          >
            <div
              class="absolute inset-0 max-[1400px]:overflow-hidden min-[1401px]:overflow-visible rounded-[12px]
                     shadow-[0px_7.08px_8.68px_0.89px_rgba(0,0,0,0.29)]
                     [backface-visibility:hidden]"
            >
              <div
                class="relative h-full w-full overflow-hidden rounded-[12px] bg-white"
              >
                <div class="absolute left-6 top-5 max-w-[85%] xs:left-8 xs:top-6 lg:max-w-[340px]">
                  <img
                    src="@/assets/quotes up.svg"
                    alt=""
                    aria-hidden="true"
                    class="absolute left-0 top-0 h-5 w-5 xs:h-6 xs:w-6 transition-all duration-500"
                  />

                  <p class="pl-7 text-xs italic leading-4 text-black xs:pl-10 lg:text-[14px] lg:leading-5 transition-all duration-500" itemprop="description">
                    {{ person.quote }}
                  </p>

                  <img
                    src="@/assets/quotes down.svg"
                    alt=""
                    aria-hidden="true"
                    class="absolute bottom-[-12px] right-[-5px] h-5 w-5 xs:bottom-[-15px] xs:right-[-10px] xs:h-6 xs:w-6 transition-all duration-500"
                  />
                </div>

                <div
                  class="absolute bottom-0 left-0 w-full bg-white px-6 pb-5 pt-2 xs:px-8 xs:pb-5 xs:pt-3 max-[1399px]:w-full lg:w-[62%] transition-all duration-500"
                >
                  <hr class="border-[#7988D2] pb-2 xs:pb-3" aria-hidden="true" />

                  <h2
                    class="text-base font-bold leading-none text-[#12294B] xs:text-lg lg:text-xl transition-all duration-500"
                  >
                    {{ person.name }}
                  </h2>

                  <p
                    class="mt-1 text-[13px] font-medium leading-tight text-[#12294B] xs:mt-1.5 xs:text-[14px] lg:text-[15px] lg:leading-none transition-all duration-500"
                  >
                    {{ person.role }}
                  </p>
                </div>
              </div>

              <img
                :src="person.image"
                :alt="`${person.name}, ${person.role}`"
                class="pointer-events-none absolute bottom-0 z-10 drop-shadow-[0px_8px_12px_rgba(0,0,0,0.25)] transition-all duration-500
                       max-[1399px]:hidden
                       lg:max-[1400px]:right-0 lg:max-[1400px]:h-[240px]
                       min-[1401px]:right-[-130px] min-[1401px]:h-[305px]"
                loading="lazy"
                itemprop="image"
              />
            </div>

            <div class="absolute inset-0 max-[1400px]:overflow-hidden min-[1401px]:overflow-visible rounded-[12px] bg-white
                       shadow-[0px_7.08px_8.68px_0.89px_rgba(0,0,0,0.29)]
                       [transform:rotateY(180deg)]
                       [backface-visibility:hidden]"
              aria-label="Contact information"
            >
              <div class="absolute left-5 top-5 z-30 text-black xs:left-6 max-[1200px]:top-4 transition-all duration-500">
                <dl class="flex gap-4 text-xs xs:gap-6 lg:text-[15px] transition-all duration-500">
                  <div class="font-bold">
                    <dt class="pb-1">Email:</dt>
                    <dt>Phone:</dt>
                  </div>

                  <div>
                    <dd class="pb-1">
                      <a
                        :href="`mailto:${person.email}`"
                        @click.stop
                        class="block break-all focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                        :aria-label="`Email ${person.name} at ${person.email}`"
                      >
                        {{ person.email }}
                      </a>
                    </dd>

                    <dd>
                      <a
                        :href="`tel:${person.phone.replaceAll(' ', '')}`"
                        @click.stop
                        class="focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                        :aria-label="`Call ${person.name} at ${person.phone}`"
                      >
                        {{ person.phone }}
                      </a>
                    </dd>
                  </div>
                </dl>

                <div class="pt-2 xs:pt-3">
                  <p class="pb-1.5 text-xs font-bold lg:text-[15px] transition-all duration-500">
                    Share business card
                  </p>

                  <div class="flex items-center gap-3">
                    <a
                      :href="person.facebook"
                      @click.stop
                      target="_blank"
                      rel="noopener noreferrer"
                      class="relative z-40 inline-flex h-6 w-6 cursor-pointer
                             transition-transform duration-300 hover:scale-110
                             focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                      :aria-label="`Open ${person.name}'s Facebook profile`"
                    >
                      <img src="@/assets/facebook icon.svg" alt="" aria-hidden="true" class="h-6" />
                    </a>

                    <a
                      :href="person.linkedin"
                      @click.stop
                      target="_blank"
                      rel="noopener noreferrer"
                      class="relative z-40 inline-flex h-6 w-6 cursor-pointer
                             transition-transform duration-300 hover:scale-110
                             focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                      :aria-label="`Open ${person.name}'s LinkedIn profile`"
                      itemprop="sameAs"
                    >
                      <img src="@/assets/linkedin icon.svg" alt="" aria-hidden="true" class="h-6" />
                    </a>
                  </div>
                </div>
              </div>

              <div class="absolute bottom-0 left-0 h-[76px] w-full rounded-[12px] bg-[#7988D2] px-5 pt-3 text-white xs:px-6 transition-all duration-500">
                <h2 class="text-base font-bold leading-none xs:text-lg lg:text-xl transition-all duration-500">
                  {{ person.name }}
                </h2>
                <p class="mt-1.5 text-xs font-medium leading-tight lg:text-[15px] lg:leading-none transition-all duration-500">
                  {{ person.role }}
                </p>
              </div>

              <img 
                :src="person.image" 
                :alt="`${person.name}, ${person.role}`" 
                class="pointer-events-none absolute bottom-0 z-20 drop-shadow-[0px_8px_12px_rgba(0,0,0,0.25)] transition-all duration-500
                       max-[1023px]:right-[-25px] max-[1023px]:h-[180px] xs:max-[1023px]:h-[195px]
                       lg:max-[1200px]:right-[-20px] lg:max-[1200px]:h-[210px]
                       lg:max-[1400px]:right-0 lg:max-[1400px]:h-[240px]
                       min-[1401px]:right-[-70px] min-[1401px]:h-[300px]"
                loading="lazy"
              />
            </div>
            
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import dustin from '@/assets/about us/dustin.png'
import lewis from '@/assets/about us/lewis.png'
import peter from '@/assets/about us/peter.png'
import ida from '@/assets/about us/ida.png'

const people = ref([
  {
    name: 'Dustin Chwalek',
    role: 'Communication manager',
    email: 'dusch@toender.dk',
    phone: '+45 24 25 36 70',
    facebook: 'https://facebook.com/dustin',
    linkedin: 'https://linkedin.com/in/dustin',
    image: dustin,
    side: 'left',
    isFlipped: false,
    quote:
      'I work with communication and stakeholder engagement across the German-Danish border region, with a focus on strengthening collaboration between businesses, organizations, and regional initiatives.'
  },
  {
    name: 'Lewis C. Bardt',
    role: 'Project leader',
    email: 'lewis@email.dk',
    phone: '+45 00 00 00 00',
    facebook: 'https://facebook.com/lewis',
    linkedin: 'https://linkedin.com/in/lewis',
    image: lewis,
    side: 'right',
    isFlipped: false,
    quote:
      'My work focuses on building strong partnerships, managing collaborative projects, and supporting sustainable growth and development across the German-Danish border region.'
  },
  {
    name: 'Peter Engel-Andreasen',
    role: 'Project member',
    email: 'peter@email.dk',
    phone: '+45 00 00 00 00',
    facebook: 'https://facebook.com/peter',
    linkedin: 'https://linkedin.com/in/peter',
    image: peter,
    side: 'left',
    isFlipped: false,
    quote:
      'As a Business Advisor at Business Region DE-DK, I work closely with companies and regional partners to support cross-border collaboration and business development.'
  },
  {
    name: 'Ida Mahler Høeg',
    role: 'Administrations and finance coordinator',
    email: 'ida@email.dk',
    phone: '+45 00 00 00 00',
    facebook: 'https://facebook.com/ida',
    linkedin: 'https://linkedin.com/in/ida',
    image: ida,
    side: 'right',
    isFlipped: false,
    quote:
      'I ensure that projects and partnerships run smoothly through structured coordination and financial planning. My work includes managing budgets and helping create efficient processes.'
  }
])

const toggleFlip = (index) => {
  people.value[index].isFlipped = !people.value[index].isFlipped
}
</script>