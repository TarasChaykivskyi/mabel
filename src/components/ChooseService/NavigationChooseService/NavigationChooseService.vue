<template>
  <div class="choose-service">
    <ul class="choose-service-navigation">
      <li class="item"
          :class="{active: 1 === activeNavigationLink}"
          @click="changeNavigationLink($event.target, 1, [])"
      >
        <img :src="require(`@/assets/images/Vector.png`)" alt="image">
        <span>All</span>
      </li>
      <li class="item"
          :class="{active: index + 2 === activeNavigationLink}"
          v-for="(item, index) in services"
          :key="item.id"
          @click="changeNavigationLink($event.target,index + 2, item.nav)"
      >
        <img :src="require(`@/assets/images/${item.image}.png`)" alt="image">
        <span>{{ item.title }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
import {mapGetters, mapActions} from "vuex";

export default {
  name: "ChooseServiceNavigation",
  data() {
    return {
      activeNavigationLink: 1
    }
  },
  computed: {
    ...mapGetters({
      services: 'SERVICES'
    })
  },
  methods: {
    ...mapActions({
      setSubNavigate: 'SET_SUB_NAVIGATE'
    }),
    changeNavigationLink(event, item, nav) {
      if(!event.classList.contains('active')) {
        this.activeNavigationLink = item;
        this.setSubNavigate(nav);
      }
    }
  }
}
</script>

<style scoped>

</style>
