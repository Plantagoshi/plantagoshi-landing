<template>
    <HeroSection />
    <FeaturesSection />
    <AppShowcase />
    <TeamSection />
</template>

<script setup>
import { useHead } from '@unhead/vue';
import { computed } from 'vue';
import AppShowcase from '../components/AppShowcase.vue';
import FeaturesSection from '../components/FeaturesSection.vue';
import HeroSection from '../components/HeroSection.vue';
import TeamSection from '../components/TeamSection.vue';
import { useI18n } from '../composables/useI18n';

const { t, locale } = useI18n();

useHead({
    title: computed(() =>
        locale.value === 'fr'
            ? 'Plantagoshi — Le pot intelligent qui donne vie à vos plantes'
            : 'Plantagoshi — The Smart Planter That Brings Your Plants to Life'
    ),
    meta: [
        {
            name: 'description',
            content: computed(() => t('hero.description')),
        },
        {
            property: 'og:title',
            content: computed(() =>
                locale.value === 'fr'
                    ? 'Plantagoshi — Le pot intelligent qui donne vie à vos plantes'
                    : 'Plantagoshi — The Smart Planter That Brings Your Plants to Life'
            ),
        },
        {
            property: 'og:description',
            content: computed(() => t('hero.description')),
        },
    ],
    link: [{ rel: 'canonical', href: 'https://plantagoshi.ca/' }],
    htmlAttrs: { lang: computed(() => locale.value) },
});
</script>
