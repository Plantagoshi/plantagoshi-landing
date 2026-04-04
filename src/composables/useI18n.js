import { createI18n } from 'vue-i18n';
import { ref, computed } from 'vue';

const messages = {
  en: {
    nav: {
      features: 'The Pot',
      app: 'The App',
      journey: 'Our Journey',
      team: 'Team',
      adopt: 'Adopt Now',
    },
    hero: {
      mood: 'My mood:',
      title: 'Your plant has feelings.',
      titleLine2: 'Are you listening?',
      subtitle: 'Are you listening?',
      description: 'Plantagoshi is a smart IoT planter with an AI soul — it senses your plant\'s health and expresses its mood in real time through an integrated screen and a companion app.',
      badge: 'Entrepreneurship Competition Project — Cégep / University 2024',
      cta: 'Join the Waitlist',
      ctaSecondary: 'See How It Works',
      moisture: 'Moisture',
      light: 'Light',
      temp: 'Temp',
    },
    features: {
      label: 'The Hardware',
      title: 'More than a Pot. A Companion.',
      description: 'Built from scratch with custom PCB design, embedded firmware, and a dedicated AI — this is a full hardware + software student project.',
      precision: {
        title: 'Precision Sensing',
        desc: 'Monitors soil moisture, ambient light (lux), temperature, and humidity 24/7 using calibrated sensors embedded in the custom PCB.',
      },
      ai: {
        title: 'AI Plant Personality',
        desc: 'Raw sensor data is processed by our API to generate expressive, first-person plant responses — each plant has a unique voice.',
      },
      app: {
        title: 'Remote Care App',
        desc: 'Chat with your plant, trigger watering, view live data, and manage multiple plants from anywhere via our companion mobile app.',
      },
    },
    appShowcase: {
      label: 'The Software',
      title: 'The App: Your Plant\'s Voice',
      description: 'The Plantagoshi app doesn\'t just show charts — it\'s where you and your plant have actual conversations.',
      features: [
        'Real-time sensor tracking with smooth "Organic Curves"',
        'Chat interface powered by our PlantAI API',
        'Emotion-driven UI that changes color with your plant\'s mood',
        'Multi-plant dashboard to manage your whole collection',
        'Smart home integration via developer API',
      ],
      screenshot: 'App screenshot coming soon',
      screenshotSubtitle: 'Replace with your actual app demo',
    },
    timeline: {
      label: 'Our Journey',
      title: 'From Wires to Wonder',
      description: 'A student project built over several months of iteration and learning.',
      steps: [
        {
          phase: 'V1 — The Prototype',
          date: 'Project Start',
          note: 'Proof of concept using breadboard, Arduino Uno, and external soil moisture probes. Focused on validating sensor data accuracy.',
        },
        {
          phase: 'V2 — The Brain',
          date: 'Mid-Project',
          note: 'First AI integration. Custom PCB design. Replaced Arduino with ESP32 for WiFi connectivity and lower power consumption.',
        },
        {
          phase: 'V3 — The Living Interface',
          date: 'Final Version',
          note: 'Full 3D-printed enclosure with integrated OLED emotional display, polished app, and full API stack. Competition-ready.',
        },
      ],
      photoPlaceholder: 'Add a photo of',
    },
    team: {
      label: 'The Makers',
      title: 'Built by Students, for Plant Lovers',
      description: 'A passionate team of students from your school combining hardware, software, and a love of plants.',
      members: [
        { name: 'Your Name', role: 'Hardware & Firmware' },
        { name: 'Teammate 2', role: 'Mobile App' },
        { name: 'Teammate 3', role: 'AI & Backend' },
        { name: 'Teammate 4', role: 'Design & UX' },
      ],
    },
    waitlist: {
      title: 'Ready to give your plant a voice?',
      description: 'We\'re currently in beta. Leave your email to be notified when Plantagoshi is ready to come home with you.',
      placeholder: 'your email',
      cta: 'Join Waitlist',
      note: 'No spam. Just plant news and launch updates.',
    },
    footer: {
      copyright: '© 2024 Plantagoshi Labs — Student Project. Built with soil, code & caffeine.',
      github: 'GitHub',
      instagram: 'Instagram',
      demo: 'Demo Video',
    },
  },
  fr: {
    nav: {
      features: 'Le Pot',
      app: 'L\'App',
      journey: 'Notre Parcours',
      team: 'L\'Équipe',
      adopt: 'Adopter',
    },
    hero: {
      mood: 'Mon humeur :',
      title: 'Votre plante a des sentiments.',
      subtitle: 'Êtes-vous à l\'écoute ?',
      description: 'Plantagoshi est un pot connecté intelligent avec une âme IA — il surveille la santé de votre plante et exprime son humeur en temps réel via un écran intégré et une application compagnon.',
      badge: 'Projet de compétition entrepreneuriale — Cégep / Université 2024',
      cta: 'Rejoindre la liste d\'attente',
      ctaSecondary: 'Voir comment ça marche',
      moisture: 'Humidité',
      light: 'Lumière',
      temp: 'Temp',
    },
    features: {
      label: 'Le Matériel',
      title: 'Plus qu\'un pot. Un Compagnon.',
      description: 'Construit de zéro avec une conception PCB personnalisée, un firmware embarqué et une IA dédiée — c\'est un projet étudiant matériel + logiciel complet.',
      precision: {
        title: 'Capteurs de Précision',
        desc: 'Surveille l\'humidité du sol, la lumière ambiante (lux), la température et l\'humidité 24h/24 grâce à des capteurs calibrés intégrés au PCB personnalisé.',
      },
      ai: {
        title: 'Personnalité IA de la Plante',
        desc: 'Les données brutes des capteurs sont traitées par notre API pour générer des réponses expressives à la première personne — chaque plante a une voix unique.',
      },
      app: {
        title: 'App de Soins à Distance',
        desc: 'Discutez avec votre plante, déclenchez l\'arrosage, visualizez les données en direct et gérez plusieurs plantes de n\'importe où via notre application mobile.',
      },
    },
    appShowcase: {
      label: 'Le Logiciel',
      title: 'L\'App : la Voix de Votre Plante',
      description: 'L\'application Plantagoshi ne se limite pas aux graphiques — c\'est là où vous et votre plante avez de vraies conversations.',
      features: [
        'Suivi des capteurs en temps réel avec des "Courbes Organiques" fluides',
        'Interface de chat alimentée par notre API PlantAI',
        'UI pilotée par les émotions qui change de couleur selon l\'humeur de votre plante',
        'Tableau de bord multi-plantes pour gérer toute votre collection',
        'Intégration maison connectée via API développeur',
      ],
      screenshot: 'Capture d\'écran de l\'app à venir',
      screenshotSubtitle: 'Remplacer par votre démonstration',
    },
    timeline: {
      label: 'Notre Parcours',
      title: 'Des Fils au Merveille',
      description: 'Un projet étudiant construit sur plusieurs mois d\'itération et d\'apprentissage.',
      steps: [
        {
          phase: 'V1 — Le Prototype',
          date: 'Début du Projet',
          note: 'Preuve de concept avec breadboard, Arduino Uno et sondes d\'humidité externes. Axé sur la validation de la précision des données des capteurs.',
        },
        {
          phase: 'V2 — Le Cerveau',
          date: 'Milieu du Projet',
          note: 'Première intégration IA. Conception PCB personnalisée. Remplacement de l\'Arduino par un ESP32 pour la connectivité WiFi et une consommation réduite.',
        },
        {
          phase: 'V3 — L\'Interface Vivante',
          date: 'Version Finale',
          note: 'Boîtier 3D complet avec écran OLED émotionnel intégré, application polie et pile API complète. Prêt pour la compétition.',
        },
      ],
      photoPlaceholder: 'Ajouter une photo de',
    },
    team: {
      label: 'Les Créateurs',
      title: 'Créé par des Étudiants, pour les Amoureux des Plantes',
      description: 'Une équipe passionnée d\'étudiants de votre école combinant matériel, logiciel et amour des plantes.',
      members: [
        { name: 'Votre Nom', role: 'Matériel & Firmware' },
        { name: 'Co-équipier 2', role: 'Application Mobile' },
        { name: 'Co-équipier 3', role: 'IA & Backend' },
        { name: 'Co-équipier 4', role: 'Design & UX' },
      ],
    },
    waitlist: {
      title: 'Prêt à donner une voix à votre plante ?',
      description: 'Nous sommes actuellement en bêta. Laissez votre email pour être notifié quand Plantagoshi sera prêt à venir chez vous.',
      placeholder: 'votre email',
      cta: 'Rejoindre la liste',
      note: 'Pas de spam. Que des nouvelles des plantes et des mises à jour.',
    },
    footer: {
      copyright: '© 2024 Plantagoshi Labs — Projet Étudiant. Construit avec terre, code & café.',
      github: 'GitHub',
      instagram: 'Instagram',
      demo: 'Vidéo Démo',
    },
  },
};

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