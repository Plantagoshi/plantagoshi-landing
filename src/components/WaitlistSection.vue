<template>
  <section id="waitlist" class="py-24 px-6">
    <div
      class="max-w-4xl mx-auto bg-neutral-900 rounded-5xl p-8 md:p-16 text-center text-white relative overflow-hidden"
    >
      <div
        class="absolute top-0 right-0 w-72 h-72 bg-green-900/30 blur-3xl rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none"
      ></div>
      <div
        class="absolute bottom-0 left-0 w-48 h-48 bg-amber-900/20 blur-3xl rounded-full translate-y-1/2 -translate-x-1/2 pointer-events-none"
      ></div>

      <div class="relative z-10 space-y-6">
        <div class="text-5xl">🌿</div>
        <h2 class="text-4xl md:text-5xl font-bold font-display">Ready to give your plant a voice?</h2>
        <p class="text-neutral-400 text-lg max-w-lg mx-auto">
          We're currently in beta. Leave your email to be notified when Plantagoshi is ready to come home with you.
        </p>

        <!--
          BACKEND NOTE: Wire up this form to your own backend.
          The form emits a 'submit' event with the email value.
          Example: use Supabase, Firebase, or a simple Express endpoint.
        -->
        <div class="flex flex-col sm:flex-row gap-4 max-w-md mx-auto pt-2">
          <input
            v-model="email"
            type="email"
            placeholder="your@email.com"
            class="flex-1 bg-neutral-800 border border-neutral-700 rounded-full px-6 py-4 focus:ring-2 focus:ring-primary transition-all text-white outline-none placeholder-neutral-500"
          />
          <button
            @click="$emit('submit', email)"
            class="bg-primary px-8 py-4 rounded-full font-bold hover:bg-primary-dark transition-colors whitespace-nowrap"
          >
            Join Waitlist 🌱
          </button>
        </div>

        <p class="text-xs text-neutral-500">No spam. Just plant news and launch updates.</p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";
defineEmits(["submit"]);
const email = ref("");
</script>
