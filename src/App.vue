<template>
  <div id="app">
    <div>
      <img src="@/assets/banner.jpg" alt="banner" id="banner" />
      <b-card title="Card Title" no-body>
        <b-card-header header-tag="nav">
            <menu-component></menu-component>
        </b-card-header>

        <b-card-body>
          <!-- Child route gets rendered in <router-view> or <nuxt-child> -->
          <router-view></router-view>
          <!-- Or if using Nuxt.js
      <nuxt-child></nuxt-child>
      -->
        </b-card-body>
      </b-card>
    </div>
  </div>
</template>
<script>
import MenuComponent from './components/MenuComponent.vue'
    export default{
      name:'AppV',
      components:{
        MenuComponent
      }
    }
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#banner {
  width: 100%;
  height: 300px;
}
nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
