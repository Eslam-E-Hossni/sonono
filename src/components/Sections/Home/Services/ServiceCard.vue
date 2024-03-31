<template>
  <div class="services__card">
    <div class="services__card--inner px-md-0 px-4">
      <div class="services__card--head">
        <img
          :src="require(`@/assets/images/services/${icon}`)"
          alt="card icon"
          :class="cardDetails.customClass && cardDetails.customClass"
        />
      </div>
      <h2 class="services__card--title">{{ cardDetails.title }}</h2>
      <p class="services__card--content">{{ cardDetails.content }}</p>
      <!-- <div class="services__card--actions">
        <BaseButton />
      </div> -->
    </div>
  </div>
</template>

<script>
// import BaseButton from '@/components/UI/BaseButton'
export default {
  components: {
    // BaseButton,
  },
  props: {
    cardDetails: {
      type: Object,
      required: true,
    },
    icon: {
      type: String,
      required: true,
    },
  },
}
</script>
