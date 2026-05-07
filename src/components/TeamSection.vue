<template>
  <section id="team" class="py-16 px-6 bg-base-100 rounded-4xl mx-4 md:mx-10 shadow-sm">
    <div class="max-w-6xl mx-auto">
      <div class="text-center mb-12">
        <span class="text-primary font-bold text-sm uppercase tracking-widest">{{ t('team.label') }}</span>
        <h2 class="text-4xl font-bold font-display mt-2">{{ t('team.title') }}</h2>
        <p class="text-base-content/60 mt-2 max-w-xl mx-auto">
          {{ t('team.description') }}
        </p>
      </div>

      <div class="flex flex-wrap justify-center gap-12">
        <div
          v-for="(member, i) in members"
          :key="i"
          class="flex flex-col w-52 items-center text-center"
        >
          <div class="avatar">
            <div class="w-24 rounded-full">
              <img :src="member.image" />
            </div>
          </div>
          <p class="font-bold font-display mt-4">{{ t(`team.members.${member.name}.name`) }}</p>
          <p class="text-sm text-base-content/60 mt-1">{{ t(`team.members.${member.name}.role`) }}</p>
          <div class="flex gap-3 mt-2">
            <SocialIcon type="github" :url="member.github" />
            <SocialIcon type="linkedin" :url="member.linkedin" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useI18n } from "../composables/useI18n";
import SocialIcon from "./SocialIcon.vue";

const { t } = useI18n();
const members = [
    {
        name: "zachari",
        image: "images/zachari_profil.png",
        github: "https://github.com/Zachari-L",
        linkedin: "https://www.linkedin.com/in/zachari-lavall%C3%A9e-2585a7295/"
    }, 
    {
        name: "gabriel",
        image: "images/gabriel_profil.jpeg",
        github: "https://github.com/gablaroche29",
        linkedin: "https://www.linkedin.com/in/gabriel-laroche-a23b63252/"
    },
    {
        name: "hub",
        image: "images/hub_profil.jpeg",
        linkedin: "https://www.linkedin.com/company/hubcst/posts/"
    }
];
</script>
