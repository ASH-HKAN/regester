<template>
  <div>
      <h1>Login Page </h1>
    <input type="email" placeholder="Email" v-model="email" />

    <input type="password" placeholder="Password" v-model="password" />
    <button @click="login">Login</button>
  </div>
</template>

<script>
import firebase from "firebase/app";

export default {
  name: "Mylogin",
  data() {
    return {
      email: "",
      password: "",
      initials: "",
    };
  },
};
</script>

<style lang="scss" scoped>
</style>