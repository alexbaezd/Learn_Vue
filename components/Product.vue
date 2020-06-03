<template>
  <div class="item">
    <h2>{{ item }}</h2>
    <img :src="url" width="235" height="300" />
    <div class="quantity">
      <button class="inc" @click="counter > 0 ? (counter -= 1) : 0">-</button>
      <span class="quant-text">Quantity: {{ counter }}</span>
      <button class="inc" @click="counter += 1">+</button>
    </div>
    <button class="submit">Submit</button>
  </div>
  <!--item-->
</template>

<script>
export default {
  data() {
    return {
      counter: 0
    };
  },
  props: ["item", "url"]
};
</script>

<style scoped>
.special,
h1,
h2,
h3,
li,
button.submit,
.quant-text {
  font-family: "Montserrat", sans-serif;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  font-size: 12px;
}
h2 {
  font-size: 20px;
  margin: 0 0 5px;
  text-align: center;
}
li {
  list-style: none;
  display: inline-block;
}
input {
  background: #eee;
}
button {
  border: none;
  border-radius: 1000px;
  padding: 8px 13px;
  outline: none;
  cursor: pointer;
}
button.inc {
  background: white;
  color: black;
}
button.submit {
  background: black;
  color: white;
  margin-top: 10px;
  margin-left: 20px;
  padding: 12px 14px;
  width: 240px;
  -webkit-transition: 0.25s all ease-in;
  transition: 0.25s all ease-in;
}
button.submit:hover {
  opacity: 0.8;
  -webkit-transition: 0.25s all ease-out;
  transition: 0.25s all ease-out;
}
.quant-text {
  display: inline-block;
  text-align: center;
  width: 140px;
  padding: 8px;
  padding: 8px;
}
.quantity {
  border: 2px solid black;
  width: 235px;
  padding-left: 3px;
  border-radius: 1000px;
  background: #fff;
  margin-left: 20px;
}
.item {
  display: -webkit-box;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  flex-direction: column;
  width: 280px;
  height: 460px;
  justify-content: space-around;
  background: #eee;
  padding: 20px 10px;
  margin: 30px;
}
.item img {
  align-self: center;
  margin: 10px;
}
</style>
