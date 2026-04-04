<template>
  <section id="app" class="py-24 px-6">
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

      <!-- App Screenshot Placeholder -->
      <div class="flex-1 w-full max-w-xs">
        <div
          class="w-full aspect-9/18 bg-neutral-900 rounded-4xl border-4 border-neutral-700 flex items-center justify-center shadow-2xl relative overflow-hidden"
        >
          <div class="absolute inset-0 `bg-linear-to-b from-neutral-800 to-neutral-900 opacity-80"></div>
          <div class="relative z-10 text-center text-neutral-400 px-4">
            <div class="text-5xl mb-3">📱</div>
            <p class="text-sm font-medium">{{ t('appShowcase.screenshot') }}</p>
            <p class="text-xs mt-1 text-neutral-500">{{ t('appShowcase.screenshotSubtitle') }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useI18n } from "../composables/useI18n";

const { t } = useI18n();
</script>
