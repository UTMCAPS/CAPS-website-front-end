<template>
  <div class="HomePage">
    <div class="hero">
      <div class="hero-content">
        <h1>Welcome to UTMCAPS</h1>
        <p>Your gateway to academic and professional excellence</p>
      </div>
      <div class="scroll-down-arrow"></div>
    </div>

    <div class="container">
      <div class="description">
        <div class="description-text">
          <h2>Welcome to</h2>
          <br />
          <h2>UTMCAPS</h2>
          <div class="text-field">
            <p>
              大家好！我们是UTM Chinese Academic and
              ProfessionalSociety，从我们的名字就可以看出我们是一个以学术与职业发展方中心的人学生社図！<br /><br />
              我们致力于在UTM打造一个互相帮助、积极进取的优质平台。在我们的社团中，不仅有担任TA、RA的学术大佬，也有拥有国内外丰富工作经验的职业精英。<br /><br />
              我们会通过各种活动和资源交换，帮助社团成员们在学术和职业道路上取得更大的成就。同时，我们也会利用社交媒体为社团外的华人学生们提供学术与职业发展的相关资讯，并不定期展开一些活动分享经验。
            </p>
          </div>
        </div>
        <div class="description-image">
          <img src="@/assets/title-icon.png" alt="#" />
        </div>
      </div>
      <div class="events">
        <div class="category-container">
          <div class="category">Events Today</div>
        </div>
        <one-line-object />
        <div class="category-container">
          <div class="category">Upcoming Events</div>
        </div>

        <image-line-up3 />

        <div class="category-container">
          <div class="category">Previous Events</div>
        </div>
        <one-line-object />
      </div>
    </div>
  </div>
</template>

<script>
import oneLineObject from "@/components/oneLineObject.vue";
import imageLineUp3 from "@/components/imageLineUp3.vue";
export default {
  name: "HomePage",
  components: {
    oneLineObject,
    imageLineUp3,
  },
};
</script>

<style scoped>
body {
  margin: 0;
  padding: 0;
  align-items: center;
  justify-content: center;
  background-size: cover;
  font-family: Arial, serif;
}

.hero {
  background-image: url("@/assets/utmphoto.jpg");
  background-size: cover;
  background-position: center;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  text-align: center;
}

.hero-content {
  max-width: 800px;
  margin: 0 auto;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.6);
}

.hero h1 {
  font-size: 3rem;
  margin-bottom: 20px;
}

.hero p {
  font-size: 1.5rem;
}

.scroll-down-arrow {
  position: absolute;
  bottom: 5%;
  left: 50%;
  transform: translateX(-50%);
  width: 13px;
  height: 13px;
  border-left: 10px solid #fff;
  border-bottom: 10px solid #fff;
  border-radius: 5px;
  transform: rotate(-45deg);
  animation: bounce 2s infinite;
  cursor: pointer;
}

@keyframes bounce {
  0%,
  20%,
  50%,
  80%,
  100% {
    transform: translateX(-50%) translateY(0) rotate(-45deg);
  }
  40% {
    transform: translateX(-50%) translateY(10px) rotate(-45deg);
  }
  60% {
    transform: translateX(-50%) translateY(5px) rotate(-45deg);
  }
}

.container {
  padding-top: 100px;
  border-radius: 30px;
  margin: 0 auto;
  width: calc(100vw - 100px);
}
.description {
  width: inherit;
  display: grid;
  grid-template-columns: 2fr 1fr;
}
.description-text {
  line-height: 0;
  padding: 50px;
  color: #1f3979;
}
.description-text h2 {
  font-size: 30px;
  padding-left: 10px;
}
.text-field {
  background: #edf4f9;
  border-radius: 30px;
}
.text-field p {
  padding: 20px;
  line-height: 20px;
  color: black;
}
.description-image {
  display: flex;
  align-items: center;
  justify-content: center;
}
.description-image img {
  border-radius: 50px;
  background: black;
  width: 300px;
  height: 300px;
}

.events {
  display: grid;
  height: fit-content;
  padding: 50px;
}
.category-container {
  display: grid;
  grid-template-columns: 1fr 5fr;
  justify-content: center;
  column-gap: 30px;
}
.category {
  height: 40px;
  background: #bccde6;
  border-radius: 30px;
  text-align: center;
  line-height: 40px;
  font-size: 18px;
  color: #1f3979;
  font-weight: bold;
}
</style>
