import { createI18n } from 'vue-i18n';
import { ref, computed } from 'vue';
import en from '../locales/en.json';
import fr from '../locales/fr.json';

const messages = { en, fr };

export const i18n = createI18n({
  legacy: false,
  locale: 'en',
  fallbackLocale: 'en',
  messages,
});

export function useI18n() {
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
    t: i18n.global.t,
  };
}