<template>
  <section
    :class="[
      'relative w-full flex items-center justify-center overflow-hidden transition-colors duration-500 py-12 sm:py-16',
      showForm ? 'bg-[#112E56]' : 'bg-white'
    ]"
    aria-label="Membership Enrollment Options"
  >
    <div class="relative z-10 mx-auto w-full max-w-[1600px] px-5 xs:px-6 sm:px-8 lg:px-20">
      <transition
        enter-active-class="transition-all duration-500 ease-in-out"
        leave-active-class="transition-all duration-500 ease-in-out"
        enter-from-class="opacity-0 translate-x-12"
        enter-to-class="opacity-100 translate-x-0"
        leave-from-class="opacity-100 translate-x-0"
        leave-to-class="opacity-0 -translate-x-12"
        mode="out-in"
      >
        <div
          v-if="!showForm"
          key="intro"
          class="grid w-full grid-cols-12 items-center gap-2.5"
          aria-live="polite"
        >
          <div class="col-span-12 lg:col-span-5">
            <header>
              <h2
                class="pb-8 text-center text-xl font-bold uppercase tracking-tight text-[#112E56] sm:text-4xl lg:pb-10 lg:text-left"
              >
                Become a member today
              </h2>
            </header>

            <div class="flex flex-col items-center text-center text-[#111111] lg:items-start lg:text-left">
              <p class="mb-4 text-center text-base font-semibold lg:text-left">
                We work to:
              </p>

              <ul class="flex flex-col gap-4 text-sm leading-5">
                <li
                  v-for="item in benefits"
                  :key="item"
                  class="flex items-start gap-3 text-left"
                >
                  <img
                    src="@/assets/checkmark.svg"
                    alt=""
                    aria-hidden="true"
                    class="mt-[2px] h-4 w-4 shrink-0"
                  />
                  <span>{{ item }}</span>
                </li>
              </ul>

              <p class="max-w-md py-6 text-center text-sm font-semibold lg:text-left">
                Become part of the development – and help shape the border region of the future.
              </p>

              <div class="flex justify-center lg:justify-start">
                <button
                  @click="showForm = true"
                  class="mt-4 rounded-md bg-[#112E56] px-8 py-3 text-xs font-bold uppercase tracking-wider text-white transition duration-300 hover:bg-[#1B355B] cursor-pointer focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-[#112E56] sm:mt-6"
                >
                  Become a member
                </button>
              </div>
            </div>
          </div>

          <div class="col-span-12 lg:col-span-7 lg:mt-0">
            
            <div class="sr-only lg:hidden">
              <h3>Core Member Benefits</h3>
              <ul>
                <li>Cross-border networking & collaboration</li>
                <li>Visibility & event invitations</li>
                <li>Access to exclusive knowledge & insights</li>
              </ul>
            </div>

            <div class="hidden lg:block relative h-auto w-full lg:h-[500px] lg:w-[calc(100%+80px)]" aria-hidden="true">
              <div
                class="relative rounded-[30px] bg-[#112E56] px-6 py-10 text-white sm:px-10 lg:absolute lg:inset-0 lg:rounded-l-[60px] lg:rounded-r-none lg:px-12 lg:py-12"
              >
                <div class="flex h-full flex-col gap-10 justify-center">
                  <div class="flex flex-col items-center gap-4 text-center sm:flex-row sm:text-left lg:gap-6">
                    <img
                      src="@/assets/globe icon.svg"
                      alt=""
                      class="h-20 w-20 object-contain sm:h-24 sm:w-24 lg:h-25 lg:w-25"
                    />
                    <p class="max-w-[300px] text-base font-normal uppercase tracking-wider leading-5 sm:text-lg">
                      Cross-border networking & collaboration
                    </p>
                  </div>

                  <div class="flex flex-col-reverse items-center gap-4 text-center sm:flex-row sm:justify-end sm:text-right lg:gap-6">
                    <p class="text-base font-normal uppercase tracking-wider sm:text-lg">
                      Visibility & event invitations
                    </p>
                    <img
                      src="@/assets/ticket icon.svg"
                      alt=""
                      class="h-20 w-20 object-contain sm:h-24 sm:w-24 lg:h-25 lg:w-25"
                    />
                  </div>

                  <div class="flex flex-col items-center gap-4 text-center sm:flex-row sm:text-left lg:gap-6">
                    <img
                      src="@/assets/statistics icon.svg"
                      alt=""
                      class="h-18 w-18 object-contain sm:h-20 sm:w-20"
                    />
                    <p class="max-w-[350px] text-base font-normal uppercase tracking-wider leading-5 sm:text-lg">
                      Access to exclusive knowledge & insights
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        <div v-else key="form" class="w-full" aria-live="polite">
          <Form :steps="steps" @back-to-intro="showForm = false" />
        </div>
      </transition>

      <nav 
        class="mt-10 flex w-full justify-center gap-3 sm:mt-12 sm:gap-6" 
        :aria-label="'Membership form tracking system, current selection: ' + (showForm ? 'Form Panel' : 'Overview Panel')"
      >
        <span
          :class="[
            'h-1.5 w-24 rounded-full transition-all duration-500 sm:w-[330px]',
            !showForm ? 'bg-[#6F7F9D]' : 'bg-white/20'
          ]"
        ></span>

        <span
          :class="[
            'h-1.5 w-24 rounded-full transition-all duration-500 sm:w-[330px]',
            showForm ? 'bg-[#7382cd]' : 'bg-[#D1D1D1]'
          ]"
        ></span>
      </nav>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import Form from './Form.vue'

const showForm = ref(false)

const benefits = [
  'share knowledge, analysis and relevant opportunities in the region',
  'create connections between companies, organizations and decision-makers',
  'strengthen innovation, growth and international workforce',
  'develop a strong Cross-border Business network'
]

const steps = [
  'Company information',
  'Contact person',
  'Final step'
]
</script>

<style scoped>
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  border: 0;
}
</style>