<script>
export default {
  props: {
    time: {
      type: String,
      default: "Event Today"
    },
    title: {
      type: String,
      default: "Freshman 1v1 Course Selection"
    },
    description: {
      type: String,
      default: "每位新生将有15至30分钟，与学长学姐交流。无论是课程推荐，课程难度、教师评价，还是学习路径规划 每位新生将有15至30分钟，与学长学姐交流。无论是课程推荐，课程难度、教师评价，还是学习路径规划 每位新生将有15至30分钟，与学长学姐交流。无论是课程推荐，课程难度、教师评价，还是学习路径规划"
    },
    page: {
      type: String,
      default: "/default"
    }
  }
}
</script>

<template>
  <div class="box">
    <div class="description">
      <div class="text">
        <h3>{{time}}</h3>
        <h1>{{title}}</h1>
        <p>{{description}}</p>
      </div>
      <router-link class="button" to={{page}} >MORE</router-link>
    </div>
    <div class="image">
    </div>
  </div>
</template>

<style scoped>
.box {
  width: 100vw;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
}
.description {
  padding: 3vw;
  position: relative;
}
.text {
  padding: 1vw 7vw 1vw 2vw;
  border-image: linear-gradient(180deg, rgba(1, 83, 178, 0.75) 0%, rgba(91, 220, 230, 0.75) 100%) 1;
  border-width: 5px;
  border-left-style: solid;
  transition: .7s;
}
.description:hover text{
  padding-right: 0;
}
.description:hover h1{
  font-size: 1.7rem;
}
.description:hover p{
  font-size: 1.1rem;
}
h3 {
  color: #A3A3BB;
  font-size: 1rem;
  font-weight: lighter;
  transition: .5s;
}
h1 {
  color: #263151;
  font-size: 1.3rem;
  transition: .5s;
}
p {
  font-size: 1rem;
  transition: .3s;
}
.button {
  margin-left: 2vw;
  padding: 1vh 2vw 1vh 2vw;
  bottom: 10vh;
  position: absolute;
  text-decoration: none;
  color: #263151;
  border: 1px solid #263151;
  transition: .5s;
}
.button:hover {
  color: #FFFFFF;
  background-color: #263151;
}
.image {
  background-image: url("@/assets/jpg/placeholder1.jpg");
  background-size: cover;
}
</style>