<template>
  <aside>
    <Affix :offset-top="50">
      <section id="nav">
        <div class="label item">
          <span class="wrap" title="文件分类">
            <span>文件分类</span>
          </span>
        </div>
        <ul class="contentbox">
          <li class="item on">
            <a class="wrap" title="1. Java编程" href="/">
              <span>1. Java编程</span>
            </a>
          </li>
          <li class="item">
            <a class="wrap" title="2. 装机必备" href="/">
              <span>2. 装机必备</span>
            </a>
          </li>
          <li class="item">
            <a class="wrap" title="3. 哲学书籍" href="/">
              <span>3. 哲学书籍</span>
            </a>
          </li>
        </ul>
      </section>
    </Affix>
  </aside>
</template>

<script>
export default {
  name: 'SideMenu'
}
</script>

<style scoped>
#nav {
  float: left;
  border-bottom: 1px solid #eaeaea;
}

#nav .label {
  border-top: 1px solid #eaeaea;
  color: #333;
  transition: background 0.4s ease;
  font-size: 14px;
}

#nav .item,
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

#nav .contentbox {
  border-top: 1px solid #eaeaea;
}

ul,
ol,
menu {
  list-style: none;
}

#nav .contentbox .on {
  padding-left: 39px;
  border-left: 3px solid #2dbe60;
  background-color: #f5f5f5;
}

#nav .contentbox .item {
  padding-left: 42px;
}

#nav .item .wrap {
  display: block;
  width: 130px;
}

#nav a {
  color: #555;
}
</style>
