<template>
    <!-- Footer Section -->
    <footer class="w-full bg-primary text-white" role="contentinfo" itemscope  itemtype="https://schema.org/Organization">

        <!-- Right Space -->
        <div class="mx-auto max-w-400 px-5 xs:px-6 sm:px-8 lg:px-20">

            <!-- Grid Wrapper -->
            <div class="grid grid-cols-1 justify-items-center gap-10 py-10 text-center sm:grid-cols-2 sm:text-left lg:grid-cols-12 lg:justify-items-stretch lg:gap-2.5 lg:pb-16">

                <!-- Left Side Wrapper -->
                <div class="w-full max-w-70 lg:col-span-3">

                    <!-- Business Region Title -->
                    <h2 class="text-xl font-bold tracking-tight" itemprop="name">
                        Business Region DE-DK
                    </h2>

                    <!-- Divider -->
                    <div class="col-span-12 mb-2 mt-3" aria-hidden="true">
                        <div class="border-t-2 w-full bg-white/20"></div>
                    </div>

                    <!-- Business Region -->
                    <router-link to="/" class="mb-8 mt-8 flex justify-center sm:justify-start focus:outline-none focus-visible:ring-4 focus-visible:ring-white/80 rounded transition"
                        aria-label="Business Region DE-DK homepage" @click="handleLogoClick">
                        <!-- Business Region Logo -->
                        <img src="@/assets/business-region-logo.svg" width="200" height="100" alt="Business Region DE-DK logo" class="invert" itemprop="logo"/>
                    </router-link>

                    <!-- Interreg  -->
                    <div class="flex justify-center sm:justify-start">
                        <!-- Interreg Logo -->
                        <img src="@/assets/interreg logo.png" alt="Interreg official partner initiative endorsement" class="h-11 rounded-md bg-white" loading="lazy"/>
                    </div>
                </div>

                <!-- Contact Wrapper -->
                <div class="w-full max-w-70 lg:col-start-5 lg:col-end-7 flex flex-col gap-4">
                    <!-- Contact Title -->
                    <h2 class="text-xl font-bold tracking-tight">
                        Contact
                    </h2>

                    <!-- Contact Details Wrapper -->
                    <div class="flex flex-col gap-2 text-sm leading-6 text-white/90">
                        <!-- Location -->
                        <address class="not-italic" itemprop="address" itemscope itemtype="https://schema.org/PostalAddress">
                            <span itemprop="streetAddress">Vestergade, 9</span><br />
                            <span itemprop="postalCode">6270</span>
                            <span itemprop="addressLocality">Tønder</span>,
                            <span itemprop="addressCountry">Denmark</span>
                        </address>

                        <!-- Phone Number -->
                        <a href="tel:+4521775916" class="link-hover" 
                            itemprop="telephone" aria-label="Call corporate telephone at +45 21 77 59 16">
                            +45 21 77 59 16
                        </a>

                        <!-- Email Adress -->
                        <a href="mailto:lecba@toender.dk" class="link-hover"
                            itemprop="email" aria-label="Email office administration at lecba@toender.dk">
                            lecba@toender.dk
                        </a>
                    </div>
                </div>

                <!-- Opening Hours Wrapper -->
                <section class="w-full max-w-70 lg:col-start-7 lg:col-end-9" aria-label="Opening and phone hours">
                    <!-- Opening Hours Title -->
                    <h2 class="mb-4 text-xl font-bold tracking-tight">
                        Opening hours
                    </h2>

                    <!-- Opening Hours Details Wrapper -->
                    <div class="flex flex-col gap-1 text-sm leading-6 text-white/90">
                        <!-- Phone -->
                        <p class="font-semibold">Phone hours:</p>

                        <!-- Mon-Thu Hours -->
                        <p> Mon - Thu
                            <br />
                            <time datetime="08:30">08.30</time> -
                            <time datetime="15:00">15.00</time>
                        </p>

                        <!-- Friday Hours -->
                        <p>Fri
                            <br />
                            <time datetime="08:30">08.30</time> -
                            <time datetime="13:00">13.00</time>
                        </p>

                        <!-- Visiting Hours -->
                        <p class="pt-3">Visiting hours:
                            <br />
                            By appointment
                        </p>
                    </div>
                </section>


                <!-- Social Media Wrapper -->
                <nav class="w-full max-w-70 lg:col-start-9 lg:col-end-11" aria-label="Social media">
                    <!-- Follow us Title -->
                    <h2 class="mb-4 text-xl font-bold tracking-tight">
                        Follow us
                    </h2>

                    <!-- For Screen Readers Only -->
                    <span class="sr-only">Social media links</span>

                    <!-- Social Media -->
                    <ul class="flex flex-col gap-2 text-sm text-white/90">
                        <!-- Youtube -->
                        <li>
                            <a href="https://www.youtube.com/@Business-region" target="_blank" rel="noopener noreferrer" aria-label="Visit Business Region DE-DK corporate profile on YouTube (Opens in new tab)"
                                class="link-hover">
                                YouTube
                            </a>
                        </li>

                        <!-- LinkedIn -->
                        <li>
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="Visit Business Region DE-DK professional channel on LinkedIn (Opens in new tab)"
                                class="link-hover">
                                LinkedIn
                            </a>
                        </li>

                        <!-- Instagram -->
                        <li>
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Visit Business Region DE-DK content feed on Instagram (Opens in new tab)"
                                class="link-hover">
                                Instagram
                            </a>
                        </li>
                    </ul>
                </nav>

                <!-- More Links Wrapper -->
                <nav class="w-full max-w-70 lg:col-start-11 lg:col-end-13" aria-label="Additional company links">
                    <!-- More Title -->
                    <h2 class="mb-4 text-xl font-bold tracking-tight">
                        More
                    </h2>

                    <!-- For Screen Readers Only -->
                    <span class="sr-only">Secondary links</span>
                    <!-- More Links -->
                    <ul class="flex flex-col gap-2 text-sm text-white/90">
                        <!-- Employeed -->
                        <li>
                            <router-link to="/employees" class="link-hover">
                                Employees
                            </router-link>
                        </li>

                        <!-- Strategy -->
                        <li>
                            <router-link to="/strategy" class="link-hover">
                                Strategy
                            </router-link>
                        </li>

                        <!-- B2B Services -->
                        <li>
                            <router-link to="/b2b" class="link-hover">
                                B2B Services
                            </router-link>
                        </li>

                        <!-- Privacy Policy -->
                        <li>
                            <router-link to="/privacy" class="link-hover">
                                Privacy Policy
                            </router-link>
                        </li>

                        <!-- For Business -->
                        <li>
                            <router-link to="/businesses" class="link-hover">
                                For businesses
                            </router-link>
                        </li>
                    </ul>
                </nav>
           </div>
        </div>

        <!-- Copyright Section -->
        <div class="bg-white px-5 py-3 text-center text-[10px] text-black xs:px-6 sm:px-8 lg:px-20 lg:text-left">
            <p>© 2026 Business Region - CVR: - EAN: - All rights reserved.</p>
        </div>
    </footer>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { scrollToTop } from '@/components/modules/scrollToTop';

const router = useRouter();

const handleLogoClick = async () => {
  await router.push('/');

  scrollToTop();
};
</script>