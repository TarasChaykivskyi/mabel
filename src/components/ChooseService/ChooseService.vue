<template>
  <div id="choose-service" class="container">
    <div class="choose-service-top clearfix">
      <h2>Choose service</h2>
      <span>—  Choose service, select options and calculate a total price</span>
    </div>
    <div class="choose-service">
       <ul class="choose-service-navigation">
         <li class="item"
             :class="{active: index + 1 === activeNavigationLink}"
             v-for="(item, index) in itemsNavigation"
             :key="item.text"
             @click="changeNavigationLink(index + 1)"
         >
             <img :src="require(`@/assets/images/${item.img}.png`)" alt="image">
           <span>{{ item.text }}</span>
         </li>
       </ul>
    </div>
    <div class="list-data-service">
      <div class="data-service">
        <ul class="nav-data-service">
          <li :class="{active: activeCurrentNavigationLink === index + 1}"
              v-for="(item, index) in itemsListCurrentNavigation"
              :key="item"
              @click="changeCurrentNavigationLink(index + 1)"
          >
            {{ item }}
          </li>
        </ul>
        <ul class="selected-data-service">
          <li class="item" v-for="item in 5" :key="item">
            <button :class="['checkbox', {active: checkboxIsActive}]"
                    @click="checkboxIsActive = !checkboxIsActive"
            >
              <span>&#10004;</span>
            </button>
            <div class="item-left-side">
              <div class="data-service-name">
                <h5>Manicure & Pedicure</h5>
                <div>
                  <img :src="require(`@/assets/images/clock.png`)" alt="image">
                  <span>left 1 day</span>
                </div>
              </div>
            </div>
            <div class="item-right-side">
              <a href="#" class="details">Show details</a>
              <div class="price">
                <span><span class="old">95</span>135 AED</span>
                <span>1 hr 30 min</span>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div class="choose-service-result">
        <h3>Chosen services</h3>
        <div class="block">
          <div class="addedService">
            <span>Manicure & Pedicure</span>
            <div>
              <span class="price">135 AED</span>
              <button class="remove">&times;</button>
            </div>
          </div>
          <div class="addedService">
            <span>Pedicure</span>
            <div>
              <span class="price">75 AED</span>
              <button class="remove">&times;</button>
            </div>
          </div>
        </div>
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
        <div class="block block-date">
          <div>
            <h4>Preffered Date</h4>
            <span class="text-block">23.07.2020</span>
          </div>
          <div>
            <h4>Time</h4>
            <span class="text-block">12:00</span>
          </div>
        </div>
        <div class="container-total">
          <div class="subtotal">
            <span>Subtotal</span>
            <span class="price">210 AED</span>
          </div>
          <div class="tax">
            <span>VAT Tax, 5%</span>
            <span class="price">12 AED</span>
          </div>
          <div class="total">
            <span>Total</span>
            <span>232 AED</span>
          </div>
          <button class="order">BOOK NOW</button>
          <div class="conditions">
            <button class="checkbox"></button>
            <span>I agree to <a href="#">Terms & Conditions</a></span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VectorImg from '../../assets/images/Vector.png';
import FaceImg from '../../assets/images/face.png';
import MakeupImg from '../../assets/images/makeup.png';
import NailsImg from '../../assets/images/nails-manicure.png';
export default {
  name: "ChooseService",
  data() {
    return {
      VectorImg,
      FaceImg,
      MakeupImg,
      NailsImg,
      itemsNavigation: [
        {
          text: 'All',
          img: 'Vector'
        },
        {
          text: 'Face',
          img: 'face'
        },
        {
          text: 'Makeup',
          img: 'makeup'
        }
        ,
        {
          text: 'Nails',
          img: 'nails-manicure'
        }
      ],
      itemsListCurrentNavigation: [
        'GEL Manicure',
        'Pedicure',
        'Classic Manicure'
      ],
      activeNavigationLink: 1,
      activeCurrentNavigationLink: 1,
      checkboxIsActive: false
    }
  },
  computed: {

  },
  methods: {
    changeNavigationLink(item) {
      this.activeNavigationLink = item;
    },
    changeCurrentNavigationLink(item) {
      this.activeCurrentNavigationLink = item;
    },
  }
}
</script>

<style scoped>

</style>
