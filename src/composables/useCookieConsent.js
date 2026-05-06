import { reactive, ref } from 'vue';

const STORAGE_KEY = 'plantagoshi_cookie_consent';

const consent = reactive({
    answered: false,
    essential: true,
    analytics: false,
});

const showBanner = ref(true);

function load() {
    try {
        const stored = localStorage.getItem(STORAGE_KEY);
        if (stored) {
            const parsed = JSON.parse(stored);
            consent.answered = true;
            consent.analytics = parsed.analytics ?? false;
            showBanner.value = false;
        }
    } catch {
        // ignore parse errors
    }
}

function save() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({
        essential: true,
        analytics: consent.analytics,
        timestamp: new Date().toISOString(),
    }));
    consent.answered = true;
    showBanner.value = false;
}

function acceptAll() {
    consent.analytics = true;
    save();
}

function rejectAll() {
    consent.analytics = false;
    save();
}

function savePreferences(analytics) {
    consent.analytics = analytics;
    save();
}

function resetConsent() {
    localStorage.removeItem(STORAGE_KEY);
    consent.answered = false;
    consent.analytics = false;
    showBanner.value = true;
}

load();

export function useCookieConsent() {
    return {
        consent,
        showBanner,
        acceptAll,
        rejectAll,
        savePreferences,
        resetConsent,
    };
}
