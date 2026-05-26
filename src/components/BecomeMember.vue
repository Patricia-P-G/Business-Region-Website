<template>
    <section class="relative w-full overflow-hidden bg-white py-24">
        <div class="relative z-10 mx-auto max-w-[1600px] px-5 xs:px-6 sm:px-8 lg:px-20">

            <div class="grid grid-cols-12 items-center gap-2.5">

                <!-- LEFT CONTENT -->
                <div class="col-span-12 lg:col-start-1 lg:col-end-6">

                    <!-- Title -->
                    <h2 class="pb-10 text-3xl font-semibold uppercase text-primary sm:text-4xl">
                        Become a member today
                    </h2>

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

                                <div class="flex h-full flex-col justify-between">
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

                            <!-- FORM -->
                            <div v-else key="form"
                                class="absolute inset-0 overflow-hidden rounded-[40px] bg-white shadow-2xl lg:rounded-l-[60px]">

                                <div class="grid h-full lg:grid-cols-12">

                                    <!-- STEPS -->
                                    <div class="bg-primary px-6 py-10 text-white lg:col-span-4">

                                        <button v-for="(step, index) in steps" :key="step" @click="currentStep = index"
                                            :class="[
                                                'mb-8 flex w-full items-center gap-4 rounded-md px-4 py-3 text-left text-xs uppercase transition-all duration-300',
                                                currentStep === index
                                                    ? 'bg-white text-primary'
                                                    : 'text-white'
                                            ]">

                                            <span class="flex h-7 w-7 items-center justify-center rounded-full border">
                                                {{ index + 1 }}
                                            </span>

                                            {{ step }}

                                        </button>

                                    </div>

                                    <!-- FORM CONTENT -->
                                    <div class="flex h-full flex-col justify-between px-8 py-10 lg:col-span-8">

                                        <!-- STEP 1 -->
                                        <div v-if="currentStep === 0" class="grid gap-5">

                                            <label class="form-label">
                                                Company name

                                                <input class="form-input" placeholder="Eks. Nike" />
                                            </label>

                                            <div class="grid gap-5 sm:grid-cols-2">

                                                <label class="form-label">
                                                    Address

                                                    <input class="form-input" placeholder="Eks. Norgesgade, 45" />
                                                </label>

                                                <label class="form-label">
                                                    City

                                                    <input class="form-input" placeholder="Eks. Esbjerg" />
                                                </label>

                                            </div>

                                            <label class="form-label max-w-[220px]">
                                                Postnumber

                                                <input class="form-input" placeholder="Eks. 6705" />
                                            </label>

                                        </div>

                                        <!-- STEP 2 -->
                                        <div v-if="currentStep === 1" class="grid gap-5">

                                            <div class="grid gap-5 sm:grid-cols-2">

                                                <label class="form-label">
                                                    Contact person

                                                    <input class="form-input" placeholder="Eks. Joe Boel" />
                                                </label>

                                                <label class="form-label">
                                                    Tlf.

                                                    <input class="form-input" placeholder="Eks. 12345678" />
                                                </label>

                                            </div>

                                            <label class="form-label">
                                                Email

                                                <input class="form-input" placeholder="Eks. joeboel@gmail.com" />
                                            </label>

                                            <label class="form-label">
                                                Company website

                                                <input class="form-input" placeholder="Eks. company.dk" />
                                            </label>

                                        </div>

                                        <!-- STEP 3 -->
                                        <div v-if="currentStep === 2" class="grid gap-5">

                                            <label class="form-label">
                                                CVR Number

                                                <input class="form-input" placeholder="Eks. 32345678" />
                                            </label>

                                            <label class="form-label">
                                                Company description

                                                <textarea class="form-input min-h-[150px] resize-none"
                                                    placeholder="Type a brief description here"></textarea>

                                            </label>

                                        </div>

                                        <!-- BUTTONS -->
                                        <div class="mt-8 flex gap-5">

                                            <button @click="prevStep"
                                                class="flex h-10 flex-1 items-center justify-center rounded-md border border-primary text-xs uppercase text-primary transition hover:bg-gray-100">
                                                ← Back
                                            </button>

                                            <button @click="nextStep"
                                                class="flex h-10 flex-1 items-center justify-center rounded-md bg-secondary text-xs uppercase text-white transition hover:bg-[#5F73D9]">
                                                {{ currentStep === 2 ? 'Submit' : 'Next' }} →
                                            </button>

                                        </div>

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