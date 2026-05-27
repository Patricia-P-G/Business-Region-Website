<template>
  <main class="min-h-screen text-[#12294B]">
    <!-- HERO -->
    <section
      class="relative overflow-hidden bg-[linear-gradient(90deg,#8795DF_0%,#B4C0FF_22%,#DCE2FF_45%,#F3F5FF_68%,#FFFFFF_100%)] pb-12 pt-[110px] sm:pt-[120px]"
      aria-labelledby="partner-title"
    >
      <!-- MAP SIDE -->
<div class="pointer-events-none absolute right-0 top-0 h-full w-[45%] overflow-hidden">

  <!-- MAP IMAGE -->
  <img
    src="@/assets/network/map image.png"
    alt=""
    aria-hidden="true"
    class="h-full w-full object-cover object-right opacity-40"
  />

  <!-- SOFT BLEND -->
  <div
    class="absolute inset-0
           bg-[linear-gradient(to_right,
           rgba(220,226,255,1)_0%,
           rgba(232,236,255,0.92)_12%,
           rgba(243,245,255,0.75)_24%,
           rgba(248,249,255,0.45)_40%,
           rgba(255,255,255,0)_65%)]"
  ></div>

</div>

      <!-- CONTENT -->
      <div class="relative z-10 mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-20">
        <div class="grid grid-cols-12 items-center gap-y-10 md:gap-8">
          <!-- LOGO -->
          <div class="col-span-12 flex justify-center md:col-span-2 md:justify-start">
            <div
              class="flex h-36 w-36 items-center justify-center rounded-full bg-white shadow-[0px_4px_12px_rgba(0,0,0,0.12)]"
            >
              <img
                src="@/assets/network/business esbjerg.png"
                alt="Business Esbjerg logo"
                class="h-20 w-20 object-contain"
              />
            </div>
          </div>

          <!-- INFO -->
          <div class="col-span-12 md:col-span-10">
            <!-- TITLE -->
            <h1
              id="partner-title"
              class="text-center text-3xl font-semibold uppercase tracking-tight text-[#12294B] sm:text-4xl md:text-left"
            >
              Business Esbjerg
            </h1>

            <!-- SUBTITLE -->
            <p class="mt-1 text-center text-sm italic text-[#12294B]/80 md:text-left">
              Business industry
            </p>

            <!-- CONTACT GRID -->
            <div class="grid gap-x-16 gap-y-5 pt-8 text-sm sm:grid-cols-2 lg:max-w-[920px]">
              <!-- EMAIL -->
              <a
                href="mailto:info@businessesbjerg.com"
                class="contact-link"
                aria-label="Send email to Business Esbjerg"
              >
                <img src="@/assets/adress icon.svg" class="h-5 w-5" alt="" aria-hidden="true" />

                <span>info@businessesbjerg.com</span>
              </a>

              <!-- FACEBOOK -->
              <a href="#" class="contact-link" aria-label="Visit Business Esbjerg Facebook">
                <img src="@/assets/facebook icon.svg" class="h-5 w-5" alt="" aria-hidden="true" />

                <span>Business Esbjerg</span>
              </a>

              <!-- PHONE -->
              <a href="tel:+4575123744" class="contact-link" aria-label="Call Business Esbjerg">
                <img src="@/assets/phone icon.svg" class="h-5 w-5" alt="" aria-hidden="true" />

                <span>+45 75 12 37 44</span>
              </a>

              <!-- LINKEDIN -->
              <a href="#" class="contact-link" aria-label="Visit Business Esbjerg LinkedIn">
                <img src="@/assets/linkedin icon.svg" class="h-5 w-5" alt="" aria-hidden="true" />

                <span>in/businessesbjerg/</span>
              </a>

              <!-- LOCATION -->
              <p class="contact-link">
                <img
                  src="@/assets/location network icon.svg"
                  class="h-5 w-5"
                  alt=""
                  aria-hidden="true"
                />

                <span>John Tranums Vej 23, 6705 Esbjerg Ø</span>
              </p>

              <!-- WEBSITE -->
              <a
                href="https://www.businessesbjerg.com/en/"
                target="_blank"
                rel="noopener noreferrer"
                class="contact-link break-all"
                aria-label="Visit Business Esbjerg website"
              >
                <img src="@/assets/website icon.svg" class="h-5 w-5" alt="" aria-hidden="true" />

                <span>https://www.businessesbjerg.com/en/</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ABOUT -->
    <section class="mx-auto px-5 py-14 sm:px-8 lg:px-20">
      <div class="grid grid-cols-12 gap-10">
        <article class="col-span-12 lg:col-span-6">
          <h2 class="text-2xl font-semibold uppercase">About Business Esbjerg</h2>

          <div class="mt-6 space-y-5 text-sm leading-6 text-black">
            <p>
              Business Esbjerg creates the best possible conditions for doing business and working
              in Esbjerg and Fanø municipalities. We exist for our members, and our ambition is to
              be a trusted and professional partner.
            </p>

            <p>
              We seek opportunities for companies regardless of their starting point, and we make
              sure they can contribute to the business policy agenda locally, regionally, and
              nationally.
            </p>

            <p>
              Our sparring, projects, and offers are intended to give companies and employees tools
              to create sustainable value.
            </p>
          </div>
        </article>

        <div class="col-span-12 lg:col-span-6">
             <img
            src="@/assets/network/business esbjerg pic 1.jpg"
            alt="Business Esbjerg project collaboration meeting"
            class="h-[380px] w-full rounded-lg object-cover grayscale"
            loading="lazy"
          />
        </div>
      </div>

      <!-- HASHTAG / TEXT -->
      <div class="mt-14 grid grid-cols-12 gap-10">
        <div class="col-span-12 lg:col-span-6">
          <p class="text-5xl font-bold text-[#7C8BDA] sm:text-6xl">#business</p>
        </div>

        <div class="col-span-12 text-sm leading-6 text-black lg:col-span-6">
          <p>
            We are the local business council in Esbjerg and Fanø municipalities, and we work to
            create development for the business community in both municipalities.
          </p>

          <p class="mt-5">
            Together with the business community, we inspire new paths to development and growth for
            the benefit of both companies and citizens.
          </p>
        </div>
      </div>

      <!-- QUOTE -->
      <blockquote
        class="relative mx-auto mt-16 max-w-[1000px] rounded-md bg-white px-12 py-8 text-center text-lg text-[#12294B] shadow-[0px_4px_8px_rgba(0,0,0,0.18)]"
      >
        <span class="absolute left-5 top-3 text-5xl font-bold text-[#7C8BDA]" aria-hidden="true"
          >“</span
        >

        We create the best conditions for running a business and working in Esbjerg and Fanø
        municipalities.

        <span
          class="absolute bottom-[-10px] right-5 text-5xl font-bold text-[#7C8BDA]"
          aria-hidden="true"
          >”</span
        >
      </blockquote>

      <!-- PROJECTS -->
      <div class="mt-20 grid grid-cols-12 items-center gap-10">
        <div class="col-span-12 lg:col-span-6">
          <img
            src="@/assets/network/business esbjerg pic 2.png"
            alt="Business Esbjerg project collaboration meeting"
            class="h-[280px] w-full rounded-lg object-cover grayscale"
            loading="lazy"
          />
        </div>

        <article class="col-span-12 lg:col-span-6">
          <h2 class="text-2xl font-semibold uppercase">Projects</h2>

          <div class="mt-6 space-y-5 text-sm leading-6 text-black">
            <p>
              We participate in the project Business DE-DK, which focuses on investigating
              cooperation opportunities across the border.
            </p>

            <p>
              We also participate in Green Business, which supports small and medium-sized
              enterprises in Denmark and Germany in their work with sustainability.
            </p>
          </div>

          <a
            href="https://www.businessesbjerg.com/en/"
            target="_blank"
            rel="noopener noreferrer"
            class="mt-8 inline-flex rounded-md bg-[#7C8BDA] px-10 py-3 text-sm font-semibold uppercase text-white transition hover:bg-[#6574C9] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#12294B]"
          >
            Visit our website
          </a>
        </article>
      </div>
    </section>

    <div class="h-32 bg-[linear-gradient(to_top,#9BA8F0_0%,#FFFFFF_100%)]"></div>
  </main>
</template>

<script setup></script>

<style scoped>
.contact-link {
  display: flex;
  align-items: center;
  gap: 12px;
  color: #12294b;
}
</style>
