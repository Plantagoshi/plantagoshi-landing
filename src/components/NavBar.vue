<template>
  <nav class="fixed top-0 w-full z-50 bg-white/70 backdrop-blur-md py-4 border-b border-neutral-100">
    <div class="max-w-6xl mx-auto px-6 flex justify-between items-center">
      <div class="flex items-center gap-2">
        <div class="bg-primary p-2 rounded-xl">
          <Leaf class="w-6 h-6 text-white" />
        </div>
        <span class="text-xl font-bold font-display tracking-tight">Plantagoshi</span>
      </div>

      <div class="hidden md:flex gap-8 font-medium text-sm">
        <a href="#features" class="hover:text-primary transition-colors">{{ t("nav.features") }}</a>
        <a href="#app" class="hover:text-primary transition-colors">{{ t("nav.app") }}</a>
        <a href="#journey" class="hover:text-primary transition-colors">{{ t("nav.journey") }}</a>
        <a href="#team" class="hover:text-primary transition-colors">{{ t("nav.team") }}</a>
      </div>

      <div class="flex items-center gap-4">
        <button
          @click="toggleLocale"
          class="relative w-14 h-8 rounded-full bg-neutral-200 hover:bg-neutral-300 transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
          :aria-label="currentLocale === 'en' ? 'Switch to French' : 'Switch to English'"
        >
          <span
            class="absolute left-1 top-1 w-6 h-6 rounded-full bg-white shadow-md flex items-center justify-center transition-transform duration-200"
            :class="currentLocale === 'fr' ? 'translate-x-6' : 'translate-x-0'"
          >
            <span class="text-xs font-bold" :class="currentLocale === 'en' ? 'text-primary' : 'text-neutral-400'"
              >EN</span
            >
          </span>
          <span
            class="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-bold transition-colors"
            :class="currentLocale === 'fr' ? 'text-primary' : 'text-neutral-400'"
            >FR</span
          >
        </button>
        <BaseButton href="#waitlist" variant="primary" size="sm">
          {{ t("nav.adopt") }}
          <Leaf class="ml-2 w-4 h-4" />
        </BaseButton>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { Leaf } from "lucide-vue-next";
import { useI18n } from "../composables/useI18n";
import BaseButton from "./BaseButton.vue";

const { t, currentLocale, toggleLocale } = useI18n();
</script>
