<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding: 50px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  align-items: stretch;
  height: 100%;
}

#app > div {
  margin: 0 auto;
}
</style>
