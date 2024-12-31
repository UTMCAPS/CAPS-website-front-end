<template>
  <div class="container">
    <div class="navigation-item" @click="this.$router.push('/')">
      <p>Home</p>
    </div>
    <div class="navigation-item" @click="this.$router.push('/people')">
      <p>About Us</p>
    </div>
    <div class="navigation-item" @click="this.$router.push('/event')">
      <p>Event</p>
    </div>
    <div class="logo" @click="logoClicked">
      <img class="logo-img" src="@/assets/UTMCAPS-logo.svg" alt="logo" />
    </div>
    <div class="navigation-item" @click="this.$router.push('/utmropList')">
      <p>Resources</p>
    </div>
    <div class="navigation-item" @click="this.$router.push('/contact-us')">
      <p>Media</p>
    </div>
    <div class="navigation-item" @click="this.$router.push('/contact-us')">
      <p>Contact Us</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavigationBar",
  methods: {
    logoClicked() {
      this.$emit('logoClicked');
      this.$router.push('/');
    }
  },
};
</script>

<style scoped>
body {
  margin: 0;
  padding: 0;
}
.container {
  width: 100%;
  height: 10vh;
  padding-top: 10px;
  padding-bottom: 10px;
  background-color: #FFFFFF;
  display: flex;
  align-items: center;
  justify-content: center;
}
.navigation-item {
  width: 10vw;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: .5s;
  border-radius: 20px;
}
.navigation-item:hover {
  cursor: pointer;
  background: rgba(0, 0, 0, 0.05);
}
.logo {
  padding-left: 10vw;
  padding-right: 10vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.logo:hover {
  cursor: pointer;
}
.logo-img {
  scale: 1.6;
}
p {
  text-decoration: none;
  color: #000000;
  border: 2px solid transparent;
  transition: .5s;
}
.navigation-item:hover p {
  border-bottom: 2px solid rgba(34, 72, 134, 0.5);
}
img {
  width: 5vw;
  height: auto;
}
.title {
  width: 5vw;
  height: auto;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #1F3979;
  font-size: 1rem;
  font-family: 'Times New Roman', Times, serif;
}
</style>