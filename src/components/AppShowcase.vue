<template>
  <section id="mobileApp" class="py-24 px-6">
    <div class="max-w-6xl mx-auto flex flex-col md:flex-row gap-16 items-center">
      <div class="flex-1 space-y-6">
        <span class="text-primary font-bold text-sm uppercase tracking-widest">{{ t('appShowcase.label') }}</span>
        <h2 class="text-4xl font-bold font-display">{{ t('appShowcase.title') }}</h2>
        <p class="text-lg text-neutral-600">
          {{ t('appShowcase.description') }}
        </p>
        <ul class="space-y-4 pt-2">
          <li v-for="i in 5" :key="i" class="flex gap-3 items-start">
            <span class="text-primary mt-0.5 font-bold">✓</span>
            <span class="text-neutral-700">{{ t(`appShowcase.features.${i - 1}`) }}</span>
          </li>
        </ul>
      </div>

      <!-- App Screenshots Carousel -->
      <div class="flex-1 w-full max-w-xs">
        <div class="overflow-hidden rounded-4xl">
          <div
            class="flex transition-transform duration-500 ease-in-out"
            :style="{ transform: `translateX(-${activeSlide * 100}%)` }"
          >
            <div v-for="(image, index) in images" :key="index" class="w-full shrink-0">
              <img
                :src="image.src"
                :alt="image.alt"
                class="w-full rounded-4xl border-4 border-neutral-700 shadow-2xl object-cover"
              />
            </div>
          </div>
        </div>
        <div class="flex justify-center gap-2 py-4">
          <button
            v-for="(image, index) in images"
            :key="index"
            class="w-2.5 h-2.5 rounded-full transition-colors duration-300"
            :class="activeSlide === index ? 'bg-primary' : 'bg-neutral-300'"
            @click="goToSlide(index)"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import { useI18n } from "../composables/useI18n";

const { t } = useI18n();

const activeSlide = ref(0);
let intervalId = null;

const base = import.meta.env.BASE_URL;

const images = [
  { src: `${base}images/app/home.PNG`, alt: "Plant dashboard" },
  { src: `${base}images/app/details.PNG`, alt: "Plant details and sensors" },
  { src: `${base}images/app/stats.PNG`, alt: "Temperature statistics" },
  { src: `${base}images/app/chat.PNG`, alt: "Chat with your plant" },
  { src: `${base}images/app/ia.PNG`, alt: "AI personalities" },
  { src: `${base}images/app/create.PNG`, alt: "Create a new plant" },
  { src: `${base}images/app/settings.PNG`, alt: "Profile and settings" },
];

function startAutoPlay() {
  intervalId = setInterval(() => {
    activeSlide.value = (activeSlide.value + 1) % images.length;
  }, 4000);
}

function goToSlide(index) {
  activeSlide.value = index;
  clearInterval(intervalId);
  startAutoPlay();
}

onMounted(() => {
  startAutoPlay();
});

onUnmounted(() => {
  clearInterval(intervalId);
});
</script>
