<template>
  <div id="app">
    <router-view class="page"></router-view>
  </div>
</template>

<style lang="scss">
  html, body {
    height: 100%;
    width: 100%;
  }

  body {
    margin: 0;
    padding: 0;
  }

  ul, li {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  a {
    text-decoration: none;
    cursor: pointer;
    color: #909090;
  }

  #app {
    height: 100%;
    display: flex;
    flex-direction: row;
    .page {
      flex: 1;
      overflow: hidden;
    }
  }
</style>
