<template>
  <top-nav/>
  <br>
  <br>
  <br>
  <br>
  <br>
  <br>
  <br>
  <br>
  <br>
  <br>
  <br>
  <bot-link/>
</template>

<script>
import topNav from "@/components/topNav.vue";
import botLink from "@/components/botLink.vue";

export default {
  name: 'App',
  components: {
    topNav,
    botLink
  }
}
</script>

<style>
body {
  margin: 0;
  padding: 0;
  width: 100vw;
  height: 100vh;
  background-image: url("https://t3.ftcdn.net/jpg/06/27/85/70/360_F_627857047_VDETCsSfRkZuo5Fzdy3eHL1ZGdhsqYv9.jpg");
  background-size: cover;
}
#app {
  font-family: Arial, sans-serif;
}
</style>
