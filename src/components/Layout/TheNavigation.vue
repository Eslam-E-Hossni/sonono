<template>
  <nav class="navigation" :class="{'active': activeMenu}">
    <div class="navigation__inner">
      <ul class="navigation__links">
        <li v-for="(item, i) in navigationLinks" :key="i" class="navigation__links--item">
          <a v-if="item.hash" :href="item.hash" class="navigation__links--link">{{item.title}}</a>
          <nuxt-link v-else :to="localePath(item.link)" class="navigation__links--link">{{item.title}}</nuxt-link>
        </li>
      </ul>
      <div class="navigation__bottom">
        <BaseLanguageSwitcher />
        <BaseSocialIcons />
      </div>
    </div>
  </nav>
</template>

<script>
import BaseSocialIcons from '../UI/BaseSocialIcons.vue';
import BaseLanguageSwitcher from '../UI/BaseLanguageSwitcher.vue';
export default {
  components: { BaseSocialIcons, BaseLanguageSwitcher },
  props: {
    activeMenu: {
        type: Boolean,
        required: true
    }
  },
  computed: {
    navigationLinks() {
      return this.$i18n.t("navigation.links").map((link) => {
        if(link.link.startsWith("#")) {
          return {...link, hash: link.link}
        }
        else {
          return link
        }
      })
    },
  },
}
</script>
