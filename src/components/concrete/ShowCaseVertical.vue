<script>
export default {
  props: {
    title: {
      type: String,
      default: "WHO WE ARE"
    },
    description: {
      type: String,
      default: "我们是UTM Chinese Academic and Professional Society，一个以学术与职业发展为中心的华人学生社团。我们致力于在UTM打造互助进取的平台。我们的成员包括担任TA、RA的学术精英和拥有丰富工作经验的职业佼佼者。通过各种活动和资源交换来帮助我们的成员在学术和职业上取得成就，并通过社交媒体为华人学生提供资讯，不定期分享经验。"
    },
    page: {
      type: String,
      default: "/default"
    },
    image: {
      type: String,
      default: "jpg/homePage/placeholder-who-we-are.jpg"
    }
  }
}
</script>

<template>
  <div class="box">
    <div class="text">
      <h1>{{title}}</h1>
      <p>{{description}}</p>
      <router-link class="button" to={{page}} >MORE</router-link>
    </div>
    <div class="image">
      <img :src="require('@/assets/' + image)" alt="">
    </div>
  </div>
</template>

<style scoped>
.box {
  width: 100%;
  height: 100%;
  background-color: #FFFFFF;
  position: relative;
  transition: .5s;
}
.box:hover{
  transform: scale(1.1);
}
.text {
  padding: 2vh 5vw 2vh 2vw;
  overflow: hidden;
}
h1 {
  font-size: 1.2rem;
  color: #263151;
}
p {
  font-size: .8rem;
  color: #8F8F8F;
}
.button {
  padding: 1vh 2vw 1vh 2vw;
  bottom: 27vh;
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
  width: 100%;
  height: 25vh;
  position: absolute;
  bottom: 0;
  overflow: hidden;
}
img {
  width: 100%;
  height: auto;
}
</style>