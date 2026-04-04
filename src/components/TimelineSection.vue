<template>
  <section id="journey" class="py-24 px-6">
    <div class="max-w-6xl mx-auto">
      <div class="mb-12">
        <span class="text-primary font-bold text-sm uppercase tracking-widest">Our Journey</span>
        <h2 class="text-4xl font-bold font-display mt-2 mb-2">From Wires to Wonder</h2>
        <p class="text-neutral-500">A student project built over several months of iteration and learning.</p>
      </div>

      <div class="grid md:grid-cols-3 gap-10">
        <div v-for="(step, i) in steps" :key="i" class="relative pt-8">
          <div
            class="absolute top-0 left-0 w-8 h-8 rounded-full bg-white border-4 border-primary flex items-center justify-center font-bold text-xs text-primary"
          >
            {{ i + 1 }}
          </div>
          <div class="bg-white p-8 rounded-4xl shadow-sm border border-neutral-100 h-full">
            <span class="text-xs font-bold uppercase tracking-widest text-neutral-400">{{ step.date }}</span>
            <h3 class="text-xl font-bold font-display mt-1 mb-3">{{ step.phase }}</h3>
            <p class="text-neutral-600 text-sm leading-relaxed">{{ step.note }}</p>
            <!-- Replace the div below with an <img> tag once you have photos -->
            <div
              class="mt-5 w-full aspect-video bg-neutral-100 rounded-2xl flex items-center justify-center text-neutral-400 text-xs border border-dashed border-neutral-300"
            >
              📷 Add a photo of {{ step.phase }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const steps = [
  {
    phase: "V1 — The Prototype",
    date: "Project Start",
    note: "Proof of concept using breadboard, Arduino Uno, and external soil moisture probes. Focused on validating sensor data accuracy.",
  },
  {
    phase: "V2 — The Brain",
    date: "Mid-Project",
    note: "First AI integration. Custom PCB design. Replaced Arduino with ESP32 for WiFi connectivity and lower power consumption.",
  },
  {
    phase: "V3 — The Living Interface",
    date: "Final Version",
    note: "Full 3D-printed enclosure with integrated OLED emotional display, polished app, and full API stack. Competition-ready.",
  },
];
</script>
