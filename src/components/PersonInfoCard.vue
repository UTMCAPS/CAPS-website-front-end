<template>
  <div class="PersonCard">
    <div class="container">
    <img src="@/assets/logo.png" alt="self-photo" class="self-photo">
    <div class="self-info">
      <h2 class="name">姓名</h2>
      <p class="role">My position</p>
      <p class="major">CS Spec. + STA Major + Math Minor</p>
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
  max-width: 262px;
  margin: 0 auto;
  padding: 20px;
  /* border: 1px solid #ccc; */
  border-radius: 10px;
  /* box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); */
}
.container {
  display: block;
  text-align: center;
}

.self-photo {
  border-radius: 50%;
}
.name{
  color: #1f3979;
}
.major{
  color: #a52a2a;
}
</style>