<template>
  <section class="technologies section-p white section-to-top">
    <div class="container">
      <div class="technologies__inner px-md-0 px-4">
        <div class="technologies__head">
          <h2 class="technologies__head--title">{{ $i18n.t('pages.home.sections.technologies.head.title') }}</h2>
          <p class="technologies__head--description">{{ $i18n.t('pages.home.sections.technologies.head.description') }}</p>
        </div>
        <TechnologiesFilter/>
      </div>
    </div>
  </section>
</template>

<script>
  import TechnologiesFilter from './TechnologiesFilter'
  export default {
    components: {
      TechnologiesFilter
    },
    data() {
      return {

      }
    },
  }
</script>
