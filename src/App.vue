<template>
  <div class="min-h-screen" style="background-color: #f5f5f5; color: #1a1a1a">
    <NavBar />
    <HeroSection />
    <FeaturesSection />
    <AppShowcase />
    <TimelineSection />
    <TeamSection />
    <WaitlistSection @submit="handleWaitlist" />
    <FooterSection />
  </div>
</template>

<script setup>
import AppShowcase from "./components/AppShowcase.vue";
import FeaturesSection from "./components/FeaturesSection.vue";
import FooterSection from "./components/FooterSection.vue";
import HeroSection from "./components/HeroSection.vue";
import NavBar from "./components/NavBar.vue";
import TeamSection from "./components/TeamSection.vue";
import TimelineSection from "./components/TimelineSection.vue";
import WaitlistSection from "./components/WaitlistSection.vue";

function handleWaitlist(email) {
  // TODO: connect to your backend here
  console.log("Waitlist signup:", email);
}
</script>
