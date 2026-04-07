<template>
    <section class="pt-36 pb-20 px-6 overflow-hidden">
        <div class="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
            <div class="space-y-4">
                <div class="badge badge-outline badge-primary gap-2">
                    <span class="badge badge-success badge-xs animate-pulse"></span>
                    {{ t("hero.mood") }} {{ currentFace }}
                </div>

                <h1 class="text-5xl md:text-6xl font-bold leading-tight font-display">
                    {{ t("hero.title") }}<br />
                    <span class="text-primary block mt-1">{{ t("hero.subtitle") }}</span>
                </h1>

                <p class="text-lg text-neutral-600 max-w-md leading-relaxed">
                    {{ t("hero.description") }}
                </p>

                <div class="badge badge-secondary gap-2">
                    <Trophy class="w-4 h-4" />
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
                <div class="card bg-base-100 shadow-xl relative z-10 p-6">
                    <div class="card-body gap-6 items-center">
                        <div
                            class="w-44 h-60 bg-neutral-100 rounded-t-full rounded-b-3xl flex flex-col justify-end p-4 border-4 border-white shadow-inner overflow-hidden"
                        >
                            <PlantFace :state="activeFace" />
                        </div>
                        <div class="stats shadow bg-base-200">
                            <div class="stat px-3 py-2">
                                <Droplets class="text-blue-500 w-5 h-5" />
                                <div class="stat-title text-xs text-neutral-400">{{ t("hero.moisture") }}</div>
                                <div class="stat-value text-sm">12%</div>
                            </div>
                            <div class="stat px-3 py-2">
                                <Sun class="text-amber-500 w-5 h-5" />
                                <div class="stat-title text-xs text-neutral-400">{{ t("hero.light") }}</div>
                                <div class="stat-value text-sm">840lx</div>
                            </div>
                            <div class="stat px-3 py-2">
                                <Thermometer class="text-red-400 w-5 h-5" />
                                <div class="stat-title text-xs text-neutral-400">{{ t("hero.temp") }}</div>
                                <div class="stat-value text-sm">24°C</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="absolute inset-0 bg-green-100 rounded-full blur-3xl opacity-50 scale-90"></div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ArrowDown, Droplets, Sun, Thermometer, Trophy } from "lucide-vue-next";
import { onMounted, onUnmounted, ref } from "vue";
import { useI18n } from "../composables/useI18n";
import BaseButton from "./BaseButton.vue";
import PlantFace from "./PlantFace.vue";

const { t } = useI18n();

const faces = ["happy", "content", "thirsty", "angry", "sleepy"];
const activeFace = ref("happy");
const currentFace = ref("HAPPY");
let interval;

onMounted(() => {
    let i = 0;
    interval = setInterval(() => {
        i = (i + 1) % faces.length;
        activeFace.value = faces[i];
        currentFace.value = faces[i].toUpperCase();
    }, 3000);
});

onUnmounted(() => clearInterval(interval));
</script>
