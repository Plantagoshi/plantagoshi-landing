<template>
  <section class="pt-36 pb-20 px-6 overflow-hidden">
    <div class="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
      <!-- Text -->
      <div class="space-y-8">
        <div class="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border border-neutral-100">
          <span class="flex h-2 w-2 rounded-full bg-green-500 animate-pulse"></span>
          <span class="text-sm font-bold text-neutral-500 uppercase tracking-wide"> {{ t('hero.mood') }} {{ currentFace }} </span>
        </div>

        <h1 class="text-5xl md:text-6xl font-bold leading-tight font-display">
          {{ t('hero.title') }}<br />
          <span class="text-primary block mt-1">{{ t('hero.subtitle') }}</span>
        </h1>

        <p class="text-lg text-neutral-600 max-w-md leading-relaxed">
          {{ t('hero.description') }}
        </p>

        <!-- Student / Competition Badge -->
        <div
          class="inline-flex items-center gap-2 bg-amber-50 border border-amber-200 text-amber-700 px-4 py-2 rounded-full text-sm font-medium"
        >
          🏆 {{ t('hero.badge') }}
        </div>

        <div class="flex flex-col sm:flex-row gap-4">
          <a
            href="#waitlist"
            class="bg-primary text-white text-center px-8 py-4 rounded-full text-base font-bold shadow-lg shadow-green-900/10 hover:bg-primary-dark transition-all"
          >
            {{ t('hero.cta') }}
          </a>
          <a
            href="#features"
            class="bg-white border-2 border-neutral-200 px-8 py-4 rounded-full text-base font-bold hover:bg-neutral-50 transition-all text-center"
          >
            {{ t('hero.ctaSecondary') }} ↓
          </a>
        </div>
      </div>

      <!-- Plant Pot Visual -->
      <div class="relative flex justify-center items-center">
        <div
          class="relative z-10 p-10 bg-white rounded-5xl shadow-2xl shadow-neutral-200 border border-neutral-100 flex flex-col items-center gap-6"
        >
          <div
            class="w-44 h-60 bg-neutral-100 rounded-t-full rounded-b-3xl flex flex-col justify-end p-4 border-4 border-white shadow-inner overflow-hidden"
          >
            <PlantFace :state="activeFace" />
          </div>
          <!-- Sensor Readings -->
          <div class="grid grid-cols-3 gap-3">
            <div class="bg-blue-50 p-3 rounded-2xl flex flex-col items-center gap-1">
              <span class="text-blue-500 text-lg">💧</span>
              <span class="font-mono-data text-xs font-bold">12%</span>
              <span class="text-xs text-neutral-400">{{ t('hero.moisture') }}</span>
            </div>
            <div class="bg-amber-50 p-3 rounded-2xl flex flex-col items-center gap-1">
              <span class="text-amber-500 text-lg">☀️</span>
              <span class="font-mono-data text-xs font-bold">840lx</span>
              <span class="text-xs text-neutral-400">{{ t('hero.light') }}</span>
            </div>
            <div class="bg-red-50 p-3 rounded-2xl flex flex-col items-center gap-1">
              <span class="text-red-400 text-lg">🌡️</span>
              <span class="font-mono-data text-xs font-bold">24°C</span>
              <span class="text-xs text-neutral-400">{{ t('hero.temp') }}</span>
            </div>
          </div>
        </div>
        <div class="absolute inset-0 bg-green-100 rounded-full blur-3xl opacity-50 scale-90"></div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from "vue";
import PlantFace from "./PlantFace.vue";
import { useI18n } from "../composables/useI18n";

const { t } = useI18n();

const faces = ["happy", "content", "thirsty", "angry", "sleepy"];
const activeFace = ref("happy");
const currentFace = ref("HAPPY");
let interval;

onMounted(() => {
  let i = 0;
  interval = setInterval(() => {
    i = (i + 1) % faces.length;
    activeFace.value = faces[i];
    currentFace.value = faces[i].toUpperCase();
  }, 3000);
});

onUnmounted(() => clearInterval(interval));
</script>
