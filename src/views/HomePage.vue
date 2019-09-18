<template>
  <div class="row">
    <div class="col-sm-3">
      <SideBar />
    </div>
    <div class="col-sm-9" style="text-align:center; margin-top:5%;">
      <h1>Welcome to</h1>
      <img class="logoImage1" src="assets\images\logo.png" />
      <br />
      <br />
      <h4>GoTo Settings to manage your account.</h4>
    </div>
  </div>
</template>
<script>
// @ is an alias to /src
import SideBar from '@/components/SideBar.vue'

export default {
  name: 'home',
  components: {
    SideBar
  }
}
</script>
<style>
.logoImage1 {
  width: 50%;
  height: 50%;
}
</style>
