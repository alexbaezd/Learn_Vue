<template>
  <div class="animation">
    <h1>Bounce the Ball!</h1>

    <button @click="toggleShow" class="button--animations">
      <span v-if="isShowing">▶️ Get it gone!</span>
      <span v-else>▶️ Here we go</span>
    </button>

    <transition
      name="ballmove"
      enter-active-class="bouncein"
      leave-active-class="rollout"
    >
      <div v-if="isShowing">
        <ball></ball>
      </div>
    </transition>
  </div>
</template>

<script>
import Ball from "../components/Ball";

export default {
  components: {
    Ball
  },
  data() {
    return {
      isShowing: false
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
.animation {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.button--animations {
  background: #f0e882;
  color: black;
  border: none;
  padding: 1rem 1.5rem;
  border-radius: 4px;
  margin-top: 2rem;
  outline: 0;
  cursor: pointer;
}
@-webkit-keyframes bouncein {
  1% {
    -webkit-transform: translate3d(0, -400px, 0);
    transform: translate3d(0, -400px, 0);
  }
  20%,
  40%,
  60%,
  80%,
  95%,
  99%,
  100% {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
  30% {
    -webkit-transform: translate3d(0, -80px, 0);
    transform: translate3d(0, -80px, 0);
  }
  50% {
    -webkit-transform: translate3d(0, -40px, 0);
    transform: translate3d(0, -40px, 0);
  }
  70% {
    -webkit-transform: translate3d(0, -30px, 0);
    transform: translate3d(0, -30px, 0);
  }
  90% {
    -webkit-transform: translate3d(0, -15px, 0);
    transform: translate3d(0, -15px, 0);
  }
  97% {
    -webkit-transform: translate3d(0, -10px, 0);
    transform: translate3d(0, -10px, 0);
  }
}

@keyframes bouncein {
  1% {
    -webkit-transform: translate3d(0, -400px, 0);
    transform: translate3d(0, -400px, 0);
  }
  20%,
  40%,
  60%,
  80%,
  95%,
  99%,
  100% {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
  30% {
    -webkit-transform: translate3d(0, -80px, 0);
    transform: translate3d(0, -80px, 0);
  }
  50% {
    -webkit-transform: translate3d(0, -40px, 0);
    transform: translate3d(0, -40px, 0);
  }
  70% {
    -webkit-transform: translate3d(0, -30px, 0);
    transform: translate3d(0, -30px, 0);
  }
  90% {
    -webkit-transform: translate3d(0, -15px, 0);
    transform: translate3d(0, -15px, 0);
  }
  97% {
    -webkit-transform: translate3d(0, -10px, 0);
    transform: translate3d(0, -10px, 0);
  }
}
@-webkit-keyframes rollout {
  0% {
    -webkit-transform: translate3d(0, 300px, 0);
    transform: translate3d(0, 300px, 0);
  }
  100% {
    -webkit-transform: translate3d(1000px, 300px, 0);
    transform: translate3d(1000px, 300px, 0);
  }
}
@keyframes rollout {
  0% {
    -webkit-transform: translate3d(0, 300px, 0);
    transform: translate3d(0, 300px, 0);
  }
  100% {
    -webkit-transform: translate3d(1000px, 300px, 0);
    transform: translate3d(1000px, 300px, 0);
  }
}
@-webkit-keyframes ballroll {
  0% {
    -webkit-transform: rotate(0);
    transform: rotate(0);
  }
  100% {
    -webkit-transform: rotate(1000deg);
    transform: rotate(1000deg);
  }
}
@keyframes ballroll {
  0% {
    -webkit-transform: rotate(0);
    transform: rotate(0);
  }
  100% {
    -webkit-transform: rotate(1000deg);
    transform: rotate(1000deg);
  }
}
.ballmove-enter {
  -webkit-transform: translate3d(0, -400px, 0);
  transform: translate3d(0, -400px, 0);
}

.bouncein {
  -webkit-animation: bouncein 0.9s cubic-bezier(0.47, 0, 0.745, 0.715) both;
  animation: bouncein 0.9s cubic-bezier(0.47, 0, 0.745, 0.715) both;
}

.rollout {
  width: 60px;
  height: 60px;
  -webkit-animation: rollout 2s cubic-bezier(0.55, 0.085, 0.68, 0.53) both;
  animation: rollout 2s cubic-bezier(0.55, 0.085, 0.68, 0.53) both;
}
.rollout div {
  -webkit-animation: ballroll 2s cubic-bezier(0.55, 0.085, 0.68, 0.53) both;
  animation: ballroll 2s cubic-bezier(0.55, 0.085, 0.68, 0.53) both;
}
</style>
