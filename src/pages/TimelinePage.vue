<template>
    <section class="pt-24 pb-16 px-6">
        <div class="max-w-6xl mx-auto">
            <div class="mb-12" data-aos="fade-down">
                <span class="text-primary font-bold text-sm uppercase tracking-widest">{{
                    t('timeline.label')
                }}</span>
                <h2 class="text-4xl font-bold font-display mt-2 mb-2">{{ t('timeline.title') }}</h2>
                <p class="text-base-content/60">{{ t('timeline.description') }}</p>
            </div>
            <ul class="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
                <li v-for="(step, i) in steps" :key="step" data-aos="fade-up" :data-aos-delay="i * 100">
                    <div class="timeline-middle">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            class="h-5 w-5"
                        >
                            <path
                                fill-rule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                clip-rule="evenodd"
                            />
                        </svg>
                    </div>
                    <div
                        class="mb-10"
                        :class="i % 2 === 0 ? 'timeline-start md:text-end ml-4 md:ml-0 md:mr-4' : 'timeline-end ml-4'"
                    >
                        <time class="font-mono italic">{{
                            t(`timeline.steps.${step.name}.date`)
                        }}</time>
                        <div class="text-lg font-black text-primary">
                            {{ t(`timeline.steps.${step.name}.phase`) }}
                        </div>
                        <div class="grid md:grid-cols-2 gap-4 mt-3 items-center">
                            <div
                                class="relative overflow-hidden rounded-2xl shadow-lg border border-base-300 bg-base-100 order-start mx-auto md:mx-0"
                                :class="i % 2 === 0 ? '' : 'md:order-last'"
                            >
                                <img
                                    :src="step.img"
                                    class="w-full h-48 md:h-72 md:w-72 object-cover hover:scale-105 transition-transform duration-200"
                                />
                            </div>
                            <div>
                                <p class="text-base-content/70 text-left">
                                    {{ t(`timeline.steps.${step.name}.note`) }}
                                </p>
                                <div class="mt-2 flex flex-wrap gap-3">
                                    <BaseButton
                                        v-for="link in step.links"
                                        :key="link.url"
                                        :href="link.url"
                                        target="_blank"
                                        variant="outline"
                                        size="sm"
                                    >
                                        {{ t(`timeline.steps.${step.name}.links.${link.label}`) }}
                                        <ExternalLink class="w-3 h-3" />
                                    </BaseButton>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr />
                </li>
            </ul>
        </div>
    </section>
</template>

<script setup>
import { useHead } from '@unhead/vue';
import { ExternalLink } from 'lucide-vue-next';
import { computed } from 'vue';
import { useI18n } from '../composables/useI18n';
import BaseButton from '@/components/BaseButton.vue';

const { t, locale } = useI18n();

useHead({
    title: computed(() =>
        locale.value === 'fr' ? 'Chronologie — Plantagoshi' : 'Timeline — Plantagoshi'
    ),
    meta: [
        {
            name: 'description',
            content: computed(() => t('timeline.description')),
        },
        {
            property: 'og:title',
            content: computed(() =>
                locale.value === 'fr' ? 'Chronologie — Plantagoshi' : 'Timeline — Plantagoshi'
            ),
        },
        {
            property: 'og:description',
            content: computed(() => t('timeline.description')),
        },
    ],
    link: [{ rel: 'canonical', href: 'https://plantagoshi.ca/timeline' }],
});

const steps = [
    {
        name: 'osentreprendreRegional',
        img: 'images/timeline/osentreprendre_regional.jpg',
        links: [
            {
                label: 'sorelTracyInfo',
                url: 'https://soreltracy.info/2026/04/29/plantagoshi-deux-etudiants-du-cegep-de-sorel-tracy-brillent-a-osentreprendre-monteregie-et-visent-le-national/',
            },
        ],
    },
    {
        name: 'osentreprendreLocal',
        img: 'images/timeline/osentreprendre_local.jpg',
        links: [
            {
                label: 'sorelTracyInfo',
                url: 'https://soreltracy.info/2026/04/02/le-28e-defi-ose',
            },
        ],
    },
    {
        name: 'screen',
        img: 'images/pot_face.JPG',
    },
    {
        name: 'pcb',
        img: 'images/pcb.JPG',
    },
    {
        name: 'prototype',
        img: 'images/pot_prototype.JPG',
    },
    {
        name: 'kickoff',
        img: 'images/hub_profil.jpeg',
    },
];
</script>
