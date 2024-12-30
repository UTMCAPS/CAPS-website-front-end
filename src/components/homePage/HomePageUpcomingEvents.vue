<script setup>

import QueueShowCase from "@/components/QueueShowCase.vue";
</script>

<template>
  <div class="container">
    <div class="title">
      <h1>Upcoming Events</h1>
      <h2>@UTMCAPS</h2>
    </div>
    <div class="elements">
      <QueueShowCase/>
    </div>
  </div>
</template>

<style scoped>
.container {
  width: 100%;
  height: 100%;
  background-color: #DEE8F2;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}
.title{
  width: 30%;
  height: 25%;
  background-color: #0051B1;
  position: absolute;
  top: -10%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #FFFFFF;
}
h1 {
  font-size: 2.5rem;
  padding: 1vh;
  margin: 0;
}
h2 {
  font-size: 2rem;
  font-weight: lighter;
  padding: 0;
  margin: 0;
}
.elements{
  width: 100%;
  height: 80%;
  position: absolute;
  bottom: 0;
}
</style>