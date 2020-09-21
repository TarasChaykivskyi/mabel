


<!--v-if="selectedOffers.length"-->

<template>
  <div>
    <div class="block block-master"
         @click="selectMasterOffer"
    >
      <h4>Master</h4>
      <div class="text-block">
        <img :src="require(`@/assets/images/Star.png`)" alt="image">
        <span>{{ currentMaster.stars }} Master {{ currentMaster.name }}</span>
      </div>
      <button class="select">
        <img :src="require(`@/assets/images/angle-down.png`)" alt="image">
      </button>
      <ul class="block-masters-list"
          :class="{active: showListMasters}">
        <li class="masters-list"
            v-for="item in 5"
            :key="item"
            @click.stop="changeMasterService(item)"
        >
          <div class="text-block">
            <img :src="require(`@/assets/images/Star.png`)" alt="image">
            <span>{{item }} Master {{ item }}</span>
          </div>
        </li>
      </ul>
    </div>
    <select-date-chosen-services />
  </div>
</template>

<script>
import SelectDateChosenServices from './SelectDateChosenServices';
import {mapGetters} from "vuex";

export default {
  name: "SelectMasterService",
  data() {
    return {
      showListMasters: false,
      currentMaster: {
        name: 1,
        stars: 4
      }
    }
  },
  computed: {
    ...mapGetters({
      selectedOffers: 'SELECTED_OFFERS'
    })
  },
  components: {
    SelectDateChosenServices
  },
  methods: {
    selectMasterOffer() {
      this.showListMasters = !this.showListMasters;
    },
    changeMasterService(item) {
      this.currentMaster.name = item;
      this.currentMaster.stars = item;
      this.showListMasters = !this.showListMasters;
    }
  }
}
</script>

<style scoped>

</style>
