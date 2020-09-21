

<template>
  <ul class="selected-data-service">
    <li class="item" v-for="(item, index) in offers" :key="item.idOffers">
      <button :class="['checkbox', {active: item.selected}]"
              @click="changeSelectOffers(item, index)"
      >
        <span>&#10004;</span>
      </button>
      <div class="item-left-side">
        <div class="data-service-name">
          <h5>{{ item.titleOffer }}</h5>
          <div v-if="item.selected">
            <img :src="require(`@/assets/images/clock.png`)" alt="image">
            <span>left 1 day</span>
          </div>
        </div>
      </div>
      <div class="item-right-side">
        <a href="#" class="details">Show details</a>
        <div class="price">
          <span><span class="old" v-if="item.oldPrice">{{ item.oldPrice }}</span>{{ item.price }} AED</span>
          <span>1 hr 30 min</span>
        </div>
      </div>
    </li>
  </ul>
</template>

<script>
import {mapGetters, mapActions} from 'vuex';

export default {
  name: "ListOffersChooseService",
  data() {
    return {
      checkboxIsActive: false
    }
  },
  computed: {
    ...mapGetters({
      offers: 'OFFERS'
    })
  },
  methods: {
    ...mapActions({
      selectOffers: 'SELECT_OFFERS'
    }),
    changeSelectOffers(item, index) {
      item.selected = !item.selected;
      this.selectOffers([this.offers, index]);
    }
  }
}
</script>

<style scoped>

</style>
