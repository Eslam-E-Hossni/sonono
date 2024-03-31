<template>
  <section class="team section-p" :class="separated && 'separated'">
    <div class="container">
      <div class="team__inner">
        <v-row dense class="my-0">
          <v-col
            cols="12"
            :lg="separated ? 12 : 3"
            class="d-flex py-0 align-center bg-gray left"
          >
            <div class="team__introduce">
              <h2
                v-if="separated"
                class="team__title"
                :class="separated && 'text-center'"
              >
                {{
                  `${$i18n.t('pages.home.sections.team.title.the')} ${$i18n.t(
                    'pages.home.sections.team.title.team'
                  )}`
                }}
              </h2>
              <h2
                v-else
                class="team__title"
                :data-title="$i18n.t('pages.home.sections.team.title.the')"
              >
                {{ $i18n.t('pages.home.sections.team.title.team') }}
              </h2>
              <p class="team__description" :class="separated && 'text-center'">
                {{ $i18n.t('pages.home.sections.team.description') }}
              </p>
            </div>
          </v-col>
          <v-col
            cols="12"
            lg="9"
            class="py-0 right"
          >
            <div class="team__cards">
              <TeamCard
                v-for="(member, i) in team"
                :key="i"
                :member="member"
                :idx="++i"
              />
            </div>
          </v-col>
        </v-row>
      </div>
    </div>
  </section>
</template>

<script>
import TeamCard from './TeamCard.vue'
export default {
  components: {
    TeamCard,
  },
  props: {
    separated: {
      type: Boolean,
    },
  },
  data() {
    return {
      team: [
        {
          name: 'Mahmoud AL Hariri',
          jobTitle: 'CEO & Designer',
          phoneNumber: '+41 77 912 05 88',
          email: 'mahmoud@sonono.ch',
          linkedinLink: '#',
        },
        {
          name: 'Waleed El Sayed',
          jobTitle: 'CEO & Blockchain Developer',
          phoneNumber: '+41 78 846 93 92',
          email: 'waleed@sonono.ch',
          linkedinLink: '#',
        },
      ],
    }
  },
  // methods: {
  //   handleMouse(e) {
  //     // eslint-disable-next-line one-var
  //     const x = e.clientX,
  //       y = e.clientY
  //     this.$refs.mouseEffect.style.left = x + 'px'
  //     this.$refs.mouseEffect.style.top = y + 'px'
  //   },
  //   mouseEnterHandle() {
  //     this.$refs.mouseEffect.style.position = 'fixed'
  //     this.$refs.mouseEffect.style.display = 'block'
  //   },
  //   mouseLeaveHandle() {
  //     this.$refs.mouseEffect.style.position = 'absolute'
  //     this.$refs.mouseEffect.style.display = 'none'
  //   },
  // },
}
</script>
