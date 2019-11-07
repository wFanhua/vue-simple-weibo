<template>
  <div class="nav">
    <div class="nav__logo">
      Demo
    </div>
    <nav class="nav__bd">
      <ul class="nav-list">
        <li class="nav-list__item">
          <router-link to="/home">首页</router-link>
        </li>
        <li class="nav-list__item">
          <router-link to="/ground">广场</router-link>
        </li>
      </ul>
    </nav>
    <img class="nav__ft" src="https://user-gold-cdn.xitu.io/2017/11/22/f99ef340b7e8cee42175dc87b7f8adfb?imageView2/1/w/100/h/100/q/85/format/webp/interlace/1"/>
  </div>
</template>

<style lang="scss" scoped>
.nav {
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  &__logo {
    font-size: 30px;
    color: #409EFF;
  }
  &__bd {
    margin-left: 20px;
    flex: 1;
    overflow: hidden;
  }
  &__ft {
    margin-left: auto;
    vertical-align: middle;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    cursor: pointer;
  }
}

.nav-list {
  display: flex;
  align-items: center;
  &__main {
    flex: 1;
    overflow: hidden;
  }
  &__item {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    height: 60px;
    padding: 0 18px;
    a {
      color: #71777C;
    }
  }
  &__user {
    margin-left: auto;
  }
}
</style>
