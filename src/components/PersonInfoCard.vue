<template>
  <div class="PersonCard">
    <div class="container">
    <img src="@/assets/logo.png" alt="self-photo" class="self-photo">
    <div class="self-info">
      <h2>姓名</h2>
      <p>职位</p>
      <p>简介: Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit cumque quam harum ad! Expedita dicta odio veritatis, fuga voluptatem debitis ab perspiciatis nemo fugit, quasi ipsum minima facere soluta nesciunt.</p>
    </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PersonInfoCard",
  setup() {
    return {};
  },
};
</script>

<style scoped>
.PersonCard {
  width: 100%;
  max-width: 300px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
.container {
  display: block;
  text-align: center;
}

.self-photo {
  border-radius: 50%;
}
</style>