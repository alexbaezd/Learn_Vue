<template>
  <div id="app">
    <h1>
      State from the store is <span>{{ state }}</span>
    </h1>
    <getter />
    <mutation />
    <action />
    <adjust-state />
  </div>
</template>

<script>
import Getter from "./components/Getter";
import Mutation from "./components/Mutation";
import Action from "./components/Action";
import AdjustState from "./components/AdjustState";
export default {
  name: "App",
  components: {
    Getter,
    Mutation,
    Action,
    AdjustState
  },
  computed: {
    state() {
      return this.$store.state.counter;
    }
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
div {
  margin: 20px 0;
  span {
    padding: 5px 10px;
    border: 1px solid #ccc;
  }
}
button {
  padding: 5px 10px 8px;
  border-radius: 3px;
  background: #eee;
  border: none;
  margin: 5px 2px;
  outline: 0;
  cursor: pointer;
}
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
