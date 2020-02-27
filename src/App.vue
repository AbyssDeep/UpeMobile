<template>
	<div id="app">
		<router-view />
	</div>
</template>

<style>

  @import url('https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap');

  #app {
      /* font-family: "Avenir", Helvetica, Arial, sans-serif; */
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      color: #2c3e50;
  }

  .flyout {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    justify-content: space-between;
  }

  .active {
    background-color: rgba(255, 255, 255, 0.1);
  }
</style>