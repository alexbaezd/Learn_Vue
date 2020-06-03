<template>
  <div>
    <h1>
      Hello Products
    </h1>
    <navegation></navegation>
    <div class="products">
      <div class="unit" v-for="(unit, i) in manifest" :key="i">
        <product :item="unit.item" :url="unit.url"></product>
      </div>
    </div>
  </div>
</template>

<script>
import Product from "../components/Product";
import Navegation from "../components/NavBar";
export default {
  components: {
    Navegation,
    Product
  },
  data() {
    return {
      manifest: [
        {
          item: "backpack",
          url: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/28963/backpack.jpg"
        },
        {
          item: "tshirt",
          url: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/28963/tshirt.jpg"
        },
        {
          item: "sweatshirt",
          url:
            "https://s3-us-west-2.amazonaws.com/s.cdpn.io/28963/sweatshirt.jpg"
        }
      ]
    };
  }
};
</script>

<style scoped>
.products {
  display: -webkit-box;
  display: flex;
  flex-wrap: wrap;
  -webkit-box-pack: center;
  justify-content: center;
}
h1 {
  text-align: center;
}
.links {
  display: flex;
  flex-direction: row;
  justify-content: center;
}
</style>
