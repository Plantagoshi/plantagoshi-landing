import { ref, watch } from 'vue';

const STORAGE_KEY = 'plantagoshi-theme';

const stored = localStorage.getItem(STORAGE_KEY);
const isDark = ref(stored === null ? true : stored === 'true');

function apply(dark) {
    document.documentElement.setAttribute('data-theme', dark ? 'plantagoshi-dark' : 'plantagoshi');
}

apply(isDark.value);

watch(isDark, (v) => {
    apply(v);
    localStorage.setItem(STORAGE_KEY, v);
});

export function useTheme() {
    const toggleTheme = () => {
        isDark.value = !isDark.value;
    };

    return { isDark, toggleTheme };
}
