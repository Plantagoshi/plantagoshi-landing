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
                        <time class="font-mono italic">{{ t(`timeline.steps.${step}.date`) }}</time>
                        <div class="text-lg font-black text-primary">{{ t(`timeline.steps.${step}.phase`) }}</div>
                        <div class="grid grid-cols-2 items-center gap-3">
                            <div
                                class="w-full aspect-video bg-base-100 rounded-2xl flex text-center items-center justify-center text-neutral-400 text-xs border border-dashed border-base-300"
                                :class="i % 2 === 0 ? 'order-start' : 'order-last'"
                            >
                                📷 {{ t("timeline.photoPlaceholder") }} {{ t(`timeline.steps.${step}.phase`) }}
                            </div>
                            <span>{{ t(`timeline.steps.${step}.note`) }}</span>
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

const steps = ["prototype", "brain", "interface"];
</script>
