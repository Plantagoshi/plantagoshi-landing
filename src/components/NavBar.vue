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
                <router-link
                    v-for="link in navLinks"
                    :key="link.to"
                    :to="link.to"
                    class="hover:text-primary transition-colors"
                >{{ t(link.label) }}</router-link>
            </div>

            <div class="flex items-center gap-4">
                <div class="hidden md:flex join">
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

                <!-- Mobile menu -->
                <div class="md:hidden" ref="mobileMenuRef">
                    <button
                        class="btn btn-ghost btn-sm"
                        @click="mobileMenuOpen = !mobileMenuOpen"
                    >
                        <span class="relative w-5 h-5 inline-grid place-items-center">
                            <Menu
                                :style="{
                                    transition: 'opacity 0.3s, transform 0.3s',
                                    opacity: mobileMenuOpen ? 0 : 1,
                                    transform: mobileMenuOpen ? 'rotate(90deg)' : 'rotate(0)',
                                    position: 'absolute',
                                }"
                                class="w-5 h-5"
                            />
                            <X
                                :style="{
                                    transition: 'opacity 0.3s, transform 0.3s',
                                    opacity: mobileMenuOpen ? 1 : 0,
                                    transform: mobileMenuOpen ? 'rotate(0)' : 'rotate(-90deg)',
                                    position: 'absolute',
                                }"
                                class="w-5 h-5"
                            />
                        </span>
                    </button>
                    <ul
                        v-show="mobileMenuOpen"
                        class="menu bg-base-100 rounded-box absolute right-6 z-10 w-52 p-2 shadow-lg border border-base-200 mt-2"
                    >
                        <li v-for="link in navLinks" :key="link.to">
                            <router-link :to="link.to" @click="closeDropdown">{{
                                t(link.label)
                            }}</router-link>
                        </li>
                        <li class="menu-title pt-2">
                            <span>{{ t('nav.language') }}</span>
                        </li>
                        <li>
                            <div class="join w-full justify-center">
                                <button
                                    class="join-item btn btn-sm flex-1"
                                    :class="currentLocale === 'en' ? 'btn-primary' : 'btn-ghost'"
                                    @click="currentLocale === 'fr' && toggleLocale()"
                                >
                                    EN
                                </button>
                                <button
                                    class="join-item btn btn-sm flex-1"
                                    :class="currentLocale === 'fr' ? 'btn-primary' : 'btn-ghost'"
                                    @click="currentLocale === 'en' && toggleLocale()"
                                >
                                    FR
                                </button>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </nav>
</template>

<script setup>
import { ref } from 'vue';
import { onClickOutside } from '@vueuse/core';
import { Leaf, Menu, X } from 'lucide-vue-next';
import { useI18n } from '../composables/useI18n';

const { t, currentLocale, toggleLocale } = useI18n();

const navLinks = [
    { to: '/timeline', label: 'nav.journey' },
    { to: '/contact', label: 'nav.contact' },
];

const mobileMenuOpen = ref(false);
const mobileMenuRef = ref(null);

onClickOutside(mobileMenuRef, () => {
    closeDropdown();
});

function closeDropdown() {
    mobileMenuOpen.value = false;
}
</script>
