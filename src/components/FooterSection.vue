<template>
    <footer
        class="footer footer-center p-6 bg-base-200 text-base-content border-t border-base-300 mt-8"
    >
        <div
            class="container max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6 text-sm"
        >
            <span class="font-bold font-display flex items-center gap-2">
                <Leaf class="w-4 h-4 text-primary" /> Plantagoshi
            </span>
            <div class="flex gap-4 text-xs">
                <router-link
                    to="/privacy"
                    class="hover:text-primary transition-colors"
                >{{ t('footer.privacy') }}</router-link>
            </div>
            <p>{{ t('footer.copyright') }}</p>
            <div class="flex gap-6">
                <a
                    href="https://github.com/Plantagoshi"
                    target="_blank"
                    class="hover:text-primary transition-colors"
                    >{{ t('footer.github') }}</a
                >
                <a
                    href="https://www.instagram.com/plantagoshi"
                    class="hover:text-primary transition-colors"
                    >{{ t('footer.instagram') }}</a
                >
            </div>
        </div>
    </footer>
</template>

<script setup>
import { Leaf } from 'lucide-vue-next';
import { useI18n } from '../composables/useI18n';

const { t } = useI18n();
</script>
