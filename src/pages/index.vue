<template>
  <div class="home">
    <img
      ref="sononoLogo"
      :src="require('@/assets/images/sonono.svg')"
      class="sonono-img d-none d-md-block"
      :class="{ 'stop-fixed': stopLogoFixid }"
    />
    <HeroSection />
    <ServicesSection ref="services" show-scroll-btn />
    <ClientsSection
      ref="clients"
      :show-logo="showLogo"
      :stop-bird-in-center="stopBirdInCenter"
    />
    <TechnologiesSection />
    <WhySononoSection />
    <TeamSection />
    <ContactSection />
  </div>
</template>

<script>
import HeroSection from '@/components/Sections/Home/HeroSection'
import ServicesSection from '@/components/Sections/Home/Services/ServicesSection'
import ClientsSection from '@/components/Sections/Home/Clients/ClientsSection'
import TechnologiesSection from '@/components/Sections/Home/Technologies/TechnologiesSection'
import WhySononoSection from '@/components/Sections/Home/WhySonono/WhySononoSection'
import TeamSection from '@/components/Sections/Home/Team/TeamSection.vue'
import ContactSection from '@/components/Sections/Home/Contact/ContactSection'
export default {
  name: 'HomePage',
  components: {
    HeroSection,
    ServicesSection,
    ClientsSection,
    TechnologiesSection,
    WhySononoSection,
    TeamSection,
    ContactSection,
  },
  beforeRouteEnter(to, from, next) {
    const fromPath = from.path
    const toPath = to.path
    if (fromPath !== toPath) {
      next((vm) => {
        if (to.hash) {
          setTimeout(() => {
            vm.$scrollFix('#about-us')
          })
        }
      })
    }
  },
  data() {
    return {
      stopLogoFixid: false,
      showLogo: false,
      stopBirdInCenter: false,
      showGoToTopBtn: false,
    }
  },
  async mounted() {
    const that = this
    window.onscroll = function () {
      // ! Stop Logo In Services Section
      that.stopFix()
      // ! Start Shpw Logo After Title In Clients Section
      that.startBirdFlyClients()
      // ! Stop Logo When Stand On Center Card In Clients Section
      that.stopBirdOnCenterClientsSection()
      that.getPaddingFromTop()
    }

    try {
      await this.$recaptcha.init()
    } catch (e) {
      console.error(e)
    }
  },
  methods: {
    matchMedia(media) {
      return window.matchMedia(media).matches
    },
    // ! 88 => Header Height
    stopFix() {
      if (window.scrollY + 88 >= this.$refs.services.$el.offsetTop) {
        this.stopLogoFixid = true
      } else {
        this.stopLogoFixid = false
      }
    },
    startBirdFlyClients() {
      if (window.scrollY + 100 >= this.$refs.clients.$el.offsetTop) {
        this.showLogo = true
      } else {
        this.showLogo = false
      }
    },
    stopBirdOnCenterClientsSection() {
      let staticNum = 100
      if (this.matchMedia('(min-width: 1600px)')) {
        staticNum = 40
      }

      if (window.scrollY >= this.$refs.clients.$el.offsetTop + staticNum) {
        // ! 22 => Space From Top Section **To center logo**
        this.stopBirdInCenter = true
      } else {
        this.stopBirdInCenter = false
      }
    },
    getPaddingFromTop() {
      if (this.$refs.services.$el) {
        const element = this.$refs.services.$el
        this.showGoToTopBtn = element.getBoundingClientRect().top <= 0
      }
    },
  },
  beforeDestroy() {
    this.$recaptcha.destroy()
  },
}
</script>
