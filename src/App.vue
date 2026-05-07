<template>
    <div class="min-h-screen bg-base-200 text-base-content">
        <NavBar />
        <router-view />
        <FooterSection />
        <CookieConsent />
    </div>
</template>

<script setup>
import CookieConsent from "./components/CookieConsent.vue";
import FooterSection from "./components/FooterSection.vue";
import NavBar from "./components/NavBar.vue";
</script>
