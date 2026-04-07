<template>
  <nav class="navbar bg-base-200/70 backdrop-blur-md fixed top-0 w-full z-50 border-b border-base-200">
    <div class="container max-w-6xl mx-auto px-6 flex justify-between items-center">
      <div class="flex items-center gap-2">
        <div class="btn btn-primary btn-sm btn-square">
          <Leaf class="w-5 h-5" />
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
        <div class="join">
          <button
            class="join-item btn btn-sm"
            :class="currentLocale === 'en' ? 'btn-primary' : 'btn-ghost'"
            @click="currentLocale === 'fr' && toggleLocale()"
          >
            EN
          </button>
          <button
            class="join-item btn btn-sm"
            :class="currentLocale === 'fr' ? 'btn-primary' : 'btn-ghost'"
            @click="currentLocale === 'en' && toggleLocale()"
          >
            FR
          </button>
        </div>
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
