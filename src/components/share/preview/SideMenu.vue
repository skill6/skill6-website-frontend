<template>
  <aside class="g-aside">
    <section id="nav" class="mod">
      <div class="bd">
        <div class="units" val="u0">
          <div class="label item">
            <span class="wrap" title="文件分类">
              <span class="text" style="margin-left: 0px;">文件分类</span>
            </span>
            <span class="g-ico g-ico-arrow g-ico-arrow-top"></span>
          </div>
          <ul class="contentbox">
            <li class="item on">
              <a class="wrap" title="1. a o e" href="/course/list/8_s0_g0_v87_u0_l0">
                <span class="text" style="margin-left: 0px;">1. Java编程</span>
              </a>
            </li>

            <li class="item">
              <a class="wrap" title="2. i u ü" href="/course/list/8_s0_g0_v87_u0_l1">
                <span class="text" style="margin-left: 0px;">2. 装机必备</span>
              </a>
            </li>
            <li class="item">
              <a class="wrap" title="3. b p m f" href="/course/list/8_s0_g0_v87_u0_l2">
                <span class="text" style="margin-left: 0px;">3. 哲学书籍</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  </aside>
</template>

<script>
export default {
  name: 'SideMenu'
}
</script>

<style scoped>
.g-aside {
  float: left;
  width: 192px;
  position: relative;
}

#nav {
  width: 192px;
  float: left;
  font-size: 12px;
  position: relative;
  background-color: #fff;
  border-bottom: 1px solid #eaeaea;
}

#nav .selected.units .label {
  color: #333;
}
#nav .units .label {
  border-top: 1px solid #eaeaea;
  color: #333;
  transition: background 0.4s ease;
  font-size: 14px;
}
#nav .bd .item,
#nav .label {
  cursor: pointer;
  position: relative;
  height: 45px;
  line-height: 45px;
  padding: 0 24px;
  border-right: 1px solid #eaeaea;
  border-left: 1px solid #eaeaea;
  overflow: hidden;
}

#nav .units .contentbox {
  border-top: 1px solid #eaeaea;
}

ul,
ol,
menu {
  list-style: none;
}

#nav .units .contentbox .on {
  margin-top: -1px;
  padding-left: 39px;
  border-left: 3px solid #2dbe60;
  background-color: #f5f5f5;
}
#nav .units .contentbox .item {
  padding-left: 42px;
}
#nav .bd .item,
#nav .label {
  cursor: pointer;
  position: relative;
  height: 45px;
  line-height: 45px;
  padding: 0 24px;
  border-right: 1px solid #eaeaea;
  border-left: 1px solid #eaeaea;
  overflow: hidden;
}
user agent stylesheet li {
  display: list-item;
  text-align: -webkit-match-parent;
}

#nav .bd .item .wrap {
  display: block;
  height: 100%;
  overflow: hidden;
  white-space: nowrap;
  width: 130px;
}
#nav .bd a {
  color: #555;
}
a {
  color: #555;
  transition: background-color 0.3s ease;
}
a {
  cursor: pointer;
  text-decoration: none;
}
</style>
