<template>
  <div
    class="flex flex-col items-center justify-center p-4 rounded-3xl bg-neutral-900 w-32 h-24 shadow-inner relative transition-all duration-700"
    :class="faceConfig.bounce"
    :style="{ boxShadow: faceConfig.glow }"
  >
    <div class="flex gap-4">
      <div :class="faceConfig.eyes" :style="{ backgroundColor: faceConfig.color }"></div>
      <div :class="faceConfig.eyes" :style="{ backgroundColor: faceConfig.color }"></div>
    </div>
    <div
      class="mt-3 w-8 h-1 rounded-full transition-colors duration-700"
      :style="{ backgroundColor: faceConfig.color }"
    ></div>
  </div>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  state: {
    type: String,
    default: "happy",
  },
});

const styles = {
  happy: { eyes: "rounded-full h-4 w-4", color: "#E2B059", glow: "0 0 24px #E2B05966", bounce: "animate-bounce" },
  thirsty: { eyes: "rounded-t-full h-2 w-4 mt-2", color: "#6B6B6B", glow: "0 0 12px #6B6B6B33", bounce: "" },
  angry: { eyes: "h-3 w-4 skew-y-12", color: "#BC4749", glow: "0 0 20px #BC474966", bounce: "animate-pulse" },
  content: { eyes: "rounded-full h-3 w-4", color: "#386641", glow: "0 0 12px #38664133", bounce: "" },
  sleepy: { eyes: "rounded-b-full h-1 w-4 mt-1", color: "#A0A0A0", glow: "none", bounce: "" },
};

const faceConfig = computed(() => styles[props.state] || styles.happy);
</script>
