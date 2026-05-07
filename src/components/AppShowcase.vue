<template>
  <section id="mobileApp" class="py-16 px-6">
    <div class="max-w-6xl mx-auto flex flex-col md:flex-row gap-16 items-center">
      <div class="flex-1 space-y-6">
        <span class="text-primary font-bold text-sm uppercase tracking-widest">{{ t('appShowcase.label') }}</span>
        <h2 class="text-4xl font-bold font-display">{{ t('appShowcase.title') }}</h2>
        <p class="text-lg text-base-content/70">
          {{ t('appShowcase.description') }}
        </p>
        <ul class="space-y-4 pt-2">
          <li v-for="i in 5" :key="i" class="flex gap-3 items-start">
            <span class="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
              <Check class="w-3.5 h-3.5 text-primary" />
            </span>
            <span class="text-base-content/80">{{ t(`appShowcase.features.${i - 1}`) }}</span>
          </li>
        </ul>
      </div>

      <!-- App Screenshots Carousel -->
      <div class="flex-1 flex flex-col items-center">
        <div class="flex items-center gap-3">
          <button
            class="btn btn-circle btn-sm btn-ghost text-base-content/60 hover:text-primary"
            @click="prevSlide"
            aria-label="Previous screenshot"
          >
            <ChevronLeft :size="20" />
          </button>

          <div
            class="mockup-phone scale-75 origin-center -my-16"
            @touchstart="onTouchStart"
            @touchend="onTouchEnd"
          >
            <div class="mockup-phone-camera"></div>
            <div class="mockup-phone-display">
              <div class="overflow-hidden w-full h-full">
                <div
                  class="flex transition-transform duration-500 ease-in-out h-full"
                  :style="{ transform: `translateX(-${activeSlide * 100}%)` }"
                >
                  <div v-for="(image, index) in images" :key="index" class="w-full h-full shrink-0">
                    <img
                      :src="image.src"
                      :alt="image.alt"
                      class="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <button
            class="btn btn-circle btn-sm btn-ghost text-base-content/60 hover:text-primary"
            @click="nextSlide"
            aria-label="Next screenshot"
          >
            <ChevronRight :size="20" />
          </button>
        </div>

        <div class="flex justify-center gap-2 mt-4 md:mt-0">
          <button
            v-for="(image, index) in images"
            :key="index"
            class="h-3 rounded-full transition-all duration-300"
            :class="activeSlide === index ? 'bg-primary w-6' : 'bg-base-300 w-3'"
            @click="goToSlide(index)"
            :aria-label="`Go to screenshot ${index + 1}`"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import { Check, ChevronLeft, ChevronRight } from "lucide-vue-next";
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

let touchStartX = 0;

function startAutoPlay() {
  intervalId = setInterval(() => {
    activeSlide.value = (activeSlide.value + 1) % images.length;
  }, 4000);
}

function resetAutoPlay() {
  clearInterval(intervalId);
  startAutoPlay();
}

function goToSlide(index) {
  activeSlide.value = index;
  resetAutoPlay();
}

function prevSlide() {
  activeSlide.value = (activeSlide.value - 1 + images.length) % images.length;
  resetAutoPlay();
}

function nextSlide() {
  activeSlide.value = (activeSlide.value + 1) % images.length;
  resetAutoPlay();
}

function onTouchStart(e) {
  touchStartX = e.touches[0].clientX;
}

function onTouchEnd(e) {
  const diff = touchStartX - e.changedTouches[0].clientX;
  if (Math.abs(diff) > 50) {
    if (diff > 0) nextSlide();
    else prevSlide();
  }
}

onMounted(() => {
  startAutoPlay();
});

onUnmounted(() => {
  clearInterval(intervalId);
});
</script>
