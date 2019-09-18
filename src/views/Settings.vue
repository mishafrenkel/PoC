<template>
  <div class="row">
    <div class="col-sm-3">
      <SideBar />
    </div>
    <div class="col-sm-9">
      <SettingsPage msg="This is settings page" />
    </div>
  </div>
</template>
<script>
// @ is an alias to /src
import SideBar from '@/components/SideBar.vue'
import SettingsPage from '@/components/SettingsPage.vue'

export default {
  name: 'settings',
  components: {
    SideBar,
    SettingsPage
  }
}
</script>
<style>
#row {
  margin: 0px;
}
#col-sm-9 {
  padding-right: 0px;
}
</style>
