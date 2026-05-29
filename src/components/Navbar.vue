<template>
    <header>
        <!-- Navigation -->
        <nav class="fixed top-0 z-50 w-full bg-primary shadow-sm" aria-label="Main navigation">
            <!-- Right Spacing -->
            <div class="mx-auto px-5 xs:px-6 sm:px-8 lg:px-20 wide:px-20">

                <!-- Grid Wrapper -->
                <div class="grid h-17.75 grid-cols-12 items-center gap-2.5 ">

                    <!-- Logo Wrapper -->
                    <div class="col-span-6 flex justify-start nav:col-span-2">
                        <!-- Logo -->
                        <router-link to="/" class="flex items-center" @click="handleLogoClick" aria-label="Business Region homepage">
                            <img
                            src="@/assets/business-region-logo.svg"
                            alt="Business Region DE-DK logo "
                            class="w-28.75 xs:w-32.25 nav:w-33.75 filter invert"
                            />
                        </router-link>
                    </div>

                    <!-- Navigation Items -->
                    <div class="hidden nav:flex nav:col-start-4 nav:col-end-10 wide:col-start-5 wide:col-end-10 items-center justify-end gap-5 lg:gap-8 wide:gap-10 pr-4 wide:pr-10">
                        <router-link
                            v-for="item in menu"
                            :key="item.name"
                            :to="item.href"
                            class="nav-link text-sm text-white transition-all duration-300 hover:text-blue-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary" :aria-current="route.path === item.href ? 'page' : undefined">
                            {{ item.label }}
                        </router-link>
                    </div>

                    <!-- Language Dropdown Button Wrapper -->
                    <div class="relative hidden nav:flex nav:col-start-10 nav:col-end-11 justify-center" ref="desktopLanguageDropdownRef">
                        <!-- Language Button -->
                        <button
                            @click.stop="toggleLanguageDropdown"
                            type="button"
                            class="flex h-10 items-center justify-center gap-1.5 text-sm font-normal uppercase text-white transition-all duration-300 cursor-pointer wide:gap-2 wide:px-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary"
                            aria-label="Select language"
                            :aria-expanded="isLanguageDropdownOpen"
                            aria-haspopup="menu"
                            aria-controls="desktop-language-menu">

                            <!-- Flag -->
                            <img :src="selectedLanguage.icon" :alt="`${selectedLanguage.label} flag`"class="h-6 w-6"/>

                            <!-- Language Code (EN DK DE)  -->
                            <span>{{ selectedLanguage.code }}</span> 

                            <!-- Arrow -->
                            <svg xmlns="http://www.w3.org/2000/svg" :class="['h-3 w-3 text-white transition-transform duration-300 ease-in-out',
                                isLanguageDropdownOpen ? 'rotate-180' : 'rotate-0',]" viewBox="0 0 32 32" aria-hidden="true">
                                <path d="M0 0h32v32H0z" fill="none" /><path fill="currentColor" d="M8.037 11.166L14.5 22.36c.825 1.43 2.175 1.43 3 0l6.463-11.195c.826-1.43.15-2.598-1.5-2.598H9.537c-1.65 0-2.326 1.17-1.5 2.6z"/>
                            </svg>
                        </button>

                        <!-- Language Dropdown-->
                        <transition name="dropdown">
                            <div v-if="isLanguageDropdownOpen" id="desktop-language-menu" class="absolute right-0 top-full mt-4 w-44 overflow-hidden rounded-xl border border-slate-100 bg-white shadow-xl" role="menu">
                                <button
                                    v-for="language in languages"
                                    :key="language.code"
                                    @click="selectLanguage(language)"
                                    class="language-option dropdown-link cursor-pointer"
                                    type="button"
                                    role="menuitem">

                                    <!-- Flag -->
                                    <img :src="language.icon" :alt="`${language.label} flag`" class="h-5 w-5" />

                                    <!-- Language Name (ENGLISH DANSK DEUTSCH) -->
                                    <span>{{ language.label }}</span>
                                </button>
                            </div>
                        </transition>
                    </div>

                    <!-- Become a member Button -->
                    <router-link
                        to="/join"
                        class=" cta-lavander-button hidden text-base nav:flex nav:col-start-11 nav:col-end-13 h-9.5 w-full max-w-38.75 wide:max-w-49.75 px-3 wide:px-5 py-3 text-[0.65rem] wide:text-xs"
                        aria-label="Become a member">
                        Become a member
                    </router-link>

                    <!-- ------------------------------------------------------------------ -->

                    <!-- Mobile Navigation for Language Dropdown Button and Hamburger Icon Wrapper -->
                    <div class="col-span-6 flex items-center justify-end gap-3 nav:hidden">
                        <!-- Wrapper to keep the dropdown positioned relative to this div -->
                        <div class="relative" ref="mobileLanguageDropdownRef">
                            <button
                                @click.stop="toggleLanguageDropdown"
                                type="button"
                                class="flex h-10 items-center justify-center gap-1.5 text-sm font-normal uppercase text-white"
                                aria-label="Select language"
                                :aria-expanded="isLanguageDropdownOpen"
                                aria-haspopup="menu"
                                aria-controls="mobile-language-menu">

                                <!-- Flag -->
                                <img :src="selectedLanguage.icon" :alt="`${selectedLanguage.label} flag`" class="h-6 w-6"/>
                                
                                <!-- Language Code (EN DK DE)  -->
                                <span>{{ selectedLanguage.code }}</span>

                                <!-- Arrow -->
                                <svg xmlns="http://www.w3.org/2000/svg" :class="['h-3 w-3 text-white transition-transform duration-300',
                                    isLanguageDropdownOpen ? 'rotate-180' : 'rotate-0',]" viewBox="0 0 32 32" aria-hidden="true"><path d="M0 0h32v32H0z" fill="none" />
                                    <path fill="currentColor" d="M8.037 11.166L14.5 22.36c.825 1.43 2.175 1.43 3 0l6.463-11.195c.826-1.43.15-2.598-1.5-2.598H9.537c-1.65 0-2.326 1.17-1.5 2.6z"/>
                                </svg>
                            </button>

                            <!-- Language Dropdown -->
                            <transition name="dropdown">
                                <div v-if="isLanguageDropdownOpen" id="mobile-language-menu" class="absolute right-0 top-full mt-4 w-40 overflow-hidden rounded-xl border border-slate-100 bg-white shadow-xl" role="menu">
                                    <button
                                        v-for="language in languages"
                                        :key="language.code"
                                        @click="selectLanguage(language)"
                                        class="language-option dropdown-link"
                                        type="button"
                                        role="menuitem">

                                        <!-- Flag -->
                                        <img :src="language.icon" :alt="`${language.label} flag`" class="h-5 w-5" />

                                        <!-- Language Name (ENGLISH DANSK DEUTSCH) -->
                                        <span>{{ language.label }}</span>
                                    </button>
                                </div>
                            </transition>

                        </div>

                        <!-- X Icon -->
                        <button
                            @click.stop="toggleMobileMenu"
                            class="relative z-80 flex h-10 w-10 cursor-pointer items-center justify-center focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary"
                            :aria-label="isOpen ? 'Close menu' : 'Open menu'"
                            :aria-expanded="isOpen"
                            aria-controls="mobile-menu"
                            type="button">

                            <!-- Top Line -->
                            <span
                                :class="[
                                'absolute h-0.5 w-7 bg-white transition-all duration-300 ease-in-out',
                                isOpen ? 'rotate-45' : '-translate-y-2']">
                            </span>

                            <!-- Middle Line -->
                            <span
                                :class="[
                                'absolute h-0.5 w-7 bg-white transition-all duration-300 ease-in-out',
                                isOpen ? 'opacity-0' : 'opacity-100']">
                            </span>

                            <!-- Bottom Line -->
                            <span
                                :class="[
                                'absolute h-0.5 w-7 bg-white transition-all duration-300 ease-in-out',
                                isOpen ? '-rotate-45' : 'translate-y-2']">
                            </span>
                            
                        </button>
                    </div>
                </div>
            </div>

            <!-- Mobile Menu -->
            <transition name="mobile-menu">
                <!-- Mobile Menu Wrapper -->
                <div v-if="isOpen" id="mobile-menu" class="absolute right-0 top-18 w-52.5 rounded-lg bg-white px-5 py-10 shadow-2xl xs:right-4 sm:right-8 nav:hidden"
                    role="navigation" aria-label="Mobile menu">

                    <!--Menu Items Wrapper-->
                    <div class="flex flex-col items-end gap-3 border-t border-[#7C8BDA] py-3">
                        <router-link
                            v-for="item in menu"
                            :key="item.name"
                            :to="item.href"
                            @click="closeMobileMenu"
                            class="text-lg font-medium text-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary" :aria-current="route.path === item.href ? 'page' : undefined"
                            >
                            {{ item.label }}
                        </router-link>
                    </div>

                    <!-- Wrapper for Become a memeber Button -->
                    <div class="mt-5 flex flex-col gap-3">
                        <router-link
                            to="/join"
                            @click="closeMobileMenu"
                            class="flex min-h-8.5 w-full items-center justify-center rounded-md bg-secondary px-3 py-2 text-center text-medium font-semibold uppercase leading-tight text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                            aria-label="Become a member"
                            >
                            Become a member
                        </router-link>
                    </div>
                </div>
            </transition>
        </nav>
    </header>
</template>

<script setup>
import { ref, watch, onMounted, onUnmounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import { scrollToTop } from '@/components/modules/scrollToTop';


// Importing flag icons so they can be used inside the languages array
import englishIcon from "@/assets/icons/english icon.svg";
import danishIcon from "@/assets/icons/danish icon.svg";
import germanIcon from "@/assets/icons/german icon.svg";

const router = useRouter();
const handleLogoClick = async () => {
  await router.push('/');

  scrollToTop();
};

const route = useRoute();

const isOpen = ref(false);
const isLanguageDropdownOpen = ref(false);
const desktopLanguageDropdownRef = ref(null);
const mobileLanguageDropdownRef = ref(null);

const languages = [
  { code: "EN", label: "English", icon: englishIcon },
  { code: "DK", label: "Dansk", icon: danishIcon },
  { code: "DE", label: "Deutsch", icon: germanIcon },
];

const selectedLanguage = ref(languages[0]);

const selectLanguage = (language) => {
  selectedLanguage.value = language;
  isLanguageDropdownOpen.value = false;
};

const menu = [
  { name: "about", label: "About Us", href: "/about" },
  { name: "media", label: "Media", href: "/media" },
  { name: "events", label: "Events", href: "/events" },
  { name: "network", label: "Network", href: "/network" },
];

const toggleMobileMenu = () => {
  isOpen.value = !isOpen.value;
};

const closeMobileMenu = () => {
  isOpen.value = false;
  isLanguageDropdownOpen.value = false;
};

const toggleLanguageDropdown = () => {
  isLanguageDropdownOpen.value = !isLanguageDropdownOpen.value;
};

const handleClickOutside = (event) => {
  if (!isLanguageDropdownOpen.value) {
    return;
  }

  const clickedInsideDesktop = desktopLanguageDropdownRef.value?.contains(event.target);
  const clickedInsideMobile = mobileLanguageDropdownRef.value?.contains(event.target);

  if (!clickedInsideDesktop && !clickedInsideMobile) {
    isLanguageDropdownOpen.value = false;
  }
};

onMounted(() => {
  window.addEventListener("click", handleClickOutside);
});

onUnmounted(() => {
  window.removeEventListener("click", handleClickOutside);
});

watch(
  () => route.path,
  () => {
    isOpen.value = false;
    isLanguageDropdownOpen.value = false;
  },
);
</script>


<style scoped>
/* Underline for hover */
.nav-link::after {
  content: "";
  position: absolute;
  left: 50%;
  bottom: -6px;
  width: 0;
  height: 3px;
  border-radius: 9999px;
  background-color: #7c8bda;
  transform: translateX(-50%);
  transition: width 0.3s ease;
}

.nav-link:hover::after {
  width: 100%;
}

.language-option {
  display: flex;
  align-items: center;
  width: 100%;
  gap: 16px;
  padding: 12px 16px;
  letter-spacing: 0.025em;
  transition:
    background-color 0.2s ease,
    color 0.2s ease;
}

.language-option:hover {
  background-color: #eff6ff;
  color: var(--color-primary);
}

.mobile-menu-enter-active,
.mobile-menu-leave-active {
  transition:
    opacity 0.28s ease,
    transform 0.28s ease;
}

.mobile-menu-enter-from,
.mobile-menu-leave-to {
  opacity: 0;
  transform: translateY(-14px);
}

.dropdown-enter-active,
.dropdown-leave-active {
  transition: all 0.2s ease;
}

.dropdown-enter-from,
.dropdown-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
