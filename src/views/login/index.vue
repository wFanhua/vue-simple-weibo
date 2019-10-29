<template>
  <div class="p-login">
    <particles class="particles-bg"></particles>
    <login-card class="login-card"></login-card>
  </div>
</template>

<script>
import Particles from './components/particles/index.vue';
import LoginCard from './components/loginCard/index.vue';

export default {
  components: {
    Particles,
    LoginCard,
  },
};
</script>

<style lang="scss" scoped>
  .p-login {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    .particles-bg {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      height: 100%;
      width: 100%;
    }
    .login-card {
      width: 330px;
    }
  }
</style>
