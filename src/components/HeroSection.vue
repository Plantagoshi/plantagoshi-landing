<template>
    <section
        class="relative min-h-screen w-full bg-base-100 text-base-content overflow-hidden flex items-center justify-center"
    >
        <div
            class="relative z-10 w-full max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-16 items-center"
        >
            <!-- Left: Content -->
            <div class="space-y-6">
                <Transition name="details" mode="out-in">
                    <div :key="activeFace" class="space-y-1">
                        <h2 class="text-sm font-bold uppercase tracking-[0.2em] text-base-content/50">
                            {{ t(`hero.emotions.${activeFace}`) }}
                        </h2>
                        <p class="text-sm italic text-base-content/60">
                            "{{ t(`hero.quotes.${activeFace}`) }}"
                        </p>
                    </div>
                </Transition>

                <h1
                    class="text-5xl md:text-6xl font-bold leading-tight font-display text-base-content"
                >
                    {{ t('hero.title') }}<br />
                    <span class="text-primary block mt-1">{{ t('hero.subtitle') }}</span>
                </h1>

                <p class="text-lg text-base-content/70 max-w-md leading-relaxed">
                    {{ t('hero.description') }}
                </p>

                <!-- Awards -->
                <div class="flex flex-col items-start gap-2">
                    <div
                        class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#F7941E]/15 text-[#b06800] text-sm font-medium whitespace-normal text-left leading-snug border border-[#F7941E]/20"
                    >
                        <Trophy class="w-4 h-4 shrink-0" />
                        {{ t('hero.osentreprendre.local') }}
                    </div>
                    <div
                        class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#8DC63F]/15 text-[#4a7a1a] text-sm font-medium whitespace-normal text-left leading-snug border border-[#8DC63F]/20"
                    >
                        <Trophy class="w-4 h-4 shrink-0" />
                        {{ t('hero.osentreprendre.regional') }}
                    </div>
                </div>

                <!-- CTAs -->
                <div class="flex flex-col sm:flex-row gap-4 pt-2">
                    <router-link to="/contact" class="btn btn-primary btn-lg">
                        {{ t('hero.cta') }}
                    </router-link>
                    <BaseButton href="#features" variant="outline" size="lg">
                        {{ t('hero.ctaSecondary') }}
                        <ArrowDown class="w-6 h-6" />
                    </BaseButton>
                </div>
            </div>

            <!-- Right: Plant Face Visual + Stats -->
            <div class="flex flex-col items-center gap-14">
                <div class="relative flex justify-center items-center">
                    <!-- Glow -->
                    <div
                        class="absolute inset-0 rounded-full blur-3xl opacity-30 transition-all duration-700 animate-pulse-gentle"
                        :style="{ backgroundColor: emotionGlow }"
                    />

                    <!-- Face Container -->
                    <div
                        class="relative h-72 w-72 md:h-96 md:w-96 rounded-full border border-base-300 shadow-xl overflow-hidden"
                        :style="{ backgroundColor: faceBg, boxShadow: 'inset 0 0 40px rgba(0,0,0,0.10)' }"
                    >
                        <div class="w-full h-full animate-float">
                            <Transition name="face-swap" mode="out-in">
                                <PlantFace :key="activeFace" :state="activeFace" />
                            </Transition>
                        </div>
                    </div>

                    <!-- Status Label -->
                    <div class="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap">
                        <Transition name="details" mode="out-in">
                            <div
                                :key="activeFace"
                                class="flex items-center gap-2 text-xs uppercase tracking-widest text-base-content/60 bg-base-100/90 px-4 py-2 rounded-full border border-base-300 backdrop-blur shadow-sm"
                            >
                                <span
                                    class="h-1.5 w-1.5 rounded-full animate-pulse"
                                    :style="{ backgroundColor: emotionGlow }"
                                />
                                {{ t(`hero.emotions.${activeFace}`) }}
                            </div>
                        </Transition>
                    </div>
                </div>

                <!-- Stats below plant face -->
                <div
                    class="w-full max-w-sm bg-base-200 p-4 rounded-2xl border border-base-300 shadow-sm"
                >
                    <Transition name="details" mode="out-in">
                        <div :key="activeFace" class="space-y-3">
                            <div v-for="(stat, idx) in emotionStats" :key="stat.labelKey">
                                <div class="flex items-center justify-between mb-1.5 text-sm">
                                    <div
                                        class="flex items-center gap-2"
                                        :class="
                                            stat.value > 50
                                                ? 'text-base-content'
                                                : 'text-base-content/60'
                                        "
                                    >
                                        <component
                                            :is="stat.icon"
                                            :size="14"
                                            :style="{ color: stat.iconColor }"
                                        />
                                        <span>{{ t(stat.labelKey) }}</span>
                                    </div>
                                    <span class="font-mono text-xs text-base-content/50">{{
                                        stat.displayValue
                                    }}</span>
                                </div>
                                <div
                                    class="relative h-1.5 w-full bg-base-300 rounded-full overflow-hidden"
                                >
                                    <div
                                        class="absolute top-0 bottom-0 left-0 rounded-full opacity-80 transition-all duration-1000 ease-out"
                                        :style="{
                                            width: animatedBars ? `${stat.value}%` : '0%',
                                            backgroundColor: stat.barColor,
                                            transitionDelay: `${300 + idx * 150}ms`,
                                        }"
                                    />
                                </div>
                            </div>
                        </div>
                    </Transition>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ArrowDown, Trophy } from 'lucide-vue-next';
import { computed, nextTick, onMounted, onUnmounted, ref, watch } from 'vue';
import { EMOTION_KEYS, getEmotion } from '../config/emotions';
import { useI18n } from '../composables/useI18n';
import BaseButton from './BaseButton.vue';
import PlantFace from './PlantFace.vue';

const { t } = useI18n();

const activeFace = ref('happy');
const animatedBars = ref(false);
let interval;

onMounted(() => {
    let i = 0;
    requestAnimationFrame(() => {
        animatedBars.value = true;
    });
    interval = setInterval(() => {
        i = (i + 1) % EMOTION_KEYS.length;
        activeFace.value = EMOTION_KEYS[i];
    }, 3000);
});

onUnmounted(() => clearInterval(interval));

// Re-trigger bar animations on face change
watch(activeFace, async () => {
    animatedBars.value = false;
    await nextTick();
    requestAnimationFrame(() => {
        animatedBars.value = true;
    });
});

const activeEmotion = computed(() => getEmotion(activeFace.value));
const emotionGlow = computed(() => activeEmotion.value.glow);
const faceBg = computed(() => activeEmotion.value.bg);
const emotionStats = computed(() => activeEmotion.value.stats);
</script>

<style scoped>
@keyframes spin-slow {
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
}
.animate-spin-slow {
    animation: spin-slow 20s linear infinite;
}

@keyframes pulse-gentle {
    0%,
    100% {
        transform: scale(1);
    }
    50% {
        transform: scale(1.05);
    }
}
.animate-pulse-gentle {
    animation: pulse-gentle 4s ease-in-out infinite;
}

@keyframes float {
    0%,
    100% {
        transform: translateY(-6px);
    }
    50% {
        transform: translateY(6px);
    }
}
.animate-float {
    animation: float 6s ease-in-out infinite;
}

/* Details text transition */
.details-enter-active {
    transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}
.details-leave-active {
    transition: all 0.2s ease-in;
}
.details-enter-from {
    opacity: 0;
    transform: translateY(12px);
    filter: blur(8px);
}
.details-leave-to {
    opacity: 0;
    transform: translateY(-8px);
    filter: blur(4px);
}

/* Face swap transition */
.face-swap-enter-active {
    transition: all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
}
.face-swap-leave-active {
    transition: all 0.25s ease-in;
}
.face-swap-enter-from {
    opacity: 0;
    transform: scale(1.15);
    filter: blur(10px);
}
.face-swap-leave-to {
    opacity: 0;
    transform: scale(0.85);
    filter: blur(10px);
}
</style>
