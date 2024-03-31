<template>
  <div class="technologies__filter--view--content devOps">
    <div>
      <h4 class="view-title">
        {{ $i18n.t('pages.home.sections.technologies.filtering.views.devOps') }}
      </h4>
      <div class="technologies__filter--view--icons">
        <a target="_blank" v-for="(img, i) in imgs" :key="i" :href="img.link">
          <img
            :src="require(`@/assets/images/technologies/devops/${img.src}`)"
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
          src: 'docker.png',
          link: 'https://www.docker.com/',
          alt: 'docker',
        },
        {
          src: 'Kubernetes.png',
          link: 'https://kubernetes.io/',
          alt: 'Kubernetes',
        },
        {
          src: 'Terraform.png',
          link: 'https://terraform.io/',
          alt: 'Terraform',
        },
        {
          src: 'aws.png',
          link: 'https://aws.amazon.com/',
          alt: 'aws',
          customClass: 'medium-size',
        },
        {
          src: 'Google-Cloud-Emblem.png',
          link: 'https://cloud.google.com/',
          alt: 'Google Cloud',
          customClass: 'big-size',
        },
        {
          src: 'azure.png',
          link: 'https://azure.microsoft.com/',
          alt: 'microsoft azure',
        },
      ],
    }
  },
}
</script>
