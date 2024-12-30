<script setup>
import SingleVerticalShowCase from "@/components/concrete/ShowCaseVertical.vue";
</script>

<script>
export default {
  data() {
    return {
      title2: "OUR BOARD",
      description2: "我们成员入社门槛相对偏高，严格评估学术以及工作能力，汇聚UTM最优秀的华人学生，促进深度交流与合作。",
      image2: "jpg/homePage/placeholder-our-board.jpg",
      title3: "OUR SUPPORTERS",
      description3: "Lorem ipsum dolor sit amet consectetur. Metus eget in convallis faucibus malesuada nisi consequat natoque purus. Vel gravida morbi amet etiam quis et tincidunt euismod. Volutpat facilisis volutpat at lectus duis nibh malesuada. ",
      image3: "jpg/homePage/placeholder-our-supporters.jpg"
    }
  }
}
</script>

<template>
  <div class="container">
    <h1 class="title">ABOUT US</h1>
    <div class="elements">
      <div class="element">
        <SingleVerticalShowCase/>
      </div>
      <div class="element">
        <SingleVerticalShowCase :title = "title2" :description = "description2" :image = "image2" />
      </div>
      <div class="element">
        <SingleVerticalShowCase :title = "title3" :description = "description3" :image = "image3" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  width: 100%;
  height: 100%;
  background-color: #DEE8F2;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.title{
  font-size: 2.8rem;
  color: #263151;
  width: 80%;
}
.elements {
  width: 80%;
  height: 80%;
  display: flex;
  justify-content: space-between;
  padding-bottom: 10vh;
}
.element {
  height: 100%;
  width: 30%;
}
</style>