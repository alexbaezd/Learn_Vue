<template>
  <div class="hello">
    <h1>{{msg}}</h1>
    <p>{{description}}</p>
  </div>
</template>

<script>
export default {
  name: "Hello",
  props: {
    msg: String
  },
  data() {
    return {
      description: "From Codesandbox"
    };
  }
};
</script>

<style>
.hello {
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
}
</style>

