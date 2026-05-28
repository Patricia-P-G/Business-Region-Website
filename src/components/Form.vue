<template>
  <div
    id="membership-form"
    class="w-full overflow-hidden rounded-[24px] bg-[#102542] font-sans lg:h-[540px]"
  >
    <div class="grid h-full grid-cols-12">
      
      <nav 
        class="hidden md:col-span-4 md:flex md:w-auto md:flex-col md:items-stretch md:gap-4 md:bg-[#102542] md:px-0 md:pb-8 md:pt-16"
        aria-label="Form Progress"
      >
        <ol class="list-none m-0 p-0 flex flex-col gap-4">
          <li
            v-for="(step, index) in steps"
            :key="step"
            :class="[
              'relative flex w-full items-center gap-4 rounded-xl px-4 py-4 transition-all duration-300 md:rounded-l-[16px] md:rounded-r-none md:pl-10 md:pr-4',
              currentStep === index
                ? 'z-10 bg-white text-[#102542] md:w-[calc(100%+1px)]'
                : 'font-normal text-white',
            ]"
            :aria-current="currentStep === index ? 'step' : undefined"
          >
            <span
              :class="[
                'flex h-9 w-9 shrink-0 items-center justify-center rounded-full border-2 text-base font-bold sm:h-10 sm:w-10 sm:text-lg',
                currentStep === index
                  ? 'border-[#102542] bg-white text-[#102542]'
                  : 'border-white/60 text-white',
              ]"
            >
              {{ index + 1 }}
            </span>

            <span class="text-sm font-semibold uppercase tracking-wider sm:text-base lg:text-lg">
              {{ step }}
            </span>

            <div
              v-if="currentStep === index"
              class="absolute bottom-0 right-0 top-0 hidden w-4 translate-x-[1px] bg-white md:block"
            ></div>
          </li>
        </ol>
      </nav>

      <form
        class="col-span-12 flex h-full flex-col justify-between rounded-t-[32px] bg-white px-5 py-8 sm:px-8 sm:py-10 md:col-span-8 md:rounded-r-[24px] md:rounded-t-none md:px-10 lg:pl-16 lg:pr-24 lg:py-12"
        @submit.prevent="handleNext"
        aria-live="aria-live"
      >
        <div class="block md:hidden mb-6 text-md font-bold uppercase tracking-wider text-black">
          <h2>Step {{ currentStep + 1 }} of 3: {{ steps[currentStep] }}</h2>
        </div>

        <div>
          <div
            v-if="currentStep === 0"
            class="grid grid-cols-12 gap-x-6 gap-y-5 animate-fadeIn"
            role="group"
            aria-labelledby="step-1-title"
          >
            <legend id="step-1-title" class="sr-only">Company Information</legend>
            
            <div class="col-span-12 flex flex-col gap-2">
              <label for="companyName" class="form-label">Company name</label>
              <input
                id="companyName"
                v-model="formData.companyName"
                class="form-input"
                placeholder="Eks. Nike"
                required
                autocomplete="organization"
              />
            </div>

            <div class="col-span-12 sm:col-span-7 flex flex-col gap-2">
              <label for="address" class="form-label">Address</label>
              <input
                id="address"
                v-model="formData.address"
                class="form-input"
                placeholder="Eks. Norgesgade, 45"
                required
                autocomplete="street-address"
              />
            </div>

            <div class="col-span-12 sm:col-span-5 flex flex-col gap-2">
              <label for="city" class="form-label">City</label>
              <input
                id="city"
                v-model="formData.city"
                class="form-input"
                placeholder="Eks. Esbjerg"
                required
                autocomplete="address-level2"
              />
            </div>

            <div class="col-span-12 sm:col-span-5 flex flex-col gap-2">
              <label for="postnumber" class="form-label">Postnumber</label>
              <input
                id="postnumber"
                v-model="formData.postnumber"
                class="form-input"
                placeholder="Eks. 6705"
                required
                autocomplete="postal-code"
              />
            </div>
          </div>

          <div
            v-if="currentStep === 1"
            class="grid grid-cols-12 gap-x-6 gap-y-5 animate-fadeIn"
            role="group"
            aria-labelledby="step-2-title"
          >
            <legend id="step-2-title" class="sr-only">Contact Person Information</legend>

            <div class="col-span-12 sm:col-span-7 flex flex-col gap-2">
              <label for="contactPerson" class="form-label">Contact person</label>
              <input
                id="contactPerson"
                v-model="formData.contactPerson"
                class="form-input"
                placeholder="Eks. Joe Boel"
                required
                autocomplete="name"
              />
            </div>

            <div class="col-span-12 sm:col-span-5 flex flex-col gap-2">
              <label for="phone" class="form-label">Tlf.</label>
              <input
                id="phone"
                v-model="formData.phone"
                type="tel"
                class="form-input"
                placeholder="Eks. 12345678"
                required
                autocomplete="tel"
              />
            </div>

            <div class="col-span-12 flex flex-col gap-2">
              <label for="email" class="form-label">Email</label>
              <input
                id="email"
                v-model="formData.email"
                class="form-input"
                type="email"
                placeholder="Eks. joeboel@gmail.com"
                required
                autocomplete="email"
              />
            </div>

            <div class="col-span-12 flex flex-col gap-2">
              <label for="website" class="form-label">Company website</label>
              <input
                id="website"
                v-model="formData.website"
                type="url"
                class="form-input"
                placeholder="Eks. https://company.dk"
                required
              />
            </div>
          </div>

          <div
            v-if="currentStep === 2"
            class="grid grid-cols-12 gap-y-5 animate-fadeIn"
            role="group"
            aria-labelledby="step-3-title"
          >
            <legend id="step-3-title" class="sr-only">Final step background confirmation</legend>

            <div class="col-span-12 flex flex-col gap-2">
              <label for="cvrNumber" class="form-label">CVR Number</label>
              <input
                id="cvrNumber"
                v-model="formData.cvrNumber"
                class="form-input"
                placeholder="Eks. 12345678"
                required
              />
            </div>

            <div class="col-span-12 flex flex-col gap-2">
              <label for="description" class="form-label">Company description</label>
              <div class="relative">
                <textarea
                  id="description"
                  v-model="formData.description"
                  maxlength="250"
                  class="form-textarea"
                  placeholder="Type a brief description here"
                  required
                  aria-describedby="char-counter"
                ></textarea>

                <span 
                  id="char-counter" 
                  class="absolute bottom-3 right-4 text-[11px] font-bold text-[#6B7280]"
                  aria-live="polite"
                >
                  {{ formData.description ? formData.description.length : 0 }}/250 characters used
                </span>
              </div>
            </div>
          </div>
        </div>

        <div class="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6">
          <button
            type="button"
            @click="handleBack"
            class=" cursor-pointer flex h-12 w-full items-center justify-center gap-4 rounded-md border border-[#102542] bg-white px-6 text-base font-bold uppercase tracking-wide text-[#102542] transition-all duration-200 hover:bg-gray-50 focus:outline focus:outline-2 focus:outline-[#102542]"
          >
            <span class="text-xl leading-none" aria-hidden="true">&larr;</span>
            BACK
          </button>

          <button
            type="submit"
            class="cursor-pointer flex h-12 w-full items-center justify-center gap-4 rounded-md bg-[#6474bd] px-6 text-base font-bold uppercase tracking-wide text-white transition-all duration-200 hover:bg-[#5262ab] focus:outline focus:outline-2 focus:outline-[#6474bd]"
          >
            {{ currentStep === 2 ? "SUBMIT" : "NEXT" }}
            <span class="text-xl leading-none" aria-hidden="true">&rarr;</span>
          </button>
        </div>
      </form>
    </div>

    <div class="hidden justify-center gap-6 bg-[#102542] px-10 pb-4 lg:flex" aria-hidden="true">
      <div class="h-1 w-[42%] rounded-full bg-white/40"></div>
      <div class="h-1 w-[42%] rounded-full bg-white/80"></div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from "vue";

const steps = ["Company Information", "Contact Person", "Final Step"];
const emit = defineEmits(["back-to-intro", "submit-form"]);
const currentStep = ref(0);

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

const handleNext = () => {
  if (currentStep.value < 2) {
    currentStep.value++;
  } else {
    emit("submit-form", { ...formData });
  }
};

const handleBack = () => {
  if (currentStep.value > 0) {
    currentStep.value--;
  } else {
    emit("back-to-intro");
  }
};
</script>

<style scoped>
/* Screen reader helper layout class */
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

.form-label {
  font-size: 15px;
  font-weight: 700;
  color: #111111;
}

.form-input {
  width: 100%;
  min-width: 0;
  box-sizing: border-box;
  border: 1px solid #767676; 
  border-radius: 8px;
  padding: 14px 16px;
  font-size: 15px;
  font-weight: 500;
  color: #1E293B;
  outline: none;
  background-color: #F8F8F8;
  transition: all 0.2s ease-in-out;
}

.form-input::placeholder {
  color: #6B7280;
  font-size: 14px;
}

.form-input:focus {
  border-color: #6474bd;
  background-color: #ffffff;
  box-shadow: 0 0 0 2px #6474bd;
}

.form-textarea {
  width: 100%;
  min-width: 0;
  box-sizing: border-box;
  min-height: 190px;
  max-height: 190px;
  resize: none;
  border: 1px solid #767676;
  border-radius: 8px;
  padding: 16px;
  font-size: 15px;
  font-weight: 500;
  line-height: 1.6;
  color: #1E293B;
  outline: none;
  background-color: #F8F8F8;
  transition: all 0.2s ease-in-out;
}

.form-textarea::placeholder {
  color: #6B7280;
  font-size: 14px;
}

.form-textarea:focus {
  border-color: #6474bd;
  background-color: #ffffff;
  box-shadow: 0 0 0 2px #6474bd;
}

.animate-fadeIn {
  animation: fadeIn 0.35s ease forwards;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(4px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>