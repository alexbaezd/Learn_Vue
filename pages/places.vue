<template>
  <div>
    <div v-bind:class="[isShowing ? blurClass : '', bkClass]">
      <h1>Your Upcoming Destinations</h1>

      <button @click="toggleShow" class="button--grey button--modal">
        <span v-if="isShowing">Hide Modal</span>
        <span v-else>Show Modal</span>
      </button>

      <div class="location-contain">
        <div class="locations" v-for="(location, i) in locations" :key="i">
          <place :location="location">
            <h2>{{ location.name }}</h2>
          </place>
        </div>
      </div>
    </div>
    <transition name="fade">
      <modal v-if="isShowing" class="modal">
        <button class="button--grey" @click="toggleShow">Close</button>
      </modal>
    </transition>
  </div>
</template>

<script>
import Place from "../components/Place";

import Modal from "../components/Modal";
export default {
  components: {
    Modal,
    Place
  },
  data() {
    return {
      isShowing: false,
      bkClass: "bk",
      blurClass: "blur",
      locations: [
        {
          name: "moscow",
          img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/28963/moscow.svg",
          desc: `Moscow is the capital and most populous city of Russia, with 13.2 million residents within the city limits and 17.8 million within the urban area. Moscow has the status of a Russian federal city.`
        },
        {
          name: "paris",
          img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/28963/paris1.svg",
          desc: `Paris is the capital and most populous city of France. By the 17th century, Paris was one of Europe's major centres of finance, commerce, fashion, science, and the arts, and it retains that position still today.`
        },
        {
          name: "rome",
          img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/28963/rome.svg",
          desc: `Rome's history spans more than 2,500 years. While Roman mythology dates the founding of Rome at around 753 BC, the site has been inhabited for much longer, making it one of the oldest continuously occupied sites in Europe.`
        },
        {
          name: "paris",
          img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/28963/paris2.svg",
          desc: `Paris is the capital and most populous city of France. By the 17th century, Paris was one of Europe's major centres of finance, commerce, fashion, science, and the arts, and it retains that position still today.`
        }
      ]
    };
  },
  methods: {
    toggleShow() {
      this.isShowing = !this.isShowing;
    }
  }
};
</script>

<style scoped>
h1 {
  text-align: center;
}

.location-contain {
  display: -webkit-box;
  display: flex;
  flex-wrap: wrap;
  -webkit-box-pack: center;
  justify-content: center;
}
.modal {
  background: rgb(82, 189, 153);
  border-radius: 5px;
  color: white;
  padding: 20px;
  width: 300px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.button--modal {
  margin-top: 1rem;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.25s ease-out;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.bk {
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: all 0.05s ease-out;
  margin: 2rem 0;
}

.blur {
  filter: blur(1px);
  opacity: 0.4;
}
</style>
