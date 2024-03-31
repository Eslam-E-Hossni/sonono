<template>
  <li class="why-us__content--card">
    <div class="why-us__content--card__inner">
      <h3 class="why-us__content--card__number">{{ card.number }}</h3>
      <p class="why-us__content--card__content--title mb-6">
        {{ card.content.question }}
      </p>
      <p class="why-us__content--card__content">
        {{ card.content.answer }}
      </p>
    </div>
  </li>
</template>

<script>
  export default {
    props: {
      card: {
        type: Object,
        required: true
      }
    }
  }
</script>
