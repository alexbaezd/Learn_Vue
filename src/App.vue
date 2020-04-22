<template>
  <div id="app">
    <img width="25%" src="./assets/logo.png">
    <Hello msg="Hello Vue"/>
    <p>I know React.</p>
  </div>
</template>

<script>
import Hello from "./components/Hello.vue";

export default {
  name: "App",
  components: {
    Hello
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

#app img {
  animation: heart 1500ms infinite;
}
@keyframes heart {
  0% {
    transform: scale(1.1);
  }
  50% {
    transform: scale(1);
  }

  100% {
    transform: scale(1.1);
  }
}
</style>
