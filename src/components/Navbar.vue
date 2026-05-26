<template>
    <header>
        <nav
            class="fixed top-0 z-50 w-full bg-primary shadow-sm"
            aria-label="Main navigation"
        >
            <div class="mx-auto px-5 xs:px-6 sm:px-8 lg:px-20 wide:px-20">
                <div class="grid h-[71px] grid-cols-12 items-center gap-2.5 ">

                    <!-- LOGO -->
                    <div class="col-span-6 flex justify-start nav:col-span-2">
                        <router-link
                            to="/"
                            class="flex items-center"
                            aria-label="Business Region homepage"
                        >
                            <img
                                src="@/assets/business-region-logo.svg"
                                alt="Business Region logo"
                                class="w-[115px] xs:w-[125px] nav:w-[135px] filter invert"
                            />
                        </router-link>
                    </div>

                    <!-- DESKTOP NAVIGATION -->
                    <div
                        class="hidden nav:flex nav:col-start-4 nav:col-end-10 wide:col-start-5 wide:col-end-10 items-center justify-end gap-5 lg:gap-8 wide:gap-10 pr-4 wide:pr-10"
                    >
                        <router-link
                            v-for="item in menu"
                            :key="item.name"
                            :to="item.href"
                            class="nav-link text-sm text-white transition-all duration-300 hover:text-blue-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary"
                        >
                            {{ item.label }}
                        </router-link>
                    </div>

                    <!-- DESKTOP LANGUAGE -->
                    <div
                        class="relative hidden nav:flex nav:col-start-10 nav:col-end-11 justify-center"
                        ref="languageDropdownRef"
                    >
                        <button
                            @click.stop="toggleLanguageDropdown"
                            type="button"
                            class="flex h-10 items-center justify-center gap-1.5 text-sm font-normal uppercase text-white transition-all duration-300 cursor-pointer wide:gap-2 wide:px-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary"
                            aria-label="Select language"
                            :aria-expanded="isLanguageDropdownOpen"
                            aria-haspopup="true"
                        >
                            <img
                                :src="selectedLanguage.icon"
                                :alt="`${selectedLanguage.label} flag`"
                                class="h-6 w-6"
                            />

                            <span>
                                {{ selectedLanguage.code }}
                            </span>

                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                :class="[
                                    'h-3 w-3 text-white transition-transform duration-300 ease-in-out',
                                    isLanguageDropdownOpen ? 'rotate-180' : 'rotate-0'
                                ]"
                                viewBox="0 0 32 32"
                                aria-hidden="true"
                            >
                                <path d="M0 0h32v32H0z" fill="none" />
                                <path
                                    fill="currentColor"
                                    d="M8.037 11.166L14.5 22.36c.825 1.43 2.175 1.43 3 0l6.463-11.195c.826-1.43.15-2.598-1.5-2.598H9.537c-1.65 0-2.326 1.17-1.5 2.6z"
                                />
                            </svg>
                        </button>

                        <transition name="dropdown">
                            <div
                                v-if="isLanguageDropdownOpen"
                                class="absolute right-0 top-full mt-3 w-44 overflow-hidden rounded-xl border border-slate-100 bg-white shadow-xl"
                                role="menu"
                            >
                                <button
                                    v-for="language in languages"
                                    :key="language.code"
                                    @click="selectLanguage(language)"
                                    class="language-option cursor-pointer"
                                    type="button"
                                    role="menuitem"
                                >
                                    <img
                                        :src="language.icon"
                                        :alt="`${language.label} flag`"
                                        class="h-5 w-5"
                                    />

                                    <span>{{ language.label }}</span>
                                </button>
                            </div>
                        </transition>
                    </div>

                    <!-- CTA -->
                    <router-link
                        to="/join"
                        class="hidden text-base nav:flex nav:col-start-11 nav:col-end-13 h-[38px] w-full max-w-[155px] wide:max-w-[180px] items-center justify-center rounded-md bg-secondary px-3 wide:px-5 py-3 text-center text-[0.65rem] wide:text-xs font-semibold uppercase text-white shadow-sm transition-all duration-300 hover:bg-[#5F73D9] hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
                        aria-label="Become a member"
                    >
                        Become a member
                    </router-link>

                    <!-- MOBILE NAVIGATION -->
                    <div class="col-span-6 flex items-center justify-end nav:hidden">
                        <button
                            @click.stop="toggleMobileMenu"
                            class="relative z-80 flex h-10 w-10 cursor-pointer items-center justify-center focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary"
                            :aria-label="isOpen ? 'Close menu' : 'Open menu'"
                            :aria-expanded="isOpen"
                            type="button"
                        >
                            <span
                                :class="[
                                    'absolute h-0.5 w-7 bg-white transition-all duration-300 ease-in-out',
                                    isOpen ? 'rotate-45' : '-translate-y-2'
                                ]"
                            ></span>

                            <span
                                :class="[
                                    'absolute h-0.5 w-7 bg-white transition-all duration-300 ease-in-out',
                                    isOpen ? 'opacity-0' : 'opacity-100'
                                ]"
                            ></span>

                            <span
                                :class="[
                                    'absolute h-0.5 w-7 bg-white transition-all duration-300 ease-in-out',
                                    isOpen ? '-rotate-45' : 'translate-y-2'
                                ]"
                            ></span>
                        </button>
                    </div>
                </div>
            </div>

            <!-- MOBILE MENU -->
            <transition name="mobile-menu">
                <div
                    v-if="isOpen"
                    class="absolute right-0 top-18 w-[210px] rounded-lg bg-white px-5 py-10 shadow-2xl xs:right-4 sm:right-8 nav:hidden"
                    role="dialog"
                    aria-label="Mobile menu"
                >
                    <!-- MENU LINKS -->
                    <div class="flex flex-col items-end gap-3 border-t border-[#7C8BDA] py-3">
                        <router-link
                            v-for="item in menu"
                            :key="item.name"
                            :to="item.href"
                            @click="closeMobileMenu"
                            class="text-lg font-medium text-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary"
                        >
                            {{ item.label }}
                        </router-link>
                    </div>

                    <!-- LANGUAGE + CTA -->
                    <div class="mt-10 flex flex-col gap-3">

                        <!-- MOBILE LANGUAGE -->
                        <div class="rounded-md bg-primary px-3 text-white">

                            <button
                                @click="isMobileLanguageOpen = !isMobileLanguageOpen"
                                class="flex w-full items-center justify-between gap-3 py-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary"
                                type="button"
                                aria-label="Select language"
                                :aria-expanded="isMobileLanguageOpen"
                            >
                                <div class="flex items-center gap-3">
                                    <img
                                        :src="selectedLanguage.icon"
                                        :alt="`${selectedLanguage.label} flag`"
                                        class="h-7 w-7"
                                    />

                                    <span>{{ selectedLanguage.label }}</span>
                                </div>

                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    :class="[
                                        'h-5 w-5 text-white transition-transform duration-300 ease-in-out',
                                        isMobileLanguageOpen ? 'rotate-180' : 'rotate-0'
                                    ]"
                                    viewBox="0 0 32 32"
                                    aria-hidden="true"
                                >
                                    <path d="M0 0h32v32H0z" fill="none" />
                                    <path
                                        fill="currentColor"
                                        d="M8.037 11.166L14.5 22.36c.825 1.43 2.175 1.43 3 0l6.463-11.195c.826-1.43.15-2.598-1.5-2.598H9.537c-1.65 0-2.326 1.17-1.5 2.6z"
                                    />
                                </svg>
                            </button>

                            <transition name="dropdown">
                                <div v-if="isMobileLanguageOpen">
                                    <button
                                        v-for="language in languages.filter(lang => lang.code !== selectedLanguage.code)"
                                        :key="language.code"
                                        @click="selectLanguage(language); isMobileLanguageOpen = false"
                                        class="flex w-full items-center gap-3 border-t border-white/50 py-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary"
                                        type="button"
                                    >
                                        <img
                                            :src="language.icon"
                                            :alt="`${language.label} flag`"
                                            class="h-7 w-7"
                                        />

                                        <span>{{ language.label }}</span>
                                    </button>
                                </div>
                            </transition>
                        </div>

                        <!-- CTA -->
                        <router-link
                            to="/join"
                            @click="closeMobileMenu"
                            class="flex min-h-[34px] w-full items-center justify-center rounded-md bg-secondary px-3 py-2 text-center text-medium font-semibold uppercase leading-tight text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
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
import { ref, watch, onMounted, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'

import englishIcon from '@/assets/english icon.svg'
import danishIcon from '@/assets/danish icon.svg'
import germanIcon from '@/assets/german icon.svg'

const route = useRoute()

const isOpen = ref(false)
const isLanguageDropdownOpen = ref(false)
const isMobileLanguageOpen = ref(false)

const languageDropdownRef = ref(null)

const languages = [
    {
        code: 'EN',
        label: 'English',
        icon: englishIcon
    },
    {
        code: 'DK',
        label: 'Dansk',
        icon: danishIcon
    },
    {
        code: 'DE',
        label: 'Deutsch',
        icon: germanIcon
    }
]

const selectedLanguage = ref(languages[0])

const selectLanguage = language => {
    selectedLanguage.value = language
    isLanguageDropdownOpen.value = false
}

const menu = [
    { name: 'about', label: 'About Us', href: '/about' },
    { name: 'media', label: 'Media', href: '/media' },
    { name: 'events', label: 'Events', href: '/events' },
    { name: 'network', label: 'Network', href: '/network' }
]

const toggleMobileMenu = () => {
    isOpen.value = !isOpen.value
}

const closeMobileMenu = () => {
    isOpen.value = false
    isMobileLanguageOpen.value = false
}

const toggleLanguageDropdown = () => {
    isLanguageDropdownOpen.value = !isLanguageDropdownOpen.value
}

const handleClickOutside = event => {
    if (
        isLanguageDropdownOpen.value &&
        languageDropdownRef.value &&
        !languageDropdownRef.value.contains(event.target)
    ) {
        isLanguageDropdownOpen.value = false
    }
}

onMounted(() => {
    window.addEventListener('click', handleClickOutside)
})

onUnmounted(() => {
    window.removeEventListener('click', handleClickOutside)
})

watch(
    () => route.path,
    () => {
        isOpen.value = false
        isLanguageDropdownOpen.value = false
        isMobileLanguageOpen.value = false
    }
)
</script>

<style scoped>
.nav-link {
    position: relative;
}

.nav-link::after {
    content: '';
    position: absolute;
    left: 50%;
    bottom: -6px;
    width: 0;
    height: 3px;
    border-radius: 9999px;
    background-color: #7C8BDA;
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
    font-size: 14px;
    color: #334155;
    transition:
        background-color 0.2s ease,
        color 0.2s ease;
}

.language-option:hover {
    background-color: #eff6ff;
    color: #1d4ed8;
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