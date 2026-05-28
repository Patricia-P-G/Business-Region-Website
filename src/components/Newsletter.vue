<template>
  <!-- Newsletter Section -->
  <section aria-label="Newsletter subscription" itemscope itemtype="https://schema.org/SubscribeAction">

    <!-- Newsletter Icon Wrapper -->
    <transition name="newsletter">

      <!-- Newsletter Button -->
      <button v-if="showNewsletterButton" @click="isOpen = true" class="fixed bottom-8 right-8 z-40 flex items-center gap-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
        aria-label="Open newsletter signup popup" aria-haspopup="dialog" :aria-expanded="isOpen">

        <!-- Icon Wrapper -->
        <div class="relative flex items-center justify-end">
          <transition name="newsletter-text">
            <!-- Text -->
            <span v-if="showNewsletterText" class="relative -mr-1.5 whitespace-nowrap rounded-xl bg-[#F2F3F7] px-4.5 py-2 text-base font-semibold text-[#12294B] shadow-sm after:absolute after:left-full after:top-1/2 after:-translate-y-1/2 after:border-[7px] after:border-solid after:border-y-transparent after:border-r-transparent after:border-l-[#F2F3F7]">
              Sign up here for Newsletter
            </span>
          </transition>
        </div>

        <!-- Newsletter Icon -->
        <span class="flex h-13 w-13 cursor-pointer items-center justify-center rounded-full bg-primary shadow-xl" aria-hidden="true">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-white" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
            <path fill="currentColor" d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m0 4l-8 5l-8-5V6l8 5l8-5z"/>
          </svg>
        </span>
    
      </button>
    </transition>

    <!-- Newsletter Pop Up -->
    <transition name="popup">
      <!-- Dialog Overlay -->
      <div v-if="isOpen" class="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-5" @click.self="isOpen = false" role="dialog"
        aria-modal="true" aria-labelledby="newsletter-title" aria-describedby="newsletter-description">

        <!--Pop Up Content Wrapper -->
        <div class="relative w-full max-w-235 overflow-hidden rounded-[20px] bg-[linear-gradient(105deg,#F5F6F9_0%,#F0F2F8_50%,#B2BFEB_100%)] p-7 xs:p-8 md:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.15)]">
          
          <!-- Close Button -->
          <button @click="isOpen = false" class="absolute right-6 top-4 rounded-md cursor-pointer text-3xl" aria-label="Close newsletter popup"type="button">

            <!-- Close Icon -->
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
              <path d="M0 0h24v24H0z" fill="none" /><path fill="#526176" d="m12 13.4l-4.9 4.9q-.275.275-.7.275t-.7-.275t-.275-.7t.275-.7l4.9-4.9l-4.9-4.9q-.275-.275-.275-.7t.275-.7t.7-.275t.7.275l4.9 4.9l4.9-4.9q.275-.275.7-.275t.7.275t.275.7t-.275.7L13.4 12l4.9 4.9q.275.275.275.7t-.275.7t-.7.275t-.7-.275z"/>
            </svg>
          </button>

          <!-- Grid Wrapper -->
          <div class="grid grid-cols-1 items-center gap-6 md:grid-cols-12">

            <!-- Newsletter Content -->
            <div class="md:col-span-8 lg:col-span-7">

              <!-- Title -->
              <h2 id="newsletter-title" class="text-[32px] font-bold tracking-tight text-primary" itemprop="name">
                Join Our Newsletter
              </h2>

              <!-- Subtitle -->
              <p id="newsletter-description" class="mt-3 text-lg font-normal text-[#526176]" itemprop="description">
                Get the latest from across the border.
              </p>

              <!-- Form Wrapper -->
              <form class="mt-8 flex flex-col gap-3.5 sm:flex-row sm:items-center" @submit.prevent="subscribe" aria-label="Newsletter subscription form">
                
                <!-- Only for Screen Readers -->
                <label for="newsletter-email" class="sr-only"> Email address </label>

                <!-- Input -->
                <input id="newsletter-email" v-model="email" type="email" required inputmode="email" autocomplete="email" aria-required="true" itemprop="email"
                  placeholder="Your email address..."
                  class="h-14 w-full flex-1 rounded-xl border border-[#D9E1EC] bg-white px-5 py-4 text-base text-primary placeholder-[#909EB4] outline-none shadow-[0_2px_4px_rgba(0,0,0,0.02)] transition focus:border-[#7988D2] focus:ring-1 focus:ring-[#7988D2]"
                />

                <!-- Subscribe Button -->
                <button type="submit" class="h-11 sm:h-14 rounded-xl bg-primary px-8 text-sm font-bold uppercase tracking-wider text-white transition hover:bg-[#1a355e] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#12294B] focus-visible:ring-offset-2 cursor-pointer"
                  aria-label="Subscribe to newsletter">
                  Subscribe
                </button>
              </form>

              <!-- Text Under Input -->
              <p class="mt-4 text-[13px] tracking-wide text-[#7A8A9E]">
                Weekly newsletter only. No spam, unsubscribe at any time.
              </p>
            </div>

            <!-- Image Wrapper -->
            <div class="relative hidden md:col-span-4 md:flex md:justify-end lg:col-span-5" aria-hidden="true">
              <div class="relative inline-block h-72 w-68">
                <!-- Envelope Image -->
                <img src="@/assets/newsletter/envelope.png" alt="" class="absolute inset-0 h-full w-full scale-110 object-contain opacity-0" @error="(e) => (e.target.style.opacity = 0)"
                  @load="(e) => (e.target.style.opacity = 1)"
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </transition>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const isOpen = ref(false);
const email = ref("");

const showNewsletterButton = ref(false);
const showNewsletterText = ref(false);

let textTimer = null;

const handleScroll = () => {
  if (window.scrollY > 350 && !showNewsletterButton.value) {
    showNewsletterButton.value = true;

    // Text Appears
    textTimer = setTimeout(() => {
      showNewsletterText.value = true;

      // Text Disappears after 20s
      setTimeout(() => {
        showNewsletterText.value = false;
      }, 20000);
    }, 600);
  }
};

const subscribe = () => {
  console.log("Newsletter email:", email.value);
  email.value = "";
  isOpen.value = false;
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
  handleScroll();
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
  clearTimeout(textTimer);
});
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
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.newsletter-text-enter-from {
  opacity: 0;
  transform: translateX(12px) scale(0.95);
}

.newsletter-text-enter-to {
  opacity: 1;
  transform: translateX(0) scale(1);
}

/* Smooth out the exit transition details */
.newsletter-text-leave-active {
  transition: all 0.35s cubic-bezier(0.4, 0, 1, 1);
  position: absolute;
  right: 100%;
}

.newsletter-text-leave-from {
  opacity: 1;
  transform: translateX(0) scale(1);
}

.newsletter-text-leave-to {
  opacity: 0;
  transform: translateX(12px) scale(0.95);
}

.popup-enter-active,
.popup-leave-active {
  transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
}

.popup-enter-from,
.popup-leave-to {
  opacity: 0;
  transform: scale(0.95) translateY(10px);
}

.popup-enter-to,
.popup-leave-from {
  opacity: 1;
  transform: scale(1) translateY(0);
}

@media (prefers-reduced-motion: reduce) {
  .newsletter-enter-active,
  .newsletter-text-enter-active,
  .newsletter-text-leave-active,
  .popup-enter-active,
  .popup-leave-active {
    transition: none !important;
  }

  .newsletter-enter-from,
  .newsletter-enter-to,
  .newsletter-text-enter-from,
  .newsletter-text-enter-to,
  .newsletter-text-leave-to,
  .popup-enter-from,
  .popup-enter-to,
  .popup-leave-from,
  .popup-leave-to {
    transform: none !important;
  }
}
</style>
