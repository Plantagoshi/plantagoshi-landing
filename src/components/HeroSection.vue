<template>
    <section class="pt-36 pb-20 px-6 overflow-hidden">
        <div class="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
            <div class="space-y-4">
                <div class="badge badge-outline badge-primary gap-2">
                    <span class="badge badge-success badge-xs animate-pulse"></span>
                    {{ t("hero.mood") }} {{ t(`hero.emotions.${activeFace}`) }}
                </div>

                <h1 class="text-5xl md:text-6xl font-bold leading-tight font-display">
                    {{ t("hero.title") }}<br />
                    <span class="text-primary block mt-1">{{ t("hero.subtitle") }}</span>
                </h1>

                <p class="text-lg text-neutral-600 max-w-md leading-relaxed">
                    {{ t("hero.description") }}
                </p>

                <div class="badge badge-secondary gap-2 h-auto py-1.5 whitespace-normal text-left leading-snug">
                    <Trophy class="w-4 h-4 shrink-0" />
                    {{ t("hero.badge") }}
                </div>

                <div class="flex flex-col sm:flex-row gap-4">
                    <BaseButton href="#waitlist" variant="primary" size="lg">
                        {{ t("hero.cta") }}
                    </BaseButton>
                    <BaseButton href="#features" variant="outline" size="lg">
                        {{ t("hero.ctaSecondary") }}
                        <ArrowDown class="w-6 h-6" />
                    </BaseButton>
                </div>
            </div>

            <div class="relative flex justify-center items-center">
                <div
                    class="absolute inset-0 rounded-full blur-3xl opacity-40 scale-90 transition-all duration-700"
                    :style="{ backgroundColor: emotionGlow }"
                ></div>

                <div class="card bg-base-100 shadow-xl relative z-10 w-full max-w-sm overflow-hidden">
                    <div class="w-full transition-all duration-700" style="aspect-ratio: 4/3">
                        <PlantFace :state="activeFace" />
                    </div>

                    <div class="px-5 py-4 flex flex-col gap-3 items-center">
                        <div class="flex gap-2 flex-wrap justify-center">
                            <div
                                v-for="stat in emotionStats"
                                :key="stat.labelKey"
                                class="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-mono font-bold transition-all duration-700"
                                :style="{
                                    backgroundColor: stat.chipBg,
                                    color: stat.chipText,
                                }"
                            >
                                <component :is="stat.icon" class="w-3.5 h-3.5" :style="{ color: stat.iconColor }" />
                                <span class="font-sans font-medium opacity-70">{{ t(stat.labelKey) }}</span>
                                <span>{{ stat.value }}</span>
                            </div>
                        </div>

                        <p
                            class="text-xs text-center italic text-neutral-400 leading-relaxed transition-all duration-500"
                        >
                            "{{ t(`hero.quotes.${activeFace}`) }}"
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ArrowDown, Droplets, Moon, Sun, Thermometer, Trophy } from "lucide-vue-next";
import { computed, onMounted, onUnmounted, ref } from "vue";
import { useI18n } from "../composables/useI18n";
import BaseButton from "./BaseButton.vue";
import PlantFace from "./PlantFace.vue";

const { t } = useI18n();

const faces = ["happy", "content", "thirsty", "angry", "sleepy"];
const activeFace = ref("happy");
let interval;

onMounted(() => {
    let i = 0;
    interval = setInterval(() => {
        i = (i + 1) % faces.length;
        activeFace.value = faces[i];
    }, 3000);
});

onUnmounted(() => clearInterval(interval));

const glowMap = {
    happy: "#E2B059",
    content: "#386641",
    thirsty: "#5BA4CF",
    angry: "#BC4749",
    sleepy: "#9090AA",
};
const emotionGlow = computed(() => glowMap[activeFace.value] || glowMap.happy);

const statsMap = {
    happy: [
        {
            labelKey: "hero.moisture",
            value: "72%",
            icon: Droplets,
            iconColor: "#5BA4CF",
            chipBg: "#EFF6FF",
            chipText: "#1e3a5f",
        },
        {
            labelKey: "hero.light",
            value: "820lx",
            icon: Sun,
            iconColor: "#E2B059",
            chipBg: "#FFFBEB",
            chipText: "#78350f",
        },
        {
            labelKey: "hero.temp",
            value: "22°C",
            icon: Thermometer,
            iconColor: "#386641",
            chipBg: "#F0FDF4",
            chipText: "#14532d",
        },
    ],
    content: [
        {
            labelKey: "hero.moisture",
            value: "55%",
            icon: Droplets,
            iconColor: "#5BA4CF",
            chipBg: "#EFF6FF",
            chipText: "#1e3a5f",
        },
        {
            labelKey: "hero.light",
            value: "540lx",
            icon: Sun,
            iconColor: "#E2B059",
            chipBg: "#FFFBEB",
            chipText: "#78350f",
        },
        {
            labelKey: "hero.temp",
            value: "21°C",
            icon: Thermometer,
            iconColor: "#386641",
            chipBg: "#F0FDF4",
            chipText: "#14532d",
        },
    ],
    thirsty: [
        {
            labelKey: "hero.moisture",
            value: "8%",
            icon: Droplets,
            iconColor: "#BC4749",
            chipBg: "#FEF2F2",
            chipText: "#7f1d1d",
        },
        {
            labelKey: "hero.light",
            value: "310lx",
            icon: Sun,
            iconColor: "#E2B059",
            chipBg: "#FFFBEB",
            chipText: "#78350f",
        },
        {
            labelKey: "hero.temp",
            value: "23°C",
            icon: Thermometer,
            iconColor: "#386641",
            chipBg: "#F0FDF4",
            chipText: "#14532d",
        },
    ],
    angry: [
        {
            labelKey: "hero.moisture",
            value: "41%",
            icon: Droplets,
            iconColor: "#5BA4CF",
            chipBg: "#EFF6FF",
            chipText: "#1e3a5f",
        },
        {
            labelKey: "hero.light",
            value: "2100lx",
            icon: Sun,
            iconColor: "#BC4749",
            chipBg: "#FEF2F2",
            chipText: "#7f1d1d",
        },
        {
            labelKey: "hero.temp",
            value: "38°C",
            icon: Thermometer,
            iconColor: "#BC4749",
            chipBg: "#FEF2F2",
            chipText: "#7f1d1d",
        },
    ],
    sleepy: [
        {
            labelKey: "hero.moisture",
            value: "48%",
            icon: Droplets,
            iconColor: "#9090AA",
            chipBg: "#F5F5FA",
            chipText: "#3f3f5f",
        },
        {
            labelKey: "hero.light",
            value: "12lx",
            icon: Moon,
            iconColor: "#9090AA",
            chipBg: "#F5F5FA",
            chipText: "#3f3f5f",
        },
        {
            labelKey: "hero.temp",
            value: "18°C",
            icon: Thermometer,
            iconColor: "#9090AA",
            chipBg: "#F5F5FA",
            chipText: "#3f3f5f",
        },
    ],
};

const emotionStats = computed(() => statsMap[activeFace.value] || statsMap.happy);
</script>
