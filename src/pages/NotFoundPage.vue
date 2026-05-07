<template>
    <section class="min-h-screen pt-32 pb-20 px-6 flex items-center justify-center">
        <div class="text-center space-y-6">
            <div class="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10">
                <Leaf class="w-10 h-10 text-primary" />
            </div>
            <h1 class="text-7xl font-bold font-display">404</h1>
            <p class="text-xl text-base-content/60 max-w-md mx-auto">
                {{ t("notFound.message") }}
            </p>
            <router-link to="/" class="btn btn-primary btn-lg">
                {{ t("notFound.cta") }}
            </router-link>
        </div>
    </section>
</template>

<script setup>
import { Leaf } from "lucide-vue-next";
import { useI18n } from "../composables/useI18n";

const { t } = useI18n();
</script>
