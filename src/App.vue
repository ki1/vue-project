<template>
  <div id="app">
    <div id="nav">
      <router-link :to="{ name: 'deals', params: { location: 'london' }}">London</router-link> |
      <router-link :to="{ name: 'deals', params: { location: 'shop' }}">Shop</router-link> |
      <router-link :to="{ name: 'deals', params: { location: 'travel' }}">Travel</router-link> |
      <router-link :to="{ name: 'deals', params: { location: 'shop', category: 'home' }}">Home</router-link> |
      <router-link to="/">details</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
