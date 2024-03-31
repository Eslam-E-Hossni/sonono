<template>
  <div class="technologies__filter--view--content blockchain">
    <div>
      <h4 class="view-title">
        {{ $i18n.t('pages.home.sections.technologies.filtering.views.blockchain') }}
      </h4>
      <div class="technologies__filter--view--icons">
        <a target="_blank" v-for="(img, i) in imgs" :key="i" :href="img.link">
          <img
            :src="require(`@/assets/images/technologies/blockchain/${img.src}`)"
            :alt="img.alt"
            :title="img.alt"
            :class="img.customClass ? img.customClass : ''"
          />
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      imgs: [
        {
          src: 'hyperledger.png',
          link: 'https://www.hyperledger.org/',
          alt: 'hyperledger',
        },
        {
          src: 'hyperledger_fabric.png',
          link: 'https://www.hyperledger.org/projects/fabric',
          alt: 'hyperledger fabric',
          customClass: 'big-size'
        }
      ],
    }
  },
}
</script>
