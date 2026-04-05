<template>
  <section id="features" class="py-24 bg-white rounded-4xl mx-4 md:mx-10 shadow-sm">
    <div class="max-w-6xl mx-auto px-6">
      <div class="text-center mb-16 space-y-3">
        <span class="text-primary font-bold text-sm uppercase tracking-widest">{{ t('features.label') }}</span>
        <h2 class="text-4xl font-bold font-display">{{ t('features.title') }}</h2>
        <p class="text-neutral-500 max-w-2xl mx-auto">
          {{ t('features.description') }}
        </p>
      </div>

      <div class="grid md:grid-cols-3 gap-8">
        <div
          class="p-8 rounded-4xl bg-neutral-50 hover:bg-neutral-100 transition-colors border border-neutral-100 group"
        >
          <Microscope class="text-primary mb-5" />
          <h3 class="text-xl font-bold mb-3 font-display">{{ t('features.precision.title') }}</h3>
          <p class="text-neutral-600 leading-relaxed text-sm">{{ t('features.precision.desc') }}</p>
        </div>
        <div
          class="p-8 rounded-4xl bg-neutral-50 hover:bg-neutral-100 transition-colors border border-neutral-100 group"
        >
          <Bot class="text-primary mb-5" />
          <h3 class="text-xl font-bold mb-3 font-display">{{ t('features.ai.title') }}</h3>
          <p class="text-neutral-600 leading-relaxed text-sm">{{ t('features.ai.desc') }}</p>
        </div>
        <div
          class="p-8 rounded-4xl bg-neutral-50 hover:bg-neutral-100 transition-colors border border-neutral-100 group"
        >
          <Smartphone class="text-primary mb-5" />
          <h3 class="text-xl font-bold mb-3 font-display">{{ t('features.app.title') }}</h3>
          <p class="text-neutral-600 leading-relaxed text-sm">{{ t('features.app.desc') }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useI18n } from "../composables/useI18n";
import { Microscope, Bot, Smartphone } from "lucide-vue-next";

const { t } = useI18n();
</script>
