<script setup>
</script>

<template>
  <div class="container">
    <h1 class="container-header"> ABOUT US </h1>
    <div class="card-container">

      <div class="card">
        <div class="card-content">
          <h2>WHO WE ARE</h2>
          <p>
            我们是UTM Chinese Academic and Professional Society，一个以学术与职业发展为中心的华人学生社团。我们致力于在UTM打造互助进取的平台。我们的成员包括担任TA、RA的学术精英和拥有丰富工作经验的职业佼佼者。通过各种活动和资源交换来帮助我们的成员在学术和职业上取得成就，并通过社交媒体为华人学生提供资讯，不定期分享经验。
          </p>
          <button>MORE</button>
        </div>
        <div class="card-image">
          <img src="@/assets/jpg/homePage/who-we-are-placeholder.jpg" alt="Who We Are">
        </div>
      </div>

      <div class="card">
        <div class="card-content">
          <h2>OUR BOARD</h2>
          <p>
            我们成员入社门槛相对偏高，严格评估学术以及工作能力，汇聚UTM最优秀的华人学生，促进深度交流与合作。
          </p>
          <button>MORE</button>
        </div>
        <div class="card-image">
          <img src="@/assets/jpg/homePage/our-board-placeholder.jpg" alt="Our Board">
        </div>
      </div>

      <div class="card">
        <div class="card-content">
          <h2>OUR SUPPORTERS</h2>
          <p> 
            bulabula
          </p>
          <button>MORE</button>
        </div>
        <div class="card-image">
          <img src="@/assets/jpg/homePage/our-supporters-placeholder.jpg" alt="Our Supporters">
        </div>
      </div>

    </div>
  </div>
</template>

<style scoped>
.container {
  width: 100%;
  height: 100%;
  padding-left: 10%;
  padding-right: 10%;
  padding-top: 2%;
  padding-bottom: 2%;
  background-color: #DEE8F2;
}

.container-header {
  font-size: 2.8rem;
  color: #263151;
  margin-left: 1%;
}

.card-container {
  width: 80%;
  height: 80%;
  display: flex;
  gap: 4%;
}

.card {
  width: 30%;
  background-color: #fff;
  border: 0.5% solid #ddd;
  box-shadow: 0 2% 4% rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.card-content {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex-grow: 1;
  padding: 10%;
}

.card h2, .card p {
  align-self: flex-start;
}

.card button {
  align-self: flex-end;
  margin-top: auto;
  width: 30%;
  height: 45px;
}

button {
  width: 30%;
  height: 8%;
  padding: 2% 4%;
  background-color: #fff;
  color: #263151;
  font-size: 1rem;
  border-color: #263151;
  border-width: 0.15rem;
  cursor: pointer;
  transition: 0.2s;
}

button:hover {
  background-color: #b2cafd;
}

.card h2 {
  font-size: 1.3rem;
  color: #263151;
  margin-bottom: 5%;
}

.card p {
  font-size: 1rem;
  color: #8F8F8F;
}

.card-image {
  width: 100%;
  height: 28%;
  display: flex;
  align-items: flex-end；
}

.card img {
  width: 100%;
  height: 100%;
  object-fit: fill;
}
</style>