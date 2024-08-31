<script>
export default {
  name: "bot-link",
};
</script>

<template>
  <div class="footer-container">
    <div class="more-about">
      <div class="more-about-content">
        <h2>More about</h2>
        <br />
        <h2>UTMCAPS</h2>
        <div class="content-links">
          <div class="subpage">
            <span>Programs & Events</span>
            <ul>
              <li>Current event</li>
              <li>Previous events</li>
              <li>Upcoming events</li>
            </ul>
          </div>
          <div class="subpage">
            <span>Resources</span>
            <ul>
              <li>Wechat Official</li>
              <li>UTM ROP List</li>
            </ul>
          </div>
          <div class="subpage">
            <span>Contact Us</span>
            <ul>
              <li>微信公众号</li>
              <li>微信小助手</li>
              <li>小红书官方账号</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="more-about-image">
        <img src="@/assets/title-icon.png" alt="#" />
      </div>
    </div>
    <div class="footer-component">
      <a
        href="https://www.xiaohongshu.com/user/profile/644218b30000000029017b0e"
        style="--clr: rgba(255, 39, 66, 0.5)"
      >
        <div class="platform-icon">
          <img src="@/assets/xhs-icon.png" alt="img" />
        </div>
      </a>
      <a
        href="https://mp.weixin.qq.com/s/KKqrqc932DDj5twbSjU7hw"
        style="--clr: rgba(45, 193, 0, 0.5)"
      >
        <div class="platform-icon">
          <img src="@/assets/wechat-icon.png" alt="img" />
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
  font-family: Arial, serif;
}
.footer-container {
  padding-top: 20px;
}
.footer-component {
  margin: 0 auto;
  height: 90px;
  width: calc(100vw - 100px);
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

.more-about {
  width: inherit;
  display: grid;
  grid-template-columns: 2fr 1fr;
}
.more-about-content {
  line-height: 0;
  padding: 50px;
  color: #1f3979;
}
.more-about-content h2 {
  font-size: 30px;
  padding-left: 10px;
}
.content-links {
  width: inherit;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-content: center;
  column-gap: 30px;
}
.subpage {
  height: 40px;
  background: transparent;
  border-radius: 30px;
  text-align: center;
  line-height: 40px;
  font-size: 18px;
  color: #1f3979;
  border-style: solid;
  border-width: 1px;
  cursor: pointer;
  transition: 0.5s ease-in-out;
}
.subpage:hover {
  background: #82a1d1;
  color: #ffffff;
  border-color: transparent;
}
.subpage ul {
  line-height: 20px;
  font-size: 20px;
  color: #1f3979;
  text-align: left;
  line-height: 1.2;
}
.subpage ul li {
  padding-left: 35px;
}

.more-about-image {
  display: flex;
  align-items: center;
  justify-content: center;
}
.more-about-image img {
  border-radius: 50px;
  background: black;
  width: 300px;
  height: 300px;
}

</style>
