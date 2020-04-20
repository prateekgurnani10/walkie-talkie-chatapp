<template>
  <div id="app">
    <header>
      <h1> Walkie-Talkie Chat App </h1>
      <p>A Full-stack realtime walkie-talkie style chat app with the ability to record and upload audio from the device. </p>
    </header>
      <router-view></router-view>

  </div>
</template>

<script>



export default {
  name: 'App',
  components: {

  }
}
</script>

<style>

header {
  text-align: center;
}
button, input {
  margin-bottom: 10px;
}

</style>
