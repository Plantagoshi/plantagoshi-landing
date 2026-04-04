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
          v-for="(f, i) in features"
          :key="i"
          class="p-8 rounded-4xl bg-neutral-50 hover:bg-neutral-100 transition-colors border border-neutral-100 group"
        >
          <div class="text-3xl mb-5">{{ f.emoji }}</div>
          <h3 class="text-xl font-bold mb-3 font-display">{{ f.title }}</h3>
          <p class="text-neutral-600 leading-relaxed text-sm">{{ f.desc }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from "vue";
import { useI18n } from "../composables/useI18n";

const { t } = useI18n();

const features = computed(() => [
  {
    emoji: "🔬",
    title: t('features.precision.title'),
    desc: t('features.precision.desc'),
  },
  {
    emoji: "🤖",
    title: t('features.ai.title'),
    desc: t('features.ai.desc'),
  },
  {
    emoji: "📱",
    title: t('features.app.title'),
    desc: t('features.app.desc'),
  },
]);
</script>
