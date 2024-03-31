<template>
  <div class="team__card">
    <img :src="require(`@/assets/images/team/0${idx}.png`)" alt="team pic" class="team__card--pic">
    <div class="team__card--content">
      <div class="team__card--content__header">
        <p class="team__card--content__header--name">{{ member.name }}</p>
        <p class="team__card--content__header--job-title">{{ member.jobTitle }}</p>
      </div>
      <div class="team__card--content__footer">
        <div class="team__card--content__contact">
          <a :href="`tel:${member.phoneNumber}`" class="team__card--content__contact--phone">{{ member.phoneNumber }}</a>
          <a :href="`mailto:${member.email}`" class="team__card--content__contact--email">{{ member.email }}</a>
        </div>
        <ul class="team__card--content__social">
          <li class="team__card--content__social--link">
            <a :href="member.linkedinLink">
              <img src="@/assets/images/social-icons/linkedin-icon.png" alt="social icon" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      member: {
        type: Object,
        required: true
      },
      idx: {
        type: Number,
        required: true
      }
    }
  }
</script>
