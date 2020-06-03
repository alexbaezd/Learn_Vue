<template>
  <div class="content-modal">
    <h2>Here I am!</h2>
    <slot></slot>
  </div>
</template>

<style scoped>
.content-modal {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.content-modal h2 {
  margin: 1rem 0;
}
</style>
