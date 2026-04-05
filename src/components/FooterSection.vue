<template>
  <footer class="py-12 border-t border-neutral-200 mt-8">
    <div
      class="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-neutral-400"
    >
      <span class="font-bold font-display text-neutral-700 flex items-center gap-2">
        <Leaf class="w-4 h-4 text-primary" /> Plantagoshi
      </span>
      <p>{{ t('footer.copyright') }}</p>
      <div class="flex gap-6">
        <a href="#" class="hover:text-neutral-900 transition-colors">{{ t('footer.github') }}</a>
        <a href="#" class="hover:text-neutral-900 transition-colors">{{ t('footer.instagram') }}</a>
        <a href="#" class="hover:text-neutral-900 transition-colors">{{ t('footer.demo') }}</a>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { useI18n } from "../composables/useI18n";
import { Leaf } from "lucide-vue-next";

const { t } = useI18n();
</script>
