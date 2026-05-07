<template>
    <div
        class="relative flex items-center justify-center overflow-hidden transition-all duration-700"
        style="width: 100%; height: 100%"
        :style="{
            backgroundColor: faceConfig.bg,
            boxShadow: `inset 0 0 40px rgba(0,0,0,0.10)`,
        }"
    >
        <svg
            viewBox="0 0 120 90"
            xmlns="http://www.w3.org/2000/svg"
            class="w-[80%] h-[80%] transition-all duration-700"
            :class="faceConfig.animClass"
            style="overflow: visible"
        >
            <ellipse
                v-if="state !== 'sleepy'"
                cx="38"
                :cy="eyeY"
                :rx="faceConfig.eyeRx"
                :ry="faceConfig.eyeRy"
                fill="#1A1A1A"
            />
            <path
                v-if="state === 'sleepy'"
                :d="`M ${38 - 11} ${eyeY + 5} Q ${38} ${eyeY - 3} ${38 + 11} ${eyeY + 5}`"
                stroke="#1A1A1A"
                stroke-width="5.5"
                stroke-linecap="round"
                fill="none"
            />

            <ellipse
                v-if="state !== 'sleepy'"
                cx="82"
                :cy="eyeY"
                :rx="faceConfig.eyeRx"
                :ry="faceConfig.eyeRy"
                fill="#1A1A1A"
            />
            <path
                v-if="state === 'sleepy'"
                :d="`M ${82 - 11} ${eyeY + 5} Q ${82} ${eyeY - 3} ${82 + 11} ${eyeY + 5}`"
                stroke="#1A1A1A"
                stroke-width="5.5"
                stroke-linecap="round"
                fill="none"
            />

            <g v-if="state === 'angry'">
                <path d="M 22 26 L 52 34" stroke="#1A1A1A" stroke-width="5" stroke-linecap="round" fill="none" />
                <path d="M 98 26 L 68 34" stroke="#1A1A1A" stroke-width="5" stroke-linecap="round" fill="none" />
            </g>

            <g v-if="state === 'thirsty'">
                <path d="M 103 15 Q 109 7 115 15 Q 115 24 103 24 Q 91 24 103 15" fill="#5BA4CF" opacity="0.75" />
            </g>

            <g v-if="state === 'sleepy'" opacity="0.45" font-family="sans-serif" font-weight="bold" fill="#1A1A1A">
                <text x="93" y="32" font-size="9">z</text>
                <text x="101" y="23" font-size="12">z</text>
                <text x="110" y="13" font-size="15">z</text>
            </g>

            <path
                v-if="state === 'happy'"
                d="M 36 66 Q 60 86 84 66"
                stroke="#1A1A1A"
                stroke-width="5.5"
                stroke-linecap="round"
                fill="none"
            />
            <path
                v-if="state === 'content'"
                d="M 40 66 Q 60 78 80 66"
                stroke="#1A1A1A"
                stroke-width="5"
                stroke-linecap="round"
                fill="none"
            />
            <path
                v-if="state === 'thirsty'"
                d="M 36 74 Q 48 66 60 70 Q 72 74 84 68"
                stroke="#1A1A1A"
                stroke-width="5"
                stroke-linecap="round"
                fill="none"
            />
            <path
                v-if="state === 'angry'"
                d="M 36 78 Q 60 62 84 78"
                stroke="#1A1A1A"
                stroke-width="5.5"
                stroke-linecap="round"
                fill="none"
            />
            <path
                v-if="state === 'sleepy'"
                d="M 44 72 Q 60 75 76 72"
                stroke="#1A1A1A"
                stroke-width="4.5"
                stroke-linecap="round"
                fill="none"
            />
        </svg>
    </div>
</template>

<script setup>
import { computed } from "vue";
import { getEmotion } from "../config/emotions";

const props = defineProps({
    state: {
        type: String,
        default: "happy",
    },
});

const emotion = computed(() => getEmotion(props.state));
const faceConfig = computed(() => ({ bg: emotion.value.bg, ...emotion.value.face }));
const eyeY = computed(() => 36 + (faceConfig.value.eyeYOffset || 0));
</script>

<style scoped>
@keyframes face-bounce {
    0%,
    100% {
        transform: translateY(0) scale(1);
    }
    50% {
        transform: translateY(-5px) scale(1.04);
    }
}
.face-bounce {
    animation: face-bounce 2.4s ease-in-out infinite;
}

@keyframes face-droop {
    0%,
    100% {
        transform: translateY(0);
    }
    60% {
        transform: translateY(4px);
    }
}
.face-droop {
    animation: face-droop 3s ease-in-out infinite;
}

@keyframes face-shake {
    0%,
    100% {
        transform: translateX(0);
    }
    20% {
        transform: translateX(-2.5px) rotate(-0.6deg);
    }
    40% {
        transform: translateX(2.5px) rotate(0.6deg);
    }
    60% {
        transform: translateX(-2px);
    }
    80% {
        transform: translateX(2px);
    }
}
.face-shake {
    animation: face-shake 0.45s ease-in-out infinite;
}

@keyframes face-breathe {
    0%,
    100% {
        transform: scale(1);
    }
    50% {
        transform: scale(1.018);
    }
}
.face-breathe {
    animation: face-breathe 4s ease-in-out infinite;
}
</style>
