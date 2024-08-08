<script>
export default {
  name: 'imageLineUp3'
}
</script>

<template>
  <br>
  <div class="imageLineUp3">
    <div class="image-container">
      <img src="../assets/title-icon.png" alt="#">
    </div>
    <div class="image-container">
      <img src="../assets/title-icon.png" alt="#">
    </div>
    <div class="image-container">
      <img src="../assets/title-icon.png" alt="#">
    </div>
  </div>
  <br>
</template>

<style scoped>
.imageLineUp3 {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  height: 300px;
}
.image-container {
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.5s;
}
.image-container:hover {
  transform: scale(1.1);
  filter: blur(3px);
}
.image-container img {
  width: 300px;
  height: 300px;
  border-radius: 30px;
}
</style>