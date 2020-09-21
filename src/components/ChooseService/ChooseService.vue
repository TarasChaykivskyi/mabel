


<template>
  <div id="choose-service" class="container">
    <div class="choose-service-top clearfix">
      <h2>Choose service</h2>
      <span>—  Choose service, select options and calculate a total price</span>
      <actions-slider-navigation />
    </div>
    <choose-service-navigation />
    <div class="list-data-service">
      <div class="data-service">
        <sub-navigation-list />
        <list-offers-choose-service />
      </div>
      <result-container-choose-service />
    </div>
  </div>
</template>

<script>
import {mapActions} from 'vuex'
import ChooseServiceNavigation from "@/components/ChooseService/NavigationChooseService/NavigationChooseService";
import SubNavigationList from "@/components/ChooseService/SubNavListDataService/SubNavigationList";
import ListOffersChooseService from "@/components/ChooseService/ListOffersChooseService/ListOffersChooseService";
import ResultContainerChooseService
  from "@/components/ChooseService/ResultContainerChooseService/ResultContainerChooseService";
import ActionsSliderNavigation from "./NavigationChooseService/ActionsSliderNavigation";
export default {
  name: "ChooseService",
  components: {
    ActionsSliderNavigation,
    ResultContainerChooseService,
    ListOffersChooseService,
    SubNavigationList,
    ChooseServiceNavigation
  },
  methods: {
    ...mapActions({
      getServices: 'GET_SERVICES'
    }),
  },
  created() {
    this.getServices();
  }
}
</script>

<style scoped>

</style>
