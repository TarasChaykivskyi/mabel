<template>
  <ul class="nav-data-service">
    <li :class="{active: activeCurrentNavigationLink === index + 1}"
        v-for="(item, index) in subNavigate"
        :key="item.idNavigation"
        @click="changeSubLink([item.offers, index + 1])"
    >
      {{ item.titleNavigation }}
    </li>
  </ul>
</template>

<script>
import {mapGetters, mapActions} from 'vuex';

export default {
  name: "SubNavigationList",
  computed: {
    ...mapGetters({
      subNavigate: 'SUB_NAVIGATE',
      activeCurrentNavigationLink: 'ACTIVE_SUB_LINK'
    })
  },
  methods: {
    ...mapActions({
      changeSubLink: 'CHANGE_SUB_LINK'
    }),
  }
}
</script>

<style scoped>

</style>
