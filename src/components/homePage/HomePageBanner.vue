<template>
  <div class="container">
    <div class="logo">
      <img src="@/assets/png/homePage/logo-white-b.png" alt="logo" />
      <h1 class="title">
        UTMCAPS
      </h1>
    </div>
    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#1F3979" @click="arrowClick()"><path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z"/></svg>
    <div class="details">
      <b>C</b>hinese<br>
      <b>A</b>cademic<br>
      <b>P</b>rofessional<br>
      <b>S</b>ociety<br>
    </div>
  </div>
</template>

<script>
  export default {
    name: "HomePageBanner",
    methods: {
      arrowClick() {
        const slogan = document.querySelector('.slogan');
        if(slogan){
          slogan.scrollIntoView({ behavior: 'smooth' });
        }
      },
    },
  };
</script>


<style scoped>
.container {
  width: 100%;
  height: 100%;
  background-image: linear-gradient(to bottom, #143276BF,#FFFFFF80,#FFFFFFFC),
  url('@/assets/jpg/homePage/banner.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
}
.logo {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
svg {
  position: absolute;
  bottom: -40px;
  width: 5vw;
  height: 5vw;
  animation: arrow 2s infinite;
}
svg:hover {
  cursor: pointer;
}
@keyframes arrow {
  0% {
    opacity: 0;
    transform: translateY(-20px);
  }
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
    transform: translateY(0);
  }
}
img {
  filter: drop-shadow(4px 4px 4px rgba(0, 0, 0, 0.5));
  width: 30vw;
  height: auto;
}
.title {
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #FFFFFF;
  filter: drop-shadow(4px 4px 4px rgba(0, 0, 0, 0.5));
  font-size: 4rem;
  font-family: 'Ibarra Real Nova','Times New Roman', Times, serif;
}
.details {
  font-size: 4rem;
  font-weight: bold;
  position: absolute;
  /* right: 2vw; */
  left: 71vw;
  color: #FFFFFF;
  filter: drop-shadow(4px 4px 4px rgba(0, 0, 0, 0.5));
}
b {
  color: #B4C3EE;
}
</style>