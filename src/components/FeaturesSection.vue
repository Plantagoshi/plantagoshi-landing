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
        <div class="card bg-base-200 hover:bg-base-300 transition-colors">
          <div class="card-body">
            <Microscope class="text-primary w-10 h-10 mb-3" />
            <h3 class="card-title">{{ t('features.precision.title') }}</h3>
            <p class="text-neutral-600 leading-relaxed text-sm">{{ t('features.precision.desc') }}</p>
          </div>
        </div>
        <div class="card bg-base-200 hover:bg-base-300 transition-colors">
          <div class="card-body">
            <Bot class="text-primary w-10 h-10 mb-3" />
            <h3 class="card-title">{{ t('features.ai.title') }}</h3>
            <p class="text-neutral-600 leading-relaxed text-sm">{{ t('features.ai.desc') }}</p>
          </div>
        </div>
        <div class="card bg-base-200 hover:bg-base-300 transition-colors">
          <div class="card-body">
            <Smartphone class="text-primary w-10 h-10 mb-3" />
            <h3 class="card-title">{{ t('features.app.title') }}</h3>
            <p class="text-neutral-600 leading-relaxed text-sm">{{ t('features.app.desc') }}</p>
          </div>
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
