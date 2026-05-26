<template>
    <section class="relative w-full overflow-hidden bg-white py-24">
        <div class="relative z-10 mx-auto max-w-[1600px] px-5 xs:px-6 sm:px-8 lg:px-20">
            <div class="grid grid-cols-12 items-center gap-2.5">

                <!-- LEFT CONTENT -->
                <div class="col-span-12 lg:col-start-1 lg:col-end-6">

                    <!-- Title -->
                     <div class="">
                        <h2 class="pb-10 text-3xl flex justify-center font-semibold uppercase text-primary sm:text-4xl">
                            Become a member today
                        </h2>
                    </div>

                    <!-- Content -->
                    <div class="text-[#111111]">

                        <p class="mb-4 text-base font-semibold">
                            We work to:
                        </p>

                        <ul class="flex flex-col gap-4 text-sm leading-5">
                            <li v-for="item in benefits" :key="item" class="flex gap-3">
                                <img src="@/assets/checkmark.svg" alt="" class="mt-[2px] h-4 w-4" />
                                <span>{{ item }}</span>
                            </li>
                        </ul>

                        <p class="max-w-md py-6 text-sm font-semibold">
                            Become part of the development – and help shape
                            the border region of the future.
                        </p>

                        <!-- Button -->
                        <button @click="showForm = true"
                            class="mt-6 rounded-md bg-primary px-8 py-3 text-xs uppercase text-white transition duration-300 hover:bg-[#1B355B] cursor-pointer">
                            Become a member
                        </button>
                    </div>
                </div>



                <!-- RIGHT SIDE -->
                <div class="col-span-12 mt-12 lg:col-start-7 lg:col-end-13 lg:mt-0">

                    <!-- WRAPPER -->
                    <div class="relative h-[474px] w-full lg:w-[calc(100%+120px)]">

                        <!-- INFO BOX -->
                        <transition enter-active-class="transition-all duration-500 ease-in-out"
                            leave-active-class="transition-all duration-500 ease-in-out absolute inset-0"
                            enter-from-class="opacity-0 translate-x-8" enter-to-class="opacity-100 translate-x-0"
                            leave-from-class="opacity-100 translate-x-0" leave-to-class="opacity-0 -translate-x-8"
                            mode="out-in">

                            <div v-if="!showForm" key="info"
                                class="absolute inset-0 rounded-[40px] bg-[#112E56] px-10 py-12 text-white lg:rounded-l-[60px]">

                                <div class="flex h-full flex-col gap-10 justify-center">
                                    <!-- ITEM -->
                                    <div class="flex items-center gap-6">
                                        <img src="@/assets/globe icon.svg" alt="" class="h-16 w-16" />
                                        <p class="max-w-[280px] text-sm font-medium uppercase leading-5">
                                            Cross-border networking &
                                            collaboration
                                        </p>
                                    </div>

                                    <!-- ITEM -->
                                    <div class="flex items-center justify-end gap-6">
                                        <p class="text-sm font-medium uppercase">
                                            Visibility & event invitations
                                        </p>
                                        <img src="@/assets/ticket icon.svg" alt="" class="h-16 w-16" />
                                    </div>

                                    <!-- ITEM -->
                                    <div class="flex items-center gap-6">
                                        <img src="@/assets/statistics icon.svg" alt="" class="h-16 w-16" />
                                        <p class="max-w-[280px] text-sm font-medium uppercase leading-5">
                                            Access to exclusive knowledge &
                                            insights
                                        </p>
                                    </div>

                                </div>

                            </div>
                            

                        </transition>

                    </div>

                </div>

                <!-- BOTTOM BAR -->
                <div class="col-span-12 mt-12 flex justify-center gap-6">

                    <span :class="[
                        'h-2 w-[330px] rounded-full transition-all duration-500',
                        !showForm
                            ? 'bg-[#6F7F9D]'
                            : 'bg-[#D1D1D1]'
                    ]"></span>

                    <span :class="[
                        'h-2 w-[330px] rounded-full transition-all duration-500',
                        showForm
                            ? 'bg-[#6F7F9D]'
                            : 'bg-[#D1D1D1]'
                    ]"></span>

                </div>

            </div>

        </div>

    </section>
</template>

<script setup>
import { ref } from 'vue'
import Form from './Form.vue'

const showForm = ref(false)
const currentStep = ref(0)

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

const nextStep = () => {
    if (currentStep.value < 2) {
        currentStep.value++
    }
}

const prevStep = () => {
    if (currentStep.value > 0) {
        currentStep.value--
    } else {
        showForm.value = false
    }
}
</script>

<style scoped>
.form-label {
    display: flex;
    flex-direction: column;
    gap: 8px;
    font-size: 12px;
    font-weight: 600;
    color: #111111;
}

.form-input {
    width: 100%;
    border: 1px solid #a9a9a9;
    border-radius: 4px;
    padding: 10px 12px;
    font-size: 12px;
    outline: none;
    transition: border-color 0.3s ease;
}

.form-input:focus {
    border-color: #7988d2;
}
</style>