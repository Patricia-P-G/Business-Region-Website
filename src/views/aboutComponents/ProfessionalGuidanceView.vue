<template>
  <!-- Professional Guidance -->
  <section class="relative w-full overflow-hidden bg-[linear-gradient(to_bottom,#FFFFFF_0%,#F3F5FF_35%,#9BA8F0_100%)] py-16" aria-labelledby="guidance-title"
    aria-describedby="guidance-description" itemscope itemtype="https://schema.org/Organization">

    <!-- Right Space -->
    <div class="mx-auto max-w-400 px-4 sm:px-6 lg:px-25">

      <!-- Title + Underline + Description Wrapper -->
      <div>
        <!-- Title Wrapper -->
        <div class="col-span-12 pt-6 sm:pt-10">
          <!-- Title -->
          <h1 id="guidance-title" class="flex justify-center text-center text-xl font-bold uppercase text-primary xs:text-2xl md:text-3xl lg:justify-start lg:text-4xl"
            itemprop="name">
            Receive a professional guidance
          </h1>

        </div>

        <!-- Underline -->
        <hr class="border-primary pt-4 border-0 border-b-[3px]" aria-hidden="true" />

        <!-- Description -->
        <p id="guidance-description" class="pb-5 pt-5 text-center text-sm leading-6 text-black sm:text-base md:text-lg lg:text-left lg:text-xl lg:leading-7"
          itemprop="description">
          Our
          <span class="uppercase">advisors</span>
          bring together regional expertise, cross-border business knowledge, and valuable industry
          connections.
        </p>
      </div>

      <!-- Card Wrapper -->
      <div class="mt-12 flex flex-col items-center gap-y-16 gap-x-6 transition-all duration-500 ease-in-out md:grid md:grid-cols-2 lg:grid-cols-12 lg:mt-20 lg:gap-y-24"
        aria-label="Professional advisors">

        <!-- Card -->
        <article v-for="(person, index) in people" :key="person.name" @click="toggleFlip(index)" @keydown.enter="toggleFlip(index)"
          tabindex="0" :role="'button'" :aria-expanded="person.isFlipped"
          :class="[
            /* Default */
            'group relative w-full perspective-[1000px] cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-4 rounded-xl transition-all duration-500 ease-in-out justify-self-center',

            /* Height Scaling Across Breakpoints */
            'h-65 max-[1200px]:h-57.5 xs:max-[1200px]:h-55',

            /* Width Scaling: (auto width for the 2-column grid system under 1023px) */
            'min-[1201px]:w-125 max-[1200px]:max-w-110 max-[1023px]:max-w-115',

            /* Columns Span configurations matching 12-grid desktop specs */
            person.side === 'left' ? 'lg:col-start-1 lg:col-end-6' : 'lg:col-start-7 lg:col-end-13',
          ]"
          itemscope itemtype="https://schema.org/Person">

          <meta itemprop="name" :content="person.name" />
          <meta itemprop="jobTitle" :content="person.role" />
          <meta itemprop="email" :content="person.email" />
          <meta itemprop="telephone" :content="person.phone" />

          <!-- Flip Card Container  -->
          <div :class="['relative h-full w-full rounded-xl transition-transform duration-700 ease-in-out transform-3d motion-reduce:transition-none',
            person.isFlipped ? '[transform:rotateY(180deg)]' : 'transform-none lg:group-hover:[transform:rotateY(180deg)]']">
            
            <!-- Front Side Card Wrapper -->
            <div class="absolute inset-0 max-[1400px]:overflow-hidden min-[1401px]:overflow-visible rounded-xl shadow-[0px_7.08px_8.68px_0.89px_rgba(0,0,0,0.29)] backface-hidden">

              <!-- Front Card Content -->
              <div class="relative h-full w-full overflow-hidden rounded-xl bg-white">

                <!-- Testimonial Quote Wrapper -->
                <div class="absolute left-6 top-5 max-w-[85%] xs:left-8 xs:top-6 lg:max-w-85">

                  <!-- Quote Up Icon -->
                  <img src="@/assets/icons/quotes up.svg" alt=""
                    aria-hidden="true"
                    class="absolute left-0 top-0 h-5 w-5 xs:h-6 xs:w-6 transition-all duration-500"
                  />

                  <!-- Person Quote -->
                  <p class="pl-7 text-xs italic leading-4 text-black xs:pl-10 lg:text-[14px] lg:leading-5 transition-all duration-500"
                    itemprop="description">
                    {{ person.quote }}
                  </p>

                  <!-- Quote Down Icon -->
                  <img src="@/assets/icons/quotes down.svg" alt="" aria-hidden="true"
                    class="absolute -bottom-3 -right-1.25 h-5 w-5 xs:-bottom-3.75 xs:-right-2.5 xs:h-6 xs:w-6 transition-all duration-500"
                  />
                </div>

                <!-- Person Information -->
                <div class="absolute bottom-0 left-0 w-full bg-white px-6 pb-5 pt-2 xs:px-8 xs:pb-5 xs:pt-3 max-[1399px]:w-full lg:w-[62%] transition-all duration-500">
                  <hr class="border-[#7988D2] pb-2 xs:pb-3" aria-hidden="true" />

                  <!-- Person Name -->
                  <h2 class="text-base font-bold leading-none text-primary xs:text-lg lg:text-xl transition-all duration-500">
                    {{ person.name }}
                  </h2>

                  <!-- Person Role -->
                  <p class="mt-2 text-[13px] font-medium leading-tight text-primary xs:mt-1.5 xs:text-[14px] lg:text-[15px] lg:leading-none transition-all duration-500">
                    {{ person.role }}
                  </p>
                </div>
              </div>

              <!-- Person Image -->
              <img :src="person.image" :alt="`${person.name}, ${person.role}`" class="pointer-events-none absolute bottom-0 z-10 drop-shadow-[0px_8px_12px_rgba(0,0,0,0.25)] transition-all duration-500 max-[1399px]:hidden lg:max-[1400px]:right-0 lg:max-[1400px]:h-60 min-[1401px]:-right-32.5 min-[1401px]:h-76.25"
                loading="lazy"
                itemprop="image"
              />
            </div>

            <!-- Back Side Card Wrapper -->
            <div class="absolute inset-0 max-[1400px]:overflow-hidden min-[1401px]:overflow-visible rounded-xl bg-white shadow-[0px_7.08px_8.68px_0.89px_rgba(0,0,0,0.29)] [transform:rotateY(180deg)] backface-hidden"
              aria-label="Contact information">

              <!-- Back Content - Contact Info -->
              <div class="absolute left-5 top-5 z-30 text-black xs:left-6 max-[1200px]:top-4 transition-all duration-500">

                <!-- Email and Phone Wrapper -->
                <dl class="flex gap-4 text-xs xs:gap-6 lg:text-[15px] transition-all duration-500">
                  <!-- Contact Labels -->
                  <div class="font-bold">
                    <dt class="pb-1">Email:</dt>
                    <dt>Phone:</dt>
                  </div>

                  <!-- Contact Values -->
                  <div>

                    <!-- Email -->
                    <dd class="pb-1">
                      <a :href="`mailto:${person.email}`" @click.stop class="block break-all focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                        :aria-label="`Email ${person.name} at ${person.email}`">
                        {{ person.email }}
                      </a>
                    </dd>

                    <!-- Phone -->
                    <dd>
                      <a :href="`tel:${person.phone.replaceAll(' ', '')}`" @click.stop class="focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                        :aria-label="`Call ${person.name} at ${person.phone}`">
                        {{ person.phone }}
                      </a>
                    </dd>
                  </div>
                </dl>

                <!-- Social Media Links -->
                <div class="pt-2 xs:pt-3">
                  <!-- Share Business Card -->
                  <p class="pb-1.5 text-xs font-bold lg:text-[15px] transition-all duration-500">
                    Share business card
                  </p>

                  <!-- Social Icons Wrapper -->
                  <div class="flex items-center gap-3">

                    <!-- Facebook -->
                    <a :href="person.facebook" @click.stop
                      target="_blank" rel="noopener noreferrer" class="relative z-40 inline-flex h-6 w-6 cursor-pointer transition-transform duration-300 hover:scale-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                      :aria-label="`Open ${person.name}'s Facebook profile`">

                      <!-- Facebook Icon -->
                      <img src="@/assets/icons/facebook icon.svg" alt="" aria-hidden="true" class="h-6"/>
                    </a>

                    <!-- LinkedIn -->
                    <a :href="person.linkedin" @click.stop target="_blank" rel="noopener noreferrer" class="relative z-40 inline-flex h-6 w-6 cursor-pointer transition-transform duration-300 hover:scale-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                      :aria-label="`Open ${person.name}'s LinkedIn profile`" itemprop="sameAs">

                      <!-- LinkedIn Icon -->
                      <img src="@/assets/icons/linkedin icon.svg" alt="" aria-hidden="true" class="h-6"/>
                    </a>
                  </div>
                </div>
              </div>

              <!-- Back Card Footer -->
              <div class="absolute bottom-0 left-0 h-19 w-full rounded-xl bg-secondary px-5 pt-3 text-white xs:px-6 transition-all duration-500">
                <!-- Person Name -->
                <h2 class="text-base font-bold leading-none xs:text-lg lg:text-xl transition-all duration-500">
                  {{ person.name }}
                </h2>

                <!-- Person Role -->
                <p class="mt-2 text-xs font-medium leading-tight lg:text-[15px] lg:leading-none transition-all duration-500">
                  {{ person.role }}
                </p>
              </div>

              <!-- Person Image -->
              <img :src="person.image" :alt="`${person.name}, ${person.role}`" class="pointer-events-none absolute bottom-0 z-20 drop-shadow-[0px_8px_12px_rgba(0,0,0,0.25)] transition-all
                duration-500 max-[1023px]:-right-6.25 max-[1023px]:h-45 xs:max-[1023px]:h-48.75 lg:max-[1200px]:-right-5 lg:max-[1200px]:h-52.5 lg:max-[1400px]:right-0 lg:max-[1400px]:h-60 min-[1401px]:-right-17.5 min-[1401px]:h-75"
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
import { ref } from "vue";
import dustin from "@/assets/about us/dustin.png";
import lewis from "@/assets/about us/lewis.png";
import peter from "@/assets/about us/peter.png";
import ida from "@/assets/about us/ida.png";

const people = ref([
  {
    name: "Dustin Chwalek",
    role: "Communication manager",
    email: "dusch@toender.dk",
    phone: "+45 24 25 36 70",
    facebook: "https://facebook.com/dustin",
    linkedin: "https://www.linkedin.com/in/dustin-chwalek-720018206/",
    image: dustin,
    side: "left",
    isFlipped: false,
    quote:
      "I work with communication and stakeholder engagement across the German-Danish border region, with a focus on strengthening collaboration between businesses, organizations, and regional initiatives.",
  },
  {
    name: "Lewis C. Bardt",
    role: "Project leader",
    email: "lewis@email.dk",
    phone: "+45 00 00 00 00",
    facebook: "https://facebook.com/lewis",
    linkedin: "https://www.linkedin.com/in/lewisbardt/",
    image: lewis,
    side: "right",
    isFlipped: false,
    quote:
      "My work focuses on building strong partnerships, managing collaborative projects, and supporting sustainable growth and development across the German-Danish border region.",
  },
  {
    name: "Peter Engel-Andreasen",
    role: "Project member",
    email: "peter@email.dk",
    phone: "+45 00 00 00 00",
    facebook: "https://facebook.com/peter",
    linkedin: "https://linkedin.com/in/peter",
    image: peter,
    side: "left",
    isFlipped: false,
    quote:
      "As a Business Advisor at Business Region DE-DK, I work closely with companies and regional partners to support cross-border collaboration and business development.",
  },
  {
    name: "Ida Mahler Høeg",
    role: "Administrations and finance coordinator",
    email: "ida@email.dk",
    phone: "+45 00 00 00 00",
    facebook: "https://www.facebook.com/ida.thomsen.77/",
    linkedin: "https://linkedin.com/in/ida",
    image: ida,
    side: "right",
    isFlipped: false,
    quote:
      "I ensure that projects and partnerships run smoothly through structured coordination and financial planning. My work includes managing budgets and helping create efficient processes.",
  },
]);

const toggleFlip = (index) => {
  people.value[index].isFlipped = !people.value[index].isFlipped;
};
</script>
