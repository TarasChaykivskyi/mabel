<template>
  <div class="choose-service-result">
    <h3>Chosen services</h3>
    <selected-offers-service />
    <select-master-service />
    <select-date-chosen-services />
    <total-container-services />
  </div>
</template>

<script>
import SelectedOffersService from "./SelectedOffersService";
import SelectMasterService from "./SelectMasterService";
import SelectDateChosenServices from "./SelectDateChosenServices";
import TotalContainerServices from "./TotalContainerServices";
export default {
  name: "ResultContainerChooseService",
  components: {
    TotalContainerServices,
    SelectDateChosenServices,
    SelectMasterService,
    SelectedOffersService
  }
}
</script>

<style scoped>

</style>
