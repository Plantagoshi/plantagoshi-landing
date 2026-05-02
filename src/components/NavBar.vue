<template>
    <nav
        class="navbar bg-base-200/70 backdrop-blur-md fixed top-0 w-full z-50 border-b border-base-200"
    >
        <div class="container max-w-6xl mx-auto px-6 flex justify-between items-center">
            <router-link to="/" class="flex items-center gap-2">
                <div class="bg-primary text-white p-2 rounded-sm">
                    <Leaf class="w-5 h-5" />
                </div>
                <span class="text-xl font-bold font-display tracking-tight">Plantagoshi</span>
            </router-link>

            <div class="hidden md:flex gap-8 font-medium text-sm">
                <router-link to="/timeline" class="hover:text-primary transition-colors">{{
                    t('nav.journey')
                }}</router-link>
                <router-link to="/contact" class="hover:text-primary transition-colors">{{
                    t('nav.contact')
                }}</router-link>
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
            </div>
        </div>
    </nav>
</template>

<script setup>
import { Leaf } from 'lucide-vue-next';
import { useI18n } from '../composables/useI18n';

const { t, currentLocale, toggleLocale } = useI18n();
</script>
