<template>
  <section id="about-us" class="why-us section-p">
    <div class="container">
      <div class="why-us__inner">
        <div class="why-us__head section__head text-center">
          <BaseCircleLogo cut />
          <h2
            class="why-us__head--title section__head--title"
            :data-title="$i18n.t('pages.home.sections.whySonono.head.why')"
          >
            <span>son</span><span>ono</span>
          </h2>
        </div>
        <div class="why-us__content">
          <ul class="why-us__content--cards">
            <WhySononoCard
              v-for="(card, i) in $i18n.t(
                'pages.home.sections.whySonono.content.cards'
              )"
              :key="i"
              :card="card"
            />
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import WhySononoCard from './WhySononoCard.vue'
import BaseCircleLogo from '@/components/UI/BaseCircleLogo'
export default {
  components: {
    BaseCircleLogo,
    WhySononoCard,
  },
}
</script>
