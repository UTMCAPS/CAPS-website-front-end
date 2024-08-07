<script>
export default {
  name: 'bot-link'
}
</script>

<template>
  <div class="footer-container">
    <div class="footer-component">
      <a href="https://www.xiaohongshu.com/user/profile/644218b30000000029017b0e" style="--clr:rgba(255, 39, 66, 0.5);">
        <div class="platform-icon">
          <img src="../assets/xhs-icon.png" alt="img"/>
        </div>
      </a>
      <a href="https://mp.weixin.qq.com/s/KKqrqc932DDj5twbSjU7hw" style="--clr:rgba(45, 193, 0, 0.5);">
        <div class="platform-icon">
          <img src="../assets/wechat-icon.png" alt="img"/>
        </div>
      </a>
    </div>
  </div>
</template>

<style scoped>
body {
  margin: 0;
  padding: 0;
  align-items: center;
  justify-content: center;
  background-image: url("https://static.vecteezy.com/system/resources/thumbnails/011/426/060/small_2x/abstract-white-background-with-organic-shapes-abstract-design-background-with-white-color-and-pastel-color-organic-shapes-background-art-background-with-liquid-element-and-blobs-free-vector.jpg");
  background-size: cover;
  font-family: Arial,serif;
}
.footer-container {
  padding-top: 20px;
}
.footer-component {
  margin: 0 auto;
  height: 90px;
  width: calc(100vw - 100px);
  border-top: 3px solid rgba(31, 57, 121, 0.3);
  display: flex;
  justify-content: center;
  gap: 10px;
}
.platform-icon {
  margin-top: 10px;
  display: flex;
  justify-content: center;
}
.platform-icon img {
  border-radius: 25px;
  height: 50px;
  width: 50px;
  border: 1px solid rgba(31, 57, 121, 0.3);
  filter: grayscale(100%);
  opacity: 0.8;
  transition: 0.5s ease-in-out;
}
.platform-icon img:hover {
  border-radius: 35px;
  border-color: var(--clr);
  height: 70px;
  width: 70px;
  filter: grayscale(0%);
  opacity: 1;
}
</style>