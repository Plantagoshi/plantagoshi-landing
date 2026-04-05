<template>
  <section id="team" class="py-24 px-6 bg-white rounded-4xl mx-4 md:mx-10 shadow-sm">
    <div class="max-w-6xl mx-auto">
      <div class="text-center mb-12">
        <span class="text-primary font-bold text-sm uppercase tracking-widest">{{ t('team.label') }}</span>
        <h2 class="text-4xl font-bold font-display mt-2">{{ t('team.title') }}</h2>
        <p class="text-neutral-500 mt-2 max-w-xl mx-auto">
          {{ t('team.description') }}
        </p>
      </div>

      <div class="flex flex-wrap justify-center gap-8">
        <div
          v-for="(member, i) in [0, 1, 2, 3]"
          :key="i"
          class="bg-neutral-50 rounded-4xl p-6 text-center w-48 border border-neutral-100"
        >
          <div class="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
            <Leaf class="w-8 h-8 text-primary" />
          </div>
          <p class="font-bold font-display">{{ t(`team.members.${i}.name`) }}</p>
          <p class="text-sm text-neutral-500 mt-1">{{ t(`team.members.${i}.role`) }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useI18n } from "../composables/useI18n";
import { Leaf } from "lucide-vue-next";

const { t } = useI18n();
</script>
