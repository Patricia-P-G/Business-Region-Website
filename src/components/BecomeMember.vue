<template>
  <!-- Become a Member Section  -->
    <section :class="['relative w-full flex items-center justify-center overflow-hidden transition-colors duration-500 py-20 sm:py-16', showForm ? 'bg-[#112E56]' : 'bg-white']"
        aria-labelledby="enrollment-heading">

        <!-- Right Space -->
        <div class="relative z-10 mx-auto w-full max-w-400 py-10 px-5 xs:px-6 sm:px-8 lg:px-20">
            <transition
                enter-active-class="transition-all duration-500 ease-in-out"
                leave-active-class="transition-all duration-500 ease-in-out"
                enter-from-class="opacity-0 translate-x-12"
                enter-to-class="opacity-100 translate-x-0"
                leave-from-class="opacity-100 translate-x-0"
                leave-to-class="opacity-0 -translate-x-12"
                mode="out-in"
                @after-leave="handleFocusShift">

                <!-- Grid Wrapper -->
                <div v-if="!showForm" key="intro" class="grid w-full grid-cols-12 items-center gap-2.5">

                    <!-- Title Wrapper  -->
                    <div class="col-span-12 lg:col-span-5">
                        <!-- Position -->
                        <div>
                            <!-- Title -->
                            <h2 id="enrollment-heading" class="pb-8 text-center text-xl font-bold uppercase tracking-tight text-primary sm:text-4xl lg:pb-10 lg:text-left">
                                Become a member today
                            </h2>
                        </div>

                        <!-- Become a Member Content Wrapper -->
                        <div class="flex flex-col items-center text-center text-[#111111] lg:items-start lg:text-left">

                            <!-- Text  -->
                            <p class="mb-4 text-center text-base font-semibold lg:text-left">
                                We work to:
                            </p>

                            <!-- Checks Wrapper  -->
                            <ul class="flex flex-col gap-4 text-sm leading-5">
                                <!-- One Check -->
                                <li v-for="item in benefits" :key="item" class="flex items-start gap-3 text-left">

                                    <!-- Checkmark Icon  -->
                                    <img src="@/assets/icons/checkmark.svg" alt="" aria-hidden="true"
                                        class="mt-0.5 h-4 w-4 shrink-0"
                                    />
                                    <span>{{ item }}</span>
                                </li>
                            </ul>

                            <!-- Bottom Text -->
                            <p class="max-w-md py-6 text-center text-sm font-semibold lg:text-left">
                                Become part of the development - and help shape the border region of the future.
                            </p>

                            <!-- Become a Member Wrapper -->
                            <div class="flex justify-center lg:justify-start">
                                <!-- Become a member Button -->
                                <button type="button" :aria-expanded="showForm" @click="showForm = true" class="cta-dark mt-4 sm:mt-6">
                                        Become a member
                                </button>
                            </div>
                        </div>
                    </div>


                    <!-- Right Box Wrapper  -->
                    <div class="col-span-12 lg:col-span-7 lg:mt-0">
                        
                        <!-- Only for Screen Readers -->
                        <div class="sr-only">
                            <h3>Core Membership Value Pillars</h3>
                            <p>Our program focuses on cross-border networking and collaboration, providing high visibility, event invitations, and access to exclusive industry knowledge and insights.</p>
                        </div>

                        <!--  Desktop-only Image Wrapper ---- Hidden on Smaller Screens -->
                        <div class="hidden lg:block relative h-auto w-full lg:h-125 lg:w-[calc(100%+80px)]">

                            <!-- Main Box Wrapper -->
                            <div class="relative rounded-[30px] bg-[#112E56] px-6 py-10 text-white sm:px-10 lg:absolute lg:inset-0 lg:rounded-l-[60px] lg:rounded-r-none lg:px-12 lg:py-12">

                                <!-- Position of the Items -->
                                <div class="flex h-full flex-col gap-10 justify-center">

                                    <!-- Cross border netwoking and collabroration Wrapper -->
                                    <div class="flex flex-col items-center gap-4 text-center sm:flex-row sm:text-left lg:gap-6">
                                        <!-- Icon -->
                                        <img src="@/assets/icons/globe icon.svg" alt="Global networking vector icon" class="h-20 w-20 object-contain sm:h-24 sm:w-24 lg:h-25 lg:w-25"
                                        />
                                        <!-- Text -->
                                        <p class="max-w-75 text-base font-normal uppercase tracking-wider leading-5 sm:text-lg">
                                            Cross-border networking & collaboration
                                        </p>
                                    </div>

                                    <!-- Visibility and event Wrapper -->
                                    <div class="flex flex-col-reverse items-center gap-4 text-center sm:flex-row sm:justify-end sm:text-right lg:gap-6">
                                        <!-- Text -->
                                        <p class="text-base font-normal uppercase tracking-wider sm:text-lg">
                                            Visibility & event invitations
                                        </p>
                                        <!-- Icon -->
                                        <img src="@/assets/icons/ticket icon.svg" alt="Event ticket reservation icon" class="h-20 w-20 object-contain sm:h-24 sm:w-24 lg:h-25 lg:w-25"
                                        />
                                    </div>

                                    <!-- Acess to exclusive knowledge and insights Wrapper -->
                                    <div class="flex flex-col items-center gap-4 text-center sm:flex-row sm:text-left lg:gap-6">
                                        <!-- Icon -->
                                        <img src="@/assets/icons/statistics icon.svg" alt="Business metrics analytics graph icon" class="h-18 w-18 object-contain sm:h-20 sm:w-20"
                                        />
                                        <!-- Text -->
                                        <p class="max-w-87.5 text-base font-normal uppercase tracking-wider leading-5 sm:text-lg">
                                            Access to exclusive knowledge & insights
                                        </p>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div v-else key="form" class="w-full">
                    <Form ref="formComponent" :steps="steps" @back-to-intro="showForm = false" />
                </div>
            </transition>

            <!-- Pagination Indicator -->
            <div class="mt-10 flex w-full justify-center gap-3 sm:mt-12 sm:gap-6" role="img"
                :aria-label="'Application progress tracking line. Currently viewing: ' + (showForm ? 'Form Panel' : 'Overview Panel')">
                
                <!-- First Line -->
                <span
                :class="[
                    'h-1.5 w-24 rounded-full transition-all duration-500 sm:w-82.5',
                    !showForm ? 'bg-[#6F7F9D]' : 'bg-white/20'
                ]"
                ></span>

                <!-- Second Line -->
                <span
                :class="[
                    'h-1.5 w-24 rounded-full transition-all duration-500 sm:w-82.5',
                    showForm ? 'bg-[#7382cd]' : 'bg-[#D1D1D1]'
                ]"
                ></span>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref, onMounted, nextTick } from 'vue'
import { scrollToTop } from '@/components/modules/scrollToTop';
import Form from './Form.vue'

onMounted(() => {
  scrollToTop();
});


const showForm = ref(false)
const formComponent = ref(null)

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

// Accessibility Focus Controller: Prevents keyboard focus loss during view updates
async function handleFocusShift() {
  if (showForm.value) {
    await nextTick()
    // Selects the first interactive target within the newly active child form component
    const focusable = formComponent.value?.$el?.querySelector('input, select, textarea, button, h2')
    if (focusable) focusable.focus()
  }
}
</script>
