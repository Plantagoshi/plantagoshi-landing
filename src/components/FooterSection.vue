<template>
  <footer class="footer footer-center p-6 bg-base-200 text-base-content border-t border-base-300 mt-8">
    <div class="container max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6 text-sm">
      <span class="font-bold font-display flex items-center gap-2">
        <Leaf class="w-4 h-4 text-primary" /> Plantagoshi
      </span>
      <p>{{ t('footer.copyright') }}</p>
      <div class="flex gap-6">
        <a href="https://github.com/Plantagoshi" class="hover:text-primary transition-colors">{{ t('footer.github') }}</a>
        <a href="#" class="hover:text-primary transition-colors">{{ t('footer.instagram') }}</a>
        <a href="#" class="hover:text-primary transition-colors">{{ t('footer.demo') }}</a>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { useI18n } from "../composables/useI18n";
import { Leaf } from "lucide-vue-next";

const { t } = useI18n();
</script>
