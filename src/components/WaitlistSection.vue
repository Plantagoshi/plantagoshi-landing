<template>
  <section id="waitlist" class="py-24 px-6">
    <div
      class="max-w-4xl mx-auto bg-neutral-900 rounded-4xl p-8 md:p-16 text-center text-white relative overflow-hidden"
    >
      <div
        class="absolute top-0 right-0 w-72 h-72 bg-green-900/30 blur-3xl rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none"
      ></div>
      <div
        class="absolute bottom-0 left-0 w-48 h-48 bg-amber-900/20 blur-3xl rounded-full translate-y-1/2 -translate-x-1/2 pointer-events-none"
      ></div>

      <div class="relative z-10 space-y-6">
        <div class="text-5xl">
          <Leaf class="w-12 h-12 text-primary mx-auto" />
        </div>
        <h2 class="text-4xl md:text-5xl font-bold font-display">{{ t('waitlist.title') }}</h2>
        <p class="text-neutral-400 text-lg max-w-lg mx-auto">
          {{ t('waitlist.description') }}
        </p>

        <div class="flex flex-col items-center sm:flex-row gap-4 max-w-md mx-auto pt-2">
          <input
            v-model="email"
            type="email"
            :placeholder="t('waitlist.placeholder')"
            class="input input-bordered rounded-full flex-1 bg-neutral-800 border-neutral-700 text-white placeholder-neutral-500"
          />
          <BaseButton @click="$emit('submit', email)" variant="primary" size="lg">
            {{ t('waitlist.cta') }}
            <Leaf class="w-4 h-4" />
          </BaseButton>
        </div>

        <p class="text-xs text-neutral-500">{{ t('waitlist.note') }}</p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";
import BaseButton from "./BaseButton.vue";
import { useI18n } from "../composables/useI18n";
import { Leaf } from "lucide-vue-next";

const { t } = useI18n();
defineEmits(["submit"]);
const email = ref("");
</script>
