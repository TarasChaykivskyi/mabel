<template>
  <div class="block" v-if="selectedOffers.length">
    <div class="addedService"
         v-for="(offer, index) in selectedOffers"
         :key="offer.idOffers"
    >
      <span>{{ offer.titleOffer }}</span>
      <div>
        <span class="price">{{ offer.price }} AED</span>
        <button class="remove" @click="removeSelectedOffers(index)">&times;</button>
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex';

export default {
  name: "SelectedOffersService",
  computed: {
    ...mapGetters({
      selectedOffers: 'SELECTED_OFFERS'
    }),
  },
  methods: {
    ...mapActions({
      removeSelectedOffers: "REMOVE_SELECTED_OFFERS"
    })
  }
}
</script>

<style scoped>

</style>
