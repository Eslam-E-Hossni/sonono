<template>
  <div class="langs" @click="showLangMenu = !showLangMenu">
    <button type="button">
      <v-icon size="14" class="arrow-icon" :class="{active: showLangMenu}">fas fa-chevron-up</v-icon>
      <span class="langs__current">{{ currentLang.title }}</span>
    </button>
    <div class="langs__menu" :class="{ active: showLangMenu, bottom: position === 'bottom'}">
      <nuxt-link
        v-for="(lang, i) in langs"
        :key="i"
        v-slot="{ navigate }"
        :to="switchLocalePath(lang.code)"
        custom
      >
        <button type="button" role="link" @click="navigate">
          <img
            :src="require(`@/assets/images/langs/${lang.icon}`)"
            :alt="lang.alt"
          />
          <span>{{ lang.title }}</span>
        </button>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    position: {
      type: String,
      required: false,
    },
  },
  data() {
    return {
      showLangMenu: false,
      langs: [
        {
          code: 'de',
          title: 'DE',
          icon: 'switzerland.png',
          alt: 'de lang',
        },
        {
          code: 'en',
          title: 'EN',
          icon: 'en.svg',
          alt: 'en lang',
        },
      ],
    }
  },
  computed: {
    currentLang() {
      return this.langs.find((lang) => lang.code === this.$i18n.locale)
    },
  },
}
</script>
