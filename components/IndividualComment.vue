<template>
  <li>
    <img :src="commentpost.authorImg" class="post-img" />
    <span class="post-date">{{ commentpost.date | formatDate }}</span
    ><br />
    <small>{{ commentpost.author }}</small>
    <p class="post-comment">{{ commentpost.text }}</p>
  </li>
</template>

<script>
export default {
  props: ["commentpost"],
  filters: {
    formatDate(dateString) {
      const options = { year: "numeric", month: "long", day: "numeric" };
      return new Date(dateString).toLocaleDateString(undefined, options);
    }
  }
};
</script>
<style scoped>
.post-img {
  border: 3px solid white;
  float: left;
  margin: 0 15px 0 -2px;
  transition: 0.3s all ease;
}
.post-comment {
  margin: 0 0 5px 0;
}
.post-date {
  font-size: 0.7rem;
  color: lightgray;
}
</style>
