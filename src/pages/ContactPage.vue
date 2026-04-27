<template>
    <section class="min-h-screen pt-32 pb-20 px-6">
        <div class="max-w-2xl mx-auto">
            <div class="text-center mb-12">
                <div
                    class="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6"
                >
                    <Leaf class="w-8 h-8 text-primary" />
                </div>
                <h1 class="text-4xl md:text-5xl font-bold font-display mb-4">
                    {{ t("contact.title") }}
                </h1>
                <p class="text-neutral-500 text-lg max-w-md mx-auto leading-relaxed">
                    {{ t("contact.description") }}
                </p>
            </div>

            <!-- Success state -->
            <div v-if="isSuccess" class="text-center py-16">
                <div
                    class="inline-flex items-center justify-center w-20 h-20 rounded-full bg-green-100 mb-6"
                >
                    <Check class="w-10 h-10 text-green-600" />
                </div>
                <h2 class="text-2xl font-bold font-display mb-2">{{ t("contact.successTitle") }}</h2>
                <p class="text-neutral-500 mb-8">{{ t("contact.successMessage") }}</p>
                <button
                    class="text-sm text-primary underline underline-offset-2 hover:text-primary/70 transition-colors"
                    @click="reset"
                >
                    {{ t("contact.resetLabel") }}
                </button>
            </div>

            <!-- Form -->
            <form v-else class="card bg-base-100 shadow-lg" @submit.prevent="handleSubmit">
                <div class="card-body gap-6 p-8 md:p-10">
                    <div class="form-control">
                        <label class="label" for="name">
                            <span class="label-text font-medium">{{ t("contact.nameLabel") }}</span>
                        </label>
                        <input
                            id="name"
                            v-model="name"
                            type="text"
                            :placeholder="t('contact.namePlaceholder')"
                            :disabled="isLoading"
                            class="input input-bordered w-full disabled:opacity-50"
                        />
                    </div>

                    <div class="form-control">
                        <label class="label" for="email">
                            <span class="label-text font-medium">{{ t("contact.emailLabel") }} *</span>
                        </label>
                        <input
                            id="email"
                            v-model="email"
                            type="email"
                            :placeholder="t('contact.emailPlaceholder')"
                            :disabled="isLoading"
                            required
                            class="input input-bordered w-full disabled:opacity-50"
                        />
                    </div>

                    <div class="form-control">
                        <label class="label" for="message">
                            <span class="label-text font-medium">{{ t("contact.messageLabel") }}</span>
                        </label>
                        <textarea
                            id="message"
                            v-model="message"
                            :placeholder="t('contact.messagePlaceholder')"
                            :disabled="isLoading"
                            rows="4"
                            class="textarea textarea-bordered w-full disabled:opacity-50 resize-none"
                        ></textarea>
                    </div>

                    <!-- Error -->
                    <p v-if="error" class="text-red-500 text-sm flex items-center gap-1.5">
                        <CircleAlert class="w-4 h-4 shrink-0" />
                        {{ error }}
                    </p>

                    <BaseButton
                        type="submit"
                        variant="primary"
                        size="lg"
                        :disabled="isLoading || !email"
                        class="w-full"
                    >
                        <template v-if="isLoading">
                            <Loader2 class="w-4 h-4 animate-spin" />
                            {{ t("contact.loading") }}
                        </template>
                        <template v-else>
                            {{ t("contact.cta") }}
                            <Send class="w-4 h-4" />
                        </template>
                    </BaseButton>

                    <p class="text-xs text-neutral-400 text-center">{{ t("contact.note") }}</p>
                </div>
            </form>
        </div>
    </section>
</template>

<script setup>
import { Check, CircleAlert, Leaf, Loader2, Send } from "lucide-vue-next";
import { ref } from "vue";
import { useI18n } from "../composables/useI18n";
import { useWaitlist } from "../composables/useWaitlist";
import BaseButton from "../components/BaseButton.vue";

const { t } = useI18n();
const { isLoading, isSuccess, error, subscribe, reset } = useWaitlist();

const name = ref("");
const email = ref("");
const message = ref("");

async function handleSubmit() {
    if (!email.value || isLoading.value) return;
    await subscribe(email.value);
    if (isSuccess.value) {
        name.value = "";
        email.value = "";
        message.value = "";
    }
}
</script>
