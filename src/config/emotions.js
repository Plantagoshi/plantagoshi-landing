import { Droplets, Moon, Sun, Thermometer } from 'lucide-vue-next';

export const EMOTION_KEYS = ['happy', 'content', 'thirsty', 'angry', 'sleepy'];

export const emotions = {
    happy: {
        bg: '#E2B059',
        glow: '#E2B059',
        face: { eyeRx: 9, eyeRy: 10, eyeYOffset: 0, animClass: 'face-bounce' },
        stats: [
            { labelKey: 'hero.moisture', displayValue: '72%', value: 72, icon: Droplets, iconColor: '#5BA4CF', barColor: '#5BA4CF' },
            { labelKey: 'hero.light', displayValue: '820lx', value: 82, icon: Sun, iconColor: '#E2B059', barColor: '#E2B059' },
            { labelKey: 'hero.temp', displayValue: '22°C', value: 55, icon: Thermometer, iconColor: '#386641', barColor: '#386641' },
        ],
    },
    content: {
        bg: '#A8C5A0',
        glow: '#386641',
        face: { eyeRx: 8, eyeRy: 8, eyeYOffset: 0, animClass: '' },
        stats: [
            { labelKey: 'hero.moisture', displayValue: '55%', value: 55, icon: Droplets, iconColor: '#5BA4CF', barColor: '#5BA4CF' },
            { labelKey: 'hero.light', displayValue: '540lx', value: 54, icon: Sun, iconColor: '#E2B059', barColor: '#E2B059' },
            { labelKey: 'hero.temp', displayValue: '21°C', value: 52, icon: Thermometer, iconColor: '#386641', barColor: '#386641' },
        ],
    },
    thirsty: {
        bg: '#B8D4E8',
        glow: '#5BA4CF',
        face: { eyeRx: 8, eyeRy: 5, eyeYOffset: 5, animClass: 'face-droop' },
        stats: [
            { labelKey: 'hero.moisture', displayValue: '8%', value: 8, icon: Droplets, iconColor: '#BC4749', barColor: '#BC4749' },
            { labelKey: 'hero.light', displayValue: '310lx', value: 31, icon: Sun, iconColor: '#E2B059', barColor: '#E2B059' },
            { labelKey: 'hero.temp', displayValue: '23°C', value: 58, icon: Thermometer, iconColor: '#386641', barColor: '#386641' },
        ],
    },
    angry: {
        bg: '#E8887A',
        glow: '#BC4749',
        face: { eyeRx: 9, eyeRy: 7, eyeYOffset: 0, animClass: 'face-shake' },
        stats: [
            { labelKey: 'hero.moisture', displayValue: '41%', value: 41, icon: Droplets, iconColor: '#5BA4CF', barColor: '#5BA4CF' },
            { labelKey: 'hero.light', displayValue: '2100lx', value: 95, icon: Sun, iconColor: '#BC4749', barColor: '#BC4749' },
            { labelKey: 'hero.temp', displayValue: '38°C', value: 95, icon: Thermometer, iconColor: '#BC4749', barColor: '#BC4749' },
        ],
    },
    sleepy: {
        bg: '#C8C8D8',
        glow: '#9090AA',
        face: { eyeRx: 8, eyeRy: 3, eyeYOffset: 3, animClass: 'face-breathe' },
        stats: [
            { labelKey: 'hero.moisture', displayValue: '48%', value: 48, icon: Droplets, iconColor: '#9090AA', barColor: '#9090AA' },
            { labelKey: 'hero.light', displayValue: '12lx', value: 5, icon: Moon, iconColor: '#9090AA', barColor: '#9090AA' },
            { labelKey: 'hero.temp', displayValue: '18°C', value: 45, icon: Thermometer, iconColor: '#9090AA', barColor: '#9090AA' },
        ],
    },
};

export function getEmotion(key) {
    return emotions[key] || emotions.happy;
}
