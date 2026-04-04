<template>
  <section id="journey" class="py-24 px-6">
    <div class="max-w-6xl mx-auto">
      <div class="mb-12">
        <span class="text-primary font-bold text-sm uppercase tracking-widest">{{ t('timeline.label') }}</span>
        <h2 class="text-4xl font-bold font-display mt-2 mb-2">{{ t('timeline.title') }}</h2>
        <p class="text-neutral-500">{{ t('timeline.description') }}</p>
      </div>

      <div class="grid md:grid-cols-3 gap-10">
        <div v-for="(step, i) in [0, 1, 2]" :key="i" class="relative pt-8">
          <div
            class="absolute top-0 left-0 w-8 h-8 rounded-full bg-white border-4 border-primary flex items-center justify-center font-bold text-xs text-primary"
          >
            {{ i + 1 }}
          </div>
          <div class="bg-white p-8 rounded-4xl shadow-sm border border-neutral-100 h-full">
            <span class="text-xs font-bold uppercase tracking-widest text-neutral-400">{{ t(`timeline.steps.${i}.date`) }}</span>
            <h3 class="text-xl font-bold font-display mt-1 mb-3">{{ t(`timeline.steps.${i}.phase`) }}</h3>
            <p class="text-neutral-600 text-sm leading-relaxed">{{ t(`timeline.steps.${i}.note`) }}</p>
            <!-- Replace the div below with an <img> tag once you have photos -->
            <div
              class="mt-5 w-full aspect-video bg-neutral-100 rounded-2xl flex items-center justify-center text-neutral-400 text-xs border border-dashed border-neutral-300"
            >
              📷 {{ t('timeline.photoPlaceholder') }} {{ t(`timeline.steps.${i}.phase`) }}
            </div>
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
