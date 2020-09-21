




<template>
  <div class="top-actions-choose-service">
    <button @click="prevSlideNavigation">
      <img :src="require(`@/assets/images/arrow-actions-slider.png`)" alt="image">
    </button>
    <button @click="nextSlideNavigation">
      <img :src="require(`@/assets/images/arrow-actions-slider-right.png`)" alt="image">
    </button>
  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex';
export default {
  name: "ActionsSliderNavigation",
  computed: {
    ...mapGetters(['SERVICES']),
  },
  methods: {
    ...mapActions({
      changePositionSLider: 'SET_POSITION_SLIDER_SERVICES'
    }),
    prevSlideNavigation() {
      this.changePositionSLider(-1)
    },
    nextSlideNavigation() {
      this.changePositionSLider(1)
    }
  }
}
</script>

<style scoped>

</style>
