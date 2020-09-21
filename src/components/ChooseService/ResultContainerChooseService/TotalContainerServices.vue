<template>
  <div class="container-total">
    <div class="subtotal">
      <span>Subtotal</span>
      <span class="price">{{ SUB_TOTAL_SERVICE }} AED</span>
    </div>
    <div class="tax">
      <span>VAT Tax, {{ tax }}%</span>
      <span class="price" v-if="SUB_TOTAL_SERVICE > 0">{{ taxService }} AED</span>
    </div>
    <div class="total">
      <span>Total</span>
      <span>{{ totalService }} AED</span>
    </div>
    <button class="order">BOOK NOW</button>
    <div class="conditions">
      <button @click="selectTermAndConditions = !selectTermAndConditions"
              :class="['checkbox', {active: selectTermAndConditions}]">
        <span>&#10004;</span>
      </button>
      <span>I agree to <a href="#">Terms & Conditions</a></span>
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex';

export default {
  name: "TotalContainerServices",
  data() {
    return {
      tax: 5,
      selectTermAndConditions: false
    }
  },
  computed: {
    ...mapGetters([
        'SUB_TOTAL_SERVICE'
    ]),
    totalService() {
      return (this.SUB_TOTAL_SERVICE + Number(this.taxService));
    },
    taxService() {
      return (this.SUB_TOTAL_SERVICE * (this.tax * 0.01)).toFixed(1);
    }
  },
  methods: {
    // ...mapActions({
    //   order: 'ORDER_SERVICES'
    // }),
    // orderServices() {
    //   if (this.selectTermAndConditions) {
    //     this.order();
    //     alert('ok');
    //   }else {
    //     alert('Agree Terms and Conditions');
    //   }
    // }
  }
}
</script>

<style scoped>

</style>
