<template>
    <Transition
        enter-active-class="transition duration-300 ease-out"
        enter-from-class="translate-y-4 opacity-0"
        enter-to-class="translate-y-0 opacity-100"
        leave-active-class="transition duration-200 ease-in"
        leave-from-class="translate-y-0 opacity-100"
        leave-to-class="translate-y-4 opacity-0"
    >
        <div
            v-if="showBanner"
            class="fixed bottom-4 right-4 z-50 w-80 bg-base-100 rounded-2xl shadow-2xl border border-base-300 overflow-hidden"
        >
            <!-- Main banner -->
            <div v-if="!showSettings" class="p-5 space-y-4">
                <div class="flex items-start gap-3">
                    <Cookie class="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <p class="text-sm text-base-content/70 leading-relaxed">
                        {{ t("cookie.message") }}
                    </p>
                </div>
                <div class="flex gap-2">
                    <BaseButton variant="primary" size="sm" class="flex-1" @click="acceptAll">
                        {{ t("cookie.accept") }}
                    </BaseButton>
                    <BaseButton variant="outline" size="sm" class="flex-1" @click="rejectAll">
                        {{ t("cookie.reject") }}
                    </BaseButton>
                </div>
                <button
                    class="text-xs text-base-content/50 hover:text-base-content/70 underline underline-offset-2 transition-colors w-full text-center"
                    @click="showSettings = true"
                >
                    {{ t("cookie.settings") }}
                </button>
            </div>

            <!-- Settings panel -->
            <div v-else class="p-5 space-y-4">
                <h3 class="text-sm font-bold font-display">{{ t("cookie.settingsTitle") }}</h3>

                <!-- Essential -->
                <div class="flex items-center justify-between gap-3">
                    <div>
                        <p class="text-sm font-medium">{{ t("cookie.essential") }}</p>
                        <p class="text-xs text-base-content/50">{{ t("cookie.essentialDesc") }}</p>
                    </div>
                    <input type="checkbox" class="w-4 h-4 shrink-0 accent-primary rounded border border-base-300" checked disabled />
                </div>

                <!-- Analytics -->
                <div class="flex items-center justify-between gap-3">
                    <div>
                        <p class="text-sm font-medium">{{ t("cookie.analytics") }}</p>
                        <p class="text-xs text-base-content/50">{{ t("cookie.analyticsDesc") }}</p>
                    </div>
                    <input v-model="analyticsToggle" type="checkbox" class="w-4 h-4 shrink-0 accent-primary rounded border border-base-300 cursor-pointer" />
                </div>

                <BaseButton variant="primary" size="sm" class="w-full" @click="handleSave">
                    {{ t("cookie.save") }}
                </BaseButton>
            </div>
        </div>
    </Transition>
</template>

<script setup>
import { Cookie } from 'lucide-vue-next';
import { ref } from 'vue';
import { useI18n } from '../composables/useI18n';
import { useCookieConsent } from '../composables/useCookieConsent';
import BaseButton from './BaseButton.vue';

const { t } = useI18n();
const { showBanner, acceptAll, rejectAll, savePreferences } = useCookieConsent();

const showSettings = ref(false);
const analyticsToggle = ref(false);

function handleSave() {
    savePreferences(analyticsToggle.value);
    showSettings.value = false;
}
</script>
