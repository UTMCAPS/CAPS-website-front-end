<script setup>

</script>

<template>
  <div class="container">
    <div class="navigation-item">
      <router-link href="#home" to="/">Home</router-link>
    </div>
    <div class="navigation-item">
      <router-link to="/people">About Us</router-link>
    </div>
    <div class="navigation-item">
      <router-link to="/event" >Event</router-link>
    </div>
    <div class="logo">
      <img src="@/assets/png/homePage/logo-blue-s.png" alt="logo" />
      <h1 class="title">
        UTMCAPS
      </h1>
    </div>
    <div class="navigation-item">
      <router-link to="/UtmropList">Resources</router-link>
    </div>
    <div class="navigation-item">
      <router-link href="#contact-us" to="/contact-us">Media</router-link>
    </div>
    <div class="navigation-item">
      <router-link href="#contact-us" to="/contact-us">Contact Us</router-link>
    </div>
  </div>
</template>

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
a {
  text-decoration: none;
  color: #000000;
  transition: .5s;
}
.navigation-item:hover a {
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