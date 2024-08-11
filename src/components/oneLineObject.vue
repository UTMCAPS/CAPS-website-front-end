<script>
export default {
  name: 'oneLineObject'
}
</script>

<template>
  <br>
  <div class="one-line-object">
    <div class="object-image">
      <img src="@/assets/title-icon.png" alt="#">
    </div>
    <div class="object-text">
      <h3>Freshman 1v1 Course Selection</h3>
      <h4>Today, 3-5PM @CCIT Building</h4>
      <p>每位新生将有15至30分钟，与学长学姐交流。无论是课程推荐，课程难度、教师评价，还是学习路径规划
        每位新生将有15至30分钟，与学长学姐交流。无论是课程推荐，课程难度、教师评价，还是学习路径规划
        每位新生将有15至30分钟，与学长学姐交流。无论是课程推荐，课程难度、教师评价，还是学习路径规划</p>
    </div>
  </div>
  <br>
</template>

<style scoped>
.one-line-object {
  display: grid;
  grid-template-columns: 1fr 2fr;
  height: 200px;
}
.object-image {
  display: flex;
  align-items: center;
  justify-content: center;
}
.object-image img {
  border-radius: 50px;
  background: black;
  width: 200px;
  height: 200px;
}
.object-text {
  background: #edf4f9;
  border-radius: 30px;
  padding: 20px;
  text-align: center;
  line-height: 10px;
  color: #1f3979;
}
.object-text p {
  color: black;
  line-height: normal;
}
</style>
