<template>
  <div class="choose-service-result">
    <h3>Chosen services</h3>
    <selected-offers-service />
    <select-master-service />
    <total-container-services />
  </div>
</template>

<script>
import SelectedOffersService from "./SelectedOffersService";
import SelectMasterService from "./SelectMasterService/SelectMasterService";
import TotalContainerServices from "./TotalContainerServices";
export default {
  name: "ResultContainerChooseService",
  components: {
    TotalContainerServices,
    SelectMasterService,
    SelectedOffersService
  }
}
</script>

<style scoped>

</style>
