<template>
  <div class="filter-contain">
    <h1>Filters & Custom Directives</h1>
    <div class="filter-tip">
      <h2>Tip Calculator</h2>
      <small>Filter</small>
      <p>Total: {{ customerTotal }}</p>
      <p>IVA {{ customerTotal | taxes }}</p>
      <p>10% {{ customerTotal | tip10 }}</p>
      <p>15% {{ customerTotal | tip15 }}</p>
      <p>20% {{ customerTotal | tip20 }}</p>
    </div>
    <hr />
    <p>Challenge: Filter & v-color</p>
    <div class="filter-tip">
      <small>Your Place here:</small>
      <input v-model="num" type="number" min="1" max="10" />
      <div class="won" v-color="{ color: '#4ecca3' }">
        <h2>🏆 Congratulations!</h2>
        <p>
          You won <span>{{ num | place }}</span> place!
        </p>
      </div>
    </div>
    <div class="won" v-color="{ color: '#bc687' }">
      {{ lastComment }}
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return { customerTotal: 35.43, num: 1 };
  },
  filters: {
    tip10(value) {
      return (value * 0.1).toFixed(2);
    },
    tip15(value) {
      return (value * 0.15).toFixed(2);
    },
    tip20(value) {
      return (value * 0.2).toFixed(2);
    },
    taxes(value) {
      return (value * 0.16).toFixed(2);
    },
    place(value) {
      switch (parseInt(value)) {
        case 1:
          return `🥇 ${value}st`;
          break;
        case 2:
          return `🥈 ${value}nd`;
          break;
        case 3:
          return `🥉 ${value}nd`;
          break;
        default:
          return `🏅 ${value}th`;
      }
    }
  },
  directives: {
    color: {
      bind: function(el, binding) {
        //console.log(binding.value.color);
        el.style.background = binding.value.color;
      }
    }
  },
  computed: {
    lastComment() {
      return this.$store.getters.lastComment;
    }
  }
};
</script>

<style scoped>
.filter-contain {
  width: 85%;
  margin: 1rem 4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.filter-contain h1,
.filter-contain h2 {
  text-align: center;
}
.filter-tip {
  text-align: center;
  max-width: 330px;
  margin: 50px auto;
  display: table;
  padding: 10px 40px;
  border: 1px solid black;
}
.filter-tip p {
  padding: 4px 0;
}

.won {
  background: #ffc968;
  padding: 10px 10px;
  border-radius: 3px;
  margin: 10px;
}
.won p {
  color: white;
}
.won span {
  font-size: 2rem;
}
</style>
