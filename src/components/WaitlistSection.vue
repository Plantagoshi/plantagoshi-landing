<template>
    <section id="waitlist" class="py-16 px-6">
        <div
            class="max-w-4xl mx-auto bg-neutral rounded-4xl p-8 md:p-16 text-center text-neutral-content relative overflow-hidden"
        >
            <div
                class="absolute top-0 right-0 w-72 h-72 bg-primary/20 blur-3xl rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none"
            ></div>
            <div
                class="absolute bottom-0 left-0 w-48 h-48 bg-accent/20 blur-3xl rounded-full translate-y-1/2 -translate-x-1/2 pointer-events-none"
            ></div>

            <div class="relative z-10 space-y-6">
                <Leaf class="w-12 h-12 text-primary mx-auto" />

                <h2 class="text-4xl md:text-5xl font-bold font-display">{{ t("waitlist.title") }}</h2>
                <p class="text-neutral-content/60 text-lg max-w-lg mx-auto">
                    {{ t("waitlist.description") }}
                </p>

                <!-- Success state -->
                <template v-if="isSuccess">
                    <div class="flex flex-col items-center gap-3 py-4">
                        <div class="w-12 h-12 rounded-full bg-success/20 flex items-center justify-center">
                            <Check class="w-6 h-6 text-success" />
                        </div>
                        <p class="text-success font-medium text-lg">{{ t("waitlist.success") }}</p>
                        <button
                            class="text-xs text-neutral-content/50 underline underline-offset-2 hover:text-neutral-content/70 transition-colors"
                            @click="reset"
                        >
                            {{ t("waitlist.resetLabel") }}
                        </button>
                    </div>
                </template>

                <!-- Form state -->
                <template v-else>
                    <div class="flex flex-col items-center sm:flex-row gap-4 max-w-md mx-auto pt-2">
                        <input
                            v-model="email"
                            type="email"
                            :placeholder="t('waitlist.placeholder')"
                            :disabled="isLoading"
                            class="input input-bordered rounded-full flex-1 bg-neutral-content/10 border-neutral-content/20 text-neutral-content placeholder-neutral-content/40 disabled:opacity-50"
                            @keyup.enter="handleSubmit"
                        />
                        <BaseButton variant="primary" size="lg" :disabled="isLoading || !email || !consentChecked" @click="handleSubmit">
                            <template v-if="isLoading">
                                <Loader2 class="w-4 h-4 animate-spin" />
                                {{ t("waitlist.loading") }}
                            </template>
                            <template v-else>
                                {{ t("waitlist.cta") }}
                                <Leaf class="w-4 h-4" />
                            </template>
                        </BaseButton>
                    </div>

                    <label class="flex items-start gap-2 max-w-md mx-auto cursor-pointer">
                        <input v-model="consentChecked" type="checkbox" class="w-4 h-4 mt-0.5 shrink-0 accent-primary rounded border border-neutral-content/30 cursor-pointer" />
                        <span class="text-xs text-neutral-content/50 text-left">
                            {{ t("consent.formBefore") }}
                            <router-link to="/privacy" class="text-primary hover:underline">{{ t("consent.privacyPolicy") }}</router-link>
                            {{ t("consent.formAfter") }}
                        </span>
                    </label>

                    <!-- Error message -->
                    <p v-if="error" class="text-error text-sm flex items-center justify-center gap-1.5">
                        <CircleAlert class="w-4 h-4 shrink-0" />
                        {{ error }}
                    </p>
                </template>

                <p class="text-xs text-neutral-content/50">{{ t("waitlist.note") }}</p>
            </div>
        </div>
    </section>
</template>

<script setup>
import { Check, CircleAlert, Leaf, Loader2 } from "lucide-vue-next";
import { ref } from "vue";
import { useI18n } from "../composables/useI18n";
import { useWaitlist } from "../composables/useWaitlist";
import BaseButton from "./BaseButton.vue";

const { t } = useI18n();
const consentChecked = ref(false);
const { isLoading, isSuccess, error, subscribe, reset } = useWaitlist();

const email = ref("");

async function handleSubmit() {
    if (!email.value || isLoading.value) return;
    await subscribe(email.value);
    if (isSuccess.value) email.value = "";
}
</script>
