<script >
import AppHeader from './components/AppHeader.vue';
export default {
  components: {
    AppHeader,


  }
}

</script>

<template>
  <header>
    <AppHeader></AppHeader>
    <router-view></router-view>
  </header>


  <main>

  </main>
</template>

<style lang="scss">
@use './styles/general.scss'
</style>
