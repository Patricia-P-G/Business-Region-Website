<template>
  <main class="min-h-screen bg-white text-[#12294B] font-sans antialiased">
    
    <section 
      class="relative bg-[linear-gradient(180deg,#A2B1F3_0%,#E2E7FC_100%)] min-h-[180px] sm:min-h-[220px] flex items-center overflow-hidden"
      aria-labelledby="partner-title"
    >
      <div class="absolute right-0 top-0 h-full w-full sm:w-[50%] md:w-[45%] pointer-events-none select-none mix-blend-multiply opacity-80" aria-hidden="true">
        <img
          src="@/assets/network/business esbjerg/map image.png"
          alt=""
          class="h-full w-full object-cover object-right"
          fetchpriority="high"
        />
      </div>

      <div class="relative z-10 mx-auto w-full max-w-[1400px] px-6 sm:px-12 lg:px-24 py-8">
        <div class="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12">
          
          <div class="flex-shrink-0">
            <div class="flex h-32 w-32 sm:h-36 sm:w-36 items-center justify-center rounded-full bg-white shadow-md">
              <img
                src="@/assets/network/business esbjerg.webp"
                alt="Business Esbjerg Official Logo"
                class="h-20 w-20 sm:h-24 sm:w-24 object-contain"
              />
            </div>
          </div>

          <div class="flex-grow text-center md:text-left pt-2">
            <h1
              id="partner-title"
              class="text-2xl sm:text-3xl font-bold tracking-wide text-[#12294B] uppercase"
            >
              Business Esbjerg
            </h1>
            <p class="mt-0.5 text-xs sm:text-sm italic text-[#12294B]/70 font-medium">
              Business industry
            </p>

            <address class="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-3 mt-6 text-xs sm:text-sm not-italic max-w-[800px]">
              
              <a
                href="mailto:info@businessesbjerg.com"
                class="contact-link focus:outline-none focus-visible:rounded focus-visible:ring-2 focus-visible:ring-[#12294B]"
                aria-label="Email: info@businessesbjerg.com"
              >
                <img src="@/assets/adress icon.svg" class="h-4.5 w-4.5 font-bold text-[#12294B]" alt="" aria-hidden="true" />
                <span class="hover:underline">info@businessesbjerg.com</span>
              </a>

              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                class="contact-link focus:outline-none focus-visible:rounded focus-visible:ring-2 focus-visible:ring-[#12294B]" 
                aria-label="Facebook Profile"
              >
                <img src="@/assets/facebook icon.svg" class="h-4.5 w-4.5 text-[#12294B]" alt="" aria-hidden="true" />
                <span class="hover:underline">Business Esbjerg</span>
              </a>

              <a 
                href="tel:+4575123744" 
                class="contact-link focus:outline-none focus-visible:rounded focus-visible:ring-2 focus-visible:ring-[#12294B]" 
                aria-label="Phone: +45 75 12 37 44"
              >
                <img src="@/assets/phone icon.svg" class="h-4.5 w-4.5 text-[#12294B]" alt="" aria-hidden="true" />
                <span class="hover:underline">+45 75 12 37 44</span>
              </a>

              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                class="contact-link focus:outline-none focus-visible:rounded focus-visible:ring-2 focus-visible:ring-[#12294B]" 
                aria-label="LinkedIn Profile"
              >
                <img src="@/assets/linkedin icon.svg" class="h-4.5 w-4.5 text-[#12294B]" alt="" aria-hidden="true" />
                <span class="hover:underline">in/businessesbjerg/</span>
              </a>

              <div class="contact-link">
                <img src="@/assets/location network icon.svg" class="h-4.5 w-4.5 text-[#12294B]" alt="" aria-hidden="true" />
                <span>John Tranums Vej 23, 6705 Esbjerg Ø</span>
              </div>

              <a
                href="https://www.businessesbjerg.com/en/"
                target="_blank"
                rel="noopener noreferrer"
                class="contact-link break-all focus:outline-none focus-visible:rounded focus-visible:ring-2 focus-visible:ring-[#12294B]"
                aria-label="Website Link"
              >
                <img src="@/assets/website icon.svg" class="h-4.5 w-4.5 text-[#12294B]" alt="" aria-hidden="true" />
                <span class="hover:underline text-xs sm:text-sm">https://www.businessesbjerg.com/en/</span>
              </a>
            </address>
          </div>
        </div>
      </div>
    </section>

    <div class="mx-auto max-w-[1400px] px-6 sm:px-12 lg:px-24 py-16">
      
      <section class="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start" aria-label="About Information">
        <article class="lg:col-span-7">
          <h2 class="text-xl sm:text-2xl font-bold tracking-tight text-[#12294B] uppercase">
            About Business Esbjerg
          </h2>
          <div class="mt-6 space-y-5 text-sm sm:text-[15px] leading-relaxed text-black/80 font-normal">
            <p>
              Business Esbjerg creates the best possible conditions for doing business and working
              in Esbjerg and Fanø municipalities. We exist for our members, and our ambition is to
              be a trusted and professional partner. Our sparring, projects and offers are intended to give members and their employees tools to create development and growth.
            </p>
            <p>
              We seek opportunities for companies - regardless of their starting point - and work for better framework conditions. At the same time, we contribute to the business policy agenda locally, regionally and nationally - always with a focus on the interests of our members.
            </p>
            <p>
              Our sparring, projects and offers are intended to give companies and employees tools to create noticeable value. The funds to solve these tasks come from our members, Esbjerg Municipality, the EU and various foundations.
            </p>
          </div>
        </article>

        <div class="lg:col-span-5 w-full h-full flex items-center">
          <img
            src="@/assets/network/business esbjerg/business esbjerg pic 1.jpg"
            alt="Business representatives sitting at a table during a project collaboration meeting"
            class="w-full h-auto max-h-85 rounded-md object-cover grayscale shadow-sm"
            loading="lazy"
          />
        </div>
      </section>

      <section class="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-16 items-start" aria-hidden="true">
        <div class="lg:col-span-5 flex items-center">
          <p class="text-5xl sm:text-6xl md:text-7xl font-bold text-[#8495DF]/80 tracking-tighter select-none">
            #business
          </p>
        </div>
        <div class="lg:col-span-7 text-sm sm:text-[15px] leading-relaxed text-black/80 font-normal space-y-4">
          <p>
            We are the local business council in <span class="font-semibold text-[#12294B]">Esbjerg</span> and <span class="font-semibold text-[#12294B]">Fanø</span> municipalities and work to create development for the business community in both municipalities. With more than 1.000 member companies behind us, we represent the business community broadly. In addition, we have a number of selected focus areas that we give special attention to.
          </p>
          <p>
            Together with the business community, we inspire new paths to development and growth - for the benefit of both companies and citizens.
          </p>
        </div>
      </section>

      <div class="mt-16 max-w-[1000px] mx-auto relative px-10 sm:px-16 py-8 bg-white rounded-xl shadow-[0px_6px_20px_rgba(0,0,0,0.06)] border border-gray-100/50">
        <span class="absolute left-4 top-2 text-6xl font-serif font-bold text-[#8495DF]/40 select-none" aria-hidden="true">“</span>
        <blockquote class="text-center text-base sm:text-lg font-medium text-[#12294B] leading-relaxed">
          We create the best conditions for running a business and working in Esbjerg and Fanø municipalities.
        </blockquote>
        <span class="absolute right-4 bottom-[-16px] text-6xl font-serif font-bold text-[#8495DF]/40 select-none" aria-hidden="true">”</span>
      </div>

      <section class="mt-24 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center" aria-label="Current Corporate Projects">
        
        <div class="lg:col-span-5 order-2 lg:order-1">
          <img
            src="@/assets/network/business esbjerg/business esbjerg pic 2.png"
            alt="Workplace synergy meeting showing aerial view of team planning cross-border collaborations"
            class="w-full h-auto max-h-[300px] rounded-md object-cover grayscale shadow-sm"
            loading="lazy"
          />
        </div>

        <article class="lg:col-span-7 order-1 lg:order-2">
          <h2 class="text-xl sm:text-2xl font-bold tracking-tight text-[#12294B] uppercase">
            Projects
          </h2>
          <div class="mt-6 space-y-4 text-sm sm:text-[15px] leading-relaxed text-black/80 font-normal">
            <p>
              We participate in the project <span class="font-medium text-[#12294B]">Business DE/DK</span>, which focuses on investigating cooperation opportunities across the border - including in relation to international labor.
            </p>
            <p>
              We also participate in the project <span class="font-medium text-[#12294B]">Green Business</span>, which supports small and medium-sized enterprises in Denmark and Germany in their work with sustainability, especially within the circular economy. Here, companies receive help with tools and strategies that support sustainable management.
            </p>
          </div>

          <div class="mt-8">
            <a
              href="https://www.businessesbjerg.com/en/"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center justify-center rounded-md bg-[#7F92DC] px-8 py-3 text-xs sm:text-sm font-semibold uppercase tracking-wider text-white shadow-sm transition-all duration-200 hover:bg-[#6A7ECB] hover:shadow focus:outline-none focus-visible:ring-2 focus-visible:ring-[#12294B] focus-visible:ring-offset-2"
            >
              Visit our website
            </a>
          </div>
        </article>
      </section>

    </div>

    <div class="h-24 bg-[linear-gradient(to_top,#A7B6F5_0%,#FFFFFF_100%)] opacity-40" aria-hidden="true"></div>
  </main>
</template>

<script setup>
import { onMounted } from 'vue';

const updateMeta = (name, content, isProperty = false) => {
  if (typeof window === 'undefined') return;

  const selector = isProperty ? `meta[property="${name}"]` : `meta[name="${name}"]`;
  let meta = document.querySelector(selector);
  
  if (!meta) {
    meta = document.createElement('meta');
    if (isProperty) meta.setAttribute('property', name);
    else meta.name = name;
    document.head.appendChild(meta);
  }
  meta.content = content;
};

onMounted(() => {
  document.title = "Business Esbjerg - Cross-Border Network Partner";
  
  updateMeta('description', 'Learn more about Business Esbjerg, a key partner in the DE-DK cross-border network driving business development and growth in Esbjerg and Fanø.');
  updateMeta('keywords', 'Business Esbjerg, DE-DK network, cross-border cooperation, Esbjerg business council, regional development');
  
  updateMeta('og:title', 'Business Esbjerg - Cross-Border Network Partner', true);
  updateMeta('og:description', 'Driving local and regional business growth across the Danish-German border.', true);
  updateMeta('og:type', 'profile', true);
  updateMeta('og:image', '@/assets/network/business esbjerg pic 1.jpg', true);
});
</script>

<style scoped>
.contact-link {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  color: #12294b;
  font-weight: 500;
}
/* Filtrul corect pentru pictograme, fără erori de sintaxă */
.contact-link img {
  filter: brightness(0) saturate(100%) invert(13%) sepia(21%) pure-blue;
}
</style>