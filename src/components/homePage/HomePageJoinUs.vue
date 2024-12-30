<script setup>

</script>

<template>
  <div class="container">
    <h1>想要丰富自己的校园经历吗？想要和志同道合的人一起交流创造吗？加入我们，就是现在！</h1>
    <router-link class="button" to="/contact-us" >CONTACT US</router-link>
  </div>
</template>

<style scoped>
.container {
  width: 100%;
  height: 100%;
  background-color: #233253;
  color: #FDFEFF;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
}
h1 {
  margin-left: 20vw;
  margin-right: 20vw;
}
.button {
  padding: 1vh 2vw 1vh 2vw;
  text-decoration: none;
  color: #FDFEFF;
  border: 1px solid #FDFEFF;
  transition: .5s;
}
.button:hover {
  color: #233253;
  background-color: #FDFEFF;
}
</style>