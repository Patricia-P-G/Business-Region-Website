<template lang="">
  <!-- FORM WRAPPER -->
  <div
    id="membership-form"
    class="absolute inset-0 overflow-hidden rounded-[24px] bg-white shadow-2xl lg:rounded-l-[24px]"
  >
    <div class="grid h-full grid-cols-12">
      <!-- LEFT STEPS -->
      <div class="col-span-5 bg-primary px-6 py-10 text-white">
        <button
          v-for="(step, index) in steps"
          :key="step"
          type="button"
          @click="currentStep = index"
          :class="[
            'mb-6 flex w-full items-center gap-4 rounded-md px-4 py-3 text-left text-xs uppercase transition-all duration-300',
            currentStep === index ? 'bg-white text-primary' : 'text-white',
          ]"
        >
          <span
            :class="[
              'flex h-7 w-7 items-center justify-center rounded-full border text-sm',
              currentStep === index ? 'border-primary' : 'border-white',
            ]"
          >
            {{ index + 1 }}
          </span>

          {{ step }}
        </button>
      </div>

      <!-- RIGHT FORM -->
      <form
        class="col-span-7 flex h-full flex-col justify-between px-8 py-8"
        @submit.prevent="nextStep"
      >
        <!-- STEP 1 -->
        <div v-if="currentStep === 0" class="grid gap-5">
          <label class="form-label">
            Company name
            <input class="form-input" placeholder="Eks. Nike" />
          </label>

          <div class="grid grid-cols-2 gap-6">
            <label class="form-label">
              Address
              <input class="form-input" placeholder="Eks. Norgesgade, 45" />
            </label>

            <label class="form-label">
              City
              <input class="form-input" placeholder="Eks. Esbjerg" />
            </label>
          </div>

          <label class="form-label max-w-[160px]">
            Postnumber
            <input class="form-input" placeholder="Eks. 6705" />
          </label>
        </div>

        <!-- STEP 2 -->
        <div v-if="currentStep === 1" class="grid gap-5">
          <div class="grid grid-cols-2 gap-6">
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
            <input class="form-input" placeholder="Eks. 12345678" />
          </label>

          <label class="form-label">
            Company description
            <textarea
              maxlength="250"
              class="form-input min-h-[150px] resize-none"
              placeholder="Type a brief description here"
            ></textarea>
            <span class="text-right text-[10px] text-gray-400">0/250</span>
          </label>
        </div>

        <!-- BUTTONS -->
        <div class="mt-8 grid grid-cols-2 gap-6">
          <button
            type="button"
            @click="prevStep"
            class="flex h-10 items-center justify-between rounded-md border border-primary px-6 text-xs font-semibold uppercase text-black transition hover:bg-gray-100"
          >
            <span>←</span>
            Back
            <span></span>
          </button>

          <button
            type="submit"
            class="flex h-10 items-center justify-between rounded-md bg-secondary px-6 text-xs font-semibold uppercase text-white transition hover:bg-[#5F73D9]"
          >
            <span></span>
            {{ currentStep === 2 ? "Submit" : "Next" }}
            <span>→</span>
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script></script>
<style scoped>
.form-label {
  display: flex;
  flex-direction: column;
  gap: 8px;
  font-size: 11px;
  font-weight: 600;
  color: #111111;
}

.form-input {
  width: 100%;
  border: 1px solid #a9a9a9;
  border-radius: 4px;
  padding: 10px 12px;
  font-size: 11px;
  outline: none;
  transition: border-color 0.3s ease;
}

.form-input:focus {
  border-color: #7988d2;
}</style>
