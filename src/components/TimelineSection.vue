<template>
    <section id="journey" class="py-24 px-6">
        <div class="max-w-6xl mx-auto">
            <div class="mb-12">
                <span class="text-primary font-bold text-sm uppercase tracking-widest">{{ t("timeline.label") }}</span>
                <h2 class="text-4xl font-bold font-display mt-2 mb-2">{{ t("timeline.title") }}</h2>
                <p class="text-neutral-500">{{ t("timeline.description") }}</p>
            </div>
            <ul class="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
                <li v-for="(step, i) in steps" :key="step">
                    <div class="timeline-middle">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-5 w-5">
                            <path
                                fill-rule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                clip-rule="evenodd"
                            />
                        </svg>
                    </div>
                    <div class="mb-10" :class="i % 2 === 0 ? 'timeline-start text-end mr-4' : 'timeline-end ml-4'">
                        <time class="font-mono italic">{{ t(`timeline.steps.${step.name}.date`) }}</time>
                        <div class="text-lg font-black text-primary">{{ t(`timeline.steps.${step.name}.phase`) }}</div>
                        <div class="grid md:grid-cols-2 gap-4 items-center">
                            <div
                                class="relative overflow-hidden rounded-2xl shadow-lg border border-base-300 bg-base-100"
                                :class="i % 2 === 0 ? 'order-start md:order-start' : 'order-start md:order-last'"
                            >
                                <img
                                    :src="step.img"
                                    class="w-full h-40 md:h-72 object-cover hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                            <p class="text-neutral-600 leading-relaxed">{{ t(`timeline.steps.${step.name}.note`) }}</p>
                        </div>
                    </div>
                    <hr />
                </li>
            </ul>
        </div>
    </section>
</template>

<script setup>
import { useI18n } from "../composables/useI18n";
const { t } = useI18n();

const steps = [
    {
        name: "kickoff",
        img: "images/pot_prototype.JPG",
    },
    {
        name: "prototype",
        img: "images/pot_prototype.JPG",
    },
    {
        name: "pcb",
        img: "images/pcb.JPG",
    },
    {
        name: "screen",
        img: "images/pot_face.JPG",
    },
    {
        name: "osentreprendre",
        img: "images/timeline/osentreprendre_local.jpg",
    },
];
</script>
