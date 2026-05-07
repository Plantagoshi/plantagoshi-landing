import { ref, watch } from 'vue';

const STORAGE_KEY = 'plantagoshi-theme';
const DARK = 'plantagoshi-dark';
const LIGHT = 'plantagoshi';

const saved = localStorage.getItem(STORAGE_KEY);
const isDark = ref(saved ? saved === DARK : false);

function apply(dark) {
    document.documentElement.setAttribute('data-theme', dark ? DARK : LIGHT);
}

apply(isDark.value);

watch(isDark, (v) => {
    apply(v);
    localStorage.setItem(STORAGE_KEY, v ? DARK : LIGHT);
});

export function useTheme() {
    const toggleTheme = () => {
        isDark.value = !isDark.value;
    };

    return { isDark, toggleTheme };
}
