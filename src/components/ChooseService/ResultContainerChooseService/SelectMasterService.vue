<template>
  <div class="block block-master">
    <h4>Master</h4>
    <div class="text-block">
      <img :src="require(`@/assets/images/Star.png`)" alt="image">
      <span>4.5 Sabrina Habibi</span>
    </div>
    <button class="select">
      <img :src="require(`@/assets/images/angle-down.png`)" alt="image">
    </button>
  </div>
</template>

<script>
export default {
  name: "SelectMasterService"
}
</script>

<style scoped>

</style>
