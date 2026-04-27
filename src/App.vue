<template>
    <div class="min-h-screen" style="background-color: #f5f5f5; color: #1a1a1a">
        <NavBar />
        <router-view />
        <FooterSection />
    </div>
</template>

<script setup>
import FooterSection from "./components/FooterSection.vue";
import NavBar from "./components/NavBar.vue";
</script>
