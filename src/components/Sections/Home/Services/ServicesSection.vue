<template>
  <section class="services section-p white section-to-top">
    <div class="container">
      <div class="services__inner">
        <ServiceCard
          v-for="(card, i) in $i18n.t('pages.home.sections.services.cards')"
          :key="i"
          :card-details="card"
          :icon="cardsIcons[i]"
        />
      </div>
    </div>
  </section>
</template>

<script>
import ServiceCard from './ServiceCard.vue'
export default {
  components: { ServiceCard },
  data() {
    return {
      cardsIcons: ['01.svg', '02.svg', '03.svg', '04.svg'],
    }
  },
}
</script>
