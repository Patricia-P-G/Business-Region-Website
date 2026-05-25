<template>
  <section
    class="relative w-full overflow-hidden bg-[linear-gradient(to_bottom,#FFFFFF_0%,#F3F5FF_35%,#9BA8F0_100%)] py-16"
  >
    <div class="mx-auto px-12 sm:px-6 lg:px-25">
      <!-- TITLE -->
      <div>
        <div class="col-start-1 col-end-8 pt-10">
          <h1 class="uppercase text-4xl font-semibold tracking-tight text-black">
            Receive a professional guidance
          </h1>
        </div>

        <hr class="border-primary pt-4 border-0 border-b-[3px]" />

        <p class="max-w-6xl pb-15 pt-5 text-xl leading-7 text-black">
          Our
          <span class="uppercase">advisors</span>
          bring together regional expertise, cross-border business knowledge,
          and valuable industry connections.
        </p>
      </div>

      <!-- CARDS -->
      <div class="mt-20 grid grid-cols-12 gap-y-24">
        <div
          v-for="person in people"
          :key="person.name"
          :class="[
            'group relative h-[260px] w-[500px] [perspective:1000px]',
            person.side === 'left'
              ? 'col-start-1 col-end-6'
              : 'col-start-7 col-end-13'
          ]"
        >
          <!-- FLIP CONTAINER -->
          <div
            class="relative h-full w-full rounded-[12px]
                   transition-transform duration-700 ease-in-out
                   [transform-style:preserve-3d]
                   group-hover:[transform:rotateY(180deg)]"
          >
            <!-- FRONT -->
            <div
              class="absolute inset-0 overflow-visible rounded-[12px]
                     shadow-[0px_7.08px_8.68px_0.89px_rgba(0,0,0,0.29)]
                     [backface-visibility:hidden]"
            >
              <div
                class="relative h-full w-full overflow-hidden rounded-[12px] bg-white"
              >
                <!-- TEXT -->
                <div class="absolute left-8 top-7 max-w-[340px]">
                  <img
                    src="@/assets/quotes up.svg"
                    alt=""
                    aria-hidden="true"
                    class="absolute left-0 top-0 h-8 w-8"
                  />

                  <p class="pl-12 text-[15px] italic leading-5 text-black">
                    {{ person.quote }}
                  </p>

                  <img
                    src="@/assets/quotes down.svg"
                    alt=""
                    aria-hidden="true"
                    class="absolute bottom-[-20px] right-[-10px] h-8 w-8"
                  />
                </div>

                <!-- BOTTOM INFO -->
                <div
                  class="absolute bottom-0 left-0 w-[62%] bg-white px-8 pb-7 pt-4"
                >
                  <hr class="border-[#7988D2] pb-4" />

                  <h3
                    class="text-2xl font-bold leading-none text-[#12294B]"
                  >
                    {{ person.name }}
                  </h3>

                  <p
                    class="pt-2 text-[17px] font-medium leading-none text-[#12294B]"
                  >
                    {{ person.role }}
                  </p>
                </div>
              </div>

              <!-- PERSON IMAGE -->
              <img
                :src="person.image"
                :alt="person.name"
                class="pointer-events-none absolute bottom-0 right-[-130px] z-10 h-[305px]
                       drop-shadow-[0px_8px_12px_rgba(0,0,0,0.25)]"
              />
            </div>

            <!-- BACK -->
            <div
              class="absolute inset-0 overflow-visible rounded-[12px] bg-white
                     shadow-[0px_7.08px_8.68px_0.89px_rgba(0,0,0,0.29)]
                     [transform:rotateY(180deg)]
                     [backface-visibility:hidden]"
            >
              <!-- INFO -->
              <div class="absolute left-6 top-5 z-30 text-black">
                <div class="flex gap-8 text-[17px]">
                  <div class="space-y-2 font-bold">
                    <p>Email:</p>
                    <p>Phone:</p>
                  </div>

                  <div class="space-y-5">
                    <p>{{ person.email }}</p>
                    <p>{{ person.phone }}</p>
                  </div>
                </div>

                <!-- SOCIALS -->
                <div class="pt-4">
                  <p class="pb-2 text-[17px] font-bold">
                    Share business card
                  </p>

                  <div class="flex items-center gap-4">
                    <!-- FACEBOOK -->
                    <a
                      :href="person.facebook"
                      target="_blank"
                      rel="noopener noreferrer"
                      class="relative z-40 inline-flex h-7 w-7 cursor-pointer
                             transition-transform duration-300 hover:scale-110"
                    >
                      <img
                        src="@/assets/facebook icon.svg"
                        alt="Facebook"
                        class="h-7"
                      />
                    </a>

                    <!-- LINKEDIN -->
                    <a
                      :href="person.linkedin"
                      target="_blank"
                      rel="noopener noreferrer"
                      class="relative z-40 inline-flex h-7 w-7 cursor-pointer
                             transition-transform duration-300 hover:scale-110"
                    >
                      <img
                        src="@/assets/linkedin icon.svg"
                        alt="LinkedIn"
                        class="h-7"
                      />
                    </a>
                  </div>
                </div>
              </div>

              <!-- BOTTOM BAR -->
              <div
                class="absolute bottom-0 left-0 h-[86px] w-full rounded-[12px] bg-[#7988D2] px-6 pt-4 text-white"
              >
                <h3 class="text-2xl font-bold leading-none">
                  {{ person.name }}
                </h3>

                <p class="mt-3 text-[18px]">
                  {{ person.role }}
                </p>
              </div>

              <!-- PERSON IMAGE -->
              <img
                :src="person.image"
                :alt="person.name"
                class="pointer-events-none absolute bottom-0 right-[-70px] z-20 h-[300px]
                       drop-shadow-[0px_8px_12px_rgba(0,0,0,0.25)]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import dustin from '@/assets/about us/dustin.png'
import lewis from '@/assets/about us/lewis.png'
import peter from '@/assets/about us/peter.png'
import ida from '@/assets/about us/ida.png'

const people = [
  {
    name: 'Dustin Chwalek',
    role: 'Communication manager',
    email: 'dusch@toender.dk',
    phone: '+45 24 25 36 70',
    facebook: 'https://facebook.com/dustin',
    linkedin: 'https://linkedin.com/in/dustin',
    image: dustin,
    side: 'left',
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
    quote:
      'I ensure that projects and partnerships run smoothly through structured coordination and financial planning. My work includes managing budgets and helping create efficient processes.'
  }
]
</script>