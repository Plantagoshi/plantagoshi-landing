import { Droplets, Moon, Sun, Thermometer } from 'lucide-vue-next';

export const EMOTION_KEYS = ['happy', 'thirsty', 'angry', 'sleepy'];

export const emotions = {
    happy: {
        bg: 'var(--emotion-happy)',
        glow: 'var(--emotion-happy)',
        face: { eyeRx: 9, eyeRy: 10, eyeYOffset: 0, animClass: 'face-bounce' },
        stats: [
            { labelKey: 'hero.moisture', displayValue: '72%',  value: 72, icon: Droplets,    iconColor: 'var(--sensor-moisture)',    barColor: 'var(--sensor-moisture)' },
            { labelKey: 'hero.light',    displayValue: '820lx', value: 82, icon: Sun,         iconColor: 'var(--sensor-sunlight)',    barColor: 'var(--sensor-sunlight)' },
            { labelKey: 'hero.temp',     displayValue: '22°C',  value: 55, icon: Thermometer, iconColor: 'var(--sensor-temperature)', barColor: 'var(--sensor-temperature)' },
        ],
    },
    thirsty: {
        bg: 'var(--sensor-moisture)',
        glow: 'var(--emotion-thirsty)',
        face: { eyeRx: 8, eyeRy: 5, eyeYOffset: 5, animClass: 'face-droop' },
        stats: [
            { labelKey: 'hero.moisture', displayValue: '8%',   value: 8,  icon: Droplets,    iconColor: 'var(--color-error)',        barColor: 'var(--color-error)' },
            { labelKey: 'hero.light',    displayValue: '310lx', value: 31, icon: Sun,         iconColor: 'var(--sensor-sunlight)',    barColor: 'var(--sensor-sunlight)' },
            { labelKey: 'hero.temp',     displayValue: '23°C',  value: 58, icon: Thermometer, iconColor: 'var(--sensor-temperature)', barColor: 'var(--sensor-temperature)' },
        ],
    },
    angry: {
        bg: 'var(--emotion-angry)',
        glow: 'var(--emotion-angry)',
        face: { eyeRx: 9, eyeRy: 7, eyeYOffset: 0, animClass: 'face-shake' },
        stats: [
            { labelKey: 'hero.moisture', displayValue: '41%',   value: 41, icon: Droplets,    iconColor: 'var(--sensor-moisture)',    barColor: 'var(--sensor-moisture)' },
            { labelKey: 'hero.light',    displayValue: '2100lx', value: 95, icon: Sun,         iconColor: 'var(--color-error)',        barColor: 'var(--color-error)' },
            { labelKey: 'hero.temp',     displayValue: '38°C',   value: 95, icon: Thermometer, iconColor: 'var(--color-error)',        barColor: 'var(--color-error)' },
        ],
    },
    sleepy: {
        bg: 'var(--emotion-sleepy)',
        glow: 'var(--emotion-sleepy)',
        face: { eyeRx: 8, eyeRy: 3, eyeYOffset: 3, animClass: 'face-breathe' },
        stats: [
            { labelKey: 'hero.moisture', displayValue: '48%', value: 48, icon: Droplets,    iconColor: 'var(--emotion-sleepy)', barColor: 'var(--emotion-sleepy)' },
            { labelKey: 'hero.light',    displayValue: '12lx', value: 5,  icon: Moon,        iconColor: 'var(--emotion-sleepy)', barColor: 'var(--emotion-sleepy)' },
            { labelKey: 'hero.temp',     displayValue: '18°C', value: 45, icon: Thermometer, iconColor: 'var(--emotion-sleepy)', barColor: 'var(--emotion-sleepy)' },
        ],
    },
};

export function getEmotion(key) {
    return emotions[key] || emotions.happy;
}