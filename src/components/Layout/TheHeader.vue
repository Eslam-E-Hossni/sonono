<template>
  <header id="header" class="header">
    <div class="container">
      <div class="header__inner px-md-0 px-4">
        <BaseLogo />

        <ul class="header__links flex-align d-none d-md-flex">
          <li
            v-for="(item, i) in navigationLinks"
            :key="i"
            class="header__links--item"
          >
            <nuxt-link
              v-if="item.hash"
              :to="{ path: localePath('index'), hash: 'aboutUs' }"
              v-scroll-to="item.hash"
              exact-active-class="none"
              class="header__links--link"
              >{{ item.title }}</nuxt-link
            >
            <nuxt-link
              v-else
              :to="localePath(item.link)"
              class="header__links--link"
              >{{ item.title }}</nuxt-link
            >
          </li>
        </ul>

        <button
          type="button"
          class="header__hamburger-icon d-block d-md-none"
          :class="{ active: activeMenu, sticky: addStickyClass }"
          @click="openNav(!activeMenu)"
        >
          <span class="header__hamburger-icon--icon"></span>
        </button>
        <div class="d-none d-md-block">
          <BaseLanguageSwitcher position="bottom" />
        </div>
      </div>
    </div>
  </header>
</template>
<script>
import BaseLanguageSwitcher from '../UI/BaseLanguageSwitcher.vue'
import BaseLogo from '../UI/BaseLogo.vue'
export default {
  components: { BaseLogo, BaseLanguageSwitcher },
  props: {
    activeMenu: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {
      // activeMenu: false,
      addStickyClass: false,
    }
  },
  computed: {
    navigationLinks() {
      return this.$i18n.t('header.links').map((link) => {
        if (link.link.startsWith('#')) {
          return { ...link, hash: link.link }
        } else {
          return link
        }
      })
    },
  },
  mounted() {
    const that = this
    window.addEventListener('scroll', function () {
      if (window.pageYOffset > 70) {
        that.addStickyClass = true
      } else {
        that.addStickyClass = false
      }
    })
  },
  methods: {
    openNav(activeMenu) {
      this.$emit('open-nav', activeMenu)
    },
  },
}
</script>
