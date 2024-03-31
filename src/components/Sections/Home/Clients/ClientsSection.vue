<template>
  <section class="clients section-p">
    <div class="container">
      <div class="clients__inner">
        <ClientCard
          v-for="(client, i) in drawClients"
          :key="i"
          :client="client"
          :show-logo="showLogo"
          :stop-bird-in-center="stopBirdInCenter"
        />
      </div>
    </div>
  </section>
</template>

<script>
import ClientCard from './ClientCard.vue'
export default {
  components: {
    ClientCard,
  },
  props: {
    showLogo: {
      type: Boolean,
    },
    stopBirdInCenter: {
      type: Boolean,
    },
    separated: {
      type: Boolean,
    },
  },
  computed: {
    drawClients() {
      if (this.separated) {
        return [
          {
            img: 'fitpass.png',
            link: 'https://www.fitpass.ch',
            alt: "fitpass from 'https://sonono.ch'"
          },
          {
            img: 'physio.png',
            link: 'https://physio-art-basel.ch/en/',
            alt: "physio from 'https://sonono.ch'"
          },
          {
            hasContent: true,
          },
          {
            img: 'q.png',
            customClass: true,
            link: 'https://www.zakumh.com/',
            alt: "zakumh from 'https://sonono.ch'"
          },
          {
            img: 'logoKundP.png',
            link: 'https://kretiundpleti.ch/en/',
            alt: "kreti und pleti from 'https://sonono.ch'"
          },
          {
            img: 'swiss-devs.svg',
            link: 'https://swissdevs.com',
            alt: "swissdevs from 'https://sonono.ch'"
          },
          {
            img: 'ray.png',
            link: 'https://www.rayconsole.com/en/',
            alt: "rayconsole from 'https://sonono.ch'"
          },
          {
            hasEmptySpace: true,
          },
          {
            img: 'groupify.png',
            link: 'https://www.groupify.ch/',
            alt: "groupify from 'https://sonono.ch'"
          },
          {
            img: 'bitbrain.png',
            link: 'https://www.bitbrainacademy.com/',
            alt: "bitbrain academy from 'https://sonono.ch'"
          },
          // {
          //   img: 'vadis.png',
          //   link: '',
          // },
          // {
          //   img: 'fitpass.png',
          //   link: 'https://www.fitpass.ch',
          // },
          {
            img: 'shab.png',
            link: 'https://www.getshab.ch/',
            alt: "getshab from 'https://sonono.ch'"
          },
          {
            img: 'glanzmann-cosmetics.svg',
            link: 'https://www.glanzmann-cosmetics.ch/',
            alt: "glanzmann from 'https://sonono.ch'"
          },
          {
            img: 'zd.png',
            link: 'https://zahnarzt-dillena.ch/',
            alt: "zahnarzt-dillena from 'https://sonono.ch'"
          },
          {
            img: 'niemandslandculture.png',
            link: 'https://www.theaterniemandsland.ch/',
            alt: "theaterniemandsland from 'https://sonono.ch'"
          },
          {
            img: 'orchesterschule-insel.png',
            link: 'https://www.orchesterschule-insel.ch/',
            alt: "orchesterschule from 'https://sonono.ch'"
          },
          {
            img: 'siemens.png',
            link: 'https://www.mobility.siemens.com/ch/de.html',
            alt: "siemens from 'https://sonono.ch'",
          },
          {
            img: 'hinundhair.png',
            link: 'https://www.hinundhair-bitburg.de/',
            alt: "hinundhair-bitburg from 'https://sonono.ch'"
          },
          {
            img: 'your-project.png',
            link: 'https://www.your-project.ch/en/',
            alt: "your-project from 'https://sonono.ch'"
          },
          {
            img: 'kstBasel.png',
            link: 'https://kstbasel.ch/',
            alt: "kstbasel from 'https://sonono.ch'"
          },
          {
            img: 'cropped-ich-bin-da-produkte.png',
            link: 'https://ich-bin-da-produkte.ch/',
            alt: "ich-bin-da-produkte from 'https://sonono.ch'"
          },
          {
            img: 'gerichte.png',
            link: 'https://www.gerichte.bs.ch/',
            alt: "gerichte from 'https://sonono.ch'"
          },
        ]
      } else {
        return [
          {
            img: 'fitpass.png',
            link: 'https://www.fitpass.ch',
            alt: "fitpass from 'https://sonono.ch'"
          },
          {
            img: 'physio.png',
            link: 'https://physio-art-basel.ch/en/',
            alt: "physio from 'https://sonono.ch'"
          },
          {
            hasContent: true,
          },
          {
            img: 'your-project.png',
            link: 'https://www.your-project.ch/en/',
            alt: "your-project from 'https://sonono.ch'"
          },
          {
            img: 'logoKundP.png',
            link: 'https://kretiundpleti.ch/en/',
            alt: "kretiundpleti from 'https://sonono.ch'"
          },
          {
            img: 'swiss-devs.svg',
            link: 'https://swissdevs.com',
            alt: "swissdevs from 'https://sonono.ch'"
          },
          {
            img: 'ray.png',
            link: 'https://www.rayconsole.com/en/',
            alt: "rayconsole from 'https://sonono.ch'"
          },
          {
            hasEmptySpace: true,
          },
          {
            img: 'groupify.png',
            link: 'https://www.groupify.ch/',
            alt: "groupify from 'https://sonono.ch'"
          },
          {
            img: 'bitbrain.png',
            link: 'https://www.bitbrainacademy.com/',
            alt: "bitbrainacademy from 'https://sonono.ch'"
          },
          {
            justEmpty: true,
          },
          // {
          //   img: 'vadis.png',
          //   link: '',
          // },
          {
            img: 'shab.png',
            link: 'https://www.getshab.ch/',
            alt: "getshab from 'https://sonono.ch'"
          },
          {
            img: 'glanzmann-cosmetics.svg',
            link: 'https://www.glanzmann-cosmetics.ch/',
            alt: "glanzmann-cosmetics from 'https://sonono.ch'"
          },
          {
            img: 'q.png',
            customClass: true,
            link: 'https://www.zakumh.com/',
            alt: "zakumh from 'https://sonono.ch'"
          },
          {
            moreBox: true,
          },
        ]
      }
    },
  },
}
</script>
