<template>
  <br>
  <div class="imageLineUp3">
    <div class="image-container">
      <img src="@/assets/title-icon.png" alt="#">
      <h1 class="description">Test test description event info</h1>
    </div>
    <div class="image-container">
      <img src="@/assets/title-icon.png" alt="#">
      <h1 class="description">Test test description event info</h1>
    </div>
    <div class="image-container">
      <img src="@/assets/title-icon.png" alt="#">
      <h1 class="description">Test test description event info</h1>
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
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

.image-container img {
  width: 300px;
  height: 300px;
  border-radius: 30px;
  transition: 0.5s;
}

.image-container .description {
  position: absolute;
  top: 50%;
  left: 50%;
  margin: 0 auto;
  transform: translate(-50%, -50%);
  opacity: 0;
  color: #fff;
  background-color: rgba(0, 0, 0, 0.6);
  padding: 10px 20px;
  border-radius: 10px;
  text-align: center;
  transition: opacity 0.5s;
}

.image-container:hover img {
  filter: blur(3px);
}

.image-container:hover .description {
  opacity: 1;
}
</style>
