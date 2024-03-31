<template>
  <ul class="social">
    <li v-for="(link, i) in socialLinks" :key="i" class="social-link" :class="link.customClass">
      <a :href="link.link" target="_blank"><v-icon size="20" color="#fff">{{ link.icon }}</v-icon></a>
    </li>
  </ul>
</template>

<script>
  export default {
    data() {
      return {
        socialLinks: [
          {
            icon: 'fab fa-linkedin-in',
            link: 'https://www.linkedin.com/company/sonono/mycompany/',
            customClass: 'linkedin'
          },
          {
            icon: 'fab fa-instagram',
            link: 'https://www.instagram.com/sonono_gmbh/',
            customClass: 'instagram'
          },
          {
            icon: 'fab fa-facebook-f',
            link: 'https://www.facebook.com/profile.php?id=100057322995144',
            customClass: 'facebook'
          },
        ],
      }
    }
  }
</script>
