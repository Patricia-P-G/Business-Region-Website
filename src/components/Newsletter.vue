<template>
  <div>
    <!-- NEWSLETTER BUTTON -->
    <transition name="newsletter">
      <button
        v-if="showNewsletterButton"
        @click="isOpen = true"
        class="fixed bottom-8 right-8 z-40 flex items-center gap-0"
        aria-label="Open newsletter signup"
      >
        <!-- TEXT APPEARS AFTER ICON -->
        <transition name="newsletter-text">
          <span
            v-if="showNewsletterText"
            class="rounded-l-2xl bg-[#F2F3F7] px-5 py-2 text-xl font-semibold text-primary shadow-sm"
          >
            Sign up here for Newsletter
          </span>
        </transition>

        <!-- ICON FIRST -->
        <span
          class="flex h-13 w-13 items-center justify-center rounded-full bg-primary shadow-xl cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-8 w-8 text-white"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m0 4l-8 5l-8-5V6l8 5l8-5z"
            />
          </svg>
        </span>
      </button>
    </transition>

    <!-- POPUP -->
    <transition name="popup">
      <div
        v-if="isOpen"
        class="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-5"
        @click.self="isOpen = false"
      >
        <div
          class="relative w-full max-w-[900px] overflow-hidden rounded-xl bg-[#F3F5FA] px-8 py-10 shadow-2xl"
        >
          <button
            @click="isOpen = false"
            class="absolute right-5 top-4 text-3xl font-light text-primary"
            aria-label="Close newsletter popup"
          >
            ×
          </button>

          <div class="grid grid-cols-1 items-center gap-8 md:grid-cols-12">
            <div class="md:col-span-7">
              <h2 class="text-3xl font-bold text-[#11213A]">
                Join Our Newsletter
              </h2>

              <p class="mt-4 text-lg text-[#526176]">
                Get the latest from across the border.
              </p>

              <form class="mt-8 flex flex-col gap-4 sm:flex-row" @submit.prevent="subscribe">
                <label for="newsletter-email" class="sr-only">
                  Email address
                </label>

                <input
                  id="newsletter-email"
                  v-model="email"
                  type="email"
                  required
                  placeholder="Your email address..."
                  class="h-14 flex-1 rounded-lg border border-[#D2D8E4] bg-white px-5 text-base outline-none transition focus:border-[#7988D2]"
                />

                <button
                  type="submit"
                  class="h-14 rounded-lg bg-primary px-7 text-base font-semibold uppercase text-white transition hover:bg-[#1B355B]"
                >
                  Subscribe
                </button>
              </form>

              <p class="mt-4 text-sm text-[#6B778C]">
                Weekly newsletter only. No spam, unsubscribe at any time.
              </p>
            </div>

            <div class="hidden md:col-span-5 md:flex md:justify-end">
              <div class="relative h-40 w-48">
                <div
                  class="absolute right-10 top-8 h-24 w-32 rotate-[-15deg] rounded-lg bg-white shadow-lg"
                ></div>

                <div
                  class="absolute right-0 top-0 flex h-36 w-40 rotate-[7deg] items-center justify-center rounded-lg bg-white shadow-xl"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-28 w-28 text-[#112E56]"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m0 4l-8 5l-8-5V6l8 5l8-5z"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isOpen = ref(false)
const email = ref('')

const showNewsletterButton = ref(false)
const showNewsletterText = ref(false)

let textTimer = null

const handleScroll = () => {
  if (window.scrollY > 350 && !showNewsletterButton.value) {
    showNewsletterButton.value = true

    // TEXT APPEARS
    textTimer = setTimeout(() => {
      showNewsletterText.value = true

      // TEXT DISAPPEARS AFTER 20s
      setTimeout(() => {
        showNewsletterText.value = false
      }, 20000)

    }, 600)
  }
}

const subscribe = () => {
  console.log('Newsletter email:', email.value)
  email.value = ''
  isOpen.value = false
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  handleScroll()
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  clearTimeout(textTimer)
})
</script>

<style scoped>
.newsletter-enter-active {
  transition: all 0.45s ease;
}

.newsletter-enter-from {
  opacity: 0;
  transform: translateY(24px) scale(0.9);
}

.newsletter-enter-to {
  opacity: 1;
  transform: translateY(0) scale(1);
}

.newsletter-text-enter-active {
  transition: all 0.45s ease;
}

.newsletter-text-enter-from {
  opacity: 0;
  transform: translateX(20px);
  max-width: 0;
}

.newsletter-text-enter-to {
  opacity: 1;
  transform: translateX(0);
  max-width: 400px;
}

.popup-enter-active,
.popup-leave-active {
  transition: all 0.3s ease;
}

.popup-enter-from,
.popup-leave-to {
  opacity: 0;
  transform: scale(0.96);
}

.popup-enter-to,
.popup-leave-from {
  opacity: 1;
  transform: scale(1);
}

.newsletter-text-leave-active {
  transition: all 0.45s ease;
}

.newsletter-text-leave-to {
  opacity: 0;
  transform: translateX(20px);
  max-width: 0;
}
</style>