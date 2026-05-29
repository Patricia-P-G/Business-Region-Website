<template>
  <!-- Media Card Template -- Clickable -->
  <router-link :to="card.route || '#'" :class="linkClass" :aria-label="`Read more about ${card.title}`">
    <!-- Card Wrapper -->
    <article class="flex h-full w-full flex-col justify-between overflow-hidden rounded-2xl bg-white shadow-[0px_-1.2px_20.23px_0px_rgba(0,0,0,0.25)] transition duration-300 hover:-translate-y-2 hover:shadow-[0_12px_35px_rgb(0,0,0,0.16)] motion-reduce:transition-none motion-reduce:hover:translate-y-0"
      itemscope itemtype="https://schema.org/Article">

      <!-- Image Wrapper -->
      <div class="relative h-42.5 w-full overflow-hidden bg-slate-100">
        <!-- Image -->
        <img :src="imageSrc" :alt="`${card.title} cover image`" class="h-full w-full object-cover" loading="lazy" itemprop="image"/>

        <!-- Card Type EXAMPLE: Conference, Interview etc -->
        <span class="absolute right-3 top-3 rounded-md bg-[#3E5A78] px-6 py-2 text-xs font-bold uppercase text-white sm:px-8" itemprop="articleSection">
          {{ card.type }}
        </span>
      </div>

      <!-- Card Content Wrapper -->
      <div class="flex grow flex-col justify-between px-4 py-5">
        <!-- Title + Description Wrapper -->
        <div>
            <!-- Title -->
          <h3 class="line-clamp-2 text-base font-semibold text-black transition group-hover:text-primary sm:text-lg" itemprop="headline">
            {{ card.title }}
          </h3>

          <!-- Description -->
          <p class="mt-1 line-clamp-2 text-sm leading-4 text-[#5F5F5F]" itemprop="description">
            {{ card.description }}
          </p>
        </div>

        <!-- Bottom Info Wrapper -->
        <div class="mt-6 flex items-end justify-between text-sm text-black sm:mt-8">
          <!-- Reading Time -->
          <span aria-label="Duration or reading time">
            {{ card.durationOrRead }}
          </span>

          <!-- Right Bottom Info -- Location + Date -->
           <span class="text-right">
                <!-- Location -->
                <span aria-label="Location">{{ card.location }}</span>
                <br />
                <!-- Date -->
                <time :datetime="card.date" itemprop="datePublished">
                    {{ card.date }}
                </time>
           </span>
        </div>
      </div>
    </article>
  </router-link>
</template>

<script setup>
// Component Props
const props = defineProps({
  card: {
    type: Object,
    required: true,
  },

  linkClass: {
    type: String,
    default:
      'group mx-auto block h-full w-full rounded-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2',
  },
});

// Dynamically resolves Image Path from Assets Folder
const imageSrc = new URL(`/src/assets/media/${props.card.imageName}`, import.meta.url).href;
</script>