<template>
  <v-app>
    <TheHeader :active-menu="activeMenu" @open-nav="openNav" />
    <TheNavigation :active-menu="activeMenu" />
    <v-main>
      <nuxt />
      <div class="d-none d-md-block">
        <BaseJumbTop :class="showGoToTopBtn && 'show'" />
      </div>
      <div class="d-block d-md-none">
        <JumpToTopMobile :class="showGoToTopBtn && 'show'" />
      </div>
    </v-main>
    <TheFooter />
  </v-app>
</template>

<script>
import JumpToTopMobile from '@/components/UI/JumpToTopMobile.vue'
import TheHeader from '@/components/Layout/TheHeader'
import TheNavigation from '@/components/Layout/TheNavigation'
import TheFooter from '@/components/Layout/TheFooter'
import BaseJumbTop from '@/components/UI/BaseJumbTop'
export default {
  name: 'DefaultLayout',
  components: {
    TheHeader,
    TheNavigation,
    TheFooter,
    BaseJumbTop,
    JumpToTopMobile,
  },
  data() {
    return {
      activeMenu: false,
      showGoToTopBtn: false,
    }
  },
  mounted() {
    const that = this
    window.addEventListener('scroll', function () {
      that.activeMenu = false
      if (window.scrollY > 400) {
        that.showGoToTopBtn = true
      } else {
        that.showGoToTopBtn = false
      }
    })
  },
  methods: {
    openNav(bool) {
      this.activeMenu = bool
    },
  },
}
</script>

