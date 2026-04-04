<template>
  <section id="features" class="py-24 bg-white rounded-4xl mx-4 md:mx-10 shadow-sm">
    <div class="max-w-6xl mx-auto px-6">
      <div class="text-center mb-16 space-y-3">
        <span class="text-primary font-bold text-sm uppercase tracking-widest">The Hardware</span>
        <h2 class="text-4xl font-bold font-display">More than a Pot. A Companion.</h2>
        <p class="text-neutral-500 max-w-2xl mx-auto">
          Built from scratch with custom PCB design, embedded firmware, and a dedicated AI — this is a full hardware +
          software student project.
        </p>
      </div>

      <div class="grid md:grid-cols-3 gap-8">
        <div
          v-for="(f, i) in features"
          :key="i"
          class="p-8 rounded-4xl bg-neutral-50 hover:bg-neutral-100 transition-colors border border-neutral-100 group"
        >
          <div class="text-3xl mb-5">{{ f.emoji }}</div>
          <h3 class="text-xl font-bold mb-3 font-display">{{ f.title }}</h3>
          <p class="text-neutral-600 leading-relaxed text-sm">{{ f.desc }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const features = [
  {
    emoji: "🔬",
    title: "Precision Sensing",
    desc: "Monitors soil moisture, ambient light (lux), temperature, and humidity 24/7 using calibrated sensors embedded in the custom PCB.",
  },
  {
    emoji: "🤖",
    title: "AI Plant Personality",
    desc: "Raw sensor data is processed by our API to generate expressive, first-person plant responses — each plant has a unique voice.",
  },
  {
    emoji: "📱",
    title: "Remote Care App",
    desc: "Chat with your plant, trigger watering, view live data, and manage multiple plants from anywhere via our companion mobile app.",
  },
];
</script>
