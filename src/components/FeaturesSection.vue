<template>
  <section id="features" class="py-16 bg-base-100 rounded-4xl mx-4 md:mx-10 shadow-sm">
    <div class="max-w-6xl mx-auto px-6">
      <div class="mb-8 space-y-3">
        <span class="text-primary font-bold text-sm uppercase tracking-widest">{{ t('features.label') }}</span>
        <h2 class="text-4xl font-bold font-display">{{ t('features.title') }}</h2>
        <p class="text-base-content/60 max-w-2xl">
          {{ t('features.description') }}
        </p>
      </div>

      <div class="grid md:grid-cols-6 gap-2">
        <!-- Precision — spans 4 columns -->
        <div class="md:col-span-4 group card bg-base-200 relative overflow-hidden hover:-translate-y-1 transition-all duration-200 after:absolute after:bottom-0 after:left-0 after:h-1 after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full">
          <div class="card-body">
            <div class="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-3">
              <Microscope class="text-primary w-5 h-5" />
            </div>
            <h3 class="card-title">{{ t('features.precision.title') }}</h3>
            <p class="text-base-content/70 leading-relaxed text-sm">{{ t('features.precision.desc') }}</p>
          </div>
        </div>

        <!-- AI — spans 2 columns -->
        <div class="md:col-span-2 group card bg-base-200 relative overflow-hidden hover:-translate-y-1 transition-all duration-200 after:absolute after:bottom-0 after:left-0 after:h-1 after:w-0 after:bg-accent after:transition-all after:duration-300 hover:after:w-full">
          <div class="card-body">
            <div class="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center mb-3">
              <Bot class="text-accent w-5 h-5" />
            </div>
            <h3 class="card-title">{{ t('features.ai.title') }}</h3>
            <p class="text-base-content/70 leading-relaxed text-sm">{{ t('features.ai.desc') }}</p>
          </div>
        </div>

        <!-- App — full width -->
        <div class="md:col-span-6 group card bg-base-200 relative overflow-hidden hover:-translate-y-1 transition-all duration-200 after:absolute after:bottom-0 after:left-0 after:h-1 after:w-0 after:bg-info after:transition-all after:duration-300 hover:after:w-full">
          <div class="card-body">
            <div class="w-10 h-10 rounded-xl bg-info/10 flex items-center justify-center mb-3">
              <Smartphone class="text-info w-5 h-5" />
            </div>
            <h3 class="card-title">{{ t('features.app.title') }}</h3>
            <p class="text-base-content/70 leading-relaxed text-sm">{{ t('features.app.desc') }}</p>
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
