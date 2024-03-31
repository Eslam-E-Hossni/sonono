<template>
  <div class="technologies__filter">
    <div class="technologies__filter--actions">
    <span ref="btnBg" class="btn-effect" :style="elementStyle"></span>
      <BaseButton
        v-for="(btn,i) in $i18n.t('pages.home.sections.technologies.filtering.btns')"
        :key="i" :ref="`activeBtn${i}`"
        :class="{active: i === currentBtn}"
        filter-btn
        @active="activeBtn(btn)"
      >
        {{ btn.title }}
      </BaseButton>
    </div>
    <div class="technologies__filter--view">
      <transition mode="out-in">
        <component :is="currentView"></component>
      </transition>
    </div>
  </div>
</template>

<script>
  import WebFilterView from './Views/TheWeb';
  import PlatformsFilterView from './Views/ThePlatforms';
  import MobileFilterView from './Views/TheMobile';
  import DevOpsFilterView from './Views/TheDevOps';
  import BlockchainFilterView from './Views/TheBlockchain';

  import BaseButton from '@/components/UI/BaseButton';
  export default {
    components: {
      BaseButton,

      // Views Filter
      WebFilterView,
      PlatformsFilterView,
      MobileFilterView,
      DevOpsFilterView,
      BlockchainFilterView
    },

    data() {
      return {
        currentBtn: 0,
        elementStyle: {},
        currentView: 'WebFilterView',
      }
    },
    mounted() {
      this.initPositionElement()
    },

    methods: {
      initPositionElement() {
        // Get Button Dimensions
        const dimensions = {
          btnTop: this.$refs[`activeBtn${this.currentBtn}`][0].$el.offsetTop,
          btnLeft: this.$refs[`activeBtn${this.currentBtn}`][0].$el.offsetLeft,
          btnWidth: this.$refs[`activeBtn${this.currentBtn}`][0].$el.offsetWidth,
          btnHeight: this.$refs[`activeBtn${this.currentBtn}`][0].$el.offsetHeight
        };

        // Reinit dimensions In Data Instanse
        this.elementStyle = {
          top: `${dimensions.btnTop}px`,
          left: `${dimensions.btnLeft}px`,
          width: `${dimensions.btnWidth}px`,
          height: `${dimensions.btnHeight}px`,
        }
      },

      activeBtn(btn) {
        const idx = this.$i18n.t('pages.home.sections.technologies.filtering.btns').indexOf(btn)
        this.currentBtn = idx
        this.initPositionElement();
        this.currentView = btn.dataFilter
      },
    }
  }
</script>
