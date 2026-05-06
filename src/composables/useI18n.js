import { computed, ref } from 'vue';
import { createI18n, useI18n as useVueI18n } from 'vue-i18n';
import en from '../locales/en.json';
import fr from '../locales/fr.json';

const messages = { en, fr };

export const i18n = createI18n({
    legacy: false,
    locale: 'fr',
    fallbackLocale: 'en',
    messages,
});

export function useI18n() {
    const { t, tm, rt } = useVueI18n({ useScope: 'global' });
    const locale = ref(i18n.global.locale.value);

    const currentLocale = computed(() => locale.value);

    const setLocale = (newLocale) => {
        locale.value = newLocale;
        i18n.global.locale.value = newLocale;
    };

    const toggleLocale = () => {
        const newLocale = locale.value === 'en' ? 'fr' : 'en';
        setLocale(newLocale);
    };

    return {
        locale,
        currentLocale,
        setLocale,
        toggleLocale,
        t,
        tm,
        rt,
    };
}
