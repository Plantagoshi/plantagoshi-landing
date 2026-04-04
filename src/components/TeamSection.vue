<template>
  <section id="team" class="py-24 px-6 bg-white rounded-4xl mx-4 md:mx-10 shadow-sm">
    <div class="max-w-6xl mx-auto">
      <div class="text-center mb-12">
        <span class="text-primary font-bold text-sm uppercase tracking-widest">The Makers</span>
        <h2 class="text-4xl font-bold font-display mt-2">Built by Students, for Plant Lovers</h2>
        <p class="text-neutral-500 mt-2 max-w-xl mx-auto">
          A passionate team of [X] students from [Your School Name] combining hardware, software, and a love of plants.
        </p>
      </div>

      <div class="flex flex-wrap justify-center gap-8">
        <div
          v-for="(member, i) in team"
          :key="i"
          class="bg-neutral-50 rounded-4xl p-6 text-center w-48 border border-neutral-100"
        >
          <div class="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-2xl mx-auto mb-3">
            🌱
          </div>
          <p class="font-bold font-display">{{ member.name }}</p>
          <p class="text-sm text-neutral-500 mt-1">{{ member.role }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// Replace with your real team members
const team = [
  { name: "Your Name", role: "Hardware & Firmware" },
  { name: "Teammate 2", role: "Mobile App" },
  { name: "Teammate 3", role: "AI & Backend" },
  { name: "Teammate 4", role: "Design & UX" },
];
</script>
