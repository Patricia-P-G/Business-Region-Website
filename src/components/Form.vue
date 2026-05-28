<template>
    <!-- Form Section -->
    <section id="membership-form" class="w-full overflow-hidden rounded-3xl bg-[#102542] font-sans lg:h-135" aria-labelledby="form-heading">

        <!-- For Screen Readers Only -->
        <h1 id="form-heading" class="sr-only">Membership Application Form</h1>

        <!-- Grid Wrapper -->
        <div class="grid h-full grid-cols-12">

            <!-- Left Side Steps Wrapper -->
            <nav class="hidden md:col-span-4 md:flex md:w-auto md:flex-col md:items-stretch md:gap-4 md:bg-[#102542] md:px-0 md:pb-8 md:pt-16"
                aria-label="Form Progress">

                <!-- Steps Wrapper -->
                <ol class="list-none m-0 p-0 flex flex-col gap-4">

                    <!-- Individual Step Item-->
                    <li v-for="(step, index) in steps" :key="step" :class="['relative flex w-full items-center gap-4 rounded-xl px-4 py-4 transition-all duration-300 md:rounded-l-2xl md:rounded-r-none md:pl-10 md:pr-4',
                        currentStep === index ? 'z-10 bg-white text-[#102542] md:w-[calc(100%+1px)]' : 'font-normal text-white']" :aria-current="currentStep === index ? 'step' : undefined">
                        
                        <!-- Step Number Circle -->
                        <span :class="['flex h-9 w-9 shrink-0 items-center justify-center rounded-full border-2 text-base font-bold sm:h-10 sm:w-10 sm:text-lg',
                            currentStep === index ? 'border-[#102542] bg-white text-[#102542]' : 'border-white/60 text-white']">
                            {{ index + 1 }}
                        </span>

                        <!-- Step Label -->
                        <span class="text-sm font-semibold uppercase tracking-wider sm:text-base lg:text-lg">
                            {{ step }}
                        </span>

                        <!-- White Connector Extension for Active Step -->
                        <div v-if="currentStep === index" class="absolute bottom-0 right-0 top-0 hidden w-4 translate-x-px bg-white md:block"></div>
                    </li>
                </ol>
            </nav>

            <!-- Multi Step Form -->
            <form class="col-span-12 flex h-full flex-col justify-between rounded-t-4xl bg-white px-5 py-8 sm:px-8 sm:py-10 md:col-span-8 md:rounded-r-3xl md:rounded-t-none md:px-10 lg:pl-16 lg:pr-24 lg:py-12"
                @submit.prevent="handleSubmit" aria-live="polite">

                <!-- For Mobile -->
                <div class="block md:hidden mb-6 text-md font-bold uppercase tracking-wider text-black">
                    <!-- Steps left Title -->
                    <h2>Step {{ currentStep + 1 }} of 3: {{ steps[currentStep] }}</h2>
                </div>

                <!-- All Sections Wrapper -->
                <div>

                    <!-- Company Information Step 1 --------- Company Name + Address + City + Post Number -->
                    <fieldset v-if="currentStep === 0" ref="formStepContainer" tabindex="-1" class="grid grid-cols-12 gap-x-6 gap-y-5 animate-fadeIn border-none p-0 m-0 focus:outline-none" aria-labelledby="step-1-title">
                        
                        <!-- Only for Screen Readers -->
                        <legend id="step-1-title" class="sr-only">Company Information</legend>
                        
                        <!-- Company Name Wrapper -->
                        <div class="col-span-12 flex flex-col gap-2">

                            <!-- Company Name Label -->
                            <label for="companyName" class="text-[15px] font-bold text-[#111111]">Company name</label>

                            <!-- Company Name Input -->
                            <input id="companyName" v-model="formData.companyName" class="w-full min-w-0 box-border border border-[#767676] rounded-md px-4 py-3.5 text-[15px] font-medium text-[#1E293B] outline-none
                                bg-[#F8F8F8] transition-all duration-200 placeholder:text-[#6B7280] placeholder:text-[14px] focus:border-[#6474bd] focus:bg-white focus:ring-2 focus:ring-[#6474bd]"
                                placeholder="Eks. Nike" required autocomplete="organization"
                            />

                        </div>

                        <!-- Address Wrapper -->
                        <div class="col-span-12 sm:col-span-7 flex flex-col gap-2">

                            <!-- Address Label -->
                            <label for="address" class="text-[15px] font-bold text-[#111111]">Address</label>

                            <!-- Address Input -->
                            <input id="address" v-model="formData.address" class="w-full min-w-0 box-border border border-[#767676] rounded-md px-4 py-3.5 text-[15px] font-medium text-[#1E293B] outline-none
                                bg-[#F8F8F8] transition-all duration-200 placeholder:text-[#6B7280] placeholder:text-[14px] focus:border-[#6474bd] focus:bg-white focus:ring-2 focus:ring-[#6474bd]"
                                placeholder="Eks. Norgesgade, 45" required autocomplete="street-address"
                            />

                        </div>

                        <!-- City Wrapper -->
                        <div class="col-span-12 sm:col-span-5 flex flex-col gap-2">

                            <!-- City Label -->
                            <label for="city" class="text-[15px] font-bold text-[#111111]">City</label>

                            <!-- City Input -->
                            <input id="city" v-model="formData.city" class="w-full min-w-0 box-border border border-[#767676] rounded-md px-4 py-3.5 text-[15px] font-medium text-[#1E293B] outline-none
                                bg-[#F8F8F8] transition-all duration-200 placeholder:text-[#6B7280] placeholder:text-[14px] focus:border-[#6474bd] focus:bg-white focus:ring-2 focus:ring-[#6474bd]" placeholder="Eks. Esbjerg"
                                required autocomplete="address-level2"
                            />

                        </div>

                        <!-- Post Number Wrapper -->
                        <div class="col-span-12 sm:col-span-5 flex flex-col gap-2">

                            <!-- Post Number Label -->
                            <label for="postnumber" class="text-[15px] font-bold text-[#111111]">Post Number</label>

                            <!-- Post Number Input -->
                            <input id="postnumber" v-model="formData.postnumber" class="w-full min-w-0 box-border border border-[#767676] rounded-md px-4 py-3.5 text-[15px] font-medium text-[#1E293B] outline-none
                                bg-[#F8F8F8] transition-all duration-200 placeholder:text-[#6B7280] placeholder:text-[14px] focus:border-[#6474bd] focus:bg-white focus:ring-2 focus:ring-[#6474bd]"
                                placeholder="Eks. 6705" required autocomplete="postal-code"
                            />

                        </div>
                    </fieldset>


                    <!-- Contact Person Step 2 -------- Contact Person + Phone + Email + Company Website -->
                    <fieldset v-if="currentStep === 1" ref="formStepContainer" tabindex="-1" class="grid grid-cols-12 gap-x-6 gap-y-5 animate-fadeIn border-none p-0 m-0 focus:outline-none" aria-labelledby="step-2-title">

                        <!-- Only fot Screen Readers -->
                        <legend id="step-2-title" class="sr-only">Contact Person Information</legend>

                        <!-- Contact Person Wrapper -->
                        <div class="col-span-12 sm:col-span-7 flex flex-col gap-2">

                            <!-- Contact Person Label -->
                            <label for="contactPerson" class="text-[15px] font-bold text-[#111111]">Contact person</label>

                            <!-- Contact Person Input -->
                            <input id="contactPerson" v-model="formData.contactPerson" class="w-full min-w-0 box-border border border-[#767676] rounded-md px-4 py-3.5 text-[15px] font-medium text-[#1E293B] outline-none bg-[#F8F8F8] transition-all duration-200 placeholder:text-[#6B7280] placeholder:text-[14px] focus:border-[#6474bd] focus:bg-white focus:ring-2 focus:ring-[#6474bd]"
                                placeholder="Eks. Joe Boel" requiredautocomplete="name"
                            />

                        </div>

                        <!-- Phone Number -->
                        <div class="col-span-12 sm:col-span-5 flex flex-col gap-2">
                            <!-- Phone Number Label -->
                            <label for="phone" class="text-[15px] font-bold text-[#111111]">Phone</label>

                            <!-- Phone Number Input  -->
                            <input id="phone" v-model="formData.phone" type="tel" class="w-full min-w-0 box-border border border-[#767676] rounded-md px-4 py-3.5 text-[15px] font-medium text-[#1E293B] outline-none
                                bg-[#F8F8F8] transition-all duration-200 placeholder:text-[#6B7280] placeholder:text-[14px] focus:border-[#6474bd] focus:bg-white focus:ring-2 focus:ring-[#6474bd]"
                                placeholder="Eks. 12345678" required autocomplete="tel"
                            />

                        </div>

                        <!-- Email Wrapper -->
                        <div class="col-span-12 flex flex-col gap-2">

                            <!-- Email Label -->
                            <label for="email" class="text-[15px] font-bold text-[#111111]">Email</label>

                            <!-- Email Input -->
                            <input id="email" v-model="formData.email" class="w-full min-w-0 box-border border border-[#767676] rounded-md px-4 py-3.5 text-[15px] font-medium text-[#1E293B] outline-none bg-[#F8F8F8] transition-all duration-200
                                placeholder:text-[#6B7280] placeholder:text-[14px] focus:border-[#6474bd] focus:bg-white focus:ring-2 focus:ring-[#6474bd]" type="email"
                                placeholder="Eks. joeboel@gmail.com" required autocomplete="email"
                            />

                        </div>

                        <!-- Company Website Wrapper -->
                        <div class="col-span-12 flex flex-col gap-2">

                            <!-- Company Website Label -->
                            <label for="website" class="text-[15px] font-bold text-[#111111]">Company website</label>

                            <!-- Company Website Input -->
                            <input id="website" v-model="formData.website" type="url" class="w-full min-w-0 box-border border border-[#767676] rounded-md px-4 py-3.5 text-[15px] font-medium text-[#1E293B] outline-none bg-[#F8F8F8]
                                transition-all duration-200 placeholder:text-[#6B7280] placeholder:text-[14px] focus:border-[#6474bd] focus:bg-white focus:ring-2 focus:ring-[#6474bd]"
                                placeholder="Eks. https://company.dk" required
                            />

                        </div>

                    </fieldset>

                    <!-- Final Step 3 ----- CVR Number + Company Description Wrapper  -->
                    <fieldset v-if="currentStep === 2" ref="formStepContainer" tabindex="-1" class="grid grid-cols-12 gap-y-5 animate-fadeIn border-none p-0 m-0 focus:outline-none" aria-labelledby="step-3-title">

                        <!-- Only for Screen Readers -->
                        <legend id="step-3-title" class="sr-only">Final step background confirmation</legend>

                        <!-- CVR Number Wrapper -->
                        <div class="col-span-12 flex flex-col gap-2">

                            <!-- CVR Number Label -->
                            <label for="cvrNumber" class="text-[15px] font-bold text-[#111111]">CVR Number</label>

                            <!-- CVR Number Input -->
                            <input id="cvrNumber" v-model="formData.cvrNumber" class="w-full min-w-0 box-border border border-[#767676] rounded-md px-4 py-3.5 text-[15px] font-medium text-[#1E293B]
                                outline-none bg-[#F8F8F8] transition-all duration-200 placeholder:text-[#6B7280] placeholder:text-[14px] focus:border-[#6474bd] focus:bg-white focus:ring-2 focus:ring-[#6474bd]"
                                placeholder="Eks. 12345678" required inputmode="numeric" pattern="[0-9]*"
                            />

                        </div>

                        <!-- Company Description Wrapper -->
                        <div class="col-span-12 flex flex-col gap-2">

                            <!-- Company Description Label -->
                            <label for="description" class="text-[15px] font-bold text-[#111111]">Company description</label>

                            <!-- Textarea + Characters -->
                            <div class="relative">

                                <!-- Textarea -->
                                <textarea id="description" v-model="formData.description" maxlength="250" class="w-full min-w-0 box-border min-h-47.5 max-h-47.5 resize-none border border-[#767676] rounded-md
                                    p-4 text-[15px] font-medium line-height-[1.6] text-[#1E293B] outline-none bg-[#F8F8F8] transition-all duration-200 placeholder:text-[#6B7280] placeholder:text-[14px] focus:border-[#6474bd] focus:bg-white focus:ring-2 focus:ring-[#6474bd]"
                                    placeholder="Type a brief description here" required aria-describedby="char-counter">
                                </textarea>

                                <!-- Characters -->
                                <span id="char-counter" class="absolute bottom-3 right-4 text-[11px] font-bold text-[#6B7280]" aria-live="polite">
                                    {{ formData.description ? formData.description.length : 0 }}/250 characters used
                                </span>

                            </div>
                        </div>
                    </fieldset>
                </div>

                <!-- Buttons Wrapper -->
                <div class="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6">

                    <!-- Back Button -->
                    <button type="button" @click="handleBack" class="cursor-pointer flex h-12 w-full items-center justify-center gap-4 rounded-md border border-[#102542] bg-white px-6 text-base font-bold uppercase tracking-wide text-[#102542] transition-all duration-200 hover:bg-gray-50 focus:outline-2 focus:outline-[#102542]">
                        <span class="text-xl leading-none uppercase" aria-hidden="true">&larr;</span>
                        Back
                    </button>

                    <!-- Submit Button -->
                    <button type="submit" :disabled="isSending" class="cursor-pointer flex h-12 w-full items-center justify-center gap-4 rounded-md bg-[#6474bd] px-6 text-base font-bold uppercase tracking-wide text-white transition-all duration-200 hover:bg-[#5262ab] focus:outline-2 focus:outline-[#6474bd] disabled:opacity-50 disabled:cursor-not-allowed">
                        <span>{{ currentStep === 2 ? (isSending ? "Sending..." : "Submit") : "Next" }}</span>
                        <span v-if="!isSending" class="text-xl leading-none" aria-hidden="true">&rarr;</span>
                    </button>

                </div>
            </form>
        </div>

        <!-- Bottom Lines Slider -->
        <div class="hidden justify-center gap-6 bg-[#102542] px-10 pb-4 lg:flex" aria-hidden="true">
            <div class="h-1 w-[42%] rounded-full bg-white/40"></div>
            <div class="h-1 w-[42%] rounded-full bg-white/80"></div>
        </div>
    </section>
</template>

<script setup>
import { ref, reactive, nextTick } from "vue";
import emailjs from "@emailjs/browser";

const steps = ["Company Information", "Contact Person", "Final Step"];
const emit = defineEmits(["back-to-intro", "submit-form"]);

const currentStep = ref(0);
const isSending = ref(false);
const formStepContainer = ref(null);

const formData = reactive({
  companyName: "",
  address: "",
  city: "",
  postnumber: "",
  contactPerson: "",
  phone: "",
  email: "",
  website: "",
  cvrNumber: "",
  description: "",
});

const handleSubmit = () => {
  if (currentStep.value < 2) {
    currentStep.value++;
    nextTick(() => {
      formStepContainer.value?.focus();
    });
  } else {
    submitToBackend();
  }
};

const handleBack = () => {
  if (currentStep.value > 0) {
    currentStep.value--;
    nextTick(() => {
      formStepContainer.value?.focus();
    });
  } else {
    emit("back-to-intro");
  }
};

const submitToBackend = async () => {
  isSending.value = true;
  
  const templateParams = {
    company_name: formData.companyName,
    address: formData.address,
    city: formData.city,
    postnumber: formData.postnumber,
    contact_person: formData.contactPerson,
    phone: formData.phone,
    email: formData.email,
    website: formData.website,
    cvr_number: formData.cvrNumber,
    description: formData.description,
  };

  try {
    const response = await emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      templateParams,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    );

    if (response.status !== 200) throw new Error("EmailJS submission failed");

    isSending.value = false;
    alert("Form submitted successfully!");
    emit("submit-form", { ...formData });
    resetForm();
  } catch (error) {
    isSending.value = false;
    alert("An error occurred while sending the email.");
    console.error("EmailJS Error:", error);
  }
};

const resetForm = () => {
  currentStep.value = 0;
  Object.keys(formData).forEach((key) => {
    formData[key] = "";
  });
};

</script>

<style scoped>
.animate-fadeIn {
  animation: fadeIn 0.35s ease forwards;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(4px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>