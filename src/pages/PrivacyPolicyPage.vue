<template>
    <section class="min-h-screen pt-32 pb-20 px-6">
        <div class="max-w-3xl mx-auto prose prose-neutral">
            <div class="text-center mb-12">
                <div
                    class="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6"
                >
                    <Shield class="w-8 h-8 text-primary" />
                </div>
                <h1 class="text-4xl md:text-5xl font-bold font-display mb-2">
                    {{ t("privacy.title") }}
                </h1>
                <p class="text-base-content/50 text-sm">{{ t("privacy.lastUpdated") }}</p>
            </div>

            <div class="card bg-base-100 shadow-lg">
                <div class="card-body p-8 md:p-10 space-y-8 text-sm leading-relaxed">
                    <!-- Introduction -->
                    <div>
                        <h2 class="text-lg font-bold font-display mb-2">{{ t("privacy.introTitle") }}</h2>
                        <p class="text-base-content/70">{{ t("privacy.introText") }}</p>
                    </div>

                    <!-- Privacy Officer -->
                    <div>
                        <h2 class="text-lg font-bold font-display mb-2">{{ t("privacy.officerTitle") }}</h2>
                        <p class="text-base-content/70 mb-3">{{ t("privacy.officerText") }}</p>
                        <div class="bg-base-200 rounded-xl p-4">
                            <p class="font-semibold">{{ t("privacy.officerName") }}</p>
                            <p class="text-base-content/60">{{ t("privacy.officerRole") }}</p>
                            <p class="text-base-content/60 mt-1">
                                {{ t("privacy.officerEmailBefore") }}
                                <router-link to="/contact" class="text-primary hover:underline">{{ t("privacy.contactPage") }}</router-link>.
                            </p>
                        </div>
                    </div>

                    <!-- Information We Collect -->
                    <div>
                        <h2 class="text-lg font-bold font-display mb-2">{{ t("privacy.collectionTitle") }}</h2>
                        <p class="text-base-content/70 mb-2">{{ t("privacy.collectionText") }}</p>
                        <ul class="list-disc list-inside space-y-1 text-base-content/70">
                            <li v-for="(item, i) in tm('privacy.collectionItems')" :key="i">{{ rt(item) }}</li>
                        </ul>
                        <p class="text-base-content/60 text-xs mt-2 italic">{{ t("privacy.collectionNote") }}</p>
                    </div>

                    <!-- Purpose -->
                    <div>
                        <h2 class="text-lg font-bold font-display mb-2">{{ t("privacy.purposeTitle") }}</h2>
                        <p class="text-base-content/70 mb-2">{{ t("privacy.purposeText") }}</p>
                        <ul class="list-disc list-inside space-y-1 text-base-content/70">
                            <li v-for="(item, i) in tm('privacy.purposeItems')" :key="i">{{ rt(item) }}</li>
                        </ul>
                    </div>

                    <!-- Consent -->
                    <div>
                        <h2 class="text-lg font-bold font-display mb-2">{{ t("privacy.consentTitle") }}</h2>
                        <p class="text-base-content/70">{{ t("privacy.consentText") }}</p>
                    </div>

                    <!-- Storage & Security -->
                    <div>
                        <h2 class="text-lg font-bold font-display mb-2">{{ t("privacy.storageTitle") }}</h2>
                        <p class="text-base-content/70">{{ t("privacy.storageText") }}</p>
                    </div>

                    <!-- Retention -->
                    <div>
                        <h2 class="text-lg font-bold font-display mb-2">{{ t("privacy.retentionTitle") }}</h2>
                        <p class="text-base-content/70">{{ t("privacy.retentionText") }}</p>
                    </div>

                    <!-- Your Rights -->
                    <div>
                        <h2 class="text-lg font-bold font-display mb-2">{{ t("privacy.rightsTitle") }}</h2>
                        <p class="text-base-content/70 mb-2">{{ t("privacy.rightsText") }}</p>
                        <ul class="list-disc list-inside space-y-1 text-base-content/70">
                            <li v-for="(item, i) in tm('privacy.rightsItems')" :key="i">{{ rt(item) }}</li>
                        </ul>
                        <p class="text-base-content/70 mt-2">
                            {{ t("privacy.rightsNoteBefore") }}
                            <router-link to="/contact" class="text-primary hover:underline">{{ t("privacy.contactPage") }}</router-link>.
                        </p>
                    </div>

                    <!-- Cookies -->
                    <div>
                        <h2 class="text-lg font-bold font-display mb-2">{{ t("privacy.cookiesTitle") }}</h2>
                        <p class="text-base-content/70">{{ t("privacy.cookiesText") }}</p>
                    </div>

                    <!-- Third-Party -->
                    <div>
                        <h2 class="text-lg font-bold font-display mb-2">{{ t("privacy.thirdPartyTitle") }}</h2>
                        <p class="text-base-content/70">{{ t("privacy.thirdPartyText") }}</p>
                    </div>

                    <!-- Automated Decision-Making -->
                    <div>
                        <h2 class="text-lg font-bold font-display mb-2">{{ t("privacy.automatedTitle") }}</h2>
                        <p class="text-base-content/70">{{ t("privacy.automatedText") }}</p>
                    </div>

                    <!-- Changes -->
                    <div>
                        <h2 class="text-lg font-bold font-display mb-2">{{ t("privacy.changesTitle") }}</h2>
                        <p class="text-base-content/70">{{ t("privacy.changesText") }}</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { Shield } from 'lucide-vue-next';
import { useI18n } from '../composables/useI18n';

const { t, tm, rt } = useI18n();
</script>
