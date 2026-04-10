import { ref } from "vue";

const BASE_URL = "https://plantagoshi-api.fly.dev";

export function useWaitlist() {
    const isLoading = ref(false);
    const isSuccess = ref(false);
    const error = ref(null);

    async function subscribe(email) {
        isLoading.value = true;
        isSuccess.value = false;
        error.value = null;

        try {
            const response = await fetch(`${BASE_URL}/newsletter`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email }),
            });

            if (!response.ok) {
                const data = await response.json().catch(() => ({}));
                throw new Error(data.message || `Request failed (${response.status})`);
            }

            isSuccess.value = true;
        } catch (err) {
            error.value = err.message || "Something went wrong. Please try again.";
        } finally {
            isLoading.value = false;
        }
    }

    function reset() {
        isLoading.value = false;
        isSuccess.value = false;
        error.value = null;
    }

    return {
        isLoading,
        isSuccess,
        error,
        subscribe,
        reset,
    };
}
