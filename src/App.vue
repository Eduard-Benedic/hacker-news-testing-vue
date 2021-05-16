<template>
  <div id="app">
    <div id="nav">
      <router-link to='/top'>Top</router-link> 1
      <router-link to='/new'>New</router-link>
      <router-link to='/show'>Show</router-link>
      <router-link to='/ask'>Ask</router-link>
      <router-link to='/job'>Jobs</router-link>
    </div>
    <router-view :key="$route.params.type"/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  margin-right: 20px;
  font-size: 1.2rem;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
