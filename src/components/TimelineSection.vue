<template>
  <section id="journey" class="py-24 px-6">
    <div class="max-w-6xl mx-auto">
      <div class="mb-12">
        <span class="text-primary font-bold text-sm uppercase tracking-widest">{{ t('timeline.label') }}</span>
        <h2 class="text-4xl font-bold font-display mt-2 mb-2">{{ t('timeline.title') }}</h2>
        <p class="text-neutral-500">{{ t('timeline.description') }}</p>
      </div>

      <div class="timeline timeline-vertical md:timeline-horizontal">
        <div v-for="(step, i) in [0, 1, 2]" :key="i" class="timeline-item">
          <div class="timeline-peer"></div>
          <div class="timeline-start">
            <div class="card bg-base-100 shadow-sm border border-base-200 h-full">
              <div class="card-body">
                <span class="text-xs font-bold uppercase tracking-widest text-neutral-400">{{ t(`timeline.steps.${i}.date`) }}</span>
                <h3 class="card-title mt-1 mb-3">{{ t(`timeline.steps.${i}.phase`) }}</h3>
                <p class="text-neutral-600 text-sm leading-relaxed">{{ t(`timeline.steps.${i}.note`) }}</p>
                <div class="mt-5 w-full aspect-video bg-base-200 rounded-2xl flex items-center justify-center text-neutral-400 text-xs border border-dashed border-base-300">
                  📷 {{ t('timeline.photoPlaceholder') }} {{ t(`timeline.steps.${i}.phase`) }}
                </div>
              </div>
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
