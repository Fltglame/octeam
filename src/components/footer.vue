<template>
  <div class="footer-copyright">
    <div class="container">
      <p>本网站的归属权属OCteam所有，如有冒犯请直接联系蝻子团长，特此声明。</p>
      <div class="footerlink">
        <ul>
          <!-- 在这里可以添加更多的链接项 -->
          <li>
            <a href="#">链接1</a>
          </li>
          <li>
            <a href="#">链接2</a>
          </li>
          <li>
            <a href="#">链接3</a>
          </li>
        </ul>
      </div>
      <p>
        Copyright © 2019
        <a href="#" target="_blank">
          <strong>OCteam</strong>
        </a>
        <a href="#" target="_blank" class="external">放备案号</a>
        <a
          href="https://www.beian.gov.cn/portal/registerSystemInfo?recordcode=35051902000122"
          target="_blank"
          class="external"
        >放公安备案号</a>
      </p>
    </div>
  </div>
</template>
  
  <script>
export default {
  name: "Footer"
};
</script>
  
  <style scoped>

.footer-copyright {
  background-color: #409eff;
  color: #fff;
  padding: 10px 0;
  text-align: center;
  position: relative;
  width: 100%;
}

.container {
  max-width: 100%;
  margin: 0 auto;
  padding: 0 0px;
}

.footerlink ul {
  list-style: none;
  padding: 0;
}

.footerlink ul li {
  display: inline-block;
  margin-right: 10px;
  margin-bottom: 8px;
}

.footerlink a {
  color: #dff2ff;
  text-decoration: none;
}

.footerlink a:hover {
  text-decoration: underline;
}
</style>
  